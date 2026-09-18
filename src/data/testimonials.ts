export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  department: string;
  rating: number;
  quoteHindi: string;
  treatment: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    patientName: 'Rajesh Patel',
    location: 'धार शहर, मध्य प्रदेश',
    department: 'इमरजेंसी एवं ट्रॉमा केयर',
    rating: 5,
    quoteHindi: 'इमरजेंसी उपचार के दौरान डॉक्टरों और नर्सिंग स्टाफ ने बहुत तत्परता और सहयोग से काम किया। अस्पताल की सुविधाएं आधुनिक, स्वच्छ और मरीजों के लिए अत्यंत सुविधाजनक हैं। समय पर सही इलाज मिलने से मेरे पिताजी स्वस्थ हैं।',
    treatment: 'Emergency Trauma & ICU Care'
  },
  {
    id: '2',
    patientName: 'Sunita Verma',
    location: 'धार के समीप ग्रामीण क्षेत्र',
    department: 'सर्जरी एवं लेप्रोस्कोपी',
    rating: 5,
    quoteHindi: 'डॉ. एम. एम. महाजन सर का अनुभव अद्वितीय है। मेरे पित्ताशय (गॉलब्लेडर) की दूरबीन से सर्जरी बहुत ही कम दर्द और बिना किसी परेशानी के संपन्न हुई। धार में ही इतने बड़े स्तर का अस्पताल होना हमारे लिए वरदान है।',
    treatment: 'Laparoscopic Surgery'
  },
  {
    id: '3',
    patientName: 'Amit Sharma',
    location: 'मगजपुरा, धार',
    department: 'आयुष्मान भारत एवं डायग्नोस्टिक्स',
    rating: 5,
    quoteHindi: 'आयुष्मान भारत हेल्पडेस्क पर स्टाफ ने बहुत सरलता से प्रक्रिया पूरी कराई और CT Scan व भर्ती का पूरा इलाज निशुल्क और बिना किसी झंझट के हुआ। महाजन मल्टीस्पेशलिटी हॉस्पिटल पूरे निमाड़-मालवा क्षेत्र का सबसे भरोसेमंद संस्थान है।',
    treatment: 'Ayushman Bharat & Inpatient Care'
  },
  {
    id: '4',
    patientName: 'Mukesh Mandloi',
    location: 'कुक्षी / धरमपुरी रोड, धार',
    department: 'शिशु रोग एवं NICU',
    rating: 5,
    quoteHindi: 'हमारे नवजात शिशु को सांस लेने में कठिनाई थी, महाजन हॉस्पिटल के NICU में अनुभवी डॉक्टरों ने तुरंत भर्ती कर पूरी देखरेख की। आज हमारा बच्चा पूरी तरह स्वस्थ और मुस्कुरा रहा है।',
    treatment: 'NICU Care'
  }
];
