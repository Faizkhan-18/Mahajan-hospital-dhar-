import { NextResponse } from 'next/server';

interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message?: string;
  createdAt: string;
}

const inquiriesStore: InquiryRecord[] = [
  {
    id: 'inq-01',
    name: 'संजय चौहान',
    phone: '9826011223',
    email: 'sanjay@example.com',
    subject: 'Ayushman Scheme',
    message: 'आयुष्मान कार्ड के तहत सीटी स्कैन की प्रक्रिया क्या है?',
    createdAt: new Date(Date.now() - 5400000).toISOString(),
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: inquiriesStore.length,
    data: inquiriesStore,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone are required.' },
        { status: 400 }
      );
    }

    const newInquiry: InquiryRecord = {
      id: `inq-${Date.now().toString().slice(-4)}`,
      name: body.name,
      phone: body.phone,
      email: body.email || '',
      subject: body.subject || 'General Inquiry',
      message: body.message || '',
      createdAt: new Date().toISOString(),
    };

    inquiriesStore.unshift(newInquiry);

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully.',
        inquiry: newInquiry,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 500 }
    );
  }
}
