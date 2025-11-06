# Riddle Run - NextJS Migration

This directory contains the modern NextJS migration of the legacy HTML/PHP Riddle Run application.

## Features

- ✅ Next.js 16 with React Server Components
- ✅ TypeScript for type safety
- ✅ PostgreSQL database with Drizzle ORM
- ✅ Tailwind CSS for styling
- ✅ Modern React patterns (hooks, suspense)
- ✅ API routes for backend logic

## Pages

1. **Home (`/`)** - Landing page with navigation links
2. **Register (`/register`)** - Team registration page
3. **Check-in (`/check-in`)** - Checkpoint validation and riddle display
4. **Leaderboard (`/leaderboard`)** - Real-time leaderboard with auto-refresh

## Setup

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- PostgreSQL 13+ installed and running

### Installation

```bash
# Install dependencies
npm install

# Copy the environment variables file and configure your database
cp .env.example .env
# Edit .env and set your DATABASE_URL

# Create and migrate the database schema
npm run db:migrate

# Initialize the database with sample data
npm run init-db
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Project Structure

```
nextjs-migration/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (backend)
│   │   ├── register/      # Team registration endpoint
│   │   ├── check-in/      # Checkpoint validation endpoint
│   │   └── leaderboard/   # Leaderboard data endpoint
│   ├── register/          # Registration page
│   ├── check-in/          # Check-in page
│   ├── leaderboard/       # Leaderboard page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utilities
│   ├── db.ts              # Database connection with Drizzle
│   ├── schema.ts          # Drizzle ORM schema definitions
│   └── types.ts           # TypeScript types
├── public/                # Static assets
├── scripts/               # Utility scripts
│   ├── migrate-db.ts      # Database schema migration
│   └── populate-db.ts     # Database initialization with sample data
└── package.json           # Dependencies
```

## Database Schema

The application uses PostgreSQL with Drizzle ORM and three main tables:

- **teams** - Team information (id, name, password, riddleIndex, timestamp)
- **checkpoints** - Checkpoint data (id, name, hash, riddle)
- **teampath** - Team progress tracking (id, teamID, checkpointID, solved, solvedTime, orderNum)

## API Endpoints

### POST /api/register
Register a team with teamID and password.

**Request:**
```json
{
  "teamID": "1",
  "password": "password_hash"
}
```

**Response:**
```json
{
  "status": 200,
  "desc": "Team registered successfully",
  "team-name": "Team Alpha"
}
```

### POST /api/check-in
Validate a checkpoint and get the next riddle.

**Request:**
```json
{
  "hash": "checkpoint_hash",
  "teamID": "1",
  "password": "password_hash"
}
```

**Response:**
```json
{
  "status": 200,
  "desc": "Checkpoint solved successfully",
  "riddle": "Next riddle text...",
  "name": "Checkpoint Name"
}
```

### GET /api/leaderboard
Get the current leaderboard rankings.

**Response:**
```json
{
  "status": 200,
  "desc": "Leaderboard found",
  "leaderboard": [
    {
      "name": "Team Alpha",
      "solved": 5,
      "solvedTime": "2024-11-01 22:07:00",
      "rank": 1
    }
  ]
}
```

## Migration Notes

### Key Differences from Legacy Application

1. **Database**: MySQL → PostgreSQL with Drizzle ORM
2. **Backend**: PHP → Next.js API routes with TypeScript
3. **Frontend**: jQuery → Modern React with hooks
4. **Styling**: Inline styles → CSS Modules
5. **State Management**: localStorage + fetch API
6. **ORM**: Raw SQL → Drizzle ORM for type-safe database queries

### Preserved Features

- ✅ All original styling and animations
- ✅ Team authentication with localStorage
- ✅ Checkpoint validation logic
- ✅ Leaderboard ranking algorithm
- ✅ Real-time leaderboard updates

## Database Management

### Available Scripts

- `npm run db:migrate` - Create database tables
- `npm run db:push` - Push schema changes to the database
- `npm run db:generate` - Generate migration files
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run init-db` - Populate database with sample data

### Environment Variables

Create a `.env` file in the root of the `nextjs-migration` directory:

```env
DATABASE_URL=postgresql://username:password@host:port/database
```

Example:
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/riddlerun
```

## Testing

All pages have been tested and verified:

- ✅ Home page loads correctly
- ✅ Registration validates credentials and stores in localStorage
- ✅ Check-in validates teams and displays riddles
- ✅ Leaderboard displays correct rankings and auto-refreshes

## License

This project is part of UCSC IEEE Student Branch activities.

---

Made with ❤️ by UCSC IEEE SB Web Team
