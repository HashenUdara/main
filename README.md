# Riddle Run

A physical treasure hunt game for UCSC IEEE Monthly Meetup November. Teams compete by solving riddles, finding checkpoints around campus, and racing against time!

## 🎮 For Players

**Want to play the game?** Read the complete guide:

👉 **[HOW TO PLAY - Complete Gameplay Guide](./HOW_TO_PLAY.md)**

This guide includes:
- How the game works
- Step-by-step instructions
- Detailed example with real gameplay simulation
- Tips and strategies to win
- Rules and FAQs

## 🛠️ For Developers

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: SQLite (better-sqlite3)
- **Styling**: CSS Modules
- **Language**: TypeScript

### Project Structure
```
riddlerun/
├── nextjs-migration/          # Main Next.js application
│   ├── app/                   # App router pages
│   │   ├── page.tsx          # Home page
│   │   ├── register/         # Team registration
│   │   ├── check-in/         # Checkpoint check-in
│   │   ├── leaderboard/      # Real-time leaderboard
│   │   └── api/              # API routes
│   ├── lib/                  # Database utilities
│   └── scripts/              # Database population scripts
├── old-backend/              # Legacy PHP backend
├── old-frontend/             # Legacy frontend
└── HOW_TO_PLAY.md           # Complete gameplay guide
```

### Setup and Run

1. **Navigate to the Next.js project:**
   ```bash
   cd nextjs-migration
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Populate the database:**
   ```bash
   npx tsx scripts/populate-db.ts
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Click "Register" to register a team
   - Click "View Leaderboard" to see team standings

### Database Schema

The game uses three main tables:

- **teams**: Team information (id, name, password, riddleIndex, timestamp)
- **checkpoints**: Location data (id, name, hash, riddle)
- **teampath**: Team progress tracking (teamID, checkpointID, solved, solvedTime, orderNum)

### How It Works

1. **Registration**: Teams register using unique links with team credentials
2. **Check-in**: Teams scan QR codes at checkpoints to check in
3. **Validation**: System validates checkpoint order and marks progress
4. **Riddles**: Next riddle is revealed after successful check-in
5. **Leaderboard**: Real-time updates based on checkpoints solved and time

### API Endpoints

- `POST /api/register` - Register a team
- `POST /api/check-in` - Check in at a checkpoint
- `GET /api/leaderboard` - Get current leaderboard standings

## 📝 Documentation

- **[HOW_TO_PLAY.md](./HOW_TO_PLAY.md)** - Complete player guide with gameplay simulation
- **[MIGRATION.md](./nextjs-migration/MIGRATION.md)** - Notes on migrating from old PHP backend
- **[Next.js README](./nextjs-migration/README.md)** - Next.js specific documentation

## 🏆 Game Features

- 🎯 **Multiple Teams**: Support for 8 concurrent teams
- 📍 **12 Checkpoints**: Various locations around UCSC campus
- 🧩 **Diverse Riddles**: Text riddles, Caesar ciphers, Python code puzzles
- ⏱️ **Real-time Tracking**: Live leaderboard updates
- 📱 **Mobile-First**: Optimized for mobile device gameplay
- 🔒 **Secure**: Team authentication and checkpoint validation

## 🎨 Credits

Made with ❤️ by **UCSC IEEE SB Web Team**

---

**Ready to play?** Check out [HOW_TO_PLAY.md](./HOW_TO_PLAY.md) for the complete guide!
