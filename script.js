// ===== JavaScript for Jammu & Kashmir Legal Services Authority Website =====

// ===== Global Variables =====
let currentTheme = 'light';
let currentLanguage = 'en';
let fontSize = 16;

// ===== Translation Data =====
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.news': 'News & Updates',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'nav.institutions': 'Institutions',
        'nav.resources': 'Resources',
        
        // Services Dropdown
        'nav.services_legal': 'Legal Services',
        'nav.free_legal_aid': 'Free Legal Aid',
        'nav.court_representation': 'Court Representation',
        'nav.legal_consultation': 'Legal Consultation',
        'nav.document_preparation': 'Document Preparation',
        'nav.services_specialized': 'Specialized Services',
        'nav.family_law': 'Family Law',
        'nav.criminal_defense': 'Criminal Defense',
        'nav.property_disputes': 'Property Disputes',
        'nav.labor_rights': 'Labor Rights',
        'nav.services_community': 'Community Services',
        'nav.legal_awareness': 'Legal Awareness',
        'nav.mobile_court': 'Mobile Court',
        'nav.mediation': 'Mediation',
        'nav.women_rights': 'Women\'s Rights',
        
        // Institutions Dropdown
        'nav.high_court': 'High Court & Subordinate Courts',
        'nav.advocate_general': 'Advocate General\'s Office',
        'nav.legal_aid_committees': 'Legal Aid Committees',
        'nav.tribunals': 'Tribunals',
        'nav.directorates': 'Directorates',
        
        // Resources Dropdown
        'nav.acts_rules': 'Acts & Rules',
        'nav.forms': 'Forms & Applications',
        'nav.guidelines': 'Guidelines',
        'nav.case_law': 'Case Law',
        'nav.legal_dictionary': 'Legal Dictionary',
        'hero.title1': 'Justice for Every Citizen',
        'hero.subtitle1': 'Providing free legal aid and services to ensure access to justice for all residents of Jammu & Kashmir',
        'hero.title2': 'Free Legal Aid',
        'hero.subtitle2': 'Qualified lawyers providing pro bono services to those who cannot afford legal representation',
        'hero.title3': 'Community Outreach',
        'hero.subtitle3': 'Legal awareness programs and community services across Jammu & Kashmir',
        'hero.learn_more': 'Learn More',
        'hero.get_help': 'Get Legal Help',
        'hero.badge1': 'Free Legal Aid',
        'hero.badge2': 'Legal Services',
        'hero.badge3': 'Community Outreach',
        'stats.cases_resolved': 'Cases Resolved',
        'stats.lawyers': 'Qualified Lawyers',
        'stats.districts': 'Districts Covered',
        'stats.satisfaction': '% Satisfaction Rate',
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive legal services for all citizens',
        'services.free_legal_aid': 'Free Legal Aid',
        'services.free_legal_aid_desc': 'Professional legal representation for those who cannot afford it',
        'services.legal_awareness': 'Legal Awareness',
        'services.legal_awareness_desc': 'Educational programs to help citizens understand their rights',
        'services.mediation': 'Mediation Services',
        'services.mediation_desc': 'Alternative dispute resolution for faster and cost-effective solutions',
        'services.documentation': 'Documentation Help',
        'services.documentation_desc': 'Assistance with legal documents and paperwork',
        'services.mobile_court': 'Mobile Court',
        'services.mobile_court_desc': 'Court services brought to remote areas',
        'services.women_rights': 'Women\'s Rights',
        'services.women_rights_desc': 'Specialized legal support for women\'s issues',
        'services.learn_more': 'Learn More',
        'news.title': 'Latest News & Updates',
        'news.subtitle': 'Stay informed about legal developments',
        'news.featured_title': 'New Legal Aid Guidelines Released',
        'news.featured_desc': 'The Jammu & Kashmir Legal Services Authority has released updated guidelines for legal aid services...',
        'news.read_more': 'Read More',
        'news.recent_news': 'Recent News',
        'news.item1_title': 'Mobile Court Services Expanded',
        'news.item2_title': 'Legal Awareness Camp in Srinagar',
        'news.item3_title': 'New Legal Aid Centers Opened',
        'news.item4_title': 'Women\'s Rights Workshop',
        'news.digital_court_title': 'Digital Court Proceedings Launched',
        'news.digital_court_desc': 'Virtual court hearings now available for better accessibility and convenience',
        'news.community_title': 'Rural Legal Awareness Drive',
        'news.community_desc': 'Comprehensive legal education program launched in remote villages',
        'news.view_all': 'View All News',
        'about.title': 'About Jammu & Kashmir Legal Services Authority',
        'about.desc1': 'The Jammu & Kashmir Legal Services Authority is committed to providing free legal aid and services to ensure access to justice for all citizens, particularly the marginalized and underprivileged sections of society.',
        'about.desc2': 'We operate through a network of legal aid clinics, mobile courts, and community outreach programs across all districts of Jammu & Kashmir.',
        'about.feature1': 'Free Legal Representation',
        'about.feature2': 'Qualified Legal Professionals',
        'about.feature3': 'Community Outreach Programs',
        'about.feature4': 'Mobile Court Services',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch for legal assistance',
        'contact.first_name': 'First Name',
        'contact.last_name': 'Last Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.subject': 'Subject',
        'contact.select_subject': 'Select Subject',
        'contact.legal_aid': 'Legal Aid Request',
        'contact.complaint': 'Complaint',
        'contact.inquiry': 'General Inquiry',
        'contact.feedback': 'Feedback',
        'contact.message': 'Message',
        'contact.submit': 'Submit',
        'contact.address_title': 'Address',
        'contact.address': 'Jammu & Kashmir Legal Services Authority<br>Secretariat Complex, Jammu<br>Jammu & Kashmir, India',
        'contact.phone_title': 'Phone',
        'contact.email_title': 'Email',
        'contact.hours_title': 'Working Hours',
        'contact.hours': 'Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 9:00 AM - 1:00 PM',
        'footer.brand_title': 'J&K Legal Services Authority',
        'footer.brand_desc': 'Committed to providing justice for all citizens through free legal aid and services.',
        'footer.quick_links': 'Quick Links',
        'footer.services': 'Services',
        'footer.follow_us': 'Follow Us',
        'footer.newsletter': 'Newsletter',
        'footer.email_placeholder': 'Enter your email',
        'footer.subscribe': 'Subscribe',
        'footer.copyright': '© 2023 Jammu & Kashmir Legal Services Authority. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.accessibility': 'Accessibility',
        'court_orders.title': 'Latest Court Orders',
        'court_orders.subtitle': 'Stay updated with recent legal developments',
        
        // Gallery Section
        'gallery.title': 'Our Work in Action',
        'gallery.subtitle': 'See our legal services making a difference',
        'gallery.item1_title': 'Legal Aid Clinic',
        'gallery.item1_desc': 'Providing free legal consultation',
        'gallery.item2_title': 'Mobile Court Session',
        'gallery.item2_desc': 'Bringing justice to remote areas',
        'gallery.item3_title': 'Legal Awareness Workshop',
        'gallery.item3_desc': 'Educating communities about their rights',
        'gallery.item4_title': 'Court Proceedings',
        'gallery.item4_desc': 'Professional legal representation',
        'gallery.item5_title': 'Women\'s Rights Program',
        'gallery.item5_desc': 'Empowering women through legal aid',
        'gallery.item6_title': 'Mediation Services',
        'gallery.item6_desc': 'Alternative dispute resolution',
        
        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Get answers to common legal questions',
        'faq.q1': 'Who is eligible for free legal aid?',
        'faq.a1': 'Free legal aid is available to women, children, scheduled castes, scheduled tribes, victims of human trafficking, disabled persons, and those with an annual income below Rs. 3 lakhs.',
        'faq.q2': 'How can I apply for legal aid?',
        'faq.a2': 'You can apply online through our website, visit any legal aid clinic, or call our helpline. Our staff will guide you through the application process and required documentation.',
        'faq.q3': 'What types of cases do you handle?',
        'faq.a3': 'We handle civil, criminal, family, property, labor, and constitutional matters. We also provide legal awareness programs and mediation services for dispute resolution.',
        'faq.q4': 'Is the legal aid service really free?',
        'faq.a4': 'Yes, all our legal aid services are completely free for eligible individuals. This includes consultation, document preparation, court representation, and follow-up support.',
        'faq.q5': 'How long does the legal process take?',
        'faq.a5': 'The duration varies depending on the case complexity. Simple matters may be resolved in weeks, while complex cases might take months. We provide regular updates throughout the process.',
        
        // Floating Elements Section
        'floating.title': 'Justice for All',
        'floating.subtitle': 'Making legal services accessible to every citizen',
        'floating.card1_title': 'Fair Justice',
        'floating.card1_desc': 'Equal access to legal representation',
        'floating.card2_title': 'Compassionate Service',
        'floating.card2_desc': 'Understanding and supportive approach',
        'floating.card3_title': 'Protection',
        'floating.card3_desc': 'Safeguarding your legal rights',
        'floating.card4_title': 'Trust',
        'floating.card4_desc': 'Reliable and professional service',
        
        // Skills Section
        'skills.title': 'Our Legal Expertise',
        'skills.subtitle': 'Professional skills and experience in various legal domains',
        'skills.content_title': 'Why Choose Our Legal Services?',
        'skills.content_desc': 'Our team of experienced lawyers brings decades of combined experience in various legal fields, ensuring the best possible representation for our clients.',
        'skills.skill1_name': 'Civil Law',
        'skills.skill2_name': 'Criminal Defense',
        'skills.skill3_name': 'Family Law',
        'skills.skill4_name': 'Property Disputes',
        'skills.achievement1_title': 'Award Winning',
        'skills.achievement1_desc': 'Recognized for excellence in legal services',
        'skills.achievement2_title': 'Expert Team',
        'skills.achievement2_desc': 'Qualified and experienced professionals',
        'skills.achievement3_title': '24/7 Support',
        'skills.achievement3_desc': 'Round-the-clock legal assistance',
        'skills.achievement4_title': 'Confidential',
        'skills.achievement4_desc': 'Complete privacy and confidentiality'
    },
    hi: {
        'nav.home': 'होम',
        'nav.services': 'सेवाएं',
        'nav.news': 'समाचार और अपडेट',
        'nav.about': 'हमारे बारे में',
        'nav.contact': 'संपर्क',
        'nav.institutions': 'संस्थान',
        'nav.resources': 'संसाधन',
        
        // Services Dropdown
        'nav.services_legal': 'कानूनी सेवाएं',
        'nav.free_legal_aid': 'मुफ्त कानूनी सहायता',
        'nav.court_representation': 'अदालती प्रतिनिधित्व',
        'nav.legal_consultation': 'कानूनी परामर्श',
        'nav.document_preparation': 'दस्तावेज तैयारी',
        'nav.services_specialized': 'विशेषीकृत सेवाएं',
        'nav.family_law': 'पारिवारिक कानून',
        'nav.criminal_defense': 'आपराधिक बचाव',
        'nav.property_disputes': 'संपत्ति विवाद',
        'nav.labor_rights': 'श्रम अधिकार',
        'nav.services_community': 'सामुदायिक सेवाएं',
        'nav.legal_awareness': 'कानूनी जागरूकता',
        'nav.mobile_court': 'मोबाइल कोर्ट',
        'nav.mediation': 'मध्यस्थता',
        'nav.women_rights': 'महिला अधिकार',
        
        // Institutions Dropdown
        'nav.high_court': 'उच्च न्यायालय और अधीनस्थ न्यायालय',
        'nav.advocate_general': 'एडवोकेट जनरल कार्यालय',
        'nav.legal_aid_committees': 'कानूनी सहायता समितियां',
        'nav.tribunals': 'न्यायाधिकरण',
        'nav.directorates': 'निदेशालय',
        
        // Resources Dropdown
        'nav.acts_rules': 'अधिनियम और नियम',
        'nav.forms': 'फॉर्म और आवेदन',
        'nav.guidelines': 'दिशानिर्देश',
        'nav.case_law': 'न्यायिक निर्णय',
        'nav.legal_dictionary': 'कानूनी शब्दकोश',
        'hero.title1': 'हर नागरिक के लिए न्याय',
        'hero.subtitle1': 'जम्मू और कश्मीर के सभी निवासियों के लिए न्याय तक पहुंच सुनिश्चित करने के लिए मुफ्त कानूनी सहायता और सेवाएं प्रदान करना',
        'hero.title2': 'मुफ्त कानूनी सहायता',
        'hero.subtitle2': 'योग्य वकील उन लोगों के लिए मुफ्त सेवाएं प्रदान करते हैं जो कानूनी प्रतिनिधित्व का खर्च नहीं उठा सकते',
        'hero.title3': 'सामुदायिक आउटरीच',
        'hero.subtitle3': 'जम्मू और कश्मीर में कानूनी जागरूकता कार्यक्रम और सामुदायिक सेवाएं',
        'hero.learn_more': 'और जानें',
        'hero.get_help': 'कानूनी सहायता प्राप्त करें',
        'hero.badge1': 'मुफ्त कानूनी सहायता',
        'hero.badge2': 'कानूनी सेवाएं',
        'hero.badge3': 'सामुदायिक आउटरीच',
        'stats.cases_resolved': 'मामले हल',
        'stats.lawyers': 'योग्य वकील',
        'stats.districts': 'जिले कवर',
        'stats.satisfaction': '% संतुष्टि दर',
        'services.title': 'हमारी सेवाएं',
        'services.subtitle': 'सभी नागरिकों के लिए व्यापक कानूनी सेवाएं',
        'services.free_legal_aid': 'मुफ्त कानूनी सहायता',
        'services.free_legal_aid_desc': 'उन लोगों के लिए पेशेवर कानूनी प्रतिनिधित्व जो इसे वहन नहीं कर सकते',
        'services.legal_awareness': 'कानूनी जागरूकता',
        'services.legal_awareness_desc': 'नागरिकों को उनके अधिकारों को समझने में मदद करने के लिए शैक्षिक कार्यक्रम',
        'services.mediation': 'मध्यस्थता सेवाएं',
        'services.mediation_desc': 'तेज और लागत प्रभावी समाधान के लिए वैकल्पिक विवाद समाधान',
        'services.documentation': 'दस्तावेजीकरण सहायता',
        'services.documentation_desc': 'कानूनी दस्तावेजों और कागजी कार्रवाई में सहायता',
        'services.mobile_court': 'मोबाइल कोर्ट',
        'services.mobile_court_desc': 'दूरस्थ क्षेत्रों में लाई गई अदालती सेवाएं',
        'services.women_rights': 'महिला अधिकार',
        'services.women_rights_desc': 'महिलाओं के मुद्दों के लिए विशेष कानूनी सहायता',
        'services.learn_more': 'और जानें',
        'news.title': 'नवीनतम समाचार और अपडेट',
        'news.subtitle': 'कानूनी विकास के बारे में सूचित रहें',
        'news.featured_title': 'नई कानूनी सहायता दिशानिर्देश जारी',
        'news.featured_desc': 'जम्मू और कश्मीर कानूनी सेवा प्राधिकरण ने कानूनी सहायता सेवाओं के लिए अद्यतन दिशानिर्देश जारी किए हैं...',
        'news.read_more': 'और पढ़ें',
        'news.recent_news': 'हाल के समाचार',
        'news.item1_title': 'मोबाइल कोर्ट सेवाएं विस्तारित',
        'news.item2_title': 'श्रीनगर में कानूनी जागरूकता शिविर',
        'news.item3_title': 'नए कानूनी सहायता केंद्र खुले',
        'news.item4_title': 'महिला अधिकार कार्यशाला',
        'news.digital_court_title': 'डिजिटल कोर्ट कार्यवाही शुरू',
        'news.digital_court_desc': 'बेहतर पहुंच और सुविधा के लिए वर्चुअल कोर्ट सुनवाई अब उपलब्ध',
        'news.community_title': 'ग्रामीण कानूनी जागरूकता अभियान',
        'news.community_desc': 'दूरस्थ गांवों में व्यापक कानूनी शिक्षा कार्यक्रम शुरू',
        'news.view_all': 'सभी समाचार देखें',
        'about.title': 'जम्मू और कश्मीर कानूनी सेवा प्राधिकरण के बारे में',
        'about.desc1': 'जम्मू और कश्मीर कानूनी सेवा प्राधिकरण सभी नागरिकों, विशेष रूप से समाज के हाशिए पर और वंचित वर्गों के लिए न्याय तक पहुंच सुनिश्चित करने के लिए मुफ्त कानूनी सहायता और सेवाएं प्रदान करने के लिए प्रतिबद्ध है।',
        'about.desc2': 'हम जम्मू और कश्मीर के सभी जिलों में कानूनी सहायता क्लीनिक, मोबाइल अदालतों और सामुदायिक आउटरीच कार्यक्रमों के नेटवर्क के माध्यम से काम करते हैं।',
        'about.feature1': 'मुफ्त कानूनी प्रतिनिधित्व',
        'about.feature2': 'योग्य कानूनी पेशेवर',
        'about.feature3': 'सामुदायिक आउटरीच कार्यक्रम',
        'about.feature4': 'मोबाइल कोर्ट सेवाएं',
        'contact.title': 'हमसे संपर्क करें',
        'contact.subtitle': 'कानूनी सहायता के लिए संपर्क करें',
        'contact.first_name': 'पहला नाम',
        'contact.last_name': 'अंतिम नाम',
        'contact.email': 'ईमेल',
        'contact.phone': 'फोन',
        'contact.subject': 'विषय',
        'contact.select_subject': 'विषय चुनें',
        'contact.legal_aid': 'कानूनी सहायता अनुरोध',
        'contact.complaint': 'शिकायत',
        'contact.inquiry': 'सामान्य पूछताछ',
        'contact.feedback': 'फीडबैक',
        'contact.message': 'संदेश',
        'contact.submit': 'जमा करें',
        'contact.address_title': 'पता',
        'contact.address': 'जम्मू और कश्मीर कानूनी सेवा प्राधिकरण<br>सचिवालय परिसर, जम्मू<br>जम्मू और कश्मीर, भारत',
        'contact.phone_title': 'फोन',
        'contact.email_title': 'ईमेल',
        'contact.hours_title': 'कार्य समय',
        'contact.hours': 'सोमवार - शुक्रवार: सुबह 9:00 - शाम 5:00<br>शनिवार: सुबह 9:00 - दोपहर 1:00',
        'footer.brand_title': 'जे एंड के कानूनी सेवा प्राधिकरण',
        'footer.brand_desc': 'मुफ्त कानूनी सहायता और सेवाओं के माध्यम से सभी नागरिकों के लिए न्याय प्रदान करने के लिए प्रतिबद्ध।',
        'footer.quick_links': 'त्वरित लिंक',
        'footer.services': 'सेवाएं',
        'footer.follow_us': 'हमें फॉलो करें',
        'footer.newsletter': 'न्यूज़लेटर',
        'footer.email_placeholder': 'अपना ईमेल दर्ज करें',
        'footer.subscribe': 'सब्सक्राइब करें',
        'footer.copyright': '© 2023 जम्मू और कश्मीर कानूनी सेवा प्राधिकरण। सभी अधिकार सुरक्षित।',
        'footer.privacy': 'गोपनीयता नीति',
        'footer.terms': 'सेवा की शर्तें',
        'footer.accessibility': 'पहुंच योग्यता',
        'court_orders.title': 'नवीनतम अदालती आदेश',
        'court_orders.subtitle': 'हाल के कानूनी विकास के साथ अपडेट रहें',
        
        // Gallery Section
        'gallery.title': 'हमारा काम कार्रवाई में',
        'gallery.subtitle': 'हमारी कानूनी सेवाओं को अंतर लाते हुए देखें',
        'gallery.item1_title': 'कानूनी सहायता क्लिनिक',
        'gallery.item1_desc': 'मुफ्त कानूनी परामर्श प्रदान करना',
        'gallery.item2_title': 'मोबाइल कोर्ट सत्र',
        'gallery.item2_desc': 'दूरस्थ क्षेत्रों में न्याय लाना',
        'gallery.item3_title': 'कानूनी जागरूकता कार्यशाला',
        'gallery.item3_desc': 'समुदायों को उनके अधिकारों के बारे में शिक्षित करना',
        'gallery.item4_title': 'अदालती कार्यवाही',
        'gallery.item4_desc': 'पेशेवर कानूनी प्रतिनिधित्व',
        'gallery.item5_title': 'महिला अधिकार कार्यक्रम',
        'gallery.item5_desc': 'कानूनी सहायता के माध्यम से महिलाओं को सशक्त बनाना',
        'gallery.item6_title': 'मध्यस्थता सेवाएं',
        'gallery.item6_desc': 'वैकल्पिक विवाद समाधान',
        
        // FAQ Section
        'faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
        'faq.subtitle': 'सामान्य कानूनी प्रश्नों के उत्तर प्राप्त करें',
        'faq.q1': 'मुफ्त कानूनी सहायता के लिए कौन पात्र है?',
        'faq.a1': 'मुफ्त कानूनी सहायता महिलाओं, बच्चों, अनुसूचित जातियों, अनुसूचित जनजातियों, मानव तस्करी के पीड़ितों, विकलांग व्यक्तियों और 3 लाख रुपये से कम वार्षिक आय वालों के लिए उपलब्ध है।',
        'faq.q2': 'मैं कानूनी सहायता के लिए कैसे आवेदन कर सकता हूं?',
        'faq.a2': 'आप हमारी वेबसाइट के माध्यम से ऑनलाइन आवेदन कर सकते हैं, किसी भी कानूनी सहायता क्लिनिक में जा सकते हैं, या हमारी हेल्पलाइन पर कॉल कर सकते हैं। हमारा स्टाफ आपको आवेदन प्रक्रिया और आवश्यक दस्तावेजीकरण के माध्यम से मार्गदर्शन करेगा।',
        'faq.q3': 'आप किस प्रकार के मामलों को संभालते हैं?',
        'faq.a3': 'हम दीवानी, आपराधिक, पारिवारिक, संपत्ति, श्रम और संवैधानिक मामलों को संभालते हैं। हम विवाद समाधान के लिए कानूनी जागरूकता कार्यक्रम और मध्यस्थता सेवाएं भी प्रदान करते हैं।',
        'faq.q4': 'क्या कानूनी सहायता सेवा वास्तव में मुफ्त है?',
        'faq.a4': 'हां, हमारी सभी कानूनी सहायता सेवाएं पात्र व्यक्तियों के लिए पूरी तरह मुफ्त हैं। इसमें परामर्श, दस्तावेज तैयारी, अदालती प्रतिनिधित्व और अनुवर्ती सहायता शामिल है।',
        'faq.q5': 'कानूनी प्रक्रिया में कितना समय लगता है?',
        'faq.a5': 'अवधि मामले की जटिलता के आधार पर भिन्न होती है। सरल मामले हफ्तों में हल हो सकते हैं, जबकि जटिल मामलों में महीनों लग सकते हैं। हम पूरी प्रक्रिया के दौरान नियमित अपडेट प्रदान करते हैं।',
        
        // Floating Elements Section
        'floating.title': 'सभी के लिए न्याय',
        'floating.subtitle': 'हर नागरिक के लिए कानूनी सेवाओं को सुलभ बनाना',
        'floating.card1_title': 'निष्पक्ष न्याय',
        'floating.card1_desc': 'कानूनी प्रतिनिधित्व तक समान पहुंच',
        'floating.card2_title': 'दयालु सेवा',
        'floating.card2_desc': 'समझदार और सहायक दृष्टिकोण',
        'floating.card3_title': 'सुरक्षा',
        'floating.card3_desc': 'आपके कानूनी अधिकारों की रक्षा',
        'floating.card4_title': 'विश्वास',
        'floating.card4_desc': 'विश्वसनीय और पेशेवर सेवा',
        
        // Skills Section
        'skills.title': 'हमारी कानूनी विशेषज्ञता',
        'skills.subtitle': 'विभिन्न कानूनी क्षेत्रों में पेशेवर कौशल और अनुभव',
        'skills.content_title': 'हमारी कानूनी सेवाओं को क्यों चुनें?',
        'skills.content_desc': 'हमारी अनुभवी वकीलों की टीम विभिन्न कानूनी क्षेत्रों में दशकों का संयुक्त अनुभव लाती है, जो हमारे ग्राहकों के लिए सर्वोत्तम संभव प्रतिनिधित्व सुनिश्चित करती है।',
        'skills.skill1_name': 'दीवानी कानून',
        'skills.skill2_name': 'आपराधिक बचाव',
        'skills.skill3_name': 'पारिवारिक कानून',
        'skills.skill4_name': 'संपत्ति विवाद',
        'skills.achievement1_title': 'पुरस्कार विजेता',
        'skills.achievement1_desc': 'कानूनी सेवाओं में उत्कृष्टता के लिए मान्यता',
        'skills.achievement2_title': 'विशेषज्ञ टीम',
        'skills.achievement2_desc': 'योग्य और अनुभवी पेशेवर',
        'skills.achievement3_title': '24/7 सहायता',
        'skills.achievement3_desc': 'चौबीसों घंटे कानूनी सहायता',
        'skills.achievement4_title': 'गोपनीय',
        'skills.achievement4_desc': 'पूर्ण गोपनीयता और गोपनीयता'
    }
};

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    initializeAnimations();
    loadUserPreferences();
});

