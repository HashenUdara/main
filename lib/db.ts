import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Get the database URL from environment variables
const connectionString = process.env.DATABASE_URL || '';

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create postgres client with connection pooling settings optimized for serverless
const client = postgres(connectionString, {
  max: 1, // Limit connections for serverless environments
  idle_timeout: 20,
  connect_timeout: 10,
});

// Create drizzle instance
const db = drizzle(client, { schema });

export default db;