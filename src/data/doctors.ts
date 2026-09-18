export interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  category: string;
  source: 'hospital' | 'visiting' | 'indore';
  director?: boolean;
  image?: string;
  experience?: string;
  qualifications?: string;
  timing?: string;
}

export const DOCTORS_DATA: Doctor[] = [
  // 1. General Medicine (5)
  {
    id: 'dr-mitesh-mahajan',
    name: 'डॉ. मीतेश महाजन',
    role: 'कंसल्टिंग फिजिशियन (लिवर एवं पेट रोग विशेषज्ञ)',
    department: 'जनरल मेडिसिन',
    category: 'medicine',
    source: 'hospital',
    director: false,
    image: '/images/hosted/Dr.-Meetesh-MahajanGastroentrologist-1-scaled.jpg',
    qualifications: 'M.D. (Medicine), Gastro & Liver Specialist',
    timing: 'सोमवार - शनिवार: 10:00 AM - 04:00 PM'
  },
  {
    id: 'dr-ashok-jain',
    name: 'डॉ. अशोक जैन',
    role: 'कंसल्टिंग फिजिशियन',
    department: 'जनरल मेडिसिन',
    category: 'medicine',
    source: 'visiting',
    image: '/images/hosted/Dr.-Ashok-JainPhysician-1.jpeg',
    qualifications: 'M.D. (Medicine)',
    timing: 'नियमित OPD परामर्श'
  },
  {
    id: 'dr-hemant-nargave',
    name: 'डॉ. हेमंत नरगावे',
    role: 'कंसल्टिंग फिजिशियन',
    department: 'जनरल मेडिसिन',
    category: 'medicine',
    source: 'visiting',
    image: '/images/hosted/Dr.-Hemant-Nargave-1.jpeg',
    qualifications: 'M.D. (General Medicine)',
    timing: 'विशेषज्ञ परामर्श'
  },
  {
    id: 'dr-ashish-damor',
    name: 'डॉ. आशीष डामोर',
    role: 'कंसल्टिंग फिजिशियन',
    department: 'जनरल मेडिसिन',
    category: 'medicine',
    source: 'visiting',
    image: '/images/hosted/Dr.-Ashish-DamorGeneral-Physician-1.jpeg',
    qualifications: 'M.B.B.S., M.D. (Physician)',
    timing: 'दैनिक OPD'
  },
  {
    id: 'dr-sumit-sisodiya',
    name: 'डॉ. सुमित सिसोदिया',
    role: 'कंसल्टिंग फिजिशियन',
    department: 'जनरल मेडिसिन',
    category: 'medicine',
    source: 'visiting',
    image: '/images/hosted/Dr.-sumit-sisodiyaPhysician-1.jpeg',
    qualifications: 'M.D. (Medicine)',
    timing: 'परामर्श हेतु संपर्क करें'
  },

  // 2. Surgery & Urology (9)
  {
    id: 'dr-mm-mahajan',
    name: 'डॉ. एम. एम. महाजन',
    role: 'कंसल्टिंग सर्जन एवं मैनेजिंग डायरेक्टर',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'hospital',
    director: true,
    image: '/images/hosted/Dr.-M.M.-Mahajan-Managing-Director-1-scaled.jpg',
    qualifications: 'M.S. (General Surgery), Senior Surgeon',
    experience: '50+ Years Experience (90,000+ Surgeries)',
    timing: 'सोमवार - शनिवार: 11:00 AM - 03:00 PM'
  },
  {
    id: 'dr-mayank-mahajan',
    name: 'डॉ. मयंक महाजन',
    role: 'कंसल्टिंग सर्जन एवं मूत्र रोग विशेषज्ञ',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'hospital',
    image: '/images/hosted/DR.-MAYANK-MAHAJAN-1-scaled.jpg',
    qualifications: 'M.S. (Surgery), Urology Specialist',
    timing: 'सोमवार - शनिवार: 10:00 AM - 05:00 PM'
  },
  {
    id: 'dr-ns-thakur',
    name: 'डॉ. एन.एस. ठाकुर',
    role: 'फिजिशियन एवं सर्जन',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'hospital',
    qualifications: 'M.B.B.S., M.S.',
    timing: 'दैनिक उपलब्ध'
  },
  {
    id: 'dr-rahul-patidar',
    name: 'डॉ. राहुल पाटीदार',
    role: 'फिजिशियन एवं सर्जन',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'hospital',
    qualifications: 'M.B.B.S., M.S.',
    timing: 'दैनिक OPD एवं सर्जरी'
  },
  {
    id: 'dr-nanda-samander',
    name: 'डॉ. नंदा समंदर',
    role: 'कंसल्टिंग सर्जन',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'visiting',
    image: '/images/hosted/Dr.-Nanda-SamanderGeneral-surgeon-1.jpeg',
    qualifications: 'M.S. (General Surgery)',
    timing: 'विज़िटिंग सर्जन परामर्श'
  },
  {
    id: 'dr-manish-kaushal',
    name: 'डॉ. मनीष कौशल',
    role: 'जनरल सर्जन',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'indore',
    qualifications: 'M.S. (General Surgery), Indore',
    timing: 'निर्धारित दिवस अनुसार'
  },
  {
    id: 'dr-faiz-ahmad-khan',
    name: 'डॉ. फैज अहमद खान',
    role: 'M.Ch. Uro. (अरविंदो)',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'indore',
    qualifications: 'M.Ch. (Urology - SAIMS/Aurobindo)',
    timing: 'विज़िटिंग सुपर स्पेशलिस्ट'
  },
  {
    id: 'dr-sudesh-sharda',
    name: 'डॉ. सुदेश सारडा',
    role: 'लीवर सर्जन',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'indore',
    qualifications: 'M.S., GI & Hepato-biliary Surgeon',
    timing: 'विशेषज्ञ परामर्श'
  },
  {
    id: 'dr-anu-chaudhary',
    name: 'डॉ. अनु चौधरी',
    role: 'यूरोलॉजिस्ट',
    department: 'सर्जरी एवं यूरोलॉजी',
    category: 'surgery',
    source: 'indore',
    qualifications: 'M.Ch. (Urology)',
    timing: 'निर्धारित विज़िट'
  },

  // 3. Child & Women (8)
  {
    id: 'dr-sudhakar-more',
    name: 'डॉ. सुधाकर मोरे',
    role: 'शिशु रोग विशेषज्ञ',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    image: '/images/hosted/DR.-SUDHAKAR-MORE-1.jpeg',
    qualifications: 'M.D. (Pediatrics)',
    timing: 'शिशु स्वास्थ्य OPD'
  },
  {
    id: 'dr-pradeep-rawat',
    name: 'डॉ. प्रदीप रावत',
    role: 'पीडियाट्रिक',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    qualifications: 'D.C.H., Pediatrics',
    timing: 'नियमित OPD'
  },
  {
    id: 'dr-utkarsh-more',
    name: 'डॉ. उत्कर्ष मोरे',
    role: 'पीडियाट्रिक',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    image: '/images/hosted/Dr.-Utkarsh-Morepediatrician-1-scaled.jpg',
    qualifications: 'M.D. (Pediatrics)',
    timing: 'शिशु एवं बाल रोग परामर्श'
  },
  {
    id: 'dr-uday-kulkarni',
    name: 'डॉ. उदय कुलकर्णी',
    role: 'शिशु रोग विशेषज्ञ',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    image: '/images/hosted/Dr.-Uday-KULKARNI-1.jpeg',
    qualifications: 'M.D. (Pediatrics)',
    timing: 'परामर्श हेतु संपर्क करें'
  },
  {
    id: 'dr-ritesh-patidar',
    name: 'डॉ. रितेश पाटीदार',
    role: 'शिशु रोग विशेषज्ञ',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    qualifications: 'M.D. (Pediatrics)',
    timing: 'शिशु OPD'
  },
  {
    id: 'dr-richa-upadhyay',
    name: 'डॉ. ऋचा उपाध्याय',
    role: 'शिशु रोग विशेषज्ञ',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    qualifications: 'M.D. (Pediatrics)',
    timing: 'नवजात एवं शिशु देखभाल'
  },
  {
    id: 'dr-leena-michael',
    name: 'डॉ. लीना माइकल',
    role: 'स्त्री रोग विशेषज्ञ',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'visiting',
    image: '/images/hosted/Dr.-Leena-MichaelGynecologist-1.jpeg',
    qualifications: 'M.S. (Obstetrics & Gynecology)',
    timing: 'महिला स्वास्थ्य एवं प्रसूति OPD'
  },
  {
    id: 'dr-mayur-maheshwari',
    name: 'डॉ. मयूर महेश्वरी',
    role: 'पीडियाट्रिक सर्जन',
    department: 'शिशु एवं महिला रोग',
    category: 'child-women',
    source: 'indore',
    image: '/images/hosted/Dr.-Mayur-maheshwaripediatric-surgeon-1.jpeg',
    qualifications: 'M.Ch. (Pediatric Surgery)',
    timing: 'बच्चों की सर्जरी विशेषज्ञ'
  },

  // 4. Orthopedics (5)
  {
    id: 'dr-devendra-mandloi',
    name: 'डॉ. देवेन्द्र मण्डलोई',
    role: 'हड्डी रोग विशेषज्ञ',
    department: 'ऑर्थोपेडिक्स',
    category: 'ortho',
    source: 'visiting',
    qualifications: 'M.S. (Orthopedics)',
    timing: 'हड्डी एवं जोड़ OPD'
  },
  {
    id: 'dr-ashutosh-upadhyay',
    name: 'डॉ. आशुतोष उपाध्याय',
    role: 'हड्डी रोग विशेषज्ञ',
    department: 'ऑर्थोपेडिक्स',
    category: 'ortho',
    source: 'visiting',
    image: '/images/hosted/Dr.-Ashutosh-upadhyayOrthopedic-surgeon-1-scaled.jpg',
    qualifications: 'M.S. (Orthopedic Surgery)',
    timing: 'फ्रैक्चर एवं जोड़ प्रत्यारोपण'
  },
  {
    id: 'dr-pradeep-saraf',
    name: 'डॉ. प्रदीप सराफ',
    role: 'हड्डी रोग विशेषज्ञ',
    department: 'ऑर्थोपेडिक्स',
    category: 'ortho',
    source: 'indore',
    qualifications: 'M.S. (Ortho), Joint Specialist',
    timing: 'विज़िटिंग ऑर्थो विशेषज्ञ'
  },
  {
    id: 'dr-pranav-kumar',
    name: 'डॉ. प्रणव कुमार',
    role: 'स्पाइन एंड ऑर्थोपेडिक सर्जन',
    department: 'ऑर्थोपेडिक्स',
    category: 'ortho',
    source: 'indore',
    image: '/images/hosted/Dr.-Pranav-Kumar-Spine-surgeon-1.jpeg',
    qualifications: 'M.S. (Ortho), Spine Fellowship',
    timing: 'रीढ़ की हड्डी एवं जोड़ सर्जरी'
  },
  {
    id: 'dr-sudarshan-joshi',
    name: 'डॉ. सुदर्शन जोशी',
    role: 'फिजियोथेरेपिस्ट',
    department: 'ऑर्थोपेडिक्स',
    category: 'ortho',
    source: 'visiting',
    qualifications: 'B.P.T., M.P.T. (Physiotherapy)',
    timing: 'दैनिक फिजियोथेरेपी एवं रिहैबिलिटेशन'
  },

  // 5. Eye / Ophthalmology (3)
  {
    id: 'dr-rcs-thakur',
    name: 'डॉ. आर. सी. एस. ठाकुर',
    role: 'ओपथलमोलॉजिस्ट (नेत्र रोग विशेषज्ञ)',
    department: 'नेत्र रोग',
    category: 'eye',
    source: 'visiting',
    image: '/images/hosted/Dr.-R.C.S.-ThakurOpthalmologist-1.jpeg',
    qualifications: 'M.S. (Ophthalmology)',
    timing: 'नेत्र जांच एवं मोतियाबिंद'
  },
  {
    id: 'dr-twarit-singh-thakur',
    name: 'डॉ. त्वरित सिंह ठाकुर',
    role: 'ओपथलमोलॉजिस्ट',
    department: 'नेत्र रोग',
    category: 'eye',
    source: 'visiting',
    image: '/images/hosted/Dr.-Twarit-Singh-Thakur-1.jpeg',
    qualifications: 'M.S. (Eye Specialist)',
    timing: 'नेत्र देखभाल परामर्श'
  },
  {
    id: 'dr-jayanti-singh-thakur',
    name: 'डॉ. जयंती सिंह ठाकुर',
    role: 'ओपथलमोलॉजिस्ट',
    department: 'नेत्र रोग',
    category: 'eye',
    source: 'visiting',
    image: '/images/hosted/Dr.-Jayanti-Singh-Thakur-1.jpeg',
    qualifications: 'M.S. (Ophthalmology)',
    timing: 'नेत्र परामर्श'
  },

  // 6. Allied: ENT, Dermatology, Dental (3)
  {
    id: 'dr-nidhish-gupta',
    name: 'डॉ. निधिश गुप्ता',
    role: 'डर्मेटोलॉजिस्ट (त्वचा रोग विशेषज्ञ)',
    department: 'ENT, त्वचा एवं दन्त',
    category: 'allied',
    source: 'visiting',
    image: '/images/hosted/Dr.-Nidhish-GuptaDermetologist-1.jpeg',
    qualifications: 'M.D. (Dermatology, Venereology, Leprosy)',
    timing: 'त्वचा एवं एलर्जी परामर्श'
  },
  {
    id: 'dr-abhik-sikdar',
    name: 'डॉ. अभीक सिकदवार',
    role: 'नाक, कान, गला रोग विशेषज्ञ (ENT)',
    department: 'ENT, त्वचा एवं दन्त',
    category: 'allied',
    source: 'indore',
    image: '/images/hosted/Dr.-Abhik-SikdarENT-1-scaled.jpeg',
    qualifications: 'M.S. (ENT)',
    timing: 'ENT विशेषज्ञ विज़िट'
  },
  {
    id: 'dr-ritesh-vyas',
    name: 'डॉ. रितेश व्यास',
    role: 'दन्त रोग विशेषज्ञ (Dentist)',
    department: 'ENT, त्वचा एवं दन्त',
    category: 'allied',
    source: 'visiting',
    image: '/images/hosted/Dr.-Ritesh-vyas-Dentist-1.jpeg',
    qualifications: 'B.D.S., M.D.S. (Dental Surgeon)',
    timing: 'दंत चिकित्सा एवं परामर्श'
  },

  // 7. Diagnostics: Pathology & Sonology (2)
  {
    id: 'dr-amit-sharma',
    name: 'डॉ. अमित शर्मा',
    role: 'पैथोलॉजिस्ट',
    department: 'डायग्नोस्टिक्स',
    category: 'diagnostics',
    source: 'hospital',
    image: '/images/hosted/Dr.-Amit-Sharma-Pathologist-1.jpeg',
    qualifications: 'M.D. (Pathology)',
    timing: '24×7 लैब एवं जांच रिपोर्टिंग'
  },
  {
    id: 'dr-rk-gupta',
    name: 'डॉ. आर. के. गुप्ता',
    role: 'सोनोलॉजिस्ट (रेडियोलॉजी / अल्ट्रासाउंड)',
    department: 'डायग्नोस्टिक्स',
    category: 'diagnostics',
    source: 'visiting',
    qualifications: 'M.D. (Radiology / Sonologist)',
    timing: 'सोनोग्राफी एवं इमेजिंग जांच'
  },

  // 8. Anesthesia (2)
  {
    id: 'dr-prafull-verma',
    name: 'डॉ. प्रफुल वर्मा',
    role: 'एनेस्थीसिया विशेषज्ञ',
    department: 'एनेस्थीसिया',
    category: 'anesthesia',
    source: 'visiting',
    image: '/images/hosted/Dr.-Prafull-Verma-Anaesthisiologist-1.jpeg',
    qualifications: 'M.D. (Anaesthesiology)',
    timing: 'सर्जिकल एवं क्रिटिकल केयर सपोर्ट'
  },
  {
    id: 'dr-ajesh-michael',
    name: 'डॉ. अजेश माइकल',
    role: 'एनेस्थीसिया विशेषज्ञ',
    department: 'एनेस्थीसिया',
    category: 'anesthesia',
    source: 'visiting',
    image: '/images/hosted/Dr.-Ajesh-michaelAnaesthisiology-1.jpeg',
    qualifications: 'M.D. (Anaesthesiology)',
    timing: 'OT एवं क्रिटिकल सपोर्ट'
  },

  // 9. Super Specialty (2)
  {
    id: 'dr-abhishek-sonagar',
    name: 'डॉ. अभिषेक सोनागर',
    role: 'न्यूरो सर्जन (मस्तिष्क एवं रीढ़ सर्जरी)',
    department: 'सुपर स्पेशलिटी',
    category: 'super',
    source: 'indore',
    qualifications: 'M.Ch. (Neurosurgery)',
    timing: 'विज़िटिंग सुपर स्पेशलिस्ट'
  },
  {
    id: 'dr-mk-dahima',
    name: 'डॉ. एम के दाहिमा',
    role: 'कैंसर रोग विशेषज्ञ (Oncologist)',
    department: 'सुपर स्पेशलिटी',
    category: 'super',
    source: 'indore',
    qualifications: 'M.D., D.M. (Medical Oncology)',
    timing: 'कैंसर जांच एवं उपचार परामर्श'
  }
];

export const DEPARTMENT_CATEGORIES = [
  { id: 'all', name: 'सभी डॉक्टर (All Doctors)', count: 39 },
  { id: 'medicine', name: 'जनरल मेडिसिन', count: 5 },
  { id: 'surgery', name: 'सर्जरी एवं यूरोलॉजी', count: 9 },
  { id: 'child-women', name: 'शिशु एवं महिला रोग', count: 8 },
  { id: 'ortho', name: 'ऑर्थोपेडिक्स एवं स्पाइन', count: 5 },
  { id: 'eye', name: 'नेत्र रोग (Ophthalmology)', count: 3 },
  { id: 'allied', name: 'ENT, त्वचा एवं दन्त', count: 3 },
  { id: 'diagnostics', name: 'डायग्नोस्टिक्स एवं पैथोलॉजी', count: 2 },
  { id: 'anesthesia', name: 'एनेस्थीसिया', count: 2 },
  { id: 'super', name: 'सुपर स्पेशलिटी (न्यूरो / कैंसर)', count: 2 },
];