// ===== Initialize Website =====
function initializeWebsite() {
    // Set initial theme
    applyTheme(currentTheme);
    
    // Set initial language
    applyLanguage(currentLanguage);
    
    // Initialize counter animations
    initializeCounters();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize mobile search
    initializeMobileSearch();
    
    // Initialize mobile navigation
    initializeMobileNavigation();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize newsletter subscription
    initializeNewsletter();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    // Initialize court orders rolling animation
    initializeCourtOrdersAnimation();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    console.log('J&K Legal Services Authority website initialized successfully');
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Theme toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // High contrast toggle
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    if (highContrastToggle) {
        highContrastToggle.addEventListener('click', toggleHighContrast);
    }
    
    // Font size controls
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    
    if (fontIncrease) {
        fontIncrease.addEventListener('click', increaseFontSize);
    }
    
    if (fontDecrease) {
        fontDecrease.addEventListener('click', decreaseFontSize);
    }
    
    // Language selector (top only)
    const languageSelectTop = document.getElementById('language-select-top');
    
    if (languageSelectTop) {
        languageSelectTop.addEventListener('change', changeLanguage);
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    // Window scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Window resize events
    window.addEventListener('resize', handleResize);
}

// ===== Theme Management =====
function toggleDarkMode() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    saveUserPreferences();
    
    // Update button icon
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
            darkModeToggle.title = 'Switch to Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            darkModeToggle.title = 'Switch to Dark Mode';
        }
    }
}

