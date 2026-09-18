import { NextResponse } from 'next/server';

// In-memory appointments store with default sample records
interface AppointmentRecord {
  id: string;
  patientName: string;
  phone: string;
  department: string;
  doctor?: string;
  preferredDate?: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

const appointmentsStore: AppointmentRecord[] = [
  {
    id: 'apt-101',
    patientName: 'विनोद पाटीदार (Vinod Patidar)',
    phone: '9893012345',
    department: 'सर्जरी एवं यूरोलॉजी',
    doctor: 'डॉ. एम. एम. महाजन',
    preferredDate: '2026-09-16',
    message: 'पित्ताशय परामर्श हेतु',
    status: 'pending',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'apt-102',
    patientName: 'रीना शर्मा (Reena Sharma)',
    phone: '9407299901',
    department: 'शिशु एवं महिला रोग',
    doctor: 'डॉ. लीना माइकल',
    preferredDate: '2026-09-17',
    message: 'मातृत्व स्वास्थ्य जांच',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: appointmentsStore.length,
    data: appointmentsStore,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.patientName || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Patient Name and Phone are required.' },
        { status: 400 }
      );
    }

    const newAppointment: AppointmentRecord = {
      id: `apt-${Date.now().toString().slice(-4)}`,
      patientName: body.patientName,
      phone: body.phone,
      department: body.department || 'General Medicine',
      doctor: body.doctor || 'Any Available Specialist',
      preferredDate: body.preferredDate || new Date().toISOString().split('T')[0],
      message: body.message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    appointmentsStore.unshift(newAppointment);

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment request received successfully.',
        appointment: newAppointment,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request payload.' },
      { status: 500 }
    );
  }
}
