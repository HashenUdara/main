import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { teams } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { teamID, password } = body;

    if (!teamID || !password) {
      return NextResponse.json({
        status: 400,
        desc: 'Please fill all the required input fields',
      });
    }

    // Query the database to verify team credentials
    const team = await db.select().from(teams).where(and(eq(teams.id, parseInt(teamID)), eq(teams.password, password))).limit(1);

    if (!team || team.length === 0) {
      return NextResponse.json({
        status: 400,
        desc: 'Invalid team ID or password',
      });
    }

    return NextResponse.json({
      status: 200,
      desc: 'Team registered successfully',
      'team-name': team[0].name,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({
      status: 500,
      desc: 'Something went wrong. Please try again later.',
    });
  }
}