function toggleHighContrast() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'high-contrast') {
        body.removeAttribute('data-theme');
        applyTheme('light');
    } else {
        body.setAttribute('data-theme', 'high-contrast');
    }
    
    saveUserPreferences();
}

function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else if (theme === 'high-contrast') {
        body.setAttribute('data-theme', 'high-contrast');
    } else {
        body.removeAttribute('data-theme');
    }
    
    currentTheme = theme;
}

// ===== Font Size Management =====
function increaseFontSize() {
    fontSize = Math.min(fontSize + 2, 24);
    applyFontSize();
    saveUserPreferences();
}

function decreaseFontSize() {
    fontSize = Math.max(fontSize - 2, 12);
    applyFontSize();
    saveUserPreferences();
}

function applyFontSize() {
    document.documentElement.style.fontSize = fontSize + 'px';
}

// ===== Language Management =====
function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    currentLanguage = selectedLanguage;
    applyLanguage(selectedLanguage);
    saveUserPreferences();
    
    // Language selector is already updated by the event
}

function applyLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[language] && translations[language][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
}

// ===== Counter Animation =====
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ===== Mobile Search Functionality =====
function initializeMobileSearch() {
    const mobileSearchBtn = document.getElementById('search-btn-mobile');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', showMobileSearchModal);
    }
}

