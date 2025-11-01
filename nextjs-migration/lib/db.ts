import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Get the database URL from environment variables
const connectionString = process.env.DATABASE_URL || '';

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create postgres client
const client = postgres(connectionString);

// Create drizzle instance
const db = drizzle(client, { schema });

export default db;