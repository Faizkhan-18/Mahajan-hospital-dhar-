export interface Facility {
  id: string;
  number: string;
  titleHindi: string;
  titleEnglish: string;
  descriptionHindi: string;
  features: string[];
  contactNumber?: string;
  contactLabel?: string;
  isEmergency?: boolean;
  image?: string;
}

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'icu-critical-care',
    number: '01',
    titleHindi: 'ICU एवं क्रिटिकल केयर यूनिट',
    titleEnglish: 'Intensive Care Unit (ICU)',
    descriptionHindi: 'गंभीर स्थिति वाले मरीजों की 24×7 निरंतर निगरानी, मल्टी-पैरा मॉनिटर्स, वेंटिलेटर सपोर्ट और प्रशिक्षित मेडिकल स्टाफ।',
    features: [
      'मल्टी-पैरामीटर पेशेंट मॉनिटरिंग सिस्टम',
      'लाइफ-सपोर्ट वेंटिलेटर्स एवं ऑक्सीजन सप्लाई',
      '24×7 ड्यूटी डॉक्टर एवं प्रशिक्षित क्रिटिकल केयर नर्सेज',
      'कार्डियक एवं ट्रॉमा इमरजेंसी रिस्पॉन्स'
    ],
    contactNumber: '+91 94072 99900',
    contactLabel: 'इमरजेंसी कॉल',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.07.13-PM-1024x638.jpeg',
    isEmergency: true
  },
  {
    id: 'nicu-neonatal',
    number: '02',
    titleHindi: 'NICU — नवजात शिशु गहन चिकित्सा',
    titleEnglish: 'Neonatal Intensive Care Unit (NICU)',
    descriptionHindi: 'समय से पहले जन्मे, कम वजन वाले अथवा संकटग्रस्त नवजात शिशुओं के लिए उन्नत वार्मर, फोटोथेरेपी व विशेषज्ञ बाल चिकित्सा।',
    features: [
      'आधुनिक इन्फेंट वार्मर्स व इनक्यूबेटर्स',
      'नवजात पीलिया हेतु एलईडी फोटोथेरेपी यूनिट्स',
      'नवजात श्वसन सहायता एवं निरंतर पल्स ऑक्सीमेट्री',
      'संक्रमण-मुक्त हाइजीनिक वातावरण'
    ],
    contactNumber: '+91 94072 99900',
    contactLabel: 'हेल्पलाइन',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.06.38-PM-1024x682.jpeg'
  },
  {
    id: 'blood-center',
    number: '03',
    titleHindi: 'शासकीय मान्यता प्राप्त ब्लड सेंटर (Blood Bank)',
    titleEnglish: 'Government-Recognized Blood Center',
    descriptionHindi: 'धार जिले में रक्त एवं रक्त घटकों की समय पर उपलब्धता सुनिश्चित करने वाला सुरक्षित एवं सरकारी मानकों से प्रमाणित ब्लड सेंटर।',
    features: [
      'सुरक्षित रक्त संग्रहण एवं ट्रांसफ्यूजन',
      'रक्त समूह एवं क्रॉस-मैचिंग की त्वरित जांच',
      'स्वैच्छिक रक्तदान एवं आपातकालीन उपलब्धता',
      'सरकारी गाइडलाइन्स के अनुसार पूर्ण स्वच्छता व नियम'
    ],
    contactNumber: '+91 94072 99900',
    contactLabel: 'ब्लड सेंटर सहायता',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.05.42-PM-1024x682.jpeg'
  },
  {
    id: 'ct-mri-diagnostics',
    number: '04',
    titleHindi: 'CT Scan एवं MRI इमेजिंग सेंटर',
    titleEnglish: 'Advanced CT Scan & MRI Center',
    descriptionHindi: 'मस्तिष्क, रीढ़, जोड़ों और आंतरिक अंगों के सटीक मूल्यांकन के लिए अत्याधुनिक इमेजिंग मशीनें और विशेषज्ञ रेडियोलॉजिस्ट।',
    features: [
      'हाई-स्पीड मल्टी-स्लाइस CT Scan',
      'हाई-रिज़ॉल्यूशन MRI Spine & Brain Imaging',
      'डिजिटल एक्स-रे एवं कलर डॉपलर सोनोग्राफी',
      'सटीक एवं समयबद्ध डिजिटल रिपोर्टिंग'
    ],
    contactNumber: '07292 - 232900',
    contactLabel: 'जांच बुकिंग',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.05.25-PM-1024x682.jpeg'
  },
  {
    id: 'operation-theatre',
    number: '05',
    titleHindi: 'मॉड्यूलर ऑपरेशन थिएटर (OT)',
    titleEnglish: 'Modular Operation Theatres',
    descriptionHindi: 'लेप्रोस्कोपिक एवं जनरल सर्जरी, यूरोलॉजी और ऑर्थोपेडिक ऑपरेशनों के लिए हेपा-फिल्टर युक्त सुसज्जित ओटी कॉम्प्लेक्स।',
    features: [
      'अत्याधुनिक लेप्रोस्कोपिक एवं एंडोस्कोपी टॉवर',
      'सी-आर्म इमेज इन्टेंसिफायर फॉर ऑर्थो सर्जरी',
      'एनेस्थीसिया वर्कस्टेशन एवं मल्टी-पैरा मॉनिटर',
      'संक्रमण-रोधी जीवाणु-रहित मॉड्यूलर डिजाइन'
    ],
    contactNumber: '+91 94072 99900',
    contactLabel: 'सर्जरी संपर्क',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.09.58-PM-1024x693.jpeg'
  },
  {
    id: 'inpatient-wards',
    number: '06',
    titleHindi: 'डिलक्स, प्राइवेट, सेमी-प्राइवेट व जनरल वार्ड',
    titleEnglish: 'Inpatient Rooms & Wards (100+ Beds)',
    descriptionHindi: 'मरीजों और उनके परिजनों के आराम, स्वच्छता और प्राथमिकताओं के अनुसार सभी श्रेणियों के वातानुकूलित व सामान्य कमरों की व्यवस्था।',
    features: [
      'डिलक्स एवं प्राइवेट एसी रूम्स (अटैच्ड बाथरूम, टीवी, अटेंडेंट बेड)',
      'किफायती सेमी-प्राइवेट शेयरिंग वार्ड्स',
      'स्वच्छ, हवादार एवं 24 घंटे नर्सिंग सहायतित जनरल वार्ड',
      'प्रत्येक बेड पर नर्स कॉल बेल एवं ऑक्सीजन पॉइंट'
    ],
    contactNumber: '07292 - 408330',
    contactLabel: 'वार्ड जानकारी',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.03.53-PM-1024x682.jpeg'
  },
  {
    id: 'ambulance-service',
    number: '07',
    titleHindi: '24×7 आपातकालीन एम्बुलेंस सेवा',
    titleEnglish: '24×7 Dedicated Ambulance Support',
    descriptionHindi: 'मरीजों को धार शहर, ग्रामीण क्षेत्रों एवं हाइवे से अस्पताल तक सुरक्षित व त्वरित लाने हेतु ऑक्सीजन युक्त एम्बुलेंस वाहन।',
    features: [
      'पोर्टेबल ऑक्सीजन एवं प्राथमिक जीवन रक्षक उपकरण',
      'प्रशिक्षित मेडिकल असिस्टेंट एवं चालक',
      'कॉल पर तुरंत रवानगी',
      'हाइवे दुर्घटना एवं इमरजेंसी के लिए तत्पर'
    ],
    contactNumber: '+91 99934 65318',
    contactLabel: 'एम्बुलेंस कॉल',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.02.01-PM-1024x672.jpeg',
    isEmergency: true
  },
  {
    id: 'hospital-canteen',
    number: '08',
    titleHindi: 'अस्पताल कैंटीन एवं डायट सेवा',
    titleEnglish: 'Hospital Canteen & Patient Dietary Service',
    descriptionHindi: 'मरीजों के लिए डॉक्टर की सलाह अनुसार पौष्टिक आहार तथा परिजनों के लिए स्वच्छ एवं ताजा भोजन/चाय-नाश्ता।',
    features: [
      'मरीजों के लिए विशेष पोषक एवं सुपाच्य आहार',
      'परिजनों हेतु ताजा, स्वच्छ एवं सात्विक भोजन',
      'हॉस्पिटल परिसर के अंदर सुलभ स्थान',
      'ऑर्डर एवं पूछताछ हेतु समर्पित नंबर'
    ],
    contactNumber: '+91 97837 93520',
    contactLabel: 'कैंटीन संपर्क',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.02.39-PM-1024x682.jpeg'
  },
  {
    id: 'kids-play-section',
    number: '09',
    titleHindi: 'बच्चों के लिए विशेष प्ले सेक्शन',
    titleEnglish: 'Kids Play Zone & Family Comfort',
    descriptionHindi: 'अस्पताल में आने वाले नन्हे मरीजों और बच्चों के डर को दूर करने व सहज वातावरण देने हेतु विशेष बाल मनोरंजन कक्ष।',
    features: [
      'बच्चों के अनुकूल खिलौने व चित्रकारी',
      'तनाव-मुक्त एवं सकारात्मक वातावरण',
      'सुरक्षित व स्वच्छ फर्श व खेल सामग्री'
    ],
    contactNumber: '07292 - 232900',
    contactLabel: 'अस्पताल हेल्पडेस्क',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.02.07-PM-1024x686.jpeg'
  },
  {
    id: 'pharmacy-tpa',
    number: '10',
    titleHindi: '24×7 फार्मेसी एवं आयुष्मान / TPA हेल्पडेस्क',
    titleEnglish: '24×7 Pharmacy & Ayushman/TPA Desk',
    descriptionHindi: 'सभी आवश्यक दवाइयों की निरंतर उपलब्धता तथा आयुष्मान भारत योजना व सभी प्रमुख बीमा कंपनियों हेतु कैशलेस सुविधा।',
    features: [
      'सभी सर्जिकल व जेन्युइन ब्रांडेड दवाइयों का संग्रह',
      'आयुष्मान भारत कार्ड धारकों हेतु समर्पित काउंटर',
      'प्रमुख बीमा (TPA Mediclaim) कैशलेस सहयोग',
      'दवाइयों की 24 घंटे निर्बाध उपलब्धता'
    ],
    contactNumber: '+91 94072 99900',
    contactLabel: 'आयुष्मान हेल्पडेस्क',
    image: '/images/hosted/WhatsApp-Image-2026-08-02-at-8.04.28-PM-1024x684.jpeg'
  }
];