function showMobileSearchModal() {
    // Create mobile search modal
    const modal = document.createElement('div');
    modal.className = 'mobile-search-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 20vh;
    `;
    
    modal.innerHTML = `
        <div class="mobile-search-content" style="
            background: white;
            border-radius: 12px;
            padding: 2rem;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        ">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="mb-0">Search</h5>
                <button type="button" class="btn-close" id="close-mobile-search"></button>
            </div>
            <div class="input-group">
                <input type="text" class="form-control form-control-lg" placeholder="Search..." id="mobile-search-input">
                <button class="btn btn-primary btn-lg" type="button" id="mobile-search-btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="mt-3">
                <small class="text-muted">Search for services, news, or information</small>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Focus on input
    const searchInput = modal.querySelector('#mobile-search-input');
    searchInput.focus();
    
    // Close modal handlers
    const closeBtn = modal.querySelector('#close-mobile-search');
    const searchBtn = modal.querySelector('#mobile-search-btn');
    
    closeBtn.addEventListener('click', () => modal.remove());
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
            modal.remove();
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
                modal.remove();
            }
        }
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ===== Mobile Navigation Functionality =====
function initializeMobileNavigation() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the collapse
            navbarCollapse.classList.toggle('show');
            
            // Update hamburger icon
            const icon = navbarToggler.querySelector('.navbar-toggler-icon');
            if (navbarCollapse.classList.contains('show')) {
                icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M6 18L18 6M6 6l12 12'/%3e%3c/svg%3e")`;
                navbarToggler.setAttribute('aria-expanded', 'true');
            } else {
                icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when clicking on nav links
        if (navbarNav) {
            const navLinks = navbarNav.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navbarCollapse.classList.remove('show');
                    const icon = navbarToggler.querySelector('.navbar-toggler-icon');
                    icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                    navbarToggler.setAttribute('aria-expanded', 'false');
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
                const icon = navbarToggler.querySelector('.navbar-toggler-icon');
                icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                const icon = navbarToggler.querySelector('.navbar-toggler-icon');
                icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// ===== Search Functionality =====
function initializeSearch() {
    // Add search suggestions
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', showSearchSuggestions);
    }
}

function showSearchSuggestions(event) {
    const query = event.target.value.toLowerCase();
    const suggestions = [
        'legal aid', 'free lawyer', 'court services', 'legal awareness',
        'mediation', 'documentation help', 'women rights', 'mobile court',
        'legal clinic', 'pro bono', 'justice', 'legal representation'
    ];
    
    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query)
    );
    
    // Remove existing suggestions
    const existingSuggestions = document.querySelector('.search-suggestions');
    if (existingSuggestions) {
        existingSuggestions.remove();
    }
    
    if (query.length > 1 && filteredSuggestions.length > 0) {
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1000;
            max-height: 200px;
            overflow-y: auto;
        `;
        
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.style.cssText = `
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 1px solid #eee;
            `;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsContainer.remove();
                performSearch();
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
        
        const searchContainer = searchInput.closest('.search-container');
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(suggestionsContainer);
    }
}

function performSearch(query = null) {
    const searchInput = document.getElementById('search-input');
    const searchQuery = query || searchInput.value.trim();
    
    if (searchQuery.length < 2) {
        showNotification('Please enter at least 2 characters to search', 'warning');
        return;
    }
    
    // Simulate search results
    const searchResults = [
        { title: 'Free Legal Aid Services', section: 'services', description: 'Professional legal representation for those who cannot afford it' },
        { title: 'Legal Awareness Programs', section: 'services', description: 'Educational programs to help citizens understand their rights' },
        { title: 'Mobile Court Services', section: 'services', description: 'Court services brought to remote areas' },
        { title: 'Latest Legal Updates', section: 'news', description: 'Stay informed about legal developments' }
    ];
    
    const filteredResults = searchResults.filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filteredResults.length > 0) {
        showSearchResults(filteredResults);
    } else {
        showNotification('No results found for your search query', 'info');
    }
}

function showSearchResults(results) {
    // Create modal for search results
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Search Results</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${results.map(result => `
                        <div class="search-result-item mb-3 p-3 border rounded">
                            <h6 class="text-primary">${result.title}</h6>
                            <p class="text-muted mb-2">${result.description}</p>
                            <small class="text-info">Section: ${result.section}</small>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Remove modal after it's hidden
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// ===== Contact Form =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.firstName || data.firstName.trim().length < 2) {
        errors.push('First name must be at least 2 characters long');
    }
    
    if (!data.lastName || data.lastName.trim().length < 2) {
        errors.push('Last name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.phone || data.phone.trim().length < 10) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!data.subject) {
        errors.push('Please select a subject');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Newsletter Subscription =====
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (subscribeBtn && emailInput) {
            subscribeBtn.addEventListener('click', () => {
                const email = emailInput.value.trim();
                
                if (!email || !isValidEmail(email)) {
                    showNotification('Please enter a valid email address', 'warning');
                    return;
                }
                
                // Show loading state
                const originalText = subscribeBtn.textContent;
                subscribeBtn.innerHTML = '<span class="loading"></span>';
                subscribeBtn.disabled = true;
                
                // Simulate subscription
                setTimeout(() => {
                    showNotification('Thank you for subscribing to our newsletter!', 'success');
                    emailInput.value = '';
                    subscribeBtn.textContent = originalText;
                    subscribeBtn.disabled = false;
                }, 1500);
            });
        }
    }
}

