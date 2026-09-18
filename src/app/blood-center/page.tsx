'use client';

import React from 'react';
import Link from 'next/link';
import {
  Droplet,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
  Heart,
  ArrowRight,
  Activity
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function BloodCenterPage() {
  const bloodServices = [
    {
      title: 'Whole Blood Units (संपूर्ण रक्त)',
      desc: 'इमरजेंसी ट्रॉमा, मेजर सर्जरी एवं गंभीर एनीमिया के मरीजों हेतु पूर्णतः जांची गई सुरक्षित रक्त इकाइयां।'
    },
    {
      title: 'Packed Red Blood Cells (PRBC)',
      desc: 'क्रिटिकल केयर एवं हीमोग्लोबिन की तीव्र कमी वाले मरीजों हेतु रेड ब्लड सेल्स कंपोनेंट।'
    },
    {
      title: 'Fresh Frozen Plasma (FFP)',
      desc: 'रक्तस्राव विकार, लिवर संबंधी बीमारियों एवं बर्न इंजरी के मरीजों के लिए आवश्यक प्लाज्मा।'
    },
    {
      title: 'Platelet Concentrates (RDPC)',
      desc: 'डेंगू, थ्रोम्बोसाइटोपेनिया एवं प्लेटलेट्स की कमी के आपात मामलों में जीवनरक्षक कंपोनेंट।'
    }
  ];

  return (
    <div className="blood-center-page">
      {/* 1. Header Banner */}
      <section className="blood-hero-banner">
        <div className="container">
          <span className="badge badge-red" style={{ background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}>
            24×7 Critical Service
          </span>
          <h1 className="banner-title">Govt-Recognized Blood Center</h1>
          <p className="banner-sub-hindi">शासकीय मान्यता प्राप्त 24×7 ब्लड सेंटर — महाजन हॉस्पिटल, धार</p>
          <p className="banner-desc">
            धार एवं आसपास के क्षेत्र में आधुनिक कंपोनेंट पृथक्करण, कड़े सुरक्षा मानकों एवं 24 घंटे आपातकालीन उपलब्धता के साथ सुरक्षित रक्त सेवा।
          </p>
        </div>
      </section>

      {/* 2. Key Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card card-hover highlight-card">
              <div className="icon-circle bg-red-light">
                <Droplet size={24} className="text-red" />
              </div>
              <h3 className="card-title">24×7 Emergency Supply</h3>
              <p className="card-desc">
                ट्रॉमा, सी-सेक्शन, ऑर्थोपेडिक व जनरल सर्जरी हेतु सभी ब्लड ग्रुप्स की तत्पर उपलब्धता।
              </p>
            </div>

            <div className="card card-hover highlight-card">
              <div className="icon-circle bg-red-light">
                <ShieldCheck size={24} className="text-red" />
              </div>
              <h3 className="card-title">100% Tested & Cross-Matched</h3>
              <p className="card-desc">
                HIV, HBV, HCV, मलेरिया एवं सिफलिस की आधुनिक स्क्रीनिंग के उपरांत ही रक्त जारी किया जाता है।
              </p>
            </div>

            <div className="card card-hover highlight-card">
              <div className="icon-circle bg-red-light">
                <Heart size={24} className="text-red" />
              </div>
              <h3 className="card-title">Voluntary Donor Network</h3>
              <p className="card-desc">
                नियमित स्वैच्छिक रक्तदान शिविर एवं आपातकाल हेतु पंजीकृत डोनर्स की डायरेक्टरी।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Blood Components */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Blood Components</span>
            <h2 className="heading-lg">उपलब्ध रक्त घटक एवं कंपोनेंट्स</h2>
            <p className="subheading">
              मरीज की चिकित्सीय आवश्यकता अनुसार रक्त घटकों का सुरक्षित पृथक्करण व भंडारण।
            </p>
          </div>

          <div className="grid-2">
            {bloodServices.map((comp, idx) => (
              <div key={idx} className="card comp-card">
                <div className="comp-header">
                  <CheckCircle2 size={20} className="text-teal" />
                  <h3 className="comp-title">{comp.title}</h3>
                </div>
                <p className="comp-desc">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Strip */}
      <section className="section-bg-navy section-sm">
        <div className="container flex-between flex-wrap gap-4">
          <div>
            <h3 className="heading-sm" style={{ color: '#ffffff', marginBottom: '4px' }}>
              ब्लड उपलब्धता अथवा इमरजेंसी रक्त आवश्यकता?
            </h3>
            <p style={{ color: '#94a3b8' }}>
              ब्लड सेंटर डेस्क अथवा हॉस्पिटल इमरजेंसी नंबर पर सीधे संपर्क करें।
            </p>
          </div>
          <div className="flex-center gap-3">
            <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-emergency">
              <PhoneCall size={16} />
              <span>Call Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
            </a>
            <Link href="/contact" className="btn btn-outline-white">
              <span>Contact Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blood-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(185, 28, 28, 0.76) 100%), url('/images/blood-banner.jpg') center 30% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 54px;
          position: relative;
        }

        .banner-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 14px 0 4px;
          color: #ffffff;
        }

        .banner-sub-hindi {
          font-size: 1.05rem;
          color: #f87171;
          font-weight: 600;
          margin-bottom: 12px;
          font-family: var(--font-hindi);
        }

        .banner-desc {
          font-size: 1.02rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 780px;
        }

        .highlight-card {
          padding: 28px;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .bg-red-light {
          background: #fef2f2;
        }

        .text-red {
          color: #dc2626;
        }

        .text-teal {
          color: #0284c7;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 8px;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        .comp-card {
          padding: 24px;
        }

        .comp-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .comp-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0b1e33;
        }

        .comp-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          padding-left: 30px;
        }
      `}</style>
    </div>
  );
}
