import { NextResponse } from 'next/server';
import { DOCTORS_DATA, DEPARTMENT_CATEGORIES } from '@/data/doctors';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q')?.toLowerCase().trim();

  let results = DOCTORS_DATA;

  if (category && category !== 'all') {
    results = results.filter((d) => d.category === category);
  }

  if (query) {
    results = results.filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.role.toLowerCase().includes(query) ||
        d.department.toLowerCase().includes(query) ||
        (d.qualifications && d.qualifications.toLowerCase().includes(query))
    );
  }

  return NextResponse.json({
    success: true,
    total: DOCTORS_DATA.length,
    count: results.length,
    categories: DEPARTMENT_CATEGORIES,
    data: results,
  });
}