// ===== Smooth Scrolling =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    console.log('Initializing smooth scrolling for', links.length, 'links');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            console.log('Navigation clicked:', targetId, 'Element found:', !!targetElement);
            
            if (targetElement) {
                // Get header height (navbar height)
                const header = document.querySelector('.navbar');
                const headerHeight = header ? header.offsetHeight : 80;
                
                // Calculate target position
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                console.log('Scrolling to position:', targetPosition);
                
                // Smooth scroll to target
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback for browsers that don't support smooth scrolling
                    const startPosition = window.pageYOffset;
                    const distance = Math.max(0, targetPosition) - startPosition;
                    const duration = 800;
                    let start = null;
                    
                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
                    
                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }
                    
                    requestAnimationFrame(animation);
                }
                
                // Update active nav link
                updateActiveNavLink(targetId);
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        const icon = navbarToggler.querySelector('.navbar-toggler-icon');
                        icon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
                        navbarToggler.setAttribute('aria-expanded', 'false');
                    }
                }
            } else {
                console.error('Target element not found for ID:', targetId);
            }
        });
    });
}

function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// ===== Back to Top Button =====
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== Scroll Handling =====
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTop');
    const header = document.querySelector('.header');
    
    // Show/hide back to top button
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    // Add shadow to header on scroll
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Update active navigation based on scroll position
    updateActiveNavOnScroll();
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    const header = document.querySelector('.navbar');
    const headerHeight = header ? header.offsetHeight : 80;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== Resize Handling =====
