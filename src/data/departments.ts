export interface DepartmentDetail {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  procedures: string[];
  opdSchedule: string;
}

export const DEPARTMENTS_DATA: DepartmentDetail[] = [
  {
    id: 'general-medicine',
    titleHindi: 'जनरल मेडिसिन एवं फिजिशियन विभाग',
    titleEnglish: 'General Medicine & Internal Medicine',
    iconName: 'Stethoscope',
    shortDesc: 'बुखार, संक्रमण, मधुमेह, उच्च रक्तचाप, लिवर व पेट संबंधित स्वास्थ्य समस्याओं का व्यापक उपचार।',
    fullDesc: 'महाजन हॉस्पिटल का सामान्य चिकित्सा विभाग मौसमी बीमारियों, टाइफाइड, मलेरिया, डेंगू, वायरल संक्रमणों से लेकर दीर्घकालिक समस्याओं जैसे डायबिटीज (मधुमेह), हाइपरटेंशन (ब्लड प्रेशर), अस्थमा एवं लिवर-पेट रोगों के निदान व प्रबंधन में अग्रणी है।',
    features: [
      'डायबिटीज एवं ब्लड प्रेशर का निरंतर प्रबंधन',
      'गंभीर संक्रामक रोगों का त्वरित उपचार',
      'लिवर एवं पेट रोग विशेषज्ञ परामर्श (Dr. Meetesh Mahajan)',
      'निवारक स्वास्थ्य जांच (Preventive Health Checkups)'
    ],
    procedures: [
      'Comprehensive Blood Glucose Monitoring',
      'Hypertension Workup & ECG',
      'Infectious Disease Care',
      'Liver Function & GI Consultation'
    ],
    opdSchedule: 'सोमवार से शनिवार: 10:00 AM - 05:00 PM'
  },
  {
    id: 'surgery-urology',
    titleHindi: 'जनरल एवं लेप्रोस्कोपिक सर्जरी तथा मूत्र रोग',
    titleEnglish: 'General & Laparoscopic Surgery & Urology',
    iconName: 'Activity',
    shortDesc: 'वरिष्ठ सर्जनों की टीम द्वारा हर्निया, अपेंडिक्स, पित्ताशय, पथरी और मूत्र रोग से संबंधित आधुनिक सर्जरी।',
    fullDesc: 'वरिष्ठ सर्जन एवं प्रबंध निदेशक डॉ. एम. एम. महाजन (50 वर्षों का अनुभव, 90,000+ सर्जरी) तथा डॉ. मयंक महाजन के मार्गदर्शन में आधुनिक मॉड्यूलर ऑपरेशन थिएटर में सुरक्षित, कम दर्द और शीघ्र स्वास्थ्य लाभ वाली सर्जिकल प्रक्रियाएं की जाती हैं।',
    features: [
      'दूरबीन (Laparoscopic) द्वारा हर्निया, अपेंडिक्स एवं पित्त की थैली की सर्जरी',
      'मूत्र मार्ग की पथरी (Kidney/Bladder Stones) का आधुनिक उपचार',
      'प्रोस्टेट (Prostate) एवं मूत्र रोग विशेष परामर्श',
      '24×7 सर्जिकल इमरजेंसी एवं ट्रॉमा केयर सपोर्ट'
    ],
    procedures: [
      'Laparoscopic Cholecystectomy (पित्ताशय सर्जरी)',
      'Appendectomy (अपेंडिक्स सर्जरी)',
      'Hernia Repair (हर्निया ऑपरेशन)',
      'TURP & Urological Procedures (मूत्र रोग प्रक्रियाएं)'
    ],
    opdSchedule: 'दैनिक: प्रातः 10:00 AM से दोपहर 04:00 PM'
  },
  {
    id: 'orthopedics-spine',
    titleHindi: 'हड्डी, जोड़ प्रत्यारोपण एवं स्पाइन विभाग',
    titleEnglish: 'Orthopedics, Joint Replacement & Spine Care',
    iconName: 'Bone',
    shortDesc: 'फ्रैक्चर, जोड़ों के दर्द, आर्थराइटिस, रीढ़ की हड्डी के दर्द एवं आधुनिक फिजियोथेरेपी सुविधाएं।',
    fullDesc: 'हड्डी एवं जोड़ रोग विभाग में जटिल फ्रैक्चर सर्जरी, आर्थ्रोप्लास्टी, जोड़ दर्द का इलाज, कमर व गर्दन (स्पाइन) की समस्याओं का विशेषज्ञ परामर्श एवं समर्पित फिजियोथेरेपी व रिहैबिलिटेशन सेवाएं उपलब्ध हैं।',
    features: [
      'डिजिटल एक्स-रे एवं सी-आर्म गाइडेड फ्रैक्चर फिक्सेशन',
      'स्पाइन सर्जन (Dr. Pranav Kumar) द्वारा रीढ़ की समस्याओं का उपचार',
      'जोड़ों के दर्द, गठिया एवं कार्टिलेज समस्याओं का प्रबंधन',
      'इन-हाउस समर्पित फिजियोथेरेपिस्ट (Dr. Sudarshan Joshi)'
    ],
    procedures: [
      'Complex Fracture Fixation',
      'Spine Care & Decompression',
      'Joint Injections & Pain Care',
      'Physiotherapy & Rehabilitation'
    ],
    opdSchedule: 'सोमवार से शनिवार: 10:30 AM - 04:30 PM'
  },
  {
    id: 'pediatrics-neonatology',
    titleHindi: 'शिशु एवं बाल रोग तथा NICU विभाग',
    titleEnglish: 'Pediatrics, Neonatology & NICU',
    iconName: 'Baby',
    shortDesc: 'नवजात शिशु से लेकर 18 वर्ष तक के बच्चों का संपूर्ण स्वास्थ्य, टीकाकरण, पोषण एवं NICU आईसीयू केयर।',
    fullDesc: 'विशेषज्ञ बाल रोग डॉक्टरों की टीम द्वारा नवजात शिशुओं की गहन देखभाल (NICU), बाल संक्रमण, पीलिया, कुपोषण, श्वसन रोग, बाल टीकाकरण एवं बाल सर्जरी (Pediatric Surgery) की संपूर्ण व्यवस्था है।',
    features: [
      'आधुनिक एनआईसीयू (NICU) वार्मर व फोटोथेरेपी यूनिट',
      'संपूर्ण बाल टीकाकरण (Vaccination Schedule)',
      'पीडियाट्रिक सर्जन (Dr. Mayur Maheshwari) विज़िटिंग परामर्श',
      'बच्चों के लिए अनुकूल वातावरण एवं प्ले सेक्शन'
    ],
    procedures: [
      'Newborn Critical Monitoring & Phototherapy',
      'Immunization & Developmental Assessment',
      'Pediatric Respiratory & Fever Management',
      'Pediatric Surgical Consultations'
    ],
    opdSchedule: 'दैनिक OPD: 10:00 AM - 02:00 PM, 05:00 PM - 07:00 PM'
  },
  {
    id: 'obstetrics-gynecology',
    titleHindi: 'स्त्री एवं प्रसूति रोग विभाग',
    titleEnglish: 'Obstetrics & Gynecology (Women Wellness)',
    iconName: 'HeartPulse',
    shortDesc: 'गर्भावस्था देखभाल, सामान्य व सिजेरियन प्रसव, बांझपन परामर्श एवं महिला स्वास्थ्य की संपूर्ण जांच।',
    fullDesc: 'महिला स्वास्थ्य विभाग में अनुभवी स्त्री रोग विशेषज्ञों द्वारा सुरक्षित प्रसव (Normal & LSCS Delivery), उच्च जोखिम गर्भावस्था (High-Risk Pregnancy) की निगरानी, बांझपन परामर्श, पीसीओडी/पीसीओएस तथा रजोनिवृत्ति (Menopause) समस्याओं का परामर्श दिया जाता है।',
    features: [
      '24×7 प्रसव एवं स्त्री रोग आपातकालीन सहायता',
      'गर्भावस्था के दौरान नियमित अल्ट्रासाउंड व सोनोग्राफी',
      'महिला स्वास्थ्य जांच एवं गर्भाशय संबंधी उपचार',
      'प्राइवेट एवं सेमी-प्राइवेट सुरक्षित लेबर वार्ड'
    ],
    procedures: [
      'Normal Delivery & C-Section Care',
      'Antenatal Checkups (ANC) & Counseling',
      'PCOS/PCOD & Hormonal Therapy',
      'Hysterectomy & Laparoscopic Gynae Surgeries'
    ],
    opdSchedule: 'सोमवार से शनिवार: 11:00 AM - 04:00 PM'
  },
  {
    id: 'ophthalmology',
    titleHindi: 'नेत्र रोग विभाग',
    titleEnglish: 'Ophthalmology (Eye Care)',
    iconName: 'Eye',
    shortDesc: 'आंखों की संपूर्ण जांच, दृष्टि दोष, मोतियाबिंद, ग्लूकोमा एवं नेत्र सुरक्षा परामर्श।',
    fullDesc: 'नेत्र रोग विभाग में अनुभवी नेत्र विशेषज्ञों (Dr. R.C.S. Thakur, Dr. Twarit Singh Thakur, Dr. Jayanti Singh Thakur) द्वारा आधुनिक उपकरणों से आंखों की जांच, चश्मे का नंबर, मोतियाबिंद व रेटिना जांच की जाती है।',
    features: [
      'कम्प्यूटरीकृत नेत्र परीक्षण (Automated Refraction)',
      'मोतियाबिंद परामर्श एवं सर्जरी मार्गदर्शन',
      'डायबिटिक रेटिनोपैथी व ग्लूकोमा स्क्रीनिंग',
      'आंखों के संक्रमण एवं चोट का त्वरित उपचार'
    ],
    procedures: [
      'Cataract Evaluation',
      'Slit Lamp & Retinal Examination',
      'Refraction & Vision Correction',
      'Eye Trauma Care'
    ],
    opdSchedule: 'सोमवार से शनिवार: 10:00 AM - 03:00 PM'
  },
  {
    id: 'ent-dermatology-dental',
    titleHindi: 'ENT, त्वचा रोग एवं दंत चिकित्सा',
    titleEnglish: 'ENT, Dermatology & Dental Surgery',
    iconName: 'Smile',
    shortDesc: 'कान-नाक-गला, त्वचा व एलर्जी, और दंत रोगों का विशेष परामर्श एवं उपचार।',
    fullDesc: 'ईएनटी (Dr. Abhik Sikdar), त्वचा रोग (Dr. Nidhish Gupta) एवं दंत चिकित्सक (Dr. Ritesh Vyas) द्वारा आधुनिक डायग्नोस्टिक व प्रोसीजर तकनीकों से मरीजों को सटीक इलाज दिया जाता है।',
    features: [
      'साइनस, टॉन्सिल, कान के बहरेपन व संक्रमण का इलाज',
      'दाद, खाज, खुजली, सोरायसिस व त्वचा एलर्जी उपचार',
      'दांत निकालना, आरसीटी (Root Canal), स्केलिंग व फिलिंग',
      'कॉस्मेटिक एवं प्रिवेंटिव केयर'
    ],
    procedures: [
      'Otoscopy & Sinus Treatment',
      'Dermatological Allergy Care',
      'Root Canal Therapy & Dental Extractions',
      'Preventive Dental Cleaning'
    ],
    opdSchedule: 'विशेषज्ञ दिवस अनुसार (कृपया पहले संपर्क करें)'
  },
  {
    id: 'diagnostics-imaging',
    titleHindi: 'रेडियोलॉजी, CT Scan, MRI एवं पैथोलॉजी',
    titleEnglish: 'Diagnostics, Radiology, CT/MRI & Pathology',
    iconName: 'Microscope',
    shortDesc: 'धार जिले का अग्रिणी डायग्नोस्टिक सेंटर - CT Scan, MRI, डिजिटल X-Ray, 24×7 पैथोलॉजी लैब।',
    fullDesc: 'महाजन हॉस्पिटल धार जिले में आधुनिक डायग्नोस्टिक्स का अग्रणी केंद्र है। यहां हाई-रिज़ॉल्यूशन CT Scan, MRI, सोनोग्राफी, डिजिटल एक्स-रे और पूर्णतः स्वचालित पैथोलॉजी लैब में अनुभवी पैथोलॉजिस्ट (Dr. Amit Sharma) और सोनोलॉजिस्ट (Dr. R.K. Gupta) द्वारा सटीक रिपोर्टिंग की जाती है।',
    features: [
      '24×7 इन-हाउस पैथोलॉजी लैब परीक्षण',
      'आधुनिक CT Scan एवं MRI जांच',
      'डिजिटल एक्स-रे एवं कलर डॉपलर सोनोग्राफी',
      'एंडोस्कोपी जांच एवं त्वरित डिजिटल रिपोर्टिंग'
    ],
    procedures: [
      'Whole Body CT Scan & Brain Imaging',
      'MRI Spine, Brain & Joints',
      'Complete Blood Count, Liver/Kidney Profile, Hormones',
      'Abdominal & Pelvic Ultrasound / Sonology'
    ],
    opdSchedule: '24×7 आपातकालीन जांच सुविधा निरंतर चालू'
  }
];
