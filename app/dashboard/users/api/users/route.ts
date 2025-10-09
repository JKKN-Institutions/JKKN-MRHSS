import { NextRequest, NextResponse } from 'next/server';
import { createUser, deleteUser, listUsers, seedIfEmpty, updateUser, adminResetPassword } from '../../../users/utils/storage';

seedIfEmpty();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? '1');
  const pageSize = Number(searchParams.get('pageSize') ?? '10');
  const role = searchParams.get('role') ?? undefined;
  const status = (searchParams.get('status') ?? undefined) as any;
  const search = searchParams.get('search') ?? undefined;
  const department = searchParams.get('department') ?? undefined;
  const data = listUsers({ page, pageSize, role, status, search, department });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const user = createUser(payload);
  return NextResponse.json(user, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const payload = await req.json();
  const { id, ...rest } = payload;
  const updated = updateUser(id, rest);
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const ok = deleteUser(id);
  return NextResponse.json({ ok });
}

export async function PATCH(req: NextRequest) {
  const payload = await req.json();
  const { id, newPassword } = payload as { id?: string; newPassword?: string };
  if (!id || !newPassword) return NextResponse.json({ error: 'Missing id or newPassword' }, { status: 400 });
  const ok = adminResetPassword(id, newPassword);
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}