function handleResize() {
    // Close mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.click();
        }
    }
    
    // Remove search suggestions on mobile
    if (window.innerWidth < 768) {
        const suggestions = document.querySelector('.search-suggestions');
        if (suggestions) {
            suggestions.remove();
        }
    }
}

// ===== Animation System =====
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .news-card, .contact-item, .stat-item, .fade-in-up, .slide-in-left, .slide-in-right, .bounce-in, .zoom-in, .rotate-in, .flip-in, .testimonial-card, .stat-card, .timeline-item, .gallery-item, .accordion-item, .floating-card, .skill-item, .achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add appropriate animation class based on element type
                if (entry.target.classList.contains('fade-in-up') || 
                    entry.target.classList.contains('slide-in-left') || 
                    entry.target.classList.contains('slide-in-right') || 
                    entry.target.classList.contains('bounce-in') || 
                    entry.target.classList.contains('zoom-in') || 
                    entry.target.classList.contains('rotate-in') || 
                    entry.target.classList.contains('flip-in')) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.add('fade-in', 'visible');
                }
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        // Add appropriate base class
        if (element.classList.contains('fade-in-up') || 
            element.classList.contains('slide-in-left') || 
            element.classList.contains('slide-in-right') || 
            element.classList.contains('bounce-in') || 
            element.classList.contains('zoom-in') || 
            element.classList.contains('rotate-in') || 
            element.classList.contains('flip-in')) {
            // Already has animation class, no need to add fade-in
        } else {
            element.classList.add('fade-in');
        }
        observer.observe(element);
    });
}

