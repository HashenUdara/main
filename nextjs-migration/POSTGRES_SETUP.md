# Setting Up PostgreSQL for Riddle Run

This guide will help you set up PostgreSQL for the Riddle Run application.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL 13+ installed

## PostgreSQL Installation

### macOS (using Homebrew)
```bash
brew install postgresql@15
brew services start postgresql@15
```

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Windows
Download and install PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)

## Database Setup

### 1. Create Database

Connect to PostgreSQL:
```bash
psql -U postgres
```

Create the database:
```sql
CREATE DATABASE riddlerun;
\q
```

### 2. Configure Environment Variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and update the `DATABASE_URL`:
```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/riddlerun
```

Replace:
- `postgres` - with your PostgreSQL username
- `your_password` - with your PostgreSQL password
- `localhost` - with your database host (use `localhost` for local development)
- `5432` - with your PostgreSQL port (default is 5432)
- `riddlerun` - with your database name

### 3. Run Database Migration

Create the database tables:
```bash
npm run db:migrate
```

### 4. Populate with Sample Data

Insert sample teams and checkpoints:
```bash
npm run init-db
```

## Verification

Check that the tables were created:
```bash
psql -U postgres -d riddlerun -c "\dt"
```

You should see three tables:
- teams
- checkpoints
- teampath

## Troubleshooting

### Connection Error
If you get a connection error, verify:
1. PostgreSQL is running: `pg_isready`
2. Your credentials are correct in `.env`
3. The database exists: `psql -U postgres -l`

### Permission Error
If you get a permission error, you may need to create a PostgreSQL user:
```sql
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE riddlerun TO your_username;
```

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database GUI

You can use Drizzle Studio to view and manage your database:
```bash
npm run db:studio
```

This will open a web interface at [https://local.drizzle.studio](https://local.drizzle.studio).
