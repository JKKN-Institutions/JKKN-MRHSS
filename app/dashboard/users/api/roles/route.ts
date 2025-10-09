import { NextRequest, NextResponse } from 'next/server';
import { createRole, listRoles, seedIfEmpty, updateRole, deleteRole } from '../../../users/utils/storage';

seedIfEmpty();

export async function GET() {
  return NextResponse.json(listRoles());
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const role = createRole(payload);
  return NextResponse.json(role, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const payload = await req.json();
  const { id, ...rest } = payload;
  const updated = updateRole(id, rest);
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const ok = deleteRole(id);
  return NextResponse.json({ ok });
}