// ===== Accessibility Features =====
function initializeAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('main') || document.querySelector('.hero-section');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    // Keyboard navigation for custom elements
    const customButtons = document.querySelectorAll('.service-card, .news-card');
    customButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
}

// ===== User Preferences =====
function saveUserPreferences() {
    const preferences = {
        theme: currentTheme,
        language: currentLanguage,
        fontSize: fontSize
    };
    
    localStorage.setItem('jkLegalServicesPreferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
    const savedPreferences = localStorage.getItem('jkLegalServicesPreferences');
    
    if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        
        if (preferences.theme) {
            currentTheme = preferences.theme;
            applyTheme(currentTheme);
        }
        
        if (preferences.language) {
            currentLanguage = preferences.language;
            applyLanguage(currentLanguage);
            const languageSelectTop = document.getElementById('language-select-top');
            if (languageSelectTop) {
                languageSelectTop.value = currentLanguage;
            }
        }
        
        if (preferences.fontSize) {
            fontSize = preferences.fontSize;
            applyFontSize();
        }
    }
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
    `;
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== Utility Functions =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Performance Optimization =====
// Throttle scroll events
window.addEventListener('scroll', throttle(handleScroll, 16));

// Debounce resize events
window.addEventListener('resize', debounce(handleResize, 250));

// ===== Service Worker Registration (for PWA features) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== Court Orders Rolling Animation =====
function initializeCourtOrdersAnimation() {
    const courtOrdersTrack = document.getElementById('courtOrdersTrack');
    if (!courtOrdersTrack) return;
    
    // Pause animation on hover
    const courtOrdersContainer = courtOrdersTrack.parentElement;
    
    courtOrdersContainer.addEventListener('mouseenter', () => {
        courtOrdersTrack.style.animationPlayState = 'paused';
    });
    
    courtOrdersContainer.addEventListener('mouseleave', () => {
        courtOrdersTrack.style.animationPlayState = 'running';
    });
    
    // Add click handlers for court order cards
    const courtOrderCards = courtOrdersTrack.querySelectorAll('.court-order-card');
    courtOrderCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on a button or link
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                return;
            }
            
            // Add a subtle click effect
            card.style.transform = 'translateY(-8px) scale(1.02)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
            
            // You can add more functionality here, like opening a modal with full order details
            showCourtOrderDetails(card);
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Add smooth restart of animation when it completes
    courtOrdersTrack.addEventListener('animationiteration', () => {
        // Animation restarts automatically due to infinite loop
        console.log('Court orders animation restarted');
    });
}

// ===== Skill Bars Animation =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                // Animate the progress bar
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 500); // Delay to allow fade-in animation to complete
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function showCourtOrderDetails(card) {
    const orderNumber = card.querySelector('.court-order-number').textContent;
    const orderTitle = card.querySelector('.court-order-title').textContent;
    const orderSummary = card.querySelector('.court-order-summary').textContent;
    const orderCourt = card.querySelector('.court-order-court').textContent;
    const orderDate = card.querySelector('.court-order-date').textContent;
    
    // Create modal for court order details
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">${orderNumber}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h4 class="text-primary mb-3">${orderTitle}</h4>
                            <p class="lead">${orderSummary}</p>
                            <div class="mt-4">
                                <h6>Full Order Details:</h6>
                                <p>This is a detailed view of the court order. In a real implementation, this would contain the complete text of the court order, including all legal provisions, directives, and implementation guidelines.</p>
                                <p>The order outlines specific procedures and requirements that must be followed by all relevant parties. It includes detailed instructions for implementation and compliance monitoring.</p>
                                <p>For the complete official document, please contact the respective court or legal services authority office.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="mb-0">Order Information</h6>
                                </div>
                                <div class="card-body">
                                    <p><strong>Court:</strong> ${orderCourt}</p>
                                    <p><strong>Date:</strong> ${orderDate}</p>
                                    <p><strong>Status:</strong> <span class="badge bg-success">Active</span></p>
                                    <p><strong>Category:</strong> Legal Directive</p>
                                </div>
                            </div>
                            <div class="mt-3">
                                <button class="btn btn-primary w-100 mb-2">
                                    <i class="fas fa-download"></i> Download PDF
                                </button>
                                <button class="btn btn-outline-primary w-100">
                                    <i class="fas fa-share"></i> Share Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">View Related Orders</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Remove modal after it's hidden
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// ===== Export functions for testing =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleDarkMode,
        toggleHighContrast,
        changeLanguage,
        performSearch,
        validateContactForm,
        showNotification,
        initializeCourtOrdersAnimation
    };
}
