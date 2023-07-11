import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import { db } from '@/lib/db';
import { RoomTable } from '@/lib/db/schema';

export async function POST() {
  // TODO implement rate limit
  const room = { token: uuidv4() }
  await db.insert(RoomTable).values(room)

  return NextResponse.json({ token: room.token });
}
