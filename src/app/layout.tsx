import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import ClientLayout from '@/components/ClientLayout';
import StyledJsxRegistry from './registry';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#16254c',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mahajanhospitaldhar.com'),
  title: 'महाजन मल्टीस्पेशलिटी हॉस्पिटल धार | Mahajan Multispeciality Hospital, Dhar (M.P.)',
  description: '100 बिस्तरों का NABH Entry-Level प्रमाणित अस्पताल, धार (म.प्र.)। 39+ विशेषज्ञ डॉक्टर, 24×7 इमरजेंसी, CT Scan, MRI, ब्लड सेंटर एवं आयुष्मान भारत सेवाएं।',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  keywords: [
    'Mahajan Hospital Dhar',
    'Mahajan Multispeciality Hospital',
    'Best Hospital in Dhar MP',
    'Dr MM Mahajan Surgeon Dhar',
    'CT Scan Dhar',
    'MRI Dhar MP',
    'Ayushman Hospital Dhar',
    'Blood Bank Dhar',
    'Emergency Hospital Dhar',
    'महाजन हॉस्पिटल धार'
  ],
  authors: [{ name: 'Mahajan Multispeciality Hospital' }],
  openGraph: {
    title: 'महाजन मल्टीस्पेशलिटी हॉस्पिटल धार | Mahajan Multispeciality Hospital',
    description: 'आधुनिक चिकित्सा, आपके परिवार के और करीब। 100-Bedded Hospital, 39+ Doctors, 24×7 ICU & Trauma Center.',
    url: 'https://mahajanhospitaldhar.com',
    siteName: 'Mahajan Multispeciality Hospital, Dhar',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Mahajan Hospital Dhar Logo',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <StyledJsxRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
