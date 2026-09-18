'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Bed,
  Phone,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Users,
  Radio,
  Droplet,
  MapPin,
  Clock,
  Ambulance,
  ChevronRight,
  FileCheck2,
  CheckCircle2,
  Activity,
  Microscope,
  Stethoscope,
  HeartPulse,
  Syringe,
  Baby,
  Eye,
  Check,
  Star,
  Quote,
  Heart,
  Building2
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';
import { DOCTORS_DATA } from '@/data/doctors';
import { FACILITIES_DATA } from '@/data/facilities';

export default function HomePage() {
  const [activeChecklistTab, setActiveChecklistTab] = useState<number>(0);
  const [selectedSpecialtyTab, setSelectedSpecialtyTab] = useState<string>('all');

  // 8 Quick Action Launcher Items
  const quickLaunchers = [
    { label: 'Find Specialist Doctor', labelHindi: 'विशेषज्ञ डॉक्टर खोजें', actionLabel: 'Book Doctor', icon: Users, link: '/doctors', color: '#0284c7', bg: '#f0f9ff' },
    { label: 'Call OPD Desk', labelHindi: 'ओपीडी परामर्श (दैनिक)', actionLabel: 'Call Now', icon: PhoneCall, link: `tel:${HOSPITAL_INFO.contacts.landline1Raw}`, isPhone: true, color: '#2563eb', bg: '#eff6ff' },
    { label: 'CT Scan & MRI', labelHindi: 'सीटी स्कैन व एमआरआई', actionLabel: 'Book Scan', icon: Radio, link: '/facilities', color: '#0d9488', bg: '#f0fdfa' },
    { label: 'PM Ayushman', labelHindi: 'आयुष्मान भारत योजना', actionLabel: '100% Cashless', icon: ShieldCheck, link: '/ayushman', color: '#059669', bg: '#ecfdf5' },
    { label: 'Blood Center 24×7', labelHindi: 'शासकीय ब्लड बैंक', actionLabel: 'Blood Desk', icon: Droplet, link: '/blood-center', color: '#dc2626', bg: '#fef2f2' },
    { label: 'OPD Schedule & Info', labelHindi: 'ओपीडी समय सारणी', actionLabel: 'View Timings', icon: Clock, link: '/patient-info', color: '#475569', bg: '#f1f5f9' },
    { label: 'Ambulance Helpline', labelHindi: 'आपातकालीन एम्बुलेंस', actionLabel: 'Call 24×7', icon: Ambulance, link: `tel:${HOSPITAL_INFO.contacts.ambulanceRaw}`, isPhone: true, color: '#ef4444', bg: '#fff1f2' },
    { label: 'Hospital Directions', labelHindi: 'अस्पताल मार्ग एवं नक्शा', actionLabel: 'Open Map', icon: MapPin, link: HOSPITAL_INFO.address.googleMapsDirections, isExternal: true, color: '#0891b2', bg: '#ecfeff' },
  ];

  // 4 Interactive Checkpoints
  const visitCheckpoints = [
    {
      id: 0,
      title: '1. डॉक्टर उपलब्धता व ओपीडी समय',
      titleEn: 'Doctor Availability & OPD Timings',
      icon: Clock,
      shortBadge: 'सोम–शनि: 9 AM–2 PM, 4 PM–7 PM',
      highlight: 'अस्पताल आने से पूर्व डॉक्टर का समय व उपलब्धता जांचें',
      points: [
        'नियमित ओपीडी: सोमवार से शनिवार सुबह 09:00 AM से 02:00 PM एवं शाम 04:00 PM से 07:00 PM तक संचालित होती है।',
        'रविवार ओपीडी: प्रातः 10:00 AM से दोपहर 01:00 PM तक (आपातकालीन व ट्रॉमा सेवाएं 24×7 निरंतर चालू रहती हैं)।',
        'इंदौर के सुपर-स्पेशलिस्ट विज़िटिंग कंसल्टेंट्स के परामर्श हेतु पूर्व स्लॉट बुक करना अनुशंसित है।',
      ],
      deskName: 'ओपीडी रिसेप्शन',
      phone: HOSPITAL_INFO.contacts.landline1,
      phoneRaw: HOSPITAL_INFO.contacts.landline1Raw,
    },
    {
      id: 1,
      title: '2. आवश्यक दस्तावेज एवं पहचान पत्र',
      titleEn: 'Required Identification & Cards',
      icon: FileCheck2,
      shortBadge: 'आयुष्मान, आधार व पुरानी पर्ची',
      highlight: 'योजना लाभ व त्वरित रजिस्ट्रेशन हेतु आवश्यक पेपर्स साथ लाएं',
      points: [
        'आयुष्मान भारत लाभार्थी: आयुष्मान कार्ड (ABHA ID), आधार कार्ड एवं समग्र परिवार आईडी मूल रूप में साथ लाएं।',
        'पूर्व चिकित्सीय रिकॉर्ड: मरीज की पिछली डॉक्टर पर्ची, डिस्चार्ज कार्ड, एक्स-रे, सोनोग्राफी अथवा पैथोलॉजी रिपोर्ट जरूर साथ रखें।',
        'निजी स्वास्थ्य बीमा (TPA Cashless): पॉलिसी कार्ड, वैध पहचान पत्र एवं कंपनी का क्लेम फॉर्म सहायता काउंटर पर प्रस्तुत करें।',
      ],
      deskName: 'आयुष्मान एवं टीपीए डेस्क',
      phone: '+91 94072 99900',
      phoneRaw: '9407299900',
    },
    {
      id: 2,
      title: '3. एमआरआई / सीटी स्कैन जांच तैयारी',
      titleEn: 'MRI & CT Scan Preparation',
      icon: Radio,
      shortBadge: '24×7 डायग्नोस्टिक्स एवं गाइडेंस',
      highlight: 'उन्नत इमेजिंग जांचों से पूर्व आवश्यक चिकित्सीय निर्देश',
      points: [
        'खाली पेट (Fasting): पेट के सीटी स्कैन अथवा कंट्रास्ट एमआरआई जांच हेतु मरीज को 4 से 6 घंटे खाली पेट आने की सलाह दी जाती है।',
        'सीरम क्रिएटिनिन रिपोर्ट: कंट्रास्ट जांचों हेतु हाल ही की किडनी फंक्शन (Creatinine) रिपोर्ट आवश्यक होती है।',
        'धातु आभूषण: एमआरआई रूम में प्रवेश से पूर्व घड़ी, आभूषण, चाबियां एवं मोबाइल फोन बाहर लॉकर में सुरक्षित रखें।',
      ],
      deskName: 'रेडियोलॉजी एवं सीटी स्कैन सेंटर',
      phone: HOSPITAL_INFO.contacts.landline1,
      phoneRaw: HOSPITAL_INFO.contacts.landline1Raw,
    },
    {
      id: 3,
      title: '4. भर्ती एवं आपातकालीन सहायता',
      titleEn: 'Emergency Admission & Bed Allocation',
      icon: Bed,
      shortBadge: '24×7 इमरजेंसी रिस्पॉन्स',
      highlight: 'आपातकालीन स्थिति में सीधा कैजुअल्टी एवं इमरजेंसी वार्ड पहुंचें',
      points: [
        '24×7 कैजुअल्टी: सड़क दुर्घटना, ट्रॉमा, अचानक सीने में दर्द अथवा गंभीर स्थिति में सीधा इमरजेंसी वार्ड पहुंचें।',
        'कमरा / वार्ड चयन: डिलक्स एसी, प्राइवेट, सेमी-प्राइवेट अथवा सामान्य वार्ड में सुविधानुसार तत्काल एडमिशन की सुविधा।',
        '24×7 एम्बुलेंस सुविधा: मरीज को धार व आसपास से अस्पताल लाने हेतु इमरजेंसी एम्बुलेंस तुरंत रवाना की जाती है।',
      ],
      deskName: '24×7 इमरजेंसी एवं एडमिशन डेस्क',
      phone: HOSPITAL_INFO.contacts.emergencyMobile,
      phoneRaw: HOSPITAL_INFO.contacts.emergencyMobileRaw,
    },
  ];

  // Key Specialties
  const specialties = [
    { title: 'General & Laparoscopic Surgery', titleHi: 'सर्जरी एवं दूरबीन ऑपरेशन', icon: Activity, count: '9+ Surgeons', desc: 'पित्ताशय, अपेंडिक्स, हर्निया, बवासीर एवं एडवांस्ड लेप्रोस्कोपी' },
    { title: 'General Medicine & Critical Care', titleHi: 'जनरल मेडिसिन एवं क्रिटिकल केयर', icon: Stethoscope, count: '5+ Physicians', desc: 'मधुमेह, ब्लड प्रेशर, हृदय रोग, बुखार व संक्रामक रोग' },
    { title: 'Obstetrics & Gynecology', titleHi: 'स्त्री एवं प्रसूति रोग', icon: Heart, count: '4+ Specialists', desc: 'सुरक्षित सामान्य एवं सिजेरियन प्रसव, बांझपन व गर्भाशय उपचार' },
    { title: 'Orthopedics & Joint Replacement', titleHi: 'हड्डी एवं जोड़ प्रत्यारोपण', icon: Activity, count: '3+ Specialists', desc: 'फ्रैक्चर, घुटना व कूल्हा प्रत्यारोपण, स्पाइन व आर्थ्रोस्कोपी' },
    { title: 'Pediatrics & Neonatology (NICU)', titleHi: 'शिशु एवं बाल रोग', icon: Baby, count: '2+ Specialists', desc: 'नवजात गहन चिकित्सा (NICU), टीकाकरण एवं बाल रोग परामर्श' },
    { title: 'Radiology & Imaging', titleHi: 'रेडियोलॉजी एवं इमेजिंग', icon: Radio, count: '3+ Specialists', desc: '1.5 Tesla MRI, 32-Slice CT Scan, 4D सोनोग्राफी व डिजिटल एक्स-रे' },
    { title: 'Pathology & Blood Center', titleHi: 'पैथोलॉजी व ब्लड बैंक', icon: Droplet, count: '3+ Pathologists', desc: '24×7 शासकीय लाइसेंस प्राप्त ब्लड बैंक, प्लेटलेट्स व ऑटोमेटेड लैब' },
    { title: 'Ophthalmology & ENT', titleHi: 'नेत्र एवं कान-नाक-गला', icon: Eye, count: '3+ Specialists', desc: 'फेको मोतियाबिंद सर्जरी, पर्दा जांच, कान का पर्दा व साइनस सर्जरी' },
  ];

  // Filtered doctors for home preview (8 featured doctors)
  const previewDoctors = DOCTORS_DATA.filter((doc) => {
    if (selectedSpecialtyTab === 'all') return true;
    return doc.category === selectedSpecialtyTab;
  }).slice(0, 8);

  const patientTestimonials = [
    {
      quote: 'मेरी पित्त की थैली की पथरी की दूरबीन (Laparoscopic) सर्जरी डॉ. एम. एम. महाजन एवं डॉ. वैभव महाजन सर द्वारा की गई। मात्र दो दिन में स्वस्थ होकर घर आ गया। धार में इतना आधुनिक मॉड्यूलर ऑपरेशन थिएटर होना वरदान है।',
      patientName: 'सुरेश पाटीदार',
      location: 'धार (म.प्र.)',
      treatment: 'लैप्रोस्कोपिक गॉल ब्लैडर सर्जरी',
      rating: 5,
    },
    {
      quote: 'रात 2 बजे अचानक सीने में दर्द होने पर हम इमरजेंसी पहुंचे। डॉक्टरों ने तत्काल ईसीजी, प्राथमिक उपचार व आईसीयू में भर्ती किया। समय पर सही इलाज से पिताजी की जान बच सकी।',
      patientName: 'राजेश वर्मा (परिजन)',
      location: 'बदनावर, धार',
      treatment: '24×7 आईसीयू एवं क्रिटिकल केयर',
      rating: 5,
    },
    {
      quote: 'मेरी पत्नी की हाई-रिस्क डिलीवरी थी। डॉ. माया महाजन मैडम एवं डॉ. आकांक्षा महाजन मैडम की कुशल देखरेख में सुरक्षित प्रसव हुआ। जन्म के बाद बच्चे को एनआईसीयू में तुरंत विशेष देखरेख मिली।',
      patientName: 'अनिल मुवेल',
      location: 'कुक्षी, धार',
      treatment: 'सुरक्षित प्रसूति एवं एनआईसीयू नवजात केयर',
      rating: 5,
    },
  ];

  return (
    <div className="homepage-modern">
      {/* 1. Fullscreen Hospital Image Hero Banner */}
      <section className="hero-fullscreen">
        <div className="hero-bg-container">
          <Image
            src="/images/hosted/Mahaan01.jpg-1-scaled.jpeg"
            alt="Mahajan Multispeciality Hospital Campus Dhar"
            fill
            priority
            className="hero-bg-img"
          />
          {/* Lighter Luxury Gradient Overlay so hospital is visible */}
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="container hero-content-wrapper">
          <div className="hero-main-card">
            {/* Badges */}
            <div className="hero-badge-row">
              <span className="badge-nabh">
                <ShieldCheck size={16} />
                <span>NABH Entry-Level Certified Hospital</span>
              </span>
              <span className="badge-pill">
                <Bed size={15} />
                <span>100+ Bedded • Dhar (M.P.)</span>
              </span>
              <span className="badge-ayushman">
                <Sparkles size={15} />
                <span>100% Cashless PM Ayushman</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title">
              महाजन मल्टीस्पेशलिटी हॉस्पिटल <br />
              <span className="hero-title-en">MAHAJAN HOSPITAL DHAR</span>
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              आधुनिक चिकित्सा, आपके परिवार के और करीब। (Your Health. Our Responsibility.)
            </p>

            <p className="hero-description">
              वरिष्ठ सर्जन डॉ. एम. एम. महाजन (50+ वर्ष अनुभव) के नेतृत्व में 39+ विशेषज्ञ डॉक्टर, 24×7 इमरजेंसी व ट्रॉमा सेंटर, मॉड्यूलर ऑपरेशन थिएटर, आधुनिक CT Scan, MRI एवं शासकीय ब्लड बैंक।
            </p>

            {/* CTAs */}
            <div className="hero-cta-row">
              <Link href="/doctors" className="btn-hero-primary">
                <Users size={19} />
                <span>Consult Our Doctors (39+)</span>
                <ArrowRight size={19} />
              </Link>

              <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn-hero-emergency">
                <Phone size={19} />
                <span>24×7 Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
              </a>

              <a
                href={`https://wa.me/919407299900?text=${encodeURIComponent('नमस्ते महाजन हॉस्पिटल, मुझे परामर्श/ओपीडी के संबंध में जानकारी चाहिए।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp"
              >
                <Sparkles size={18} color="#34d399" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats-container">
              <div className="hero-stat-card">
                <span className="stat-number color-blue">100+</span>
                <span className="stat-text">Hospital Beds</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number color-green">39+</span>
                <span className="stat-text">Specialist Doctors</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number color-gold">90,000+</span>
                <span className="stat-text">Successful Surgeries</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number color-red">24×7</span>
                <span className="stat-text">Trauma &amp; ICU</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number color-white">31,000</span>
                <span className="stat-text">sq.ft. Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Action Launchers / Helpdesk */}
      <section className="launchers-section">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '28px' }}>
            <span className="section-pill-tag tag-blue">
              <Sparkles size={14} />
              <span>24×7 त्वरित सहायता एवं सेवाएं (Hospital Helpdesk)</span>
            </span>
            <h2 className="section-main-title" style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)' }}>
              Hospital Quick Helpdesk &amp; Key Services
            </h2>
            <p className="section-sub-title">
              डॉक्टर परामर्श, आपातकालीन एम्बुलेंस, सीटी/एमआरआई जांच एवं अस्पताल सहायता हेतु तुरंत संपर्क करें।
            </p>
          </div>

          <div className="launchers-container">
            {quickLaunchers.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="quick-card"
                  style={{ borderLeft: `4px solid ${item.color}` }}
                >
                  <div className="quick-icon-box" style={{ background: item.bg, color: item.color }}>
                    <IconComp size={22} />
                  </div>
                  <div className="quick-text-box">
                    <span className="quick-title">{item.label}</span>
                    <span className="quick-hi">{item.labelHindi}</span>
                  </div>
                  <div className="quick-action-pill" style={{ color: item.color, borderColor: `${item.color}55`, background: item.bg }}>
                    <span>{item.actionLabel}</span>
                    <ChevronRight size={13} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Before You Visit Guide (Interactive Tabbed) */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Clock size={15} />
              <span>मरीज एवं परिजनों के लिए आवश्यक निर्देश</span>
            </span>
            <h2 className="section-main-title">Before You Visit The Hospital</h2>
            <p className="section-sub-title">
              अस्पताल आने से पहले डॉक्टर का समय, आवश्यक दस्तावेज और जांच संबंधी निर्देश जानकर समय की बचत करें।
            </p>
          </div>

          <div className="tabs-navigation-grid">
            {visitCheckpoints.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-btn-card ${activeChecklistTab === tab.id ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveChecklistTab(tab.id)}
              >
                <div className="tab-btn-icon">
                  <tab.icon size={22} color={activeChecklistTab === tab.id ? '#0284c7' : '#64748b'} />
                </div>
                <div className="tab-btn-text">
                  <div className="tab-title-text">{tab.titleEn}</div>
                  <div className="tab-badge-text">{tab.shortBadge}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="tab-content-box">
            <div className="tab-header-row">
              <div>
                <h3 className="tab-active-title">{visitCheckpoints[activeChecklistTab].title}</h3>
                <p className="tab-active-highlight">{visitCheckpoints[activeChecklistTab].highlight}</p>
              </div>

              <a
                href={`tel:${visitCheckpoints[activeChecklistTab].phoneRaw}`}
                className="btn-tab-call"
              >
                <PhoneCall size={16} />
                <span>कॉल {visitCheckpoints[activeChecklistTab].deskName} ({visitCheckpoints[activeChecklistTab].phone})</span>
              </a>
            </div>

            <div className="tab-points-grid">
              {visitCheckpoints[activeChecklistTab].points.map((pt, i) => (
                <div key={i} className="point-card">
                  <CheckCircle2 size={20} color="#10b981" className="point-icon" />
                  <p className="point-text">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Doctors Showcase Section (39+ Specialists) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-pill-tag tag-blue">
                <Users size={14} />
                <span>चिकित्सक एवं विशेषज्ञ टीम (39+ Dedicated Doctors)</span>
              </span>
              <h2 className="section-main-title">Consult Dhar&apos;s Leading Specialists</h2>
              <p className="section-sub-title">
                महाजन हॉस्पिटल में 39+ अनुभवी विशेषज्ञ डॉक्टर एवं इंदौर के प्रसिद्ध सुपर-स्पेशलिस्ट नियमित ओपीडी परामर्श हेतु उपलब्ध हैं।
              </p>
            </div>

            <Link href="/doctors" className="btn-view-all">
              <span>View All 39+ Doctors</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="specialty-pills-row">
            {[
              { id: 'all', label: 'All Specialists' },
              { id: 'surgery', label: 'Surgeons (9+)' },
              { id: 'medicine', label: 'Physicians (5+)' },
              { id: 'gynecology', label: 'Gynecology (4+)' },
              { id: 'orthopedics', label: 'Orthopedics (3+)' },
              { id: 'pediatrics', label: 'Pediatrics' },
              { id: 'cardiology', label: 'Cardiology' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${selectedSpecialtyTab === cat.id ? 'filter-pill-active' : ''}`}
                onClick={() => setSelectedSpecialtyTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="doctors-grid">
            {previewDoctors.map((doc) => (
              <div key={doc.id} className="doctor-card">
                <div className="doc-photo-wrapper">
                  {doc.image ? (
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={300}
                      height={340}
                      className="doc-photo"
                    />
                  ) : (
                    <div className="doc-photo-placeholder">
                      <Users size={48} color="#94a3b8" />
                    </div>
                  )}
                  <span className={`doc-badge ${doc.source === 'indore' ? 'badge-indore' : 'badge-resident'}`}>
                    {doc.director ? '⭐ Managing Director' : doc.source === 'hospital' ? 'Resident Specialist' : doc.source === 'indore' ? 'Indore Visiting' : 'Visiting Consultant'}
                  </span>
                </div>

                <div className="doc-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <div className="doc-dept">{doc.department}</div>
                  <p className="doc-role">{doc.role}</p>
                  {doc.qualifications && <p className="doc-qual">{doc.qualifications}</p>}
                  {doc.timing && (
                    <div className="doc-time">
                      <Clock size={13} />
                      <span>{doc.timing}</span>
                    </div>
                  )}

                  <div className="doc-btn-row">
                    <Link href={`/doctors?doc=${doc.id}`} className="btn-doc-profile">
                      Consultation Info
                    </Link>
                    <a href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`} className="btn-doc-call">
                      <PhoneCall size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern Infrastructure & Facilities (31,000 sq.ft Dual-Campus) */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Building2 size={14} />
              <span>31,000 वर्गफीट डुअल-ब्लॉक परिसर (Campus Infrastructure)</span>
            </span>
            <h2 className="section-main-title">World-Class Facilities &amp; Technology</h2>
            <p className="section-sub-title">
              Block A (ओपीडी, डायग्नोस्टिक्स व इमरजेंसी) एवं Block B (मॉड्यूलर ओटी, आईसीयू, एनआईसीयू व 100+ बेड्स वार्ड्स)
            </p>
          </div>

          <div className="facilities-showcase-grid">
            {FACILITIES_DATA.slice(0, 6).map((fac) => (
              <div key={fac.id} className="fac-card">
                <div className="fac-image-box">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    width={400}
                    height={260}
                    className="fac-photo"
                  />
                  <span className="fac-badge">{fac.highlight}</span>
                </div>
                <div className="fac-content">
                  <h3 className="fac-title">{fac.title}</h3>
                  <div className="fac-title-hi">{fac.titleHindi}</div>
                  <p className="fac-desc">{fac.description}</p>
                  <ul className="fac-bullets">
                    {fac.features.slice(0, 3).map((f, fi) => (
                      <li key={fi}>
                        <Check size={14} color="#0284c7" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '36px' }}>
            <Link href="/facilities" className="btn-view-all-facilities">
              <span>View All Campus Facilities &amp; Equipment</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Ayushman PM-JAY & Cashless Insurance Banner */}
      <section className="section-padding">
        <div className="container">
          <div className="ayushman-highlight-card">
            <div className="ayushman-grid">
              <div className="ayushman-info-col">
                <span className="badge-ayushman-pill">
                  <ShieldCheck size={16} />
                  <span>शासकीय आयुष्मान भारत योजना</span>
                </span>
                <h2 className="ayushman-main-heading">
                  ₹5,00,000 तक का पूर्णतः निःशुल्क कैशलेस उपचार
                </h2>
                <p className="ayushman-text">
                  महाजन हॉस्पिटल धार जिले का प्रमुख आयुष्मान संबद्ध अस्पताल है। सामान्य सर्जरी, सिजेरियन प्रसव, हड्डी रोग ऑपरेशन, हर्निया, पथरी व गंभीर बीमारियों में भर्ती मरीजों को निशुल्क दवा, जांच, ऑपरेशन एवं भोजन सुविधा उपलब्ध है।
                </p>

                <div className="ayushman-checklist">
                  <div className="ayushman-check-item">
                    <CheckCircle2 size={18} color="#10b981" />
                    <span>आयुष्मान कार्ड (ABHA ID), आधार व समग्र आईडी मान्य</span>
                  </div>
                  <div className="ayushman-check-item">
                    <CheckCircle2 size={18} color="#10b981" />
                    <span>समर्पित 24×7 आयुष्मान सहायता कियोस्क एवं मित्र</span>
                  </div>
                  <div className="ayushman-check-item">
                    <CheckCircle2 size={18} color="#10b981" />
                    <span>सभी प्रमुख प्राइवेट मेडिक्लेम व TPA कैशलेस सुविधाएं</span>
                  </div>
                </div>

                <div className="ayushman-action-btns">
                  <Link href="/ayushman" className="btn-ayushman-guide">
                    <span>Ayushman Guidelines &amp; Documents</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:9407299900" className="btn-ayushman-helpdesk">
                    <PhoneCall size={16} />
                    <span>Ayushman Desk: 94072 99900</span>
                  </a>
                </div>
              </div>

              <div className="ayushman-stats-col">
                <div className="ayushman-stat-box">
                  <span className="ayushman-stat-number">100%</span>
                  <span className="ayushman-stat-title">Cashless Treatment</span>
                  <span className="ayushman-stat-desc">Under PM Ayushman Government Scheme</span>
                </div>
                <div className="ayushman-stat-box">
                  <span className="ayushman-stat-number">30,000+</span>
                  <span className="ayushman-stat-title">Beneficiaries Treated</span>
                  <span className="ayushman-stat-desc">From Dhar, Jhabua &amp; Barwani</span>
                </div>
                <div className="ayushman-stat-box">
                  <span className="ayushman-stat-number">20+</span>
                  <span className="ayushman-stat-title">TPA Cashless Tie-ups</span>
                  <span className="ayushman-stat-desc">Private Insurance Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Specialties & Clinical Departments */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Activity size={14} />
              <span>प्रमुख विशेषज्ञताएं (Clinical Departments)</span>
            </span>
            <h2 className="section-main-title">Comprehensive Multispeciality Care</h2>
            <p className="section-sub-title">
              25 से अधिक विशिष्ट चिकित्सा विभाग, अत्याधुनिक डायग्नोस्टिक्स व प्रशिक्षित पैरामेडिकल टीम।
            </p>
          </div>

          <div className="specialties-grid">
            {specialties.map((sp, idx) => {
              const IconComponent = sp.icon;
              return (
                <div key={idx} className="spec-card">
                  <div className="spec-icon-box">
                    <IconComponent size={26} color="#0284c7" />
                  </div>
                  <div className="spec-count">{sp.count}</div>
                  <h3 className="spec-title">{sp.title}</h3>
                  <div className="spec-title-hi">{sp.titleHi}</div>
                  <p className="spec-desc">{sp.desc}</p>
                  <Link href="/specialties" className="spec-link">
                    <span>Department Details</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Emergency & Map CTA Banner */}
      <section className="emergency-cta-section">
        <div className="container text-center">
          <span className="badge-emergency-pill">
            <Ambulance size={16} />
            <span>24×7 Emergency, Casualty &amp; Trauma Care</span>
          </span>
          <h2 className="emergency-cta-title">
            Need Emergency Medical Care in Dhar?
          </h2>
          <p className="emergency-cta-desc">
            धार एवं आसपास के क्षेत्रों के लिए 24 घंटे डॉक्टर, ICU, एम्बुलेंस, पैथोलॉजी एवं ब्लड सेंटर सेवाएं तुरंत उपलब्ध हैं।
          </p>

          <div className="emergency-btn-row">
            <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn-call-emergency-lg">
              <PhoneCall size={22} />
              <span>Call Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
            </a>
            <a
              href={HOSPITAL_INFO.address.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emergency-map"
            >
              <MapPin size={20} />
              <span>Get Live Hospital Directions (Google Maps)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Patient Stories & Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Heart size={14} />
              <span>मरीजों का विश्वास (Patient Experiences)</span>
            </span>
            <h2 className="section-main-title">Trusted by Thousands Across Malwa-Nimar</h2>
            <p className="section-sub-title">
              धार, बदनावर, कुक्षी, सरदारपुर, मनावर एवं झाबुआ अंचल के संतुष्ट मरीजों के वास्तविक अनुभव।
            </p>
          </div>

          <div className="testimonials-grid">
            {patientTestimonials.map((t, idx) => (
              <div key={idx} className="test-card">
                <div className="test-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span className="test-badge">{t.treatment}</span>
                </div>
                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="test-author-row">
                  <div className="test-avatar">{t.patientName.charAt(0)}</div>
                  <div>
                    <div className="test-name">{t.patientName}</div>
                    <div className="test-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styled JSX for homepage scoped styling */}
      <style jsx>{`
        /* Hero Section */
        .hero-fullscreen {
          position: relative;
          min-height: 86vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #091e36;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        :global(.hero-bg-img) {
          object-fit: cover !important;
          object-position: center 30% !important;
          filter: brightness(0.92) contrast(1.04);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4, 13, 26, 0.76) 0%,
            rgba(8, 28, 54, 0.62) 45%,
            rgba(15, 41, 74, 0.32) 100%
          );
          z-index: 2;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          padding-top: 56px;
          padding-bottom: 56px;
        }

        .hero-main-card {
          max-width: 820px;
        }

        .hero-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .badge-nabh {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(245, 158, 11, 0.95);
          color: #0f172a;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .badge-ayushman {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.9);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }

        .hero-title {
          font-size: clamp(2.1rem, 4.2vw, 3.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 14px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
        }

        .hero-title-en {
          font-size: clamp(1.2rem, 2.3vw, 1.9rem);
          font-weight: 800;
          letter-spacing: 0.04em;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-tagline {
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          font-weight: 700;
          color: #fde047;
          margin-bottom: 16px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .hero-description {
          font-size: clamp(0.95rem, 1.2vw, 1.08rem);
          color: #e2e8f0;
          line-height: 1.65;
          margin-bottom: 30px;
          max-width: 720px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 38px;
        }

        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.98rem;
          padding: 14px 26px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.4);
          transition: all 0.25s ease;
        }

        .btn-hero-primary:hover {
          background: #0369a1;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(2, 132, 199, 0.5);
        }

        .btn-hero-emergency {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #dc2626;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.98rem;
          padding: 14px 24px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
          transition: all 0.25s ease;
        }

        .btn-hero-emergency:hover {
          background: #b91c1c;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(220, 38, 38, 0.55);
        }

        .btn-hero-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 14px 20px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-hero-whatsapp:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .hero-stats-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding: 18px 24px;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
        }

        .hero-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 1.65rem;
          font-weight: 900;
          line-height: 1.1;
        }

        .color-blue { color: #38bdf8; }
        .color-green { color: #34d399; }
        .color-gold { color: #fbbf24; }
        .color-red { color: #f87171; }
        .color-white { color: #f8fafc; }

        .stat-text {
          font-size: 0.78rem;
          color: #cbd5e1;
          font-weight: 600;
          margin-top: 4px;
        }

        /* 3. Before You Visit Tabbed Component */
        .section-padding {
          padding: 70px 0;
        }

        .bg-slate-subtle {
          background: #f8fafc;
        }

        .section-header-center {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 38px;
        }

        .section-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .tag-blue {
          background: #e0f2fe;
          color: #0369a1;
        }

        .section-main-title {
          font-size: clamp(1.75rem, 2.8vw, 2.4rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .section-sub-title {
          font-size: 1.02rem;
          color: #64748b;
          line-height: 1.6;
        }

        .tabs-navigation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }

        .tab-btn-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .tab-btn-card:hover {
          border-color: #93c5fd;
          transform: translateY(-2px);
        }

        .tab-btn-active {
          border-color: #0284c7;
          background: #f0f9ff;
          box-shadow: 0 4px 16px rgba(2, 132, 199, 0.12);
        }

        .tab-title-text {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .tab-badge-text {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 3px;
        }

        .tab-content-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .tab-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 20px;
          margin-bottom: 24px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .tab-active-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .tab-active-highlight {
          font-size: 0.95rem;
          color: #0284c7;
          font-weight: 600;
        }

        .btn-tab-call {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-tab-call:hover {
          background: #16a34a;
          color: #ffffff;
        }

        .tab-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .point-card {
          display: flex;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 18px;
          border-radius: 14px;
        }

        .point-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.55;
        }

        /* 4. Doctors Section */
        .section-header-flex {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .btn-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-view-all:hover {
          background: #0284c7;
        }

        .specialty-pills-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .filter-pill {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .filter-pill-active {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .doctor-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .doctor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
        }

        .doc-photo-wrapper {
          position: relative;
          height: 250px;
          background: #f1f5f9;
          overflow: hidden;
        }

        :global(.doc-photo) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: top center !important;
        }

        .doc-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }

        .doc-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
        }

        .badge-resident {
          background: rgba(16, 185, 129, 0.9);
          color: #ffffff;
        }

        .badge-indore {
          background: rgba(2, 132, 199, 0.9);
          color: #ffffff;
        }

        .doc-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .doc-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .doc-dept {
          font-size: 0.82rem;
          color: #0284c7;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .doc-role {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .doc-qual {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .doc-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #475569;
          margin-top: auto;
          margin-bottom: 14px;
          padding: 6px 10px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .doc-btn-row {
          display: flex;
          gap: 8px;
        }

        .btn-doc-profile {
          flex-grow: 1;
          text-align: center;
          padding: 8px 12px;
          background: #f1f5f9;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-doc-profile:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .btn-doc-call {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-doc-call:hover {
          background: #16a34a;
          color: #ffffff;
        }

        /* 5. Facilities Showcase */
        .facilities-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .fac-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .fac-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
        }

        .fac-image-box {
          position: relative;
          height: 200px;
          background: #0f172a;
        }

        :global(.fac-photo) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        .fac-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .fac-content {
          padding: 20px;
        }

        .fac-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .fac-title-hi {
          font-size: 0.85rem;
          color: #0284c7;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .fac-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .fac-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fac-bullets li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: #334155;
          font-weight: 500;
        }

        .btn-view-all-facilities {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.35);
          transition: all 0.25s ease;
        }

        .btn-view-all-facilities:hover {
          background: #0369a1;
          transform: translateY(-2px);
        }

        /* 6. Ayushman Banner */
        .ayushman-highlight-card {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
          border-radius: 24px;
          padding: 44px;
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(6, 78, 59, 0.25);
        }

        .ayushman-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .badge-ayushman-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 0.82rem;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .ayushman-main-heading {
          font-size: clamp(1.6rem, 2.5vw, 2.3rem);
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .ayushman-text {
          font-size: 1rem;
          line-height: 1.65;
          color: #d1fae5;
          margin-bottom: 22px;
        }

        .ayushman-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .ayushman-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
        }

        .ayushman-action-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-ayushman-guide {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #065f46;
          font-weight: 800;
          font-size: 0.92rem;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-ayushman-guide:hover {
          background: #f0fdf4;
          transform: translateY(-2px);
        }

        .btn-ayushman-helpdesk {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-ayushman-helpdesk:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .ayushman-stats-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ayushman-stat-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          flex-direction: column;
        }

        .ayushman-stat-number {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fbbf24;
        }

        .ayushman-stat-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2px;
        }

        .ayushman-stat-desc {
          font-size: 0.8rem;
          color: #a7f3d0;
          margin-top: 2px;
        }

        /* 7. Specialties */
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .spec-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .spec-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
          border-color: #93c5fd;
        }

        .spec-icon-box {
          width: 52px;
          height: 52px;
          background: #f0f9ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .spec-count {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          display: inline-block;
          padding: 3px 8px;
          border-radius: 6px;
          margin-bottom: 8px;
          align-self: flex-start;
        }

        .spec-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .spec-title-hi {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .spec-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .spec-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0284c7;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .spec-link:hover {
          gap: 8px;
        }

        /* 8. Emergency CTA */
        .emergency-cta-section {
          background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%);
          padding: 60px 0;
          color: #ffffff;
        }

        .badge-emergency-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 0.85rem;
          font-weight: 800;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .emergency-cta-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .emergency-cta-desc {
          font-size: 1.05rem;
          color: #fecaca;
          max-width: 680px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }

        .emergency-btn-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-call-emergency-lg {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #b91c1c;
          font-weight: 900;
          font-size: 1.05rem;
          padding: 16px 30px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
        }

        .btn-call-emergency-lg:hover {
          background: #fef2f2;
          transform: translateY(-2px);
        }

        .btn-emergency-map {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 16px 26px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-emergency-map:hover {
          background: rgba(255, 255, 255, 0.28);
        }

        /* 9. Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .test-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
        }

        .test-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 14px;
        }

        .test-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 700;
          background: #e0f2fe;
          color: #0369a1;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .test-quote {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .test-author-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .test-avatar {
          width: 42px;
          height: 42px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .test-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .test-loc {
          font-size: 0.78rem;
          color: #64748b;
        }

        /* Responsive Media Queries */
        @media (max-width: 1100px) {
          .hero-stats-container {
            grid-template-columns: repeat(3, 1fr);
          }
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .specialties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .ayushman-grid {
            grid-template-columns: 1fr;
          }
          .tabs-navigation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tab-points-grid {
            grid-template-columns: 1fr;
          }
          .facilities-showcase-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero-stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .doctors-grid {
            grid-template-columns: 1fr;
          }
          .specialties-grid {
            grid-template-columns: 1fr;
          }
          .tabs-navigation-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
