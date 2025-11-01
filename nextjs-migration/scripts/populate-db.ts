import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../lib/schema';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectionString = process.env.DATABASE_URL || '';

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const client = postgres(connectionString);
const db = drizzle(client, { schema });

async function populateDatabase() {
  try {
    console.log('Populating database...');

    // Insert teams
    const teamsData = [
      { id: 1, name: 'Team Alpha', password: 'e0b43c55dc84e15496a758d9246e5ece', riddleIndex: 1, timestamp: new Date('2024-11-01 22:07:00') },
      { id: 2, name: 'Team Bravo', password: 'eacc71af36b53e843beea9db33fc6eb3', riddleIndex: 1, timestamp: new Date('2024-11-01 21:58:21') },
      { id: 3, name: 'Team Charlie', password: '346017992a152fe86753305debe95cfe', riddleIndex: 1, timestamp: new Date('2024-11-01 22:04:43') },
      { id: 4, name: 'Team Delta', password: '7bf5a92e044c65036eab6ded619fa602', riddleIndex: 1, timestamp: new Date('2024-11-01 22:06:39') },
      { id: 5, name: 'Team Echo', password: 'a8cf59205f97032d002bf2d09a364144', riddleIndex: 1, timestamp: new Date('2024-11-01 21:50:18') },
      { id: 6, name: 'Team Foxtrot', password: '069c370159ae3e1bf6d7956cea81a857', riddleIndex: 1, timestamp: new Date('2024-11-01 21:50:18') },
      { id: 7, name: 'Team Golf', password: '30e4fb18d35c2db082d5f4461cc59afd', riddleIndex: 1, timestamp: new Date('2024-11-01 21:50:18') },
      { id: 8, name: 'Team Hotel', password: '75fcdd7f0a2a623ce2051713b2dc46d8', riddleIndex: 1, timestamp: new Date('2024-11-01 21:50:18') },
    ];

    await db.insert(schema.teams).values(teamsData);
    console.log('Teams inserted successfully');

    // Insert checkpoints
    const checkpointsData = [
      { id: 1, name: 'Starting Point', hash: '589b1596f5c52037b0e7485d67253b9500eb1', riddle: 'I am the beginning of all journeys, the starting point of all paths. Where am I?' },
      { id: 2, name: 'UCSC Open Area', hash: '80672d909bcd0d62f90f2b1067253b950b6eb', riddle: 'In a space where the winds gently sway, Where whispers of knowledge float through the day. Find the place where thoughts often blend, Beneath a quiet seat, your next clue awaits-my friend' },
      { id: 3, name: 'Juicebar', hash: 'b43efc7912c8a9d0b0fb351267253b9511251', riddle: 'In a spot where flavors blend and freshness flows, A zesty concoction is where knowledge grows. Seek out the counter where colors unite, Your next clue is hidden-just take a bite!' },
      { id: 4, name: 'Science Canteen', hash: 'f4eab5230fd91d650f117e1567253b9521f5b', riddle: 'To find your next clue, head to the heart of discovery, where students gather to refuel between classes. This is the place where ideas are served alongside snacks, and conversations spark like chemical reactions. Look for a table that often hosts lively debates-your next clue is waiting in a spot where curiosity is always on the menu.' },
      { id: 5, name: 'Basketball court', hash: 'c852edcc9a6ee1d4d56b51ff67253b9529f4e', riddle: 'To uncover your next hint, navigate to the arena of strategy and skill, where movements are calculated like a well-crafted algorithm. Seek the spot near the hoop, where energy peaks and teamwork thrives, hidden in the shadows near the sidelines, waiting to be found with a little finesse-just like a well-timed dribble.' },
      { id: 6, name: 'Mini Planatarium', hash: '58da3d12bca88d5228d9d96367253b9530219', riddle: 'ybirhgz kl wkh ftuq wjvb wkh qzslg zlfr vqsbv uvlro<br>19' },
      { id: 7, name: 'Pavilion', hash: '6a56f18b0a3412eb0831a35867253b9536356', riddle: '<pre>values = [36, 7, 25, 15, 24, 11, 18, 24]\nfor value in values:\n    index = (value - 20) % 26\n    if index == 0:\n        index = 26\n    letter = chr(index + 96)\n    print(letter, end="")\nprint()</pre>' },
      { id: 8, name: 'Medical Centre', hash: '02e35703b413790be110fa1d67253b953c6cc', riddle: 'Think of the island that was shaped by a revolution led by a figure known for his resolve-Fidel Castro. This land is rich in history and resilience, where the echoes of change still resonate. Seek the spot that reflects this spirit of transformation, and beneath it, your clue awaits, hidden like the secrets of a past era' },
      { id: 9, name: 'Auditorium', hash: '675ae03de97de740e1f1811e67253b9561849', riddle: '<pre>values = [50, 46, 38, 19, 30, 22, 32, 29, 33]\nfor value in values:\n    index = (value * 2 + 5) // 5\n    if index > 26:\n        index = 26\n    letter = chr(index + 96)\n    print(letter, end="")\nprint()</pre>' },
      { id: 10, name: 'Science Faculty Open Area', hash: '639f007743a826bc8df1346267253b957557a', riddle: 'In a lively spot where hearts collide, UCSC charm is hard to hide. With laughter shared and love in the air, Near the big tree where bright minds share. Look for a bench where many have run, Beneath its shade, your clue is spun!' },
      { id: 11, name: 'UCSC Canteen', hash: '5e3048ae217b54eeb1b9da0b67253b957b63d', riddle: 'Known for its furry residents that roam freely and whispers of worms sneaking into the dishes, this place has stories to tell. Look beneath the table where the curious critters like to play, and there your clue awaits, hidden among the remnants of culinary escapades!' },
      { id: 12, name: 'end', hash: 'd94c94d7e9dc29f8681e578b67253b958184b', riddle: 'I am the beginning of the journey, where the adventure starts and the rules are set. I am the place where the story unfolds and the players met. What am I?' },
    ];

    await db.insert(schema.checkpoints).values(checkpointsData);
    console.log('Checkpoints inserted successfully');

    // Insert team paths
    const teampathsData = [
      { id: 1, teamID: 1, checkpointID: 1, solved: 1, solvedTime: new Date('2024-11-02 03:22:44'), orderNum: 0 },
      { id: 2, teamID: 1, checkpointID: 10, solved: 1, solvedTime: new Date('2024-11-02 03:22:51'), orderNum: 1 },
      { id: 3, teamID: 1, checkpointID: 6, solved: 1, solvedTime: new Date('2024-11-02 03:22:55'), orderNum: 2 },
      { id: 4, teamID: 1, checkpointID: 2, solved: 1, solvedTime: new Date('2024-11-02 03:22:59'), orderNum: 3 },
      { id: 5, teamID: 1, checkpointID: 9, solved: 1, solvedTime: new Date('2024-11-02 03:37:00'), orderNum: 4 },
      { id: 6, teamID: 1, checkpointID: 8, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 5 },
      { id: 7, teamID: 1, checkpointID: 4, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 6 },
      { id: 8, teamID: 1, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 7 },
      { id: 9, teamID: 2, checkpointID: 1, solved: 1, solvedTime: new Date('2024-11-02 03:27:42'), orderNum: 0 },
      { id: 10, teamID: 2, checkpointID: 5, solved: 1, solvedTime: new Date('2024-11-02 03:27:49'), orderNum: 1 },
      { id: 11, teamID: 2, checkpointID: 7, solved: 1, solvedTime: new Date('2024-11-02 03:28:06'), orderNum: 2 },
      { id: 12, teamID: 2, checkpointID: 9, solved: 1, solvedTime: new Date('2024-11-02 03:28:21'), orderNum: 3 },
      { id: 13, teamID: 2, checkpointID: 3, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 4 },
      { id: 14, teamID: 2, checkpointID: 8, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 5 },
      { id: 15, teamID: 2, checkpointID: 6, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 6 },
      { id: 16, teamID: 2, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 7 },
      { id: 17, teamID: 3, checkpointID: 1, solved: 1, solvedTime: new Date('2024-11-02 03:34:20'), orderNum: 0 },
      { id: 18, teamID: 3, checkpointID: 10, solved: 1, solvedTime: new Date('2024-11-02 03:34:29'), orderNum: 1 },
      { id: 19, teamID: 3, checkpointID: 6, solved: 1, solvedTime: new Date('2024-11-02 03:34:33'), orderNum: 2 },
      { id: 20, teamID: 3, checkpointID: 7, solved: 1, solvedTime: new Date('2024-11-02 03:34:42'), orderNum: 3 },
      { id: 21, teamID: 3, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 4 },
      { id: 22, teamID: 3, checkpointID: 2, solved: 0, solvedTime: new Date('2024-11-02 02:47:50'), orderNum: 5 },
      { id: 23, teamID: 3, checkpointID: 8, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 6 },
      { id: 24, teamID: 3, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 7 },
      { id: 25, teamID: 4, checkpointID: 1, solved: 1, solvedTime: new Date('2024-11-02 03:36:39'), orderNum: 0 },
      { id: 26, teamID: 4, checkpointID: 5, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 1 },
      { id: 27, teamID: 4, checkpointID: 4, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 2 },
      { id: 28, teamID: 4, checkpointID: 2, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 3 },
      { id: 29, teamID: 4, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 4 },
      { id: 30, teamID: 4, checkpointID: 7, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 5 },
      { id: 31, teamID: 4, checkpointID: 10, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 6 },
      { id: 32, teamID: 4, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 7 },
      { id: 33, teamID: 5, checkpointID: 1, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 0 },
      { id: 34, teamID: 5, checkpointID: 7, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 1 },
      { id: 35, teamID: 5, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 2 },
      { id: 36, teamID: 5, checkpointID: 10, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 3 },
      { id: 37, teamID: 5, checkpointID: 3, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 4 },
      { id: 38, teamID: 5, checkpointID: 5, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 5 },
      { id: 39, teamID: 5, checkpointID: 6, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 6 },
      { id: 40, teamID: 5, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 7 },
      { id: 41, teamID: 6, checkpointID: 1, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 0 },
      { id: 42, teamID: 6, checkpointID: 8, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 1 },
      { id: 43, teamID: 6, checkpointID: 2, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 2 },
      { id: 44, teamID: 6, checkpointID: 4, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 3 },
      { id: 45, teamID: 6, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 4 },
      { id: 46, teamID: 6, checkpointID: 5, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 5 },
      { id: 47, teamID: 6, checkpointID: 10, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 6 },
      { id: 48, teamID: 6, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 7 },
      { id: 49, teamID: 7, checkpointID: 1, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 0 },
      { id: 50, teamID: 7, checkpointID: 7, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 1 },
      { id: 51, teamID: 7, checkpointID: 10, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 2 },
      { id: 52, teamID: 7, checkpointID: 11, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 3 },
      { id: 53, teamID: 7, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 4 },
      { id: 54, teamID: 7, checkpointID: 4, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 5 },
      { id: 55, teamID: 7, checkpointID: 8, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 6 },
      { id: 56, teamID: 7, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 7 },
      { id: 57, teamID: 8, checkpointID: 1, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 0 },
      { id: 58, teamID: 8, checkpointID: 10, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 1 },
      { id: 59, teamID: 8, checkpointID: 4, solved: 0, solvedTime: new Date('2024-11-02 02:47:51'), orderNum: 2 },
      { id: 60, teamID: 8, checkpointID: 7, solved: 0, solvedTime: new Date('2024-11-02 02:47:52'), orderNum: 3 },
      { id: 61, teamID: 8, checkpointID: 9, solved: 0, solvedTime: new Date('2024-11-02 02:47:52'), orderNum: 4 },
      { id: 62, teamID: 8, checkpointID: 5, solved: 0, solvedTime: new Date('2024-11-02 02:47:52'), orderNum: 5 },
      { id: 63, teamID: 8, checkpointID: 6, solved: 0, solvedTime: new Date('2024-11-02 02:47:52'), orderNum: 6 },
      { id: 64, teamID: 8, checkpointID: 12, solved: 0, solvedTime: new Date('2024-11-02 02:47:52'), orderNum: 7 },
    ];

    await db.insert(schema.teampath).values(teampathsData);
    console.log('Team paths inserted successfully');

    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
    throw error;
  } finally {
    await client.end();
  }
}

populateDatabase();

