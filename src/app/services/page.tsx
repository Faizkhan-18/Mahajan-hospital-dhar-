'use client';

import React from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Radio,
  Droplet,
  CheckCircle2,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Activity,
  Bed,
  Ambulance,
  Pill,
  Utensils
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';
import { PhoneCall } from 'lucide-react';

export default function ServicesPage() {

  const serviceCategories = [
    {
      id: 'medical-surgical',
      title: 'Medical & Surgical Care (चिकित्सा एवं सर्जिकल सेवाएं)',
      desc: 'जनरल मेडिसिन, ओपीडी, इनपेशेंट वार्ड, गहन चिकित्सा (ICU) एवं उन्नत लेप्रोस्कोपिक व जनरल सर्जरी।',
      icon: Stethoscope,
      services: [
        { name: 'Outpatient Consultation (ओपीडी)', desc: '39+ विशेषज्ञ एवं इंदौर के सुपर-स्पेशलिस्ट कंसल्टेंट्स द्वारा दैनिक परामर्श।' },
        { name: 'General & Laparoscopic Surgery', desc: 'दूरबीन विधि द्वारा हर्निया, अपेंडिक्स, पित्ताशय की पथरी एवं जटिल सर्जिकल उपचार।' },
        { name: '24×7 Emergency & Trauma Care', desc: 'आपातकालीन दुर्घटना, कार्डियक एवं ट्रॉमा केयर यूनिट 24 घंटे तत्पर।' },
        { name: 'Critical Care ICU & NICU', desc: 'मल्टी-पैरामीटर वेंटिलेटर, कार्डियक मॉनिटर एवं नवजात शिशु गहन चिकित्सा।' },
        { name: 'Inpatient Wards & Private Rooms', desc: '100+ बिस्तरों की क्षमता, डीलक्स, सेमी-प्राइवेट एवं सामान्य वार्ड सुविधाएं।' },
        { name: 'Gastroenterology & Liver Care', desc: 'पेट, लिवर, आंत एवं पाचन संबंधी विकारों का आधुनिक चिकित्सीय प्रबंधन।' },
      ]
    },
    {
      id: 'diagnostic-imaging',
      title: 'Diagnostic & Imaging Services (जांच एवं इमेजिंग केंद्र)',
      desc: 'धार जिले में अत्याधुनिक सीटी स्कैन, 1.5T एमआरआई, 4D सोनोग्राफी एवं पूर्णतः ऑटोमेटेड पैथोलॉजी लैब।',
      icon: Radio,
      services: [
        { name: '1.5 Tesla MRI Scanner', desc: 'ब्रेन, स्पाइन, जोड़ों और नसों की हाई-डेफिनिशन इमेजिंग जांच।' },
        { name: 'Multi-Slice CT Scan (24×7)', desc: 'सिर की चोट, छाती, पेट एवं आपातकालीन ट्रॉमा स्कैन तुरंत उपलब्ध।' },
        { name: 'Digital X-Ray & Radiography', desc: 'न्यूनतम रेडिएशन व उच्च स्पष्टता युक्त डिजिटल रेडियोग्राफी।' },
        { name: '4D Sonography & Color Doppler', desc: 'गर्भावस्था सोनोग्राफी, वैस्कुलर एवं एब्डोमिनल डॉप्लर जांच।' },
        { name: '24×7 Pathology & Lab Tests', desc: 'बायोकैमिस्ट्री, हेमेटोलॉजी, हार्मोनल जांच एवं त्वरित रिपोर्टिंग।' },
        { name: 'ECG, 2D Echo & Cardiac Testing', desc: 'हृदय की कार्यप्रणाली एवं प्राथमिक कार्डियक डायग्नोस्टिक्स।' },
      ]
    },
    {
      id: 'support-services',
      title: 'Patient Support & Facilities (रोगी सहायता एवं सेवाएं)',
      desc: 'मरीजों एवं उनके परिजनों की सुविधा व सुरक्षा हेतु 24 घंटे सक्रिय सहायक व्यवस्थाएं।',
      icon: Droplet,
      services: [
        { name: 'Govt-Recognized Blood Center', desc: 'सुरक्षित रक्त व कंपोनेंट्स (PRBC, FFP, Platelets) की निरंतर उपलब्धता।' },
        { name: 'PM Ayushman Help Desk', desc: 'आयुष्मान योजना अंतर्गत ₹5 लाख तक का निशुल्क उपचार एवं बायोमेट्रिक सहायता।' },
        { name: '24×7 In-House Pharmacy', desc: 'सभी आवश्यक जेन्युइन दवाइयां, सर्जिकल आइटम्स एवं इमरजेंसी ड्रग्स।' },
        { name: '24×7 Ambulance Fleet', desc: 'ऑक्सीजन युक्त लाइफ-सपोर्ट एम्बुलेंस द्वारा मरीज परिवहन सेवा।' },
        { name: 'In-House Nutritious Canteen', desc: 'मरीजों एवं अटेंडेंट्स हेतु स्वच्छ, शुद्ध व सुपाच्य भोजन व्यवस्था।' },
        { name: 'Cashless TPA Insurance Desk', desc: 'प्रमुख निजी स्वास्थ्य बीमा कंपनियों के साथ आसान कैशलेस मेडिक्लेम भर्ती।' },
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* 1. Header Banner */}
      <section className="services-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Comprehensive Medical Services</span>
          <h1 className="banner-title">Hospital Services & Diagnostics</h1>
          <p className="banner-desc">
            31,000 वर्गफीट के आधुनिक परिसर में ओपीडी, इनपेशेंट वार्ड, मॉड्यूलर ओटी, 1.5T एमआरआई, सीटी स्कैन, 24×7 पैथोलॉजी, ब्लड सेंटर एवं आपातकालीन सुविधाएं।
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="section">
        <div className="container">
          <div className="categories-stack">
            {serviceCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.id} className="category-block">
                  <div className="cat-header">
                    <div className="cat-icon-box">
                      <IconComp size={24} className="text-teal" />
                    </div>
                    <div>
                      <h2 className="cat-title">{cat.title}</h2>
                      <p className="cat-desc">{cat.desc}</p>
                    </div>
                  </div>

                  <div className="grid-3">
                    {cat.services.map((srv, sIdx) => (
                      <div key={sIdx} className="card card-hover service-card">
                        <div className="service-card-top">
                          <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                          <h3 className="service-name">{srv.name}</h3>
                        </div>
                        <p className="service-desc">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Action CTA */}
      <section className="section-bg-navy section-sm">
        <div className="container flex-between flex-wrap gap-4">
          <div>
            <h3 className="heading-sm" style={{ color: '#ffffff', marginBottom: '4px' }}>
              Need an OPD Consultation or Diagnostic Test?
            </h3>
            <p style={{ color: '#94a3b8' }}>
              Book an appointment online or contact our OPD desk for timing details.
            </p>
          </div>
          <div className="flex-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
              className="btn btn-primary"
            >
              <PhoneCall size={16} />
              <span>Call OPD: 07292 - 232900</span>
            </a>
            <Link href="/doctors" className="btn btn-outline-white">
              <span>View Doctors Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(2, 132, 199, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 40% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 54px;
          position: relative;
        }

        .banner-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 14px 0 10px;
          color: #ffffff;
        }

        .banner-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 780px;
        }

        .categories-stack {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .category-block {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .cat-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }

        .cat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0b1e33;
          margin-bottom: 4px;
        }

        .cat-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.5;
        }

        .service-card {
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card-top {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
        }

        .service-name {
          font-size: 1rem;
          font-weight: 700;
          color: #0b1e33;
          line-height: 1.3;
        }

        .service-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.55;
          flex-grow: 1;
        }

        .text-teal {
          color: #0284c7;
        }

        @media (max-width: 768px) {
          .category-block {
            padding: 20px;
          }
          .cat-header {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
