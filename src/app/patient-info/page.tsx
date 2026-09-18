'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckSquare,
  Clock,
  Calendar,
  PhoneCall,
  AlertCircle,
  HelpCircle,
  FileText,
  Bed,
  Droplet,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function PatientInfoPage() {

  const beforeVisitChecklist = [
    {
      title: '1. Doctor Availability (डॉक्टर उपलब्धता)',
      titleEnglish: 'Confirm OPD Consultation Timings',
      desc: 'विशेषज्ञ डॉक्टर या इंदौर के विजिटिंग कंसल्टेंट की ओपीडी दिन व समय की पुष्टि अस्पताल आने से पूर्व अवश्य कर लें।',
      action: 'Call OPD: 07292 - 232900 / +91 94072 99900',
      icon: Clock,
    },
    {
      title: '2. Investigation Availability (जांच उपलब्धता)',
      desc: 'एमआरआई (MRI), सीटी स्कैन (CT Scan), 4D सोनोग्राफी अथवा विशेष पैथोलॉजी टेस्ट की उपलब्धता और आवश्यक तैयारी (जैसे खाली पेट रहना) की जानकारी प्राप्त करें।',
      action: 'MRI / CT Enquiry: +91 94072 99900',
      icon: FileText,
    },
    {
      title: '3. Procedure & Surgery (सर्जरी / प्रक्रिया परामर्श)',
      desc: 'नियोजित सर्जरी, लेप्रोस्कोपी अथवा माइनर प्रोसीजर हेतु पूर्व परामर्श एवं सर्जन की सलाह लें।',
      action: 'Surgical Desk: 07292 - 232900',
      icon: CheckSquare,
    },
    {
      title: '4. Bed & Room Availability (बेड एवं रूम स्थिति)',
      desc: 'भर्ती (Admission) के लिए सामान्य वार्ड अथवा प्राइवेट/डीलक्स रूम की उपलब्धता पहले से कन्फर्म करें।',
      action: 'Admission Desk: 07292 - 408330',
      icon: Bed,
    },
    {
      title: '5. Ayushman Bharat (आयुष्मान योजना पात्रता)',
      desc: 'आयुष्मान कार्ड (ABHA ID), आधार कार्ड, समग्र आईडी एवं पूर्व मेडिकल रिकॉर्ड साथ लाएं और आयुष्मान मित्र से सहायता प्राप्त करें।',
      action: 'Ayushman Desk: +91 98930 90999',
      icon: ShieldCheck,
    },
    {
      title: '6. Blood Center Stock (ब्लड उपलब्धता)',
      desc: 'सर्जरी अथवा इमरजेंसी हेतु आवश्यक ब्लड ग्रुप व कंपोनेंट की वर्तमान उपलब्धता ब्लड सेंटर से जांचें।',
      action: 'Blood Center: 07292 - 232900',
      icon: Droplet,
    },
  ];

  const faqs = [
    {
      q: 'चिकित्सा आपातकाल (Emergency) में क्या करें?',
      qEng: 'What should I do in a medical emergency?',
      a: 'चिकित्सा आपातकाल में बिना किसी देरी के सीधे अस्पताल के 24×7 इमरजेंसी विभाग (Magajpura, Dhar) में पहुंचें अथवा तुरंत +91 94072 99900 / 07292 - 232900 पर कॉल करें। एम्बुलेंस सेवा हेतु 9993465318 पर संपर्क करें।'
    },
    {
      q: 'ओपीडी परामर्श का समय क्या है?',
      qEng: 'What are the OPD consultation timings?',
      a: 'सोमवार से शनिवार: प्रातः 09:00 AM से दोपहर 02:00 PM एवं सायं 04:00 PM से 07:00 PM। रविवार: प्रातः 10:00 AM से दोपहर 01:00 PM। आपातकालीन विभाग 24 घंटे निरंतर खुला रहता है।'
    },
    {
      q: 'इंदौर के विजिटिंग डॉक्टर्स कब उपलब्ध होते हैं?',
      qEng: 'When are visiting consultants from Indore available?',
      a: 'इंदौर के सुपर-स्पेशलिस्ट कंसल्टेंट्स निर्धारित दिनों एवं समय पर ओपीडी परामर्श हेतु उपलब्ध रहते हैं। आने से पहले उनके ओपीडी शेड्यूल की पुष्टि कर लें या ऑनलाइन अपॉइंटमेंट अनुरोध भेजें।'
    },
    {
      q: 'आयुष्मान भारत भर्ती हेतु कौन से दस्तावेज आवश्यक हैं?',
      qEng: 'What documents are required for Ayushman Bharat admission?',
      a: 'आयुष्मान कार्ड (ABHA ID), आधार कार्ड, मध्य प्रदेश समग्र परिवार आईडी, राशन कार्ड (यदि उपलब्ध हो) एवं मरीज के पूर्व चिकित्सीय रिकॉर्ड/जांच रिपोर्ट।'
    },
    {
      q: 'अस्पताल में कौन-कौन सी जांच सुविधाएं उपलब्ध हैं?',
      qEng: 'What diagnostic facilities are available at the hospital?',
      a: 'महाजन हॉस्पिटल धार में मल्टी-स्लाइस सीटी स्कैन, 1.5T एमआरआई, डिजिटल एक्स-रे, 4D सोनोग्राफी, कलर डॉपलर एवं 24×7 पैथोलॉजी लैब उपलब्ध हैं।'
    },
    {
      q: 'क्या मरीजों और परिजनों के लिए भोजन/कैंटीन सुविधा उपलब्ध है?',
      qEng: 'Is canteen food available for patients and attendants?',
      a: 'हां, अस्पताल परिसर में इन-हाउस कैंटीन उपलब्ध है जो मरीजों और परिजनों के लिए शुद्ध व पौष्टिक आहार उपलब्ध कराती है। संपर्क: +91 97837 93520।'
    }
  ];

  return (
    <div className="patient-info-page">
      {/* 1. Header Banner */}
      <section className="patient-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Patient Guide &amp; Assistance</span>
          <h1 className="banner-title">अस्पताल आने से पहले — मरीज मार्गदर्शिका</h1>
          <p className="banner-sub-eng">Before You Visit — Patient Information &amp; Practical Guidelines</p>
          <p className="banner-desc">
            अस्पताल आने से पूर्व डॉक्टर, जांच, बेड, आयुष्मान पात्रता एवं ब्लड उपलब्धता की पुष्टि हेतु महत्वपूर्ण दिशा-निर्देश एवं अक्सर पूछे जाने वाले प्रश्न (FAQs)।
          </p>
        </div>
      </section>

      {/* 2. Before You Visit Checklist */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Practical Checklist</span>
            <h2 className="heading-lg">6 Things to Confirm Before You Visit</h2>
            <p className="subheading">
              मरीजों एवं परिजनों की सुविधा और समय की बचत के लिए कृपया आने से पहले निम्नलिखित 6 बिंदुओं की पुष्टि कर लें:
            </p>
          </div>

          <div className="grid-3">
            {beforeVisitChecklist.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="card card-hover checklist-card">
                  <div className="check-icon-wrapper">
                    <IconComp size={22} className="text-teal" />
                  </div>
                  <h3 className="check-title">{item.title}</h3>
                  <p className="check-desc">{item.desc}</p>
                  <div className="check-action-pill">
                    <PhoneCall size={14} className="text-teal" />
                    <span>{item.action}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="notice-banner-box card">
            <AlertCircle size={24} className="text-amber flex-shrink-0" />
            <div>
              <h4 className="notice-title">जिम्मेदार चिकित्सा एवं आवश्यकता पड़ने पर उच्च केंद्र रेफरल</h4>
              <p className="notice-text">
                &quot;{HOSPITAL_INFO.philosophy?.responsibleCareStatement || 'मरीज के स्वास्थ्य हित में जो सही और आवश्यक है, वही परामर्श एवं उपचार प्रदान करना।'}&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPD Timings & Admission Info */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="grid-2">
            {/* OPD Table */}
            <div className="card">
              <span className="badge badge-teal" style={{ marginBottom: '10px' }}>OPD Schedule</span>
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>ओपीडी एवं परामर्श समय (OPD Timings)</h3>
              <div className="timings-list">
                {HOSPITAL_INFO.opdTimings.map((t, idx) => (
                  <div key={idx} className="timing-row">
                    <div className="t-day">
                      <Clock size={16} className="text-teal" />
                      <strong>{t.day}</strong>
                    </div>
                    <div className="t-time">{t.time}</div>
                  </div>
                ))}
              </div>
              <div className="opd-cta-row">
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
                  className="btn btn-primary btn-sm"
                >
                  <PhoneCall size={15} />
                  <span>Call OPD: 07292 - 232900</span>
                </a>
                <Link href="/doctors" className="btn btn-secondary btn-sm">
                  <span>View Doctors Schedule</span>
                </Link>
              </div>
            </div>

            {/* Planned Admission Guide */}
            <div className="card">
              <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Inpatient Care</span>
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>भर्ती दिशा-निर्देश (Admission Guidelines)</h3>
              <ul className="guideline-list">
                <li>
                  <strong>परामर्श पर्ची (Doctor&apos;s Prescription):</strong> भर्ती हेतु संबंधित विशेषज्ञ की एडवाइस पर्ची साथ लाएं।
                </li>
                <li>
                  <strong>पहचान प्रमाण (ID Proof):</strong> मरीज एवं परिचारक (Attendant) का आधार कार्ड।
                </li>
                <li>
                  <strong>आयुष्मान / टीपीए दस्तावेज:</strong> कार्ड, समग्र आईडी अथवा स्वास्थ्य बीमा पॉलिसी दस्तावेज।
                </li>
                <li>
                  <strong>दैनिक दवाइयां (Ongoing Medications):</strong> वर्तमान में चल रही सभी दवाओं की सूची एवं पुरानी फाइल।
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQs) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Help &amp; Clarity</span>
            <h2 className="heading-lg">अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
            <p className="subheading">
              मरीजों और परिचारकों द्वारा अक्सर पूछे जाने वाले महत्वपूर्ण सवाल और उनके स्पष्ट उत्तर।
            </p>
          </div>

          <div className="faqs-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card faq-card">
                <div className="faq-question">
                  <HelpCircle size={18} className="text-teal flex-shrink-0" />
                  <div>
                    <h4 className="faq-q-hindi">{faq.q}</h4>
                    <p className="faq-q-eng">{faq.qEng}</p>
                  </div>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="section-bg-navy section-sm">
        <div className="container flex-between flex-wrap gap-4">
          <div>
            <h3 className="heading-sm" style={{ color: '#ffffff', marginBottom: '4px' }}>
              कोई अन्य प्रश्न या तत्काल सहायता चाहिए?
            </h3>
            <p style={{ color: '#94a3b8' }}>
              हमारे मरीज हेल्पडेस्क या 24×7 इमरजेंसी नंबर पर सीधे संपर्क करें।
            </p>
          </div>
          <div className="flex-center gap-3">
            <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-emergency">
              <PhoneCall size={16} />
              <span>Call Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
            </a>
            <Link href="/contact" className="btn btn-outline-white">
              <span>View Contact Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .patient-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(3, 105, 161, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 25% / cover no-repeat;
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
          font-family: var(--font-hindi);
        }

        .banner-sub-eng {
          font-size: 1rem;
          color: #38bdf8;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .banner-desc {
          font-size: 1.02rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 780px;
        }

        .checklist-card {
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .check-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .check-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 8px;
          font-family: var(--font-hindi);
        }

        .check-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .check-action-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0b1e33;
        }

        .notice-banner-box {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #fffbeb;
          border: 1px solid #fde68a;
          padding: 20px 24px;
          margin-top: 32px;
          border-radius: 12px;
        }

        .notice-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #92400e;
          margin-bottom: 4px;
          font-family: var(--font-hindi);
        }

        .notice-text {
          font-size: 0.88rem;
          color: #78350f;
          line-height: 1.55;
          font-style: italic;
        }

        .text-amber {
          color: #d97706;
        }

        .timings-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .timing-row {
          padding: 10px 12px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .t-day {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #0b1e33;
          margin-bottom: 2px;
        }

        .t-time {
          font-size: 0.82rem;
          color: #475569;
          padding-left: 24px;
        }

        .opd-cta-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .guideline-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.55;
        }

        .guideline-list li {
          position: relative;
          padding-left: 18px;
        }

        .guideline-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0284c7;
          font-size: 1.2rem;
          line-height: 1;
        }

        /* FAQs */
        .faqs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .faq-card {
          padding: 20px 24px;
        }

        .faq-question {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .faq-q-hindi {
          font-size: 0.98rem;
          font-weight: 700;
          color: #0b1e33;
          font-family: var(--font-hindi);
          line-height: 1.3;
        }

        .faq-q-eng {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        .faq-answer {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .faqs-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .notice-banner-box {
            flex-direction: column;
            gap: 10px;
            padding: 16px;
          }
          .opd-cta-row {
            flex-direction: column;
            width: 100%;
          }
          .opd-cta-row .btn {
            width: 100%;
            justify-content: center;
          }
          .checklist-card {
            padding: 18px 16px;
          }
        }
      `}</style>
    </div>
  );
}
