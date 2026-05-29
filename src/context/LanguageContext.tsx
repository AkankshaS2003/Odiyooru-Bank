import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'kn' | 'hi';

interface TranslationDict {
  [key: string]: {
    en: string;
    kn: string;
    hi: string;
  };
}

export const translations: TranslationDict = {
  // --- Navbar ---
  home: {
    en: 'Home',
    kn: 'ಮುಖಪುಟ',
    hi: 'मुख्यपृष्ठ'
  },
  about: {
    en: 'About Us',
    kn: 'ನಮ್ಮ ಬಗ್ಗೆ',
    hi: 'हमारे बारे में'
  },
  products: {
    en: 'Products',
    kn: 'ಉತ್ಪನ್ನಗಳು',
    hi: 'उत्पाद'
  },
  media: {
    en: 'Media',
    kn: 'ಮಾಧ್ಯಮ',
    hi: 'मीडिया'
  },
  membership: {
    en: 'Membership',
    kn: 'ಸದಸ್ಯತ್ವ',
    hi: 'सदस्यता'
  },
  contact: {
    en: 'Contact Us',
    kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    hi: 'संपर्क करें'
  },
  login: {
    en: 'Login',
    kn: 'ಲಾಗಿನ್',
    hi: 'लॉगिन'
  },
  register: {
    en: 'Register',
    kn: 'ನೋಂದಣಿ',
    hi: 'पंजीकरण'
  },
  dashboard: {
    en: 'Dashboard',
    kn: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    hi: 'डैशबोर्ड'
  },
  logout: {
    en: 'Logout',
    kn: 'ನಿರ್ಗಮನ',
    hi: 'लॉगआउट'
  },

  // --- Hero Section ---
  gateway: {
    en: 'Your Gateway To Trusted Financial Journey',
    kn: 'ವಿಶ್ವಾಸಾರ್ಹ ಹಣಕಾಸು ಪ್ರಯಾಣಕ್ಕೆ ನಿಮ್ಮ ಗೇಟ್‌ವೇ',
    hi: 'विश्वसनीय वित्तीय यात्रा के लिए आपका प्रवेश द्वार'
  },
  gateway_desc: {
    en: 'Let us help you empower your financial freedom by strengthening communities.',
    kn: 'ಸಮುದಾಯಗಳನ್ನು ಬಲಪಡಿಸುವ ಮೂಲಕ ನಿಮ್ಮ ಹಣಕಾಸಿನ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಸಬಲಗೊಳಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡೋಣ.',
    hi: 'समुदायों को मजबूत करके आपकी वित्तीय स्वतंत्रता को सशक्त बनाने में हमारी सहायता करें।'
  },
  know_more: {
    en: 'Know More',
    kn: 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ',
    hi: 'अधिक जानें'
  },
  branches_stat: {
    en: '86 Branches In Country',
    kn: 'ದೇಶದಲ್ಲಿ 86 ಶಾಖೆಗಳು',
    hi: 'देश में 86 शाखाएं'
  },
  employees_stat: {
    en: '1.6k On Role Employees',
    kn: '1.6k ಉದ್ಯೋಗಿಗಳು ಕರ್ತವ್ಯದಲ್ಲಿದ್ದಾರೆ',
    hi: '1.6k कार्यरत कर्मचारी'
  },

  // --- Products Section ---
  prod_title: {
    en: 'Premium Financial Products Crafted For You',
    kn: 'ನಿಮಗಾಗಿ ರೂಪಿಸಲಾದ ಪ್ರೀಮಿಯಂ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳು',
    hi: 'आपके लिए तैयार किए गए प्रीमियम वित्तीय उत्पाद'
  },
  prod_desc: {
    en: 'Secure high returns on your hard-earned savings, or unlock flexible cooperative credit with lower rates.',
    kn: 'ನಿಮ್ಮ ಕಷ್ಟಾರ್ಜಿತ ಉಳಿತಾಯದ ಮೇಲೆ ಹೆಚ್ಚಿನ ಆದಾಯವನ್ನು ಭದ್ರಪಡಿಸಿಕೊಳ್ಳಿ, ಅಥವಾ ಕಡಿಮೆ ದರಗಳೊಂದಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಸಹಕಾರಿ ಸಾಲವನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ.',
    hi: 'अपनी मेहनत की कमाई पर उच्च रिटर्न सुरक्षित करें, या कम दरों पर लचीला सहकारी ऋण प्राप्त करें।'
  },
  apply_now: {
    en: 'Apply Now',
    kn: 'ಈಗಲೇ ಅರ್ಜಿಹಾಕಿ',
    hi: 'अभी आवेदन करें'
  },
  savings_name: {
    en: 'Savings Deposit',
    kn: 'ಉಳಿತಾಯ ಠೇವಣಿ',
    hi: 'बचत जमा'
  },
  savings_desc: {
    en: 'Flexible savings account with competitive interest rates and no hidden maintenance charges.',
    kn: 'ಸ್ಪರ್ಧಾತ್ಮಕ ಬಡ್ಡಿದರಗಳು ಮತ್ತು ಯಾವುದೇ ಗುಪ್ತ ನಿರ್ವಹಣಾ ಶುಲ್ಕಗಳಿಲ್ಲದ ಹೊಂದಿಕೊಳ್ಳುವ ಉಳಿತಾಯ ಖಾತೆ.',
    hi: 'प्रतिस्पर्धी ब्याज दरों और बिना किसी छिपे रख-रखाव शुल्क के लचीला बचत खाता।'
  },
  fd_name: {
    en: 'Fixed Deposit (FD)',
    kn: 'ಸ್ಥಿರ ಠೇವಣಿ (FD)',
    hi: 'सावधि जमा (FD)'
  },
  fd_desc: {
    en: 'Invest your surplus capital in high-return secure fixed deposit plans and secure your family future.',
    kn: 'ಹೆಚ್ಚಿನ ಆದಾಯದ ಸುರಕ್ಷಿತ ಸ್ಥಿರ ಠೇವಣಿ ಯೋಜನೆಗಳಲ್ಲಿ ನಿಮ್ಮ ಹೆಚ್ಚುವರಿ ಬಂಡವಾಳವನ್ನು ಹೂಡಿಕೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬದ ಭವಿಷ್ಯವನ್ನು ಭದ್ರಪಡಿಸಿ.',
    hi: 'अपने अधिशेष धन को उच्च-रिटर्न सुरक्षित सावधि जमा योजनाओं में निवेश करें और अपने परिवार का भविष्य सुरक्षित करें।'
  },
  rd_name: {
    en: 'Recurring Deposit (RD)',
    kn: 'ಮರುಕಳಿಸುವ ಠೇವಣಿ (RD)',
    hi: 'आवर्ती जमा (RD)'
  },
  rd_desc: {
    en: 'Develop a regular saving habit by investing a fixed amount every month with higher cooperative interest.',
    kn: 'ಹೆಚ್ಚಿನ ಸಹಕಾರಿ ಬಡ್ಡಿಯೊಂದಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ನಿಗದಿತ ಮೊತ್ತವನ್ನು ಹೂಡಿಕೆ ಮಾಡುವ ಮೂಲಕ ನಿಯಮಿತ ಉಳಿತಾಯದ ಹವ್ಯಾಸವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ.',
    hi: 'उच्च सहकारी ब्याज के साथ हर महीने एक निश्चित राशि निवेश करके नियमित बचत की आदत विकसित करें।'
  },
  gold_name: {
    en: 'Gold Loan',
    kn: 'ಚಿನ್ನದ ಸಾಲ',
    hi: 'स्वर्ण ऋण'
  },
  gold_desc: {
    en: 'Leverage your gold assets for immediate funding with lowest processing fees and minimal documentation.',
    kn: 'ಕನಿಷ್ಠ ಪ್ರಕ್ರಿಯೆ ಶುಲ್ಕಗಳು ಮತ್ತು ಕನಿಷ್ಠ ದಾಖಲಾತಿಗಳೊಂದಿಗೆ ತಕ್ಷಣದ ಹಣಕಾಸು ಒದಗಿಸಲು ನಿಮ್ಮ ಚಿನ್ನದ ಆಸ್ತಿಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳಿ.',
    hi: 'न्यूनतम प्रोसेसिंग शुल्क और न्यूनतम दस्तावेजों के साथ तत्काल धन प्राप्त करने के लिए अपनी स्वर्ण संपत्ति का लाभ उठाएं।'
  },

  // --- Why Choose Us ---
  core_pillars: {
    en: 'Core Pillars',
    kn: 'ಪ್ರಮುಖ ಸ್ತಂಭಗಳು',
    hi: 'मुख्य स्तंभ'
  },
  why_title: {
    en: 'Securing Your Financial Legacy With Trust',
    kn: 'ವಿಶ್ವಾಸದೊಂದಿಗೆ ನಿಮ್ಮ ಹಣಕಾಸಿನ ಪರಂಪರೆಯನ್ನು ಭದ್ರಪಡಿಸುವುದು',
    hi: 'विश्वास के साथ आपकी वित्तीय विरासत को सुरक्षित करना'
  },
  why_desc: {
    en: 'For over two decades, thousands of families have relied on our credit society to grow their financial capital.',
    kn: 'ಎರಡು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ, ಸಾವಿರಾರು ಕುಟುಂಬಗಳು ತಮ್ಮ ಹಣಕಾಸಿನ ಬಂಡವಾಳವನ್ನು ಬೆಳೆಸಲು ನಮ್ಮ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಯನ್ನು ಅವಲಂಬಿಸಿವೆ.',
    hi: 'दो दशकों से अधिक समय से, हजारों परिवारों ने अपनी वित्तीय पूंजी बढ़ाने के लिए हमारी क्रेडिट सोसाइटी पर भरोसा किया है।'
  },
  rbi_title: {
    en: 'RBI Compliant Practices',
    kn: 'ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿ ಪಾಲನೆ',
    hi: 'आरबीआई अनुपालन पद्धतियां'
  },
  rbi_desc: {
    en: 'Operated in strict compliance with Cooperative Credit guidelines and audited regularly by state authorities.',
    kn: 'ಸಹಕಾರಿ ಸಾಲ ಮಾರ್ಗಸೂಚಿಗಳಿಗೆ ಕಟ್ಟುನಿಟ್ಟಾದ ಅನುಸರಣೆಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು ರಾಜ್ಯ ಅಧಿಕಾರಿಗಳಿಂದ ನಿಯಮಿತವಾಗಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಡೆಸಲಾಗುತ್ತದೆ.',
    hi: 'सहकारी ऋण दिशानिर्देशों के सख्त अनुपालन में संचालित और राज्य अधिकारियों द्वारा नियमित रूप से ऑडिट किया जाता है।'
  },
  coop_title: {
    en: 'Trusted Cooperative Ethos',
    kn: 'ವಿಶ್ವಾಸಾರ್ಹ ಸಹಕಾರಿ ನೀತಿ',
    hi: 'विश्वसनीय सहकारी लोकाचार'
  },
  coop_desc: {
    en: 'Owned by members, for members. We prioritize community wealth creation over commercial banking profits.',
    kn: 'ಸದಸ್ಯರ ಒಡೆತನದಲ್ಲಿದೆ, ಸದಸ್ಯರಿಗಾಗಿ. ವಾಣಿಜ್ಯ ಬ್ಯಾಂಕಿಂಗ್ ಲಾಭಗಳಿಗಿಂತ ಸಮುದಾಯದ ಸಂಪತ್ತು ಸೃಷ್ಟಿಗೆ ನಾವು ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.',
    hi: 'सदस्यों के स्वामित्व में, सदस्यों के लिए। हम व्यावसायिक बैंकिंग मुनाफे पर सामुदायिक संपत्ति निर्माण को प्राथमिकता देते हैं।'
  },
  pan_title: {
    en: 'PAN India Operations',
    kn: 'ಪ್ಯಾನ್ ಇಂಡಿಯಾ ಕಾರ್ಯಾಚರಣೆಗಳು',
    hi: 'अखिल भारतीय परिचालन'
  },
  pan_desc: {
    en: 'Expanding network of branches and doorstep collections agents supporting rural and urban micro-entrepreneurs.',
    kn: 'ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಿಗಳನ್ನು ಬೆಂಬಲಿಸುವ ಶಾಖೆಗಳು ಮತ್ತು ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣೆ ಏಜೆಂಟ್ಗಳ ಜಾಲವನ್ನು ವಿಸ್ತರಿಸಲಾಗುತ್ತಿದೆ.',
    hi: 'ग्रामीण और शहरी सूक्ष्म-उद्यमियों का समर्थन करने वाले शाखाओं और घर-घर संग्रह एजेंटों के नेटवर्क का विस्तार।'
  },
  swift_title: {
    en: 'Swift Loan Disbursements',
    kn: 'ತ್ವರಿತ ಸಾಲ ವಿತರಣೆಗಳು',
    hi: 'त्वरित ऋण वितरण'
  },
  swift_desc: {
    en: 'Gold loans processed in 30 minutes. Transparent valuation checklists with lowest processing fees.',
    kn: 'ಚಿನ್ನದ ಸಾಲಗಳನ್ನು 30 ನಿಮಿಷಗಳಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ. ಕನಿಷ್ಠ ಪ್ರಕ್ರಿಯೆ ಶುಲ್ಕದೊಂದಿಗೆ ಪಾರದರ್ಶಕ ಮೌಲ್ಯಮಾಪನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗಳು.',
    hi: '30 मिनट में स्वर्ण ऋण संसाधित। न्यूनतम प्रोसेसिंग शुल्क के साथ पारदर्शी मूल्यांकन चेकलिस्ट।'
  },
  best_title: {
    en: 'Industry-Best Deposit Rates',
    kn: 'ಉದ್ಯಮದಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಠೇವಣಿ ದರಗಳು',
    hi: 'उद्योग-सर्वोत्तम जमा दरें'
  },
 Best_desc: {
    en: 'Earn up to 8.25% p.a. on Fixed Deposits, backed by sound capital reserve ratios.',
    kn: 'ಸ್ಥಿರ ಠೇವಣಿಗಳ ಮೇಲೆ ವಾರ್ಷಿಕ 8.25% ವರೆಗೆ ಗಳಿಸಿ, ಬಲವಾದ ಬಂಡವಾಳ ಮೀಸಲು ಅನುಪಾತಗಳಿಂದ ಬೆಂಬಲಿತವಾಗಿದೆ.',
    hi: 'पूंजी आरक्षित अनुपात द्वारा समर्थित, सावधि जमा पर 8.25% वार्षिक तक ब्याज अर्जित करें।'
  },
  support_title: {
    en: 'Dedicated Local Support',
    kn: 'ಮೀಸಲಾದ ಸ್ಥಳೀಯ ಬೆಂಬಲ',
    hi: 'समर्पित स्थानीय सहायता'
  },
  support_desc: {
    en: 'Get assistance from friendly bank tellers and localized customer relationship executives at every branch.',
    kn: 'ಪ್ರತಿಯೊಂದು ಶಾಖೆಯಲ್ಲಿ ಸ್ನೇಹಪರ ಬ್ಯಾಂಕ್ ಟೆಲ್ಲರ್ಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಗ್ರಾಹಕ ಸಂಬಂಧ ಅಧಿಕಾರಿಗಳಿಂದ ಸಹಾಯ ಪಡೆಯಿರಿ.',
    hi: 'हर शाखा में मित्रवत बैंक टेलर्स और स्थानीयकृत ग्राहक संबंध अधिकारियों से सहायता प्राप्त करें।'
  },

  // --- Membership Section ---
  coop_pride: {
    en: 'Cooperative Pride',
    kn: 'ಸಹಕಾರ ಸಂಸ್ಥೆಯ ಹೆಮ್ಮೆ',
    hi: 'सहकारी गौरव'
  },
  coowner_title: {
    en: "Don't Just Be a Customer. Be a Co-Owner.",
    kn: 'ಕೇವಲ ಗ್ರಾಹಕರಾಗಬೇಡಿ. ಸಹ-ಮಾಲೀಕರಾಗಿ.',
    hi: 'केवल एक ग्राहक न बनें। सह-स्वामी बनें।'
  },
  coowner_desc: {
    en: 'Unlike commercial retail banks, our cooperative credit society is owned and managed directly by our members.',
    kn: 'ವಾಣಿಜ್ಯ ಚಿಲ್ಲರೆ ಬ್ಯಾಂಕ್‌ಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ನಮ್ಮ ಸಹಕಾರಿ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಯು ನಮ್ಮ ಸದಸ್ಯರಿಂದ ನೇರವಾಗಿ ಒಡೆತನದಲ್ಲಿದೆ ಮತ್ತು ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತದೆ.',
    hi: 'व्यावसायिक खुदरा बैंकों के विपरीत, हमारी सहकारी ऋण समिति का स्वामित्व और प्रबंधन सीधे हमारे सदस्यों द्वारा किया जाता है।'
  },
  become_member: {
    en: 'Become Member Shareholder',
    kn: 'ಸದಸ್ಯ ಷೇರುದಾರರಾಗಿ',
    hi: 'सदस्य शेयरधारक बनें'
  },
  become_today: {
    en: 'Become a Member Today',
    kn: 'ಇಂದೇ ಸದಸ್ಯರಾಗಿ',
    hi: 'आज ही सदस्य बनें'
  },
  become_today_desc: {
    en: 'Invest a minimum of ₹10,000 in society share capital to instantly register as an active legal shareholder. Experience transparent community growth and financial security.',
    kn: 'ಸಕ್ರಿಯ ಕಾನೂನುಬದ್ಧ ಷೇರುದಾರರಾಗಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಲು ಸೊಸೈಟಿಯ ಷೇರು ಬಂಡವಾಳದಲ್ಲಿ ಕನಿಷ್ಠ ₹10,000 ಹೂಡಿಕೆ ಮಾಡಿ. ಪಾರದರ್ಶಕ ಸಮುದಾಯದ ಬೆಳವಣಿಗೆ ಮತ್ತು ಹಣಕಾಸಿನ ಭದ್ರತೆಯನ್ನು ಅನುಭವಿಸಿ.',
    hi: 'सक्रिय कानूनी शेयरधारक के रूप में तुरंत पंजीकरण करने के लिए समिति की शेयर पूंजी में न्यूनतम ₹10,000 का निवेश करें। पारदर्शी सामुदायिक विकास और वित्तीय सुरक्षा का अनुभव करें।'
  },
  dividend_highlight: {
    en: 'Receive up to 12% annual dividend disburser payouts!',
    kn: 'ವಾರ್ಷಿಕ 12% ವರೆಗೆ ಲಾಭಾಂಶ ವಿತರಣಾ ಪಾವತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಿ!',
    hi: '12% वार्षिक तक लाभांश भुगतान प्राप्त करें!'
  },
  voting_title: {
    en: 'Democratic Voting Rights',
    kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮತದಾನದ ಹಕ್ಕುಗಳು',
    hi: 'लोकतांत्रिक मतदान अधिकार'
  },
  voting_desc: {
    en: 'Each shareholder member receives equal voting power at our Annual General Body meetings to elect board governance.',
    kn: 'ಆಡಳಿತ ಮಂಡಳಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಮ್ಮ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯ ಸಭೆಗಳಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ಷೇರುದಾರ ಸದಸ್ಯರೂ ಸಮಾನ ಮತದಾನದ ಅಧಿಕಾರವನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
    hi: 'शासन बोर्ड का चुनाव करने के लिए हमारी वार्षिक आम बैठक में प्रत्येक शेयरधारक सदस्य को समान मतदान अधिकार प्राप्त होता है।'
  },
  profit_title: {
    en: 'Annual Profit Sharing & Dividends',
    kn: 'ವಾರ್ಷಿಕ ಲಾಭ ಹಂಚಿಕೆ ಮತ್ತು ಲಾಭಾಂಶಗಳು',
    hi: 'वार्षिक लाभ साझाकरण और लाभांश'
  },
  profit_desc: {
    en: 'Society profits are distributed back to member shareholders as competitive cash dividends pro-rata to share capital.',
    kn: 'ಸೊಸೈಟಿಯ ಲಾಭವನ್ನು ಷೇರು ಬಂಡವಾಳಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸ್ಪರ್ಧಾತ್ಮಕ ನಗದು ಲಾಭಾಂಶಗಳಾಗಿ ಸದಸ್ಯ ಷೇರುದಾರರಿಗೆ ಮರಳಿ ವಿತರಿಸಲಾಗುತ್ತದೆ.',
    hi: 'समिति के लाभ को शेयर पूंजी के अनुपात में प्रतिस्पर्धी नकद लाभांश के रूप में सदस्य शेयरधारकों को वापस वितरित किया जाता है।'
  },
  priority_title: {
    en: 'Priority Interest Bonuses',
    kn: 'ಆದ್ಯತೆಯ ಬಡ್ಡಿ ಬೋನಸ್‌ಗಳು',
    hi: 'प्राथमिकता ब्याज बोनस'
  },
  priority_desc: {
    en: 'Receive an additional +0.50% interest return premium on standard Fixed and Recurring Deposits.',
    kn: 'ಸಾಮಾನ್ಯ ಸ್ಥಿರ ಮತ್ತು ಮರುಕಳಿಸುವ ಠೇವಣಿಗಳ ಮೇಲೆ ಹೆಚ್ಚುವರಿ +0.50% ಬಡ್ಡಿ ಆದಾಯದ ಪ್ರೀಮಿಯಂ ಪಡೆಯಿರಿ.',
    hi: 'सामान्य सावधि और आवर्ती जमा पर अतिरिक्त +0.50% ब्याज रिटर्न प्रीमियम प्राप्त करें।'
  },
  subsidized_title: {
    en: 'Subsidized Loan Processing',
    kn: 'ರಿಯಾಯಿತಿ ದರದ ಸಾಲ ಪ್ರಕ್ರಿಯೆ',
    hi: 'रियायती ऋण प्रसंस्करण'
  },
  subsidized_desc: {
    en: 'Enjoy priority queues, minimal evaluation checklists, and zero prepayment penalties on all loans.',
    kn: 'ಎಲ್ಲಾ ಸಾಲಗಳ ಮೇಲೆ ಆದ್ಯತೆಯ ಕ್ಯೂಗಳು, ಕನಿಷ್ಠ ಮೌಲ್ಯಮಾಪನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗಳು ಮತ್ತು ಶೂನ್ಯ ಪೂರ್ವಪಾವತಿ ದಂಡಗಳನ್ನು ಆನಂದಿಸಿ.',
    hi: 'सभी ऋणों पर प्राथमिकता कतारों, न्यूनतम मूल्यांकन चेकलिस्ट और शून्य पूर्व भुगतान दंड का आनंद लें।'
  },

  // --- Digital Banking ---
  fintech_core: {
    en: 'Fintech Core',
    kn: 'ಫಿನ್ಟೆಕ್ ಕೋರ್',
    hi: 'फिनटेक कोर'
  },
  nextgen_title: {
    en: 'Next-Gen Cooperative Digital Experience',
    kn: 'ಮುಂದಿನ ಪೀಳಿಗೆಯ ಸಹಕಾರಿ ಡಿಜಿಟಲ್ ಅನುಭವ',
    hi: 'नेक्स्ट-जेन सहकारी डिजिटल अनुभव'
  },
  nextgen_desc: {
    en: 'We bridge the personal touch of community cooperative credit with the robust speed, accessibility, and high-security architectures of modern mobile fintech platforms.',
    kn: 'ಸಮುದಾಯ ಸಹಕಾರಿ ಸಾಲದ ವೈಯಕ್ತಿಕ ಸ್ಪರ್ಶವನ್ನು ಆಧುನಿಕ ಮೊಬೈಲ್ ಫಿನ್ಟೆಕ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳ ಗಟ್ಟಿಮುಟ್ಟಾದ ವೇಗ, ಪ್ರವೇಶ ಮತ್ತು ಉನ್ನತ ಭದ್ರತಾ ವಾಸ್ತುಶಿಲ್ಪಗಳೊಂದಿಗೆ ನಾವು ಜೋಡಿಸುತ್ತೇವೆ.',
    hi: 'हम सामुदायिक सहकारी ऋण के व्यक्तिगत स्पर्श को आधुनिक मोबाइल फिनटेक प्लेटफॉर्म की मजबूत गति, पहुंच और उच्च सुरक्षा संरचनाओं के साथ जोड़ते हैं।'
  },
  ekyc_point: {
    en: 'Government approved Aadhaar e-KYC channels',
    kn: 'ಸರ್ಕಾರ ಅನುಮೋದಿಸಿದ ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಚಾನೆಲ್ಗಳು',
    hi: 'सरकार द्वारा अनुमोदित आधार ई-केवाईसी चैनल'
  },
  transfer_point: {
    en: 'Simulated IMPS/NEFT transfers disburser modules',
    kn: 'ಸಿಮ್ಯುಲೇಟೆಡ್ ಐಎಂಪಿಎಸ್/ನೆಫ್ಟ್ ವರ್ಗಾವಣೆ ಮಾಡ್ಯೂಲ್ಗಳು',
    hi: 'सिम्युलेटेड आईएमपीएस/एनईएफटी ट्रांसफर मॉड्यूल'
  },
  ledger_point: {
    en: 'Secure localStorage encrypted digital ledger logs',
    kn: 'ಸುರಕ್ಷಿತ ಲೋಕಲ್ ಸ್ಟೋರೇಜ್ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಡಿಜಿಟಲ್ ಲೆಡ್ಜರ್ ಲಾಗ್‌ಗಳು',
    hi: 'सुरक्षित लोकलस्टोरेज एन्क्रिप्टेड डिजिटल लेजर लॉग'
  },
  forms_point: {
    en: 'Downloadable legal bank forms templates',
    kn: 'ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದಾದ ಕಾನೂನು ಬ್ಯಾಂಕ್ ಫಾರ್ಮ್ ಟೆಂಪ್ಲೇಟ್‌ಗಳು',
    hi: 'डाउनलोड करने योग्य कानूनी बैंक फॉर्म टेम्पलेट'
  },
  launch_portal: {
    en: 'Launch e-Banking Portal',
    kn: 'ಇ-ಬ್ಯಾಂಕಿಂಗ್ ಪೋರ್ಟಲ್ ಪ್ರಾರಂಭಿಸಿ',
    hi: 'ई-बैंकिंग पोर्टल लॉन्च करें'
  },
  mob_sim_title: {
    en: 'Mobile App Simulator',
    kn: 'ಮೊಬೈಲ್ ಆಪ್ ಸಿಮ್ಯುಲೇಟರ್',
    hi: 'मोबाइल ऐप सिम्युलेटर'
  },
  mob_sim_desc: {
    en: 'Track accounts, deposit slips, and statement drafts on your smartphone. Paperless passbooks inside.',
    kn: 'ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್‌ಫೋನ್‌ನಲ್ಲಿ ಖಾತೆಗಳು, ಠೇವಣಿ ಸ್ಲಿಪ್‌ಗಳು ಮತ್ತು ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ಪೇಪರ್‌ಲೆಸ್ ಪಾಸ್‌ಬುಕ್‌ಗಳು ಒಳಗೆ ಇವೆ.',
    hi: 'अपने स्मार्टफोन पर खातों, जमा पर्चियों और विवरणों को ट्रैक करें। अंदर पेपरलेस पासबुक उपलब्ध है।'
  },
  instant_title: {
    en: 'Instant Fund Transfers',
    kn: 'ತ್ವರಿತ ಹಣ ವರ್ಗಾವಣೆಗಳು',
    hi: 'त्वरित निधि स्थानांतरण'
  },
  instant_desc: {
    en: 'Simulate instant RTGS, NEFT, and IMPS money transfers straight from your active savings accounts.',
    kn: 'ನಿಮ್ಮ ಸಕ್ರಿಯ ಉಳಿತಾಯ ಖಾತೆಗಳಿಂದ ನೇರವಾಗಿ ತ್ವರಿತ ಆರ್‌ಟಿಜಿಎಸ್, ನೆಫ್ಟ್ ಮತ್ತು ಐಎಂಪಿಎಸ್ ಹಣ ವರ್ಗಾವಣೆಗಳನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ.',
    hi: 'अपने सक्रिय बचत खातों से सीधे त्वरित आरटीजीएस, एनईएफटी और आईएमपीएस मनी ट्रांसफर का अनुकरण करें।'
  },
  ekyc_title: {
    en: 'e-KYC Document Uploads',
    kn: 'ಇ-ಕೆವೈಸಿ ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್ಲೋಡ್ಗಳು',
    hi: 'ई-केवाईसी दस्तावेज़ अपलोड'
  },
  ekyc_desc: {
    en: 'Submit Aadhaar and PAN documents online. Instant mock verification within our secure portal.',
    kn: 'ಆಧಾರ್ ಮತ್ತು ಪ್ಯಾನ್ ದಾಖಲೆಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸಲ್ಲಿಸಿ. ನಮ್ಮ ಸುರಕ್ಷಿತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ತ್ವರಿತ ಮಾಕ್ ಪರಿಶೀಲನೆ.',
    hi: 'आधार और पैन दस्तावेज़ ऑनलाइन जमा करें। हमारे सुरक्षित पोर्टल के भीतर त्वरित मॉक सत्यापन।'
  },
  statement_title: {
    en: 'Download Bank Statements',
    kn: 'ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    hi: 'बैंक विवरण डाउनलोड करें'
  },
  statement_desc: {
    en: 'Access your full statement history as highly structured simulated spreadsheets or print-ready PDF formats.',
    kn: 'ನಿಮ್ಮ ಸಂಪೂರ್ಣ ವಿವರಣೆ ಇತಿಹಾಸವನ್ನು ಹೆಚ್ಚು ರಚನಾತ್ಮಕ ಸಿಮ್ಯುಲೇಟೆಡ್ ಸ್ಪ್ರೆಡ್‌ಶೀಟ್‌ಗಳು ಅಥವಾ ಪ್ರಿಂಟ್-ರೆಡಿ ಪಿಡಿಎಫ್ ರೂಪದಲ್ಲಿ ಪಡೆಯಿರಿ.',
    hi: 'स्प्रेडशीट या प्रिंट-रेडी पीडीएफ प्रारूप में अपने पूर्ण विवरण इतिहास तक पहुंचें।'
  },

  // --- News ---
  society_journal: {
    en: 'Society Journal',
    kn: 'ಸೊಸೈಟಿ ಜರ್ನಲ್',
    hi: 'सोसाइटी जर्नल'
  },
  latest_news: {
    en: 'Latest News & Society Announcements',
    kn: 'ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು ಮತ್ತು ಸೊಸೈಟಿ ಪ್ರಕಟಣೆಗಳು',
    hi: 'नवीनतम समाचार और सोसाइटी घोषणाएं'
  },
  news_desc: {
    en: 'Stay informed about our dividend declarations, financial awareness drives, and system upgrades.',
    kn: 'ನಮ್ಮ ಲಾಭಾಂಶ ಘೋಷಣೆಗಳು, ಹಣಕಾಸು ಜಾಗೃತಿ ಅಭಿಯಾನಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ಅಪ್‌ಗ್ರೇಡ್‌ಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.',
    hi: 'हमारे लाभांश घोषणाओं, वित्तीय जागरूकता अभियानों और सिस्टम अपग्रेड के बारे में सूचित रहें।'
  },
  read_article: {
    en: 'Read Article',
    kn: 'ಲೇಖನ ಓದಿ',
    hi: 'लेख पढ़ें'
  },
  news1_tag: {
    en: 'Interest Rates',
    kn: 'ಬಡ್ಡಿದರಗಳು',
    hi: 'ब्याज दरें'
  },
  news1_title: {
    en: 'Cooperative Fixed Deposit Rates Increased to 8.25%',
    kn: 'ಸಹಕಾರಿ ಸ್ಥಿರ ಠೇವಣಿ ದರಗಳನ್ನು 8.25% ಕ್ಕೆ ಹೆಚ್ಚಿಸಲಾಗಿದೆ',
    hi: 'सहकारी सावधि जमा दरें बढ़ाकर 8.25% की गईं'
  },
  news1_desc: {
    en: 'Our governing board has authorized an upward adjustment in FD yield returns to protect capital value for member families.',
    kn: 'ಸದಸ್ಯ ಕುಟುಂಬಗಳ ಬಂಡವಾಳ ಮೌಲ್ಯವನ್ನು ರಕ್ಷಿಸಲು ಎಫ್‌ಡಿ ಆದಾಯದ ರಿಟರ್ನ್ಸ್‌ಗಳಲ್ಲಿ ಹೆಚ್ಚಳ ಮಾಡಲು ನಮ್ಮ ಆಡಳಿತ ಮಂಡಳಿ ಅನುಮೋದಿಸಿದೆ.',
    hi: 'हमारे शासी बोर्ड ने सदस्य परिवारों के लिए पूंजी मूल्य की रक्षा के लिए एफडी रिटर्न में वृद्धि को अधिकृत किया है।'
  },
  news2_tag: {
    en: 'Awareness',
    kn: 'ಜಾಗೃತಿ',
    hi: 'जागरूकता'
  },
  news2_title: {
    en: 'Financial Literacy Program Conducted in Rural Hubs',
    kn: 'ಗ್ರಾಮೀಣ ಕೇಂದ್ರಗಳಲ್ಲಿ ಹಣಕಾಸು ಸಾಕ್ಷರತಾ ಕಾರ್ಯಕ್ರಮ ಆಯೋಜನೆ',
    hi: 'ग्रामीण केंद्रों में वित्तीय साक्षरता कार्यक्रम आयोजित'
  },
  news2_desc: {
    en: 'Held simulated training workshops supporting over 300+ women micro-entrepreneurs on savings structures and credit pathways.',
    kn: 'ಉಳಿತಾಯ ರಚನೆಗಳು ಮತ್ತು ಸಾಲ ಮಾರ್ಗಗಳ ಕುರಿತು 300 ಕ್ಕೂ ಹೆಚ್ಚು ಮಹಿಳಾ ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಿಗಳಿಗೆ ತರಬೇತಿ ಕಾರ್ಯಾಗಾರಗಳನ್ನು ನಡೆಸಲಾಯಿತು.',
    hi: 'बचत संरचनाओं और ऋण मार्गों पर 300 से अधिक महिला सूक्ष्म-उद्यमियों का समर्थन करने वाली कार्यशालाएं आयोजित की गईं।'
  },
  news3_tag: {
    en: 'Expansion',
    kn: 'ವಿಸ್ತರಣೆ',
    hi: 'विस्तार'
  },
  news3_title: {
    en: 'New Digital Doorstep Banking Service Sanctioned',
    kn: 'ಹೊಸ ಡಿಜಿಟಲ್ ಮನೆಬಾಗಿಲಿನ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗೆ ಮಂಜೂರಾತಿ',
    hi: 'नई डिजिटल डोरस्टेप बैंकिंग सेवा स्वीकृत'
  },
  news3_desc: {
    en: 'Launched mobile collection systems allowing members to deposit savings and pay EMIs directly through certified agents.',
    kn: 'ಪ್ರಮಾಣೀಕೃತ ಏಜೆಂಟರ ಮೂಲಕ ಸದಸ್ಯರು ಉಳಿತಾಯವನ್ನು ಠೇವಣಿ ಮಾಡಲು ಮತ್ತು ಇಎಂಐಗಳನ್ನು ನೇರವಾಗಿ ಪಾವತಿಸಲು ಮೊಬೈಲ್ ಸಂಗ್ರಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ.',
    hi: 'प्रमाणित एजेंटों के माध्यम से सदस्यों को सीधे बचत जमा करने और ईएमआई भुगतान करने की अनुमति देने वाली मोबाइल संग्रह प्रणाली शुरू की गई।'
  },

  // --- Testimonials ---
  member_voices: {
    en: 'Member Voices',
    kn: 'ಸದಸ್ಯರ ಧ್ವನಿಗಳು',
    hi: 'सदस्यों की आवाजें'
  },
  trusted_by: {
    en: 'Trusted By Over 50,000+ Indians',
    kn: '50,000 ಕ್ಕೂ ಹೆಚ್ಚು ಭಾರತೀಯರಿಂದ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿದೆ',
    hi: '50,000+ से अधिक भारतीयों द्वारा विश्वसनीय'
  },
  rev1_review: {
    en: 'I have held a Fixed Deposit here for 8 years. The cooperative rates are consistently 1.5% higher than public sector retail banks. Extremely courteous staff and highly secure portal!',
    kn: 'ನಾನು ಇಲ್ಲಿ 8 ವರ್ಷಗಳಿಂದ ಸ್ಥಿರ ಠೇವಣಿ ಇರಿಸಿದ್ದೇನೆ. ಸಹಕಾರಿ ದರಗಳು ಸಾರ್ವಜನಿಕ ವಲಯದ ಚಿಲ್ಲರೆ ಬ್ಯಾಂಕ್‌ಗಳಿಗಿಂತ ಸ್ಥಿರವಾಗಿ 1.5% ಹೆಚ್ಚಿರುತ್ತವೆ. ಅತ್ಯಂತ ವಿನಯಶೀಲ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಪೋರ್ಟಲ್!',
    hi: 'मैंने यहाँ 8 वर्षों से सावधि जमा रखा है। सहकारी दरें सार्वजनिक क्षेत्र के खुदरा बैंकों की तुलना में लगातार 1.5% अधिक हैं। अत्यंत विनम्र स्टाफ और सुरक्षित पोर्टल!'
  },
  rev1_name: {
    en: 'Dr. Suresh Kumar Malhotra',
    kn: 'ಡಾ. ಸುರೇಶ್ ಕುಮಾರ್ ಮಲ್ಹೋತ್ರಾ',
    hi: 'डॉ. सुरेश कुमार मल्होत्रा'
  },
  rev1_role: {
    en: 'Member Shareholder',
    kn: 'ಸದಸ್ಯ ಷೇರುದಾರರು',
    hi: 'सदस्य शेयरधारक'
  },
  rev1_branch: {
    en: 'Sector 15, Rohini Branch, New Delhi',
    kn: 'ಸೆಕ್ಟರ್ 15, ರೋಹಿಣಿ ಶಾಖೆ, ನವದೆಹಲಿ',
    hi: 'सेक्टर 15, रोहिणी शाखा, नई दिल्ली'
  },
  rev2_review: {
    en: 'My small business was struggling. Their doorstep collector agents visit my shop daily to collect savings, which are compounded quarterly. Sanctioned a gold loan within 20 minutes without credit history!',
    kn: 'ನನ್ನ ಸಣ್ಣ ವ್ಯಾಪಾರವು ಕಷ್ಟದಲ್ಲಿತ್ತು. ಅವರ ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣಾ ಏಜೆಂಟರು ಉಳಿತಾಯವನ್ನು ಸಂಗ್ರಹಿಸಲು ಪ್ರತಿದಿನ ನನ್ನ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ. ಯಾವುದೇ ಕ್ರೆಡಿಟ್ ಇತಿಹಾಸವಿಲ್ಲದಿದ್ದರೂ 20 ನಿಮಿಷಗಳಲ್ಲಿ ಚಿನ್ನದ ಸಾಲ ಮಂಜೂರು ಮಾಡಿದರು!',
    hi: 'मेरा छोटा व्यवसाय संघर्ष कर रहा था। उनके डोरस्टेप एजेंट बचत एकत्र करने के लिए दैनिक मेरी दुकान पर आते हैं। बिना किसी क्रेडिट इतिहास के 20 मिनट के भीतर स्वर्ण ऋण स्वीकृत किया गया!'
  },
  rev2_name: {
    en: 'Sunita Devi Yadav',
    kn: 'ಸುನೀತಾ ದೇವಿ ಯಾದವ್',
    hi: 'सुनीता देवी यादव'
  },
  rev2_role: {
    en: 'Micro-Entrepreneur',
    kn: 'ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಿ',
    hi: 'सूक्ष्म-उद्यमी'
  },
  rev2_branch: {
    en: 'Gomti Nagar Branch, Lucknow',
    kn: 'ಗೋಮತಿ ನಗರ ಶಾಖೆ, ಲಕ್ನೋ',
    hi: 'गोमती नगर शाखा, लखनऊ'
  },
  rev3_review: {
    en: 'The Monthly Income Scheme (MIS) keeps my retirement payouts secure with prompt direct transfers. The simulated dashboard is very clean, accessible, and transparent. Truly a modern cooperative!',
    kn: 'ಮಾಸಿಕ ಆದಾಯ ಯೋಜನೆ (MIS) ತ್ವರಿತ ನೇರ ವರ್ಗಾವಣೆಗಳೊಂದಿಗೆ ನನ್ನ ನಿವೃತ್ತಿ ಪಾವತಿಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸುತ್ತದೆ. ಸಿಮ್ಯುಲೇಟೆಡ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತುಂಬಾ ಸ್ವಚ್ಛವಾಗಿದೆ ಮತ್ತು ಪಾರದರ್ಶಕವಾಗಿದೆ. ನಿಜವಾಗಿಯೂ ಆಧುನಿಕ ಸಹಕಾರಿ!',
    hi: 'मासिक आय योजना (MIS) त्वरित प्रत्यक्ष स्थानान्तरण के साथ मेरे सेवानिवृत्ति भुगतानों को सुरक्षित रखती है। सिम्युलेटेड डैशबोर्ड बहुत साफ और पारदर्शी है। वास्तव में एक आधुनिक सहकारी!'
  },
  rev3_name: {
    en: 'Anirudh R. Deshmukh',
    kn: 'ಅನಿರುದ್ಧ ಆರ್. ದೇಶಮುಖ್',
    hi: 'अनिरुद्ध आर. देशमुख'
  },
  rev3_role: {
    en: 'Retiree',
    kn: 'ನಿವೃತ್ತರು',
    hi: 'सेवानिवृत्त'
  },
  rev3_branch: {
    en: 'Shivaji Nagar Branch, Pune',
    kn: 'ಶಿವಾಜಿ ನಗರ ಶಾಖೆ, ಪುಣೆ',
    hi: 'शिवाजी नगर शाखा, पुणे'
  },

  // --- Downloads ---
  form_center: {
    en: 'Form Center',
    kn: 'ಫಾರ್ಮ್ ಕೇಂದ್ರ',
    hi: 'फॉर्म केंद्र'
  },
  download_docs: {
    en: 'Download Official Banking Documents',
    kn: 'ಅಧಿಕೃತ ಬ್ಯಾಂಕಿಂಗ್ ದಾಖಲೆಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    hi: 'आधिकारिक बैंकिंग दस्तावेज़ डाउनलोड करें'
  },
  download_desc: {
    en: 'Access, print, and fill official cooperative bank forms. Fill out forms at your convenience before visiting branch counters.',
    kn: 'ಅಧಿಕೃತ ಸಹಕಾರಿ ಬ್ಯಾಂಕ್ ಫಾರ್ಮ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ ಮತ್ತು ಭರ್ತಿ ಮಾಡಿ. ಶಾಖೆಯ ಕೌಂಟರ್‌ಗಳಿಗೆ ಭೇಟಿ ನೀಡುವ ಮುನ್ನ ನಿಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ ಫಾರ್ಮ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
    hi: 'आधिकारिक सहकारी बैंक फॉर्म प्राप्त करें और भरें। शाखा काउंटरों पर जाने से पहले अपनी सुविधा के अनुसार फॉर्म भरें।'
  },
  form1_title: {
    en: 'Shareholder Membership Application Form',
    kn: 'ಷೇರುದಾರರ ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ನಮೂನೆ',
    hi: 'शेयरधारक सदस्यता आवेदन पत्र'
  },
  form1_desc: {
    en: 'Required form to register as a shareholder co-owner and subscribe to initial society share units.',
    kn: 'ಷೇರುದಾರ ಸಹ-ಮಾಲೀಕರಾಗಿ ನೋಂದಾಯಿಸಲು ಮತ್ತು ಆರಂಭಿಕ ಸೊಸೈಟಿಯ ಷೇರು ಘಟಕಗಳಿಗೆ ಚಂದಾದಾರರಾಗಲು ಅಗತ್ಯವಿರುವ ಫಾರ್ಮ್.',
    hi: 'शेयरधारक सह-स्वामी के रूप में पंजीकरण करने और प्रारंभिक समिति शेयर इकाइयों की सदस्यता लेने के लिए आवश्यक फॉर्म।'
  },
  form2_title: {
    en: 'Savings & FD Account Opening Mandate',
    kn: 'ಉಳಿತಾಯ ಮತ್ತು ಎಫ್‌ಡಿ ಖಾತೆ ತೆರೆಯುವ ಆದೇಶ ಪತ್ರ',
    hi: 'बचत और एफडी खाता खोलने का जनादेश पत्र'
  },
  form2_desc: {
    en: 'Standard form to authorize opening checking, saving, recurring, or fixed deposit portfolios.',
    kn: 'ಉಳಿತಾಯ, ಸ್ಥಿರ ಅಥವಾ ಮರುಕಳಿಸುವ ಠೇವಣಿ ಪೋರ್ಟ್‌ಫೋಲಿಯೊಗಳನ್ನು ತೆರೆಯಲು ಅಧಿಕಾರ ನೀಡುವ ಪ್ರಮಾಣಿತ ಫಾರ್ಮ್.',
    hi: 'बचत, सावधि या आवर्ती जमा पोर्टफोलियो खोलने को अधिकृत करने वाला मानक फॉर्म।'
  },
  form3_title: {
    en: 'Unified Customer e-KYC Declaration',
    kn: 'ಏಕೀಕೃತ ಗ್ರಾಹಕ ಇ-ಕೆವೈಸಿ ಘೋಷಣೆ',
    hi: 'एकीकृत ग्राहक ई-केवाईसी घोषणा'
  },
  form3_desc: {
    en: 'Mandatory declaration sheet to append photocopies of Aadhaar Card, PAN Card, and passport photos.',
    kn: 'ಆಧಾರ್ ಕಾರ್ಡ್, ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಮತ್ತು ಪಾಸ್‌ಪೋರ್ಟ್ ಫೋಟೋಗಳ ನಕಲುಗಳನ್ನು ಲಗತ್ತಿಸಲು ಕಡ್ಡಾಯ ಘೋಷಣಾ ಪತ್ರ.',
    hi: 'आधार कार्ड, पैन कार्ड और पासपोर्ट फोटो की प्रतियां संलग्न करने के लिए अनिवार्य घोषणा पत्र।'
  },
  form4_title: {
    en: 'Gold Loan Valuation & Appraisal Checklist',
    kn: 'ಚಿನ್ನದ ಸಾಲ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
    hi: 'स्वर्ण ऋण मूल्यांकन और चेकलिस्ट'
  },
  form4_desc: {
    en: 'Valuation criteria cataloguing purity testing parameters and sanction checklists for gold loan clients.',
    kn: 'ಚಿನ್ನದ ಸಾಲದ ಗ್ರಾಹಕರಿಗೆ ಶುದ್ಧತೆ ಪರೀಕ್ಷಾ ನಿಯತಾಂಕಗಳು ಮತ್ತು ಮಂಜೂರಾತಿ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಮೌಲ್ಯಮಾಪನ ಮಾನದಂಡಗಳು.',
    hi: 'स्वर्ण ऋण ग्राहकों के लिए शुद्धता परीक्षण मानकों और स्वीकृति चेकलिस्ट वाली मूल्यांकन मार्गदर्शिका।'
  },
  download_btn: {
    en: 'Download Form',
    kn: 'ಫಾರ್ಮ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    hi: 'फॉर्म डाउनलोड करें'
  },
  compiling: {
    en: 'Compiling...',
    kn: 'ಸಂಗ್ರಹಿಸಲಾಗುತ್ತಿದೆ...',
    hi: 'संकलन हो रहा है...'
  },
  downloaded: {
    en: 'Downloaded!',
    kn: 'ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ!',
    hi: 'डाउनलोड हो गया!'
  },

  // --- FAQ ---
  faq_guide: {
    en: 'FAQ Guide',
    kn: 'ಎಫ್‌ಎಕ್ಯೂ ಮಾರ್ಗದರ್ಶಿ',
    hi: 'एफएक्यू गाइड'
  },
  frequent_inquiries: {
    en: 'Frequently Answered Inquiries',
    kn: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
    hi: 'बार-बार पूछे जाने वाले प्रश्न'
  },
  faq1_q: {
    en: 'Is Indian Cooperative Credit Society regulated by the RBI?',
    kn: 'ಇಂಡಿಯನ್ ಕೋಆಪರೇಟಿವ್ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಯು ಆರ್‌ಬಿಐ ನಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆಯೇ?',
    hi: 'क्या इंडियन कोऑपरेटिव क्रेडिट सोसाइटी आरबीआई द्वारा विनियमित है?'
  },
  faq1_a: {
    en: 'We operate as a Multi-State Cooperative Credit Society registered under the Multi-State Cooperative Societies Act, 2002. While commercial banks are directly governed under RBI Banking Regulation acts, credit societies are governed by state/central cooperative commissioners and maintain capital reserve ratios matching RBI compliance guidelines.',
    kn: 'ನಾವು ಮಲ್ಟಿ-ಸ್ಟೇಟ್ ಸಹಕಾರ ಸಂಘಗಳ ಕಾಯ್ದೆ, 2002 ರ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಲಾದ ಮಲ್ಟಿ-ಸ್ಟೇಟ್ ಸಹಕಾರಿ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತೇವೆ. ವಾಣಿಜ್ಯ ಬ್ಯಾಂಕ್‌ಗಳು ನೇರವಾಗಿ ಆರ್‌ಬಿಐ ಬ್ಯಾಂಕಿಂಗ್ ನಿಯಂತ್ರಣ ಕಾಯ್ದೆಗಳ ಅಡಿಯಲ್ಲಿ ಆಡಳಿತಕ್ಕೊಳಪಟ್ಟರೆ, ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಗಳು ರಾಜ್ಯ/ಕೇಂದ್ರ ಸಹಕಾರಿ ಕಮಿಷನರ್‌ಗಳಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಆರ್‌ಬಿಐ ಮಾರ್ಗಸೂಚಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಬಂಡವಾಳ ಮೀಸಲು ಅನುಪಾತಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ.',
    hi: 'हम बहु-राज्य सहकारी समिति अधिनियम, 2002 के तहत पंजीकृत एक बहु-राज्य सहकारी ऋण समिति के रूप में काम करते हैं। जबकि वाणिज्यिक बैंक सीधे आरबीआई बैंकिंग विनियमन अधिनियमों के तहत शासित होते हैं, ऋण समितियां राज्य/केंद्रीय सहकारी आयुक्तों द्वारा शासित होती हैं और आरबीआई अनुपालन दिशानिर्देशों के अनुरूप पूंजी आरक्षित अनुपात बनाए रखती हैं।'
  },
  faq2_q: {
    en: 'What is the maximum interest rate offered on cooperative Fixed Deposits?',
    kn: 'ಸಹಕಾರಿ ಸ್ಥಿರ ಠೇವಣಿಗಳ ಮೇಲೆ ನೀಡಲಾಗುವ ಗರಿಷ್ಠ ಬಡ್ಡಿದರ ಎಷ್ಟು?',
    hi: 'सहकारी सावधि जमा पर दी जाने वाली अधिकतम ब्याज दर क्या है?'
  },
  faq2_a: {
    en: 'We offer an industry-best standard FD interest rate of 8.25% p.a. for general depositors. Registered shareholder members and senior citizens receive a premium bonus rate of 8.75% p.a. interest compounded quarterly.',
    kn: 'ನಾವು ಸಾಮಾನ್ಯ ಠೇವಣಿದಾರರಿಗೆ ಉದ್ಯಮದಲ್ಲೇ ಅತ್ಯುತ್ತಮವಾದ ವಾರ್ಷಿಕ 8.25% ಪ್ರಮಾಣಿತ ಎಫ್‌ಡಿ ಬಡ್ಡಿದರವನ್ನು ನೀಡುತ್ತೇವೆ. ನೋಂದಾಯಿತ ಷೇರುದಾರ ಸದಸ್ಯರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರು ವಾರ್ಷಿಕ 8.75% ಆದ್ಯತೆಯ ಬೋನಸ್ ಬಡ್ಡಿದರವನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
    hi: 'हम सामान्य जमाकर्ताओं के लिए उद्योग-सर्वोत्तम 8.25% वार्षिक की मानक एफडी ब्याज दर प्रदान करते हैं। पंजीकृत शेयरधारक सदस्य और वरिष्ठ नागरिक त्रैमासिक रूप से चक्रवृद्धि 8.75% वार्षिक की प्रीमियम बोनस ब्याज दर प्राप्त करते हैं।'
  },
  faq3_q: {
    en: 'How do I become an active voting shareholder member of the society?',
    kn: 'ನಾನು ಸೊಸೈಟಿಯ ಸಕ್ರಿಯ ಮತದಾನದ ಹಕ್ಕಿರುವ ಷೇರುದಾರ ಸದಸ್ಯನಾಗುವುದು ಹೇಗೆ?',
    hi: 'मैं समिति का सक्रिय मतदान शेयरधारक सदस्य कैसे बन सकता हूँ?'
  },
  faq3_a: {
    en: 'You can subscribe to initial Share Capital units (minimum investment ₹10,000) by visiting your nearest branch. Upon successful KYC checks and board sanction, you gain legal co-ownership, annual dividend rights, and voting powers at general body governance boards.',
    kn: 'ನಿಮ್ಮ ಹತ್ತಿರದ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡುವ ಮೂಲಕ ನೀವು ಆರಂಭಿಕ ಷೇರು ಬಂಡವಾಳ ಘಟಕಗಳಿಗೆ (ಕನಿಷ್ಠ ಹೂಡಿಕೆ ₹10,000) ಚಂದಾದಾರರಾಗಬಹುದು. ಯಶಸ್ವಿ ಕೆವೈಸಿ ಪರಿಶೀಲನೆ ಮತ್ತು ಮಂಡಳಿಯ ಅನುಮೋದನೆಯ ನಂತರ, ನೀವು ಕಾನೂನುಬದ್ಧ ಸಹ-ಮಾಲೀಕತ್ವ, ವಾರ್ಷಿಕ ಲಾಭಾಂಶದ ಹಕ್ಕುಗಳು ಮತ್ತು ಮತದಾನದ ಅಧಿಕಾರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.',
    hi: 'आप अपनी निकटतम शाखा में जाकर प्रारंभिक शेयर पूंजी इकाइयों (न्यूनतम निवेश ₹10,000) की सदस्यता ले सकते हैं। सफल केवाईसी जांच और बोर्ड की मंजूरी के बाद, आप कानूनी सह-स्वामित्व, वार्षिक लाभांश अधिकार और आम सभा में मतदान अधिकार प्राप्त करते हैं।'
  },
  faq4_q: {
    en: 'What is the processing time and security metrics for Gold Loans?',
    kn: 'ಚಿನ್ನದ ಸಾಲಗಳ ಪ್ರಕ್ರಿಯೆಯ ಸಮಯ ಮತ್ತು ಭದ್ರತಾ ಮಾನದಂಡಗಳು ಯಾವುವು?',
    hi: 'स्वर्ण ऋण के लिए प्रसंस्करण समय और सुरक्षा मानक क्या हैं?'
  },
  faq4_a: {
    en: 'Gold Loans are disbursed at cheap rates starting from 8.50% p.a. within 30 minutes of counter valuations. Your physical gold ornaments are secured inside specialized government-grade vault keeps backed by comprehensive insurance coverage.',
    kn: 'ಕೌಂಟರ್ ಮೌಲ್ಯಮಾಪನದ 30 ನಿಮಿಷಗಳಲ್ಲಿ ವಾರ್ಷಿಕ 8.50% ರಿಂದ ಪ್ರಾರಂಭವಾಗುವ ಅಗ್ಗದ ದರದಲ್ಲಿ ಚಿನ್ನದ ಸಾಲಗಳನ್ನು ವಿತರಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಭೌತಿಕ ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು ಸಮಗ್ರ ವಿಮೆ ವ್ಯಾಪ್ತಿಯೊಂದಿಗೆ ಸರ್ಕಾರಿ ದರ್ಜೆಯ ವಿಶೇಷ ಕಮಾನುಗಳ ಒಳಗೆ ಸುರಕ್ಷಿತವಾಗಿಡಲಾಗುತ್ತದೆ.',
    hi: 'स्वर्ण ऋण काउंटर मूल्यांकन के 30 मिनट के भीतर 8.50% वार्षिक से शुरू होने वाली सस्ती दरों पर वितरित किए जाते हैं। आपके भौतिक सोने के आभूषणों को व्यापक बीमा कवरेज द्वारा समर्थित विशिष्ट सरकारी-ग्रेड तिजोरियों के अंदर सुरक्षित रखा जाता है।'
  },
  faq5_q: {
    en: 'Do I get tax exemption benefits on deposits held inside cooperative societies?',
    kn: 'ಸಹಕಾರ ಸಂಘಗಳಲ್ಲಿ ಇರಿಸಲಾದ ಠೇವಣಿಗಳ ಮೇಲೆ ನಾನು ತೆರಿಗೆ ವಿನಾಯಿತಿ ಪ್ರಯೋಜನಗಳನ್ನು ಪಡೆಯುತ್ತೇನೆಯೇ?',
    hi: 'क्या मुझे सहकारी समितियों में रखी जमा राशि पर कर छूट का लाभ मिलता है?'
  },
  faq5_a: {
    en: 'Yes, interest earned on cooperative credit deposits receives exemptions under Section 80P of the Income Tax Act, offering better tax-adjusted yields than standard retail bank FD accounts.',
    kn: 'ಹೌದು, ಸಹಕಾರಿ ಕ್ರೆಡಿಟ್ ಠೇವಣಿಗಳ ಮೇಲೆ ಗಳಿಸಿದ ಬಡ್ಡಿಯು ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 80P ಅಡಿಯಲ್ಲಿ ವಿನಾಯಿತಿಗಳನ್ನು ಪಡೆಯುತ್ತದೆ, ಇದು ಸಾಮಾನ್ಯ ವಾಣಿಜ್ಯ ಬ್ಯಾಂಕ್ ಎಫ್‌ಡಿ ಖಾತೆಗಳಿಗಿಂತ ಉತ್ತಮವಾದ ತೆರಿಗೆ-ಹೊಂದಾಣಿಕೆಯ ಆದಾಯವನ್ನು ನೀಡುತ್ತದೆ.',
    hi: 'हाँ, सहकारी ऋण जमा पर अर्जित ब्याज को आयकर अधिनियम की धारा 80P के तहत छूट मिलती है, जो मानक खुदरा बैंक एफडी खातों की तुलना में बेहतर कर-समायोजित रिटर्न प्रदान करती है।'
  },

  // --- Contact ---
  connect_us: {
    en: 'Connect With Us',
    kn: 'ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ',
    hi: 'हमसे संपर्क करें'
  },
  here_to_help: {
    en: 'We Are Here To Help You',
    kn: 'ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಇಲ್ಲಿದ್ದೇವೆ',
    hi: 'हम आपकी सहायता के लिए यहाँ हैं'
  },
  here_to_help_desc: {
    en: 'Reach out to our cooperative relationship managers for queries on gold loans, deposit schemes, or shareholder accounts.',
    kn: 'ಚಿನ್ನದ ಸಾಲಗಳು, ಠೇವಣಿ ಯೋಜನೆಗಳು ಅಥವಾ ಷೇರುದಾರರ ಖಾತೆಗಳ ಕುರಿತಾದ ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ ನಮ್ಮ ಸಹಕಾರಿ ಸಂಬಂಧ ವ್ಯವಸ್ಥಾಪಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    hi: 'स्वर्ण ऋण, जमा योजनाओं या शेयरधारक खातों के बारे में प्रश्नों के लिए हमारे सहकारी संबंध प्रबंधकों से संपर्क करें।'
  },
  hq_office: {
    en: 'Headquarters Office',
    kn: 'ಪ್ರಧಾನ ಕಛೇರಿ',
    hi: 'मुख्यालय कार्यालय'
  },
  central_address: {
    en: 'Central Address',
    kn: 'ಕೇಂದ್ರ ವಿಳಾಸ',
    hi: 'केंद्रीय पता'
  },
  hq_address_val: {
    en: 'Plot No. 24, Institutional Area, Sector 7, Rohini, New Delhi, Delhi - 110085',
    kn: 'ಪ್ಲಾಟ್ ನಂ. 24, ಇನ್ಸ್ಟಿಟ್ಯೂಷನಲ್ ಏರಿಯಾ, ಸೆಕ್ಟರ್ 7, ರೋಹಿಣಿ, ನವದೆಹಲಿ, ದೆಹಲಿ - 110085',
    hi: 'प्लॉट नंबर 24, संस्थागत क्षेत्र, सेक्टर 7, रोहिणी, नई दिल्ली, दिल्ली - 110085'
  },
  direct_helpdesk: {
    en: 'Direct Helpdesk',
    kn: 'ನೇರ ಸಹಾಯವಾಣಿ',
    hi: 'प्रत्यक्ष हेल्पडेस्क'
  },
  electronic_mail: {
    en: 'Electronic Mail',
    kn: 'ಇಮೇಲ್ ವಿಳಾಸ',
    hi: 'इलेक्ट्रॉनिक मेल'
  },
  operational_hours: {
    en: 'Operational Hours',
    kn: 'ಕಾರ್ಯನಿರ್ವಹಣೆಯ ಸಮಯ',
    hi: 'परिचालन समय'
  },
  hours_val: {
    en: 'Monday - Saturday: 09:30 AM - 04:30 PM (Closed on Sundays, 2nd & 4th Saturdays)',
    kn: 'ಸೋಮವಾರ - ಶನಿವಾರ: ಬೆಳಿಗ್ಗೆ 09:30 - ಸಂಜೆ 04:30 (ಭಾನುವಾರ, 2ನೇ ಮತ್ತು 4ನೇ ಶನಿವಾರಗಳಂದು ರಜೆ ಇರುತ್ತದೆ)',
    hi: 'सोमवार - शनिवार: सुबह 09:30 - शाम 04:30 बजे (रविवार, दूसरे और चौथे शनिवार को बंद रहता है)'
  },
  send_inquiry: {
    en: 'Send an Inquiry',
    kn: 'ವಿಚಾರಣೆಯನ್ನು ಕಳುಹಿಸಿ',
    hi: 'एक पूछताछ भेजें'
  },
  your_name: {
    en: 'Your Full Name',
    kn: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು',
    hi: 'आपका पूरा नाम'
  },
  mobile_number: {
    en: 'Mobile Number',
    kn: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    hi: 'मोबाइल नंबर'
  },
  email_address: {
    en: 'Email Address',
    kn: 'ಇಮೇಲ್ ವಿಳಾಸ',
    hi: 'ईमेल पता'
  },
  msg_details: {
    en: 'Message / Inquiry Details',
    kn: 'ಸಂದೇಶ / ವಿಚಾರಣೆಯ ವಿವರಗಳು',
    hi: 'संदेश / पूछताछ विवरण'
  },
  msg_placeholder: {
    en: 'Describe your inquiry (e.g. interest rates details, gold loan valuation)...',
    kn: 'ನಿಮ್ಮ ವಿಚಾರಣೆಯನ್ನು ವಿವರಿಸಿ (ಉದಾಹರಣೆಗೆ ಬಡ್ಡಿದರದ ವಿವರಗಳು, ಚಿನ್ನದ ಸಾಲದ ಮೌಲ್ಯಮಾಪನ)...',
    hi: 'अपनी पूछताछ का वर्णन करें (जैसे ब्याज दर विवरण, स्वर्ण ऋण मूल्यांकन)...'
  },
  transmit_msg: {
    en: 'Transmit Inquiry Message',
    kn: 'ವಿಚಾರಣಾ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ',
    hi: 'पूछताछ संदेश भेजें'
  },
  inquiry_dispatched: {
    en: 'Inquiry Dispatched!',
    kn: 'ವಿಚಾರಣೆಯನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ!',
    hi: 'पूछताछ भेज दी गई है!'
  },
  inquiry_success_desc: {
    en: 'Thank you for contacting Indian Cooperative Credit Society. A relationship executive will contact you on your registered mobile number shortly.',
    kn: 'ಇಂಡಿಯನ್ ಕೋಆಪರೇಟಿವ್ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿಯನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ಸಂಬಂಧ ಅಧಿಕಾರಿ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
    hi: 'इंडियन कोऑपरेटिव क्रेडिट सोसाइटी से संपर्क करने के लिए धन्यवाद। एक संबंध अधिकारी जल्द ही आपके पंजीकृत मोबाइल नंबर पर आपसे संपर्क करेगा।'
  },
  submit_another: {
    en: 'Submit another message',
    kn: 'ಮತ್ತೊಂದು ಸಂದೇಶವನ್ನು ಸಲ್ಲಿಸಿ',
    hi: 'एक और संदेश भेजें'
  },

  // --- BranchLocator ---
  branches_title: {
    en: 'Branches',
    kn: 'ಶಾಖೆಗಳು',
    hi: 'शाखाएं'
  },
  locator_subtitle: {
    en: 'Cooperative Network Branch Locator',
    kn: 'ಸಹಕಾರಿ ಜಾಲದ ಶಾಖಾ ಶೋಧಕ',
    hi: 'सहकारी नेटवर्क शाखा लोकेटर'
  },
  locator_desc: {
    en: 'Find the nearest society office or deposit collection hub in your city.',
    kn: 'ನಿಮ್ಮ ನಗರದಲ್ಲಿನ ಹತ್ತಿರದ ಸೊಸೈಟಿ ಕಛೇರಿ ಅಥವಾ ಠೇವಣಿ ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರವನ್ನು ಹುಡುಕಿ.',
    hi: 'अपने शहर में निकटतम समिति कार्यालय या जमा संग्रह केंद्र खोजें।'
  },
  search_placeholder: {
    en: 'Search branch name, address, pin code...',
    kn: 'ಶಾಖೆಯ ಹೆಸರು, ವಿಳಾಸ, ಪಿನ್ ಕೋಡ್ ಹುಡುಕಿ...',
    hi: 'शाखा का नाम, पता, पिन कोड खोजें...'
  },
  all_states: {
    en: 'All States',
    kn: 'ಎಲ್ಲಾ ರಾಜ್ಯಗಳು',
    hi: 'सभी राज्य'
  },
  no_branches: {
    en: 'No cooperative branches found matching your filters.',
    kn: 'ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಹೊಂದುವ ಯಾವುದೇ ಸಹಕಾರಿ ಶಾಖೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.',
    hi: 'आपके फ़िल्टर से मेल खाने वाली कोई सहकारी शाखा नहीं मिली।'
  },
  central_hq_badge: {
    en: 'Central HQ',
    kn: 'ಕೇಂದ್ರ ಎಚ್.ಕ್ಯೂ',
    hi: 'केंद्रीय मुख्यालय'
  },

  // --- Calculators ---
  financial_tools: {
    en: 'Financial Tools',
    kn: 'ಹಣಕಾಸು ಪರಿಕರಗಳು',
    hi: 'वित्तीय उपकरण'
  },
  interactive_calcs: {
    en: 'Interactive Financial Calculators',
    kn: 'ಸಂವಾದಾತ್ಮಕ ಹಣಕಾಸು ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
    hi: 'इंटरैक्टिव वित्तीय कैलकुलेटर'
  },
  calcs_desc: {
    en: 'Map out your financial goals and estimate loan EMIs or investment maturity payouts with clear interest formulas.',
    kn: 'ನಿಮ್ಮ ಹಣಕಾಸಿನ ಗುರಿಗಳನ್ನು ರೂಪಿಸಿ ಮತ್ತು ಸ್ಪಷ್ಟ ಬಡ್ಡಿ ಸೂತ್ರಗಳೊಂದಿಗೆ ಸಾಲದ ಇಎಂಐಗಳು ಅಥವಾ ಹೂಡಿಕೆಯ ಮುಕ್ತಾಯದ ಪಾವತಿಗಳನ್ನು ಅಂದಾಜು ಮಾಡಿ.',
    hi: 'अपने वित्तीय लक्ष्यों की रूपरेखा तैयार करें और स्पष्ट ब्याज सूत्रों के साथ ऋण ईएमआई या निवेश परिपक्वता भुगतान का अनुमान लगाएं।'
  },
  loan_emi_tab: {
    en: 'Loan EMI',
    kn: 'ಸಾಲದ ಇಎಂಐ',
    hi: 'ऋण ईएमआई'
  },
  fd_tab: {
    en: 'Fixed Deposit (FD)',
    kn: 'ಸ್ಥಿರ ಠೇವಣಿ (FD)',
    hi: 'सावधि जमा (FD)'
  },
  rd_tab: {
    en: 'Recurring Deposit (RD)',
    kn: 'ಮರುಕಳಿಸುವ ಠೇವಣಿ (RD)',
    hi: 'आवर्ती जमा (RD)'
  },
  elig_tab: {
    en: 'Loan Eligibility',
    kn: 'ಸಾಲದ ಅರ್ಹತೆ',
    hi: 'ऋण पात्रता'
  },
  loan_principal: {
    en: 'Loan Principal',
    kn: 'ಸಾಲದ ಅಸಲು',
    hi: 'ऋण मूलधन'
  },
  interest_rate: {
    en: 'Interest Rate (% p.a.)',
    kn: 'ಬಡ್ಡಿದರ (ವಾರ್ಷಿಕ %)',
    hi: 'ब्याज दर (% वार्षिक)'
  },
  tenure_months: {
    en: 'Tenure (Months)',
    kn: 'ಅವಧಿ (ತಿಂಗಳುಗಳು)',
    hi: 'अवधि (महीने)'
  },
  deposit_amt: {
    en: 'Deposit Amount',
    kn: 'ಠೇವಣಿ ಮೊತ್ತ',
    hi: 'जमा राशि'
  },
  tenure_years: {
    en: 'Tenure (Years)',
    kn: 'ಅವಧಿ (ವರ್ಷಗಳು)',
    hi: 'अवधि (वर्ष)'
  },
  monthly_contrib: {
    en: 'Monthly Contribution',
    kn: 'ಮಾಸಿಕ ಕೊಡುಗೆ',
    hi: 'मासिक योगदान'
  },
  duration_years: {
    en: 'Duration (Years)',
    kn: 'ಅವಧಿ (ವರ್ಷಗಳು)',
    hi: 'अवधि (वर्ष)'
  },
  net_salary: {
    en: 'Net Monthly Salary',
    kn: 'ನಿವ್ವಳ ಮಾಸಿಕ ವೇತನ',
    hi: 'शुद्ध मासिक वेतन'
  },
  existing_emi: {
    en: 'Existing Monthly EMI Outlays',
    kn: 'ಪ್ರಸ್ತುತ ಮಾಸಿಕ ಇಎಂಐ ಹೊರಹರಿವು',
    hi: 'मौजूदा मासिक ईएमआई व्यय'
  },
  desired_tenure: {
    en: 'Loan Tenure Desired (Months)',
    kn: 'ಬಯಸಿದ ಸಾಲದ ಅವಧಿ (ತಿಂಗಳುಗಳು)',
    hi: 'वांछित ऋण अवधि (महीने)'
  },
  est_monthly_emi: {
    en: 'Estimated Monthly EMI',
    kn: 'ಅಂದಾಜು ಮಾಸಿಕ ಇಎಂಐ',
    hi: 'अनुमानित मासिक ईएमआई'
  },
  principal_amt: {
    en: 'Principal Amount:',
    kn: 'ಅಸಲು ಮೊತ್ತ:',
    hi: 'मूलधन राशि:'
  },
  total_interest: {
    en: 'Total Interest Payable:',
    kn: 'ಪಾವತಿಸಬೇಕಾದ ಒಟ್ಟು ಬಡ್ಡಿ:',
    hi: 'कुल देय ब्याज:'
  },
  total_payable: {
    en: 'Total Amount Payable:',
    kn: 'ಪಾವತಿಸಬೇಕಾದ ಒಟ್ಟು ಮೊತ್ತ:',
    hi: 'कुल देय राशि:'
  },
  emi_pie_info: {
    en: 'Interest constitutes a portion of the total loan repayment amount.',
    kn: 'ಬಡ್ಡಿಯು ಒಟ್ಟು ಸಾಲ ಮರುಪಾವತಿ ಮೊತ್ತದ ಒಂದು ಭಾಗವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.',
    hi: 'ब्याज कुल ऋण पुनर्भुगतान राशि के एक हिस्से का प्रतिनिधित्व करता है।'
  },
  maturity_wealth: {
    en: 'Maturity Wealth Value',
    kn: 'ಮುಕ್ತಾಯದ ಸಂಪತ್ತಿನ ಮೌಲ್ಯ',
    hi: 'परिपक्वता मूल्य'
  },
  invested_capital: {
    en: 'Invested Capital:',
    kn: 'ಹೂಡಿಕೆ ಮಾಡಿದ ಬಂಡವಾಳ:',
    hi: 'निवेशित पूंजी:'
  },
  compound_acquired: {
    en: 'Compound Interest Acquired:',
    kn: 'ಗಳಿಸಿದ ಚಕ್ರಬಡ್ಡಿ:',
    hi: 'अर्जित चक्रवृद्धि ब्याज:'
  },
  total_wealth: {
    en: 'Total Wealth Accumulation:',
    kn: 'ಒಟ್ಟು ಸಂಚಿತ ಸಂಪತ್ತು:',
    hi: 'कुल संचित संपत्ति:'
  },
  fd_rate_info: {
    en: 'Calculated with quarterly compounding, delivering better returns than simple monthly interest schemes.',
    kn: 'ತ್ರೈಮಾಸಿಕ ಚಕ್ರಬಡ್ಡಿಯೊಂದಿಗೆ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ, ಇದು ಮಾಸಿಕ ಬಡ್ಡಿ ಯೋಜನೆಗಳಿಗಿಂತ ಉತ್ತಮ ಆದಾಯ ನೀಡುತ್ತದೆ.',
    hi: 'त्रैमासिक चक्रवृद्धि ब्याज के साथ परिकलित, जो मासिक ब्याज योजनाओं की तुलना में बेहतर रिटर्न देता है।'
  },
  est_wealth_maturity: {
    en: 'Estimated Wealth Maturity',
    kn: 'ಅಂದಾಜು ಸಂಪತ್ತಿನ ಮುಕ್ತಾಯ',
    hi: 'अनुमानित परिपक्वता मूल्य'
  },
  total_outlay: {
    en: 'Total Outlay Deposited:',
    kn: 'ಠೇವಣಿ ಮಾಡಿದ ಒಟ್ಟು ಮೊತ್ತ:',
    hi: 'कुल जमा राशि:'
  },
  interest_earned: {
    en: 'Interest Returns Earned:',
    kn: 'ಗಳಿಸಿದ ಬಡ್ಡಿ ಆದಾಯ:',
    hi: 'अर्जित ब्याज रिटर्न:'
  },
  maturity_value: {
    en: 'Maturity Collection Value:',
    kn: 'ಮುಕ್ತಾಯದ ಸಂಗ್ರಹಣಾ ಮೌಲ್ಯ:',
    hi: 'परिपक्वता संग्रह मूल्य:'
  },
  rd_auto_info: {
    en: 'Auto-deduct instructions can be simulated inside your dashboard profile.',
    kn: 'ಸ್ವಯಂ-ಕಡಿತಗೊಳಿಸುವಿಕೆಯ ಸೂಚನೆಗಳನ್ನು ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರೊಫೈಲ್‌ನಲ್ಲಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಬಹುದು.',
    hi: 'ऑटो-डेबिट निर्देशों को आपके डैशबोर्ड प्रोफाइल के भीतर सिम्युलेट किया जा सकता है।'
  },
  est_eligible_loan: {
    en: 'Estimated Eligible Loan Sum',
    kn: 'ಅಂದಾಜು ಅರ್ಹ ಸಾಲದ ಮೊತ್ತ',
    hi: 'अनुमानित पात्र ऋण राशि'
  },
  max_allowed_emi: {
    en: 'Maximum Allowed EMI cap:',
    kn: 'ಗರಿಷ್ಠ ಅನುಮತಿಸಲಾದ ಇಎಂಐ ಮಿತಿ:',
    hi: 'अधिकतम अनुमत ईएमआई सीमा:'
  },
  debt_to_income: {
    en: 'Debt-to-Income Ratio:',
    kn: 'ಸಾಲ ಮತ್ತು ಆದಾಯದ ಅನುಪಾತ:',
    hi: 'ऋण-से-आय अनुपात:'
  },
  loan_status: {
    en: 'Status:',
    kn: 'ಸ್ಥಿತಿ:',
    hi: 'स्थिति:'
  },
  loan_eligible: {
    en: 'Eligible to Apply',
    kn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಅರ್ಹರಾಗಿದ್ದೀರಿ',
    hi: 'आवेदन करने के लिए पात्र'
  },
  loan_leveraged: {
    en: 'Leveraged Debt Cap Reached',
    kn: 'ಗರಿಷ್ಠ ಸಾಲದ ಮಿತಿ ತಲುಪಿದೆ',
    hi: 'ऋण की अधिकतम सीमा पूरी हो चुकी है'
  },
  loan_verify_info: {
    en: 'Subject to documentation audits, property appraisals, or gold assay valuations at branch counters.',
    kn: 'ದಾಖಲೆಗಳ ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಆಸ್ತಿ ಮೌಲ್ಯಮಾಪನ ಅಥವಾ ಶಾಖೆಯ ಕೌಂಟರ್‌ಗಳಲ್ಲಿ ಚಿನ್ನದ ಶುದ್ಧತೆ ಪರೀಕ್ಷೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.',
    hi: 'शाखा काउंटरों पर दस्तावेजों के ऑडिट, संपत्ति के मूल्यांकन या सोने की शुद्धता की जांच के अधीन।'
  },

  // --- AIChatAssistant ---
  welcome_msg: {
    en: 'Namaste! Welcome to Indian Cooperative Credit Society Helpdesk. How may I assist you today with deposits, gold loans, or membership shares?',
    kn: 'ನಮಸ್ತೆ! ಇಂಡಿಯನ್ ಕೋಆಪರೇಟಿವ್ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿ ಸಹಾಯವಾಣಿಗೆ ಸುಸ್ವಾಗತ. ಠೇವಣಿಗಳು, ಚಿನ್ನದ ಸಾಲಗಳು ಅಥವಾ ಸದಸ್ಯತ್ವ ಷೇರುಗಳ ಕುರಿತು ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
    hi: 'नमस्ते! इंडियन कोऑपरेटिव क्रेडिट सोसाइटी हेल्पडेस्क में आपका स्वागत है। जमा, स्वर्ण ऋण या सदस्यता शेयरों के संबंध में आज मैं आपकी क्या सहायता कर सकता हूँ?'
  },
  chat_placeholder: {
    en: 'Ask anything about cooperative services...',
    kn: 'ಸಹಕಾರಿ ಸೇವೆಗಳ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ...',
    hi: 'सहकारी सेवाओं के बारे में कुछ भी पूछें...'
  },
  chat_suggest_fd: {
    en: 'FD Interest Rates',
    kn: 'ಎಫ್‌ಡಿ ಬಡ್ಡಿದರಗಳು',
    hi: 'सावधि जमा ब्याज दरें'
  },
  chat_suggest_gold: {
    en: 'Gold Loan Details',
    kn: 'ಚಿನ್ನದ ಸಾಲದ ವಿವರಗಳು',
    hi: 'स्वर्ण ऋण विवरण'
  },
  chat_suggest_member: {
    en: 'Become a Member',
    kn: 'ಸದಸ್ಯರಾಗಿ',
    hi: 'सदस्य बनें'
  },
  chat_suggest_hours: {
    en: 'Branch Hours',
    kn: 'ಶಾಖೆಯ ಸಮಯ',
    hi: 'शाखा का समय'
  },
  chat_title: {
    en: 'ICCS Digital Assistant',
    kn: 'ಐಸಿಸಿಎಸ್ ಡಿಜಿಟಲ್ ಸಹಾಯಕ',
    hi: 'आईसीसीएस डिजिटल सहायक'
  },
  chat_status: {
    en: 'Online Helpdesk • Simulated',
    kn: 'ಆನ್‌ಲೈನ್ ಸಹಾಯವಾಣಿ • ಸಿಮ್ಯುಲೇಟೆಡ್',
    hi: 'ऑनलाइन हेल्पडेस्क • सिम्युलेटेड'
  },
  chat_resp_default: {
    en: "I apologize, but I didn't quite catch that. You can ask me about 'Fixed Deposit rates', 'how to apply for Gold Loans', 'society working hours', or 'membership dividend shares'.",
    kn: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅದು ಸರಿಯಾಗಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ನೀವು ನನ್ನಲ್ಲಿ 'ಸ್ಥಿರ ಠೇವಣಿ ದರಗಳು', 'ಚಿನ್ನದ ಸಾಲಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ', 'ಸೊಸೈಟಿ ಕೆಲಸದ ಸಮಯ' ಅಥವಾ 'ಸದಸ್ಯತ್ವ ಲಾಭಾಂಶ ಷೇರುಗಳು' ಬಗ್ಗೆ ಕೇಳಬಹುದು.",
    hi: "क्षमा करें, मैं इसे पूरी तरह समझ नहीं पाया। आप मुझसे 'सावधि जमा दरें', 'स्वर्ण ऋण के लिए आवेदन कैसे करें', 'समिति के कार्य घंटे' या 'सदस्यता लाभांश शेयर' के बारे में पूछ सकते हैं।"
  },
  chat_resp_fd: {
    en: 'We offer a peak Fixed Deposit (FD) interest rate of 8.25% p.a. for general members, and an additional +0.50% premium (total 8.75% p.a.) for Senior Citizens and co-ownership shareholders. Interest is compounded quarterly.',
    kn: 'ನಾವು ಸಾಮಾನ್ಯ ಸದಸ್ಯರಿಗೆ ವಾರ್ಷಿಕ 8.25% ರಷ್ಟು ಗರಿಷ್ಠ ಸ್ಥಿರ ಠೇವಣಿ (FD) ಬಡ್ಡಿದರವನ್ನು ನೀಡುತ್ತೇವೆ ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರು ಹಾಗೂ ಸಹ-ಮಾಲೀಕತ್ವದ ಷೇರುದಾರರಿಗೆ ಹೆಚ್ಚುವರಿ +0.50% ಪ್ರೀಮಿಯಂ (ಒಟ್ಟು 8.75%) ಬಡ್ಡಿದರವನ್ನು ನೀಡುತ್ತೇವೆ. ಬಡ್ಡಿಯನ್ನು ತ್ರೈಮಾಸಿಕವಾಗಿ ಸಂಯೋಜಿಸಲಾಗುತ್ತದೆ.',
    hi: 'हम सामान्य सदस्यों के लिए 8.25% वार्षिक की अधिकतम सावधि जमा (FD) ब्याज दर प्रदान करते हैं, और वरिष्ठ नागरिकों तथा सह-स्वामित्व शेयरधारकों के लिए अतिरिक्त +0.50% प्रीमियम (कुल 8.75% वार्षिक) प्रदान करते हैं। ब्याज त्रैमासिक रूप से संयोजित होता है।'
  },
  chat_resp_gold: {
    en: 'Our Gold Loans are sanctioned within 30 minutes at low cooperative rates starting from 8.50% p.a. Please carry your gold ornaments and KYC documents (Aadhaar & PAN) to the nearest branch for safe asset appraisals.',
    kn: 'ನಮ್ಮ ಚಿನ್ನದ ಸಾಲಗಳನ್ನು ವಾರ್ಷಿಕ 8.50% ರಿಂದ ಪ್ರಾರಂಭವಾಗುವ ಕಡಿಮೆ ಸಹಕಾರಿ ದರಗಳಲ್ಲಿ 30 ನಿಮಿಷಗಳಲ್ಲಿ ಮಂಜೂರು ಮಾಡಲಾಗುತ್ತದೆ. ಸುರಕ್ಷಿತ ಆಸ್ತಿ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ನಿಮ್ಮ ಚಿನ್ನದ ಆಭರಣಗಳು ಮತ್ತು ಕೆವೈಸಿ ದಾಖಲೆಗಳನ್ನು (ಆಧಾರ್ ಮತ್ತು ಪ್ಯಾನ್) ಹತ್ತಿರದ ಶಾಖೆಗೆ ಕೊಂಡೊಯ್ಯಿರಿ.',
    hi: 'हमारे स्वर्ण ऋण 8.50% वार्षिक से शुरू होने वाली कम सहकारी दरों पर 30 मिनट के भीतर स्वीकृत किए जाते हैं। सुरक्षित मूल्यांकन के लिए कृपया अपने सोने के आभूषण और केवाईसी दस्तावेज (आधार और पैन) निकटतम शाखा में ले जाएं।'
  },
  chat_resp_member: {
    en: 'You can become an ICCS shareholder member by investing a minimum of ₹10,000 in society share capital. Benefits include democratic voting rights, up to 12% annual dividends, and subsidized loan rates!',
    kn: 'ಸೊಸೈಟಿಯ ಷೇರು ಬಂಡವಾಳದಲ್ಲಿ ಕನಿಷ್ಠ ₹10,000 ಹೂಡಿಕೆ ಮಾಡುವ ಮೂಲಕ ನೀವು ಐಸಿಸಿಎಸ್ ಷೇರುದಾರ ಸದಸ್ಯರಾಗಬಹುದು. ಪ್ರಯೋಜನಗಳಲ್ಲಿ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮತದಾನದ ಹಕ್ಕುಗಳು, ವಾರ್ಷಿಕ 12% ವರೆಗಿನ ಲಾಭಾಂಶಗಳು ಮತ್ತು ರಿಯಾಯಿತಿ ದರದ ಸಾಲಗಳು ಸೇರಿವೆ!',
    hi: 'आप समिति की शेयर पूंजी में न्यूनतम ₹10,000 का निवेश करके आईसीसीएस शेयरधारक सदस्य बन सकते हैं। लाभों में लोकतांत्रिक मतदान अधिकार, 12% वार्षिक तक लाभांश और रियायती ऋण दरें शामिल हैं!'
  },
  chat_resp_hours: {
    en: 'Our branches operate from Monday to Saturday, 09:30 AM to 04:30 PM. Please note that we are closed on Sundays, national holidays, and the 2nd & 4th Saturdays of every month.',
    kn: 'ನಮ್ಮ ಶಾಖೆಗಳು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ಬೆಳಿಗ್ಗೆ 09:30 ರಿಂದ ಸಂಜೆ 04:30 ರವರೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಭಾನುವಾರಗಳು, ರಾಷ್ಟ್ರೀಯ ರಜಾದಿನಗಳು ಮತ್ತು ಪ್ರತಿ ತಿಂಗಳ 2ನೇ ಮತ್ತು 4ನೇ ಶನಿವಾರಗಳಂದು ರಜೆ ಇರುತ್ತದೆ ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ.',
    hi: 'हमारी शाखाएं सोमवार से शनिवार तक सुबह 09:30 से शाम 04:30 बजे तक काम करती हैं। कृपया ध्यान दें कि हम रविवार, राष्ट्रीय छुट्टियों और हर महीने के दूसरे और चौथे शनिवार को बंद रहते हैं।'
  },
  chat_resp_kyc: {
    en: "You can complete your e-KYC document uploads directly from the 'e-KYC Services' section in the Member Dashboard by submitting digital copies of your Aadhaar Card and PAN Card.",
    kn: "ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಪ್ಯಾನ್ ಕಾರ್ಡ್‌ನ ಡಿಜಿಟಲ್ ಪ್ರತಿಗಳನ್ನು ಸಲ್ಲಿಸುವ ಮೂಲಕ ಸದಸ್ಯರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿರುವ 'ಇ-ಕೆವೈಸಿ ಸೇವೆಗಳು' ವಿಭಾಗದಿಂದ ನೇರವಾಗಿ ನಿಮ್ಮ ಇ-ಕೆವೈಸಿ ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್ಲೋಡ್ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಬಹುದು.",
    hi: "आप अपने आधार कार्ड और पैन कार्ड की डिजिटल प्रतियां जमा करके सदस्य डैशबोर्ड में 'ई-केवाईसी सेवाएं' अनुभाग से सीधे अपना ई-केवाईसी दस्तावेज अपलोड पूरा कर सकते हैं।"
  },
  chat_resp_hello: {
    en: 'Hello! How can I help you today? Ask me about FD interest rates, gold loans, or membership profiles.',
    kn: 'ಹಲೋ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ? ಎಫ್‌ಡಿ ಬಡ್ಡಿದರಗಳು, ಚಿನ್ನದ ಸಾಲಗಳು ಅಥವಾ ಸದಸ್ಯತ್ವ ಪ್ರೊಫೈಲ್‌ಗಳ ಬಗ್ಗೆ ನನ್ನನ್ನು ಕೇಳಿ.',
    hi: 'नमस्कार! आज मैं आपकी क्या सहायता कर सकता हूँ? मुझसे एफडी ब्याज दरों, स्वर्ण ऋण या सदस्यता प्रोफाइल के बारे में पूछें।'
  },

  // --- Login Page ---
  secure_banking: {
    en: 'Secure Cooperative Banking',
    kn: 'ಸುರಕ್ಷಿತ ಸಹಕಾರಿ ಬ್ಯಾಂಕಿಂಗ್',
    hi: 'सुरक्षित सहकारी बैंकिंग'
  },
  secure_banking_desc: {
    en: 'Log in to subscribe to high interest fixed deposits, disburse gold loans directly to your savings, or complete Aadhaar e-KYC validation.',
    kn: 'ಹೆಚ್ಚಿನ ಬಡ್ಡಿಯ ಸ್ಥಿರ ಠೇವಣಿಗಳಿಗೆ ಚಂದಾದಾರರಾಗಲು, ಚಿನ್ನದ ಸಾಲಗಳನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಉಳಿತಾಯ ಖಾತೆಗೆ ಪಡೆಯಲು ಅಥವಾ ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ.',
    hi: 'उच्च ब्याज सावधि जमा की सदस्यता लेने, स्वर्ण ऋण सीधे अपने बचत खाते में प्राप्त करने या आधार ई-KYC सत्यापन पूरा करने के लिए लॉगिन करें।'
  },
  iso_cert: {
    en: 'Certified ISO-27001 secure credentials database.',
    kn: 'ಪ್ರಮಾಣೀಕೃತ ISO-27001 ಸುರಕ್ಷಿತ ರುಜುವಾತುಗಳ ಡೇಟಾಬೇಸ್.',
    hi: 'प्रमाणित आईएसओ-27001 सुरक्षित क्रेडेंशियल डेटाबेस।'
  },
  govt_regd_no: {
    en: 'Govt Regd No: MSCS/CR/312/2012',
    kn: 'ಸರ್ಕಾರಿ ನೋಂದಣಿ ಸಂಖ್ಯೆ: MSCS/CR/312/2012',
    hi: 'सरकारी पंजीकरण संख्या: MSCS/CR/312/2012'
  },
  welcome_back: {
    en: 'Welcome Back',
    kn: 'ಮರಳಿ ಸುಸ್ವಾಗತ',
    hi: 'स्वागत हे'
  },
  access_portal: {
    en: 'Access Member Portal',
    kn: 'ಸದಸ್ಯರ ಪೋರ್ಟಲ್ ಪ್ರವೇಶಿಸಿ',
    hi: 'सदस्य पोर्टल तक पहुंचें'
  },
  password_login: {
    en: 'Password Login',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ಲಾಗಿನ್',
    hi: 'पासवर्ड लॉगिन'
  },
  mobile_otp: {
    en: 'Mobile OTP',
    kn: 'ಮೊಬೈಲ್ ಒಟಿಪಿ',
    hi: 'मोबाइल ओटीपी'
  },
  member_id_label: {
    en: 'Member ID or Email',
    kn: 'ಸದಸ್ಯರ ಐಡಿ ಅಥವಾ ಇಮೇಲ್',
    hi: 'सदस्य आईडी या ईमेल'
  },
  password_label: {
    en: 'Secure Password',
    kn: 'ಸುರಕ್ಷಿತ ಪಾಸ್‌ವರ್ಡ್',
    hi: 'सुरक्षित पासवर्ड'
  },
  forgot_password: {
    en: 'Forgot Password?',
    kn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?',
    hi: 'पासवर्ड भूल गए?'
  },
  remember_me: {
    en: 'Remember Me on this device',
    kn: 'ಈ ಸಾಧನದಲ್ಲಿ ನನ್ನನ್ನು ನೆನಪಿನಲ್ಲಿಡಿ',
    hi: 'इस डिवाइस पर मुझे याद रखें'
  },
  sign_in_btn: {
    en: 'Sign In To Account',
    kn: 'ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
    hi: 'खाते में साइन इन करें'
  },
  authenticating: {
    en: 'Authenticating...',
    kn: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    hi: 'प्रमाणित किया जा रहा है...'
  },
  registered_mobile: {
    en: 'Registered Mobile Number',
    kn: 'ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    hi: 'पंजीकृत मोबाइल नंबर'
  },
  send_otp_btn: {
    en: 'Send Verification OTP',
    kn: 'ಪರಿಶೀಲನಾ ಒಟಿಪಿ ಕಳುಹಿಸಿ',
    hi: 'सत्यापन ओटीपी भेजें'
  },
  sending_otp: {
    en: 'Sending OTP...',
    kn: 'ಒಟಿಪಿ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
    hi: 'ओटीपी भेजा जा रहा है...'
  },
  otp_code_label: {
    en: '6-Digit Verification Code',
    kn: '6-ಅಂಕಿಯ ಪರಿಶೀಲನಾ ಕೋಡ್',
    hi: '6-अंकीय सत्यापन कोड'
  },
  verify_otp_btn: {
    en: 'Verify OTP & Log In',
    kn: 'ಒಟಿಪಿ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗ್ ಇನ್ ಮಾಡಿ',
    hi: 'ओटीपी सत्यापित करें और लॉगिन करें'
  },
  verifying_otp: {
    en: 'Verifying OTP...',
    kn: 'ಒಟಿಪಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    hi: 'ओटीपी सत्यापित किया जा रहा है...'
  },
  or_continue_with: {
    en: 'Or Continue With',
    kn: 'ಅಥವಾ ಇದರೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ',
    hi: 'या जारी रखें'
  },
  google_login_btn: {
    en: 'Simulated Google Login',
    kn: 'ಸಿಮ್ಯುಲೇಟೆಡ್ ಗೂಗಲ್ ಲಾಗಿನ್',
    hi: 'सिम्युलेटेड गूगल लॉगिन'
  },
  google_fail: {
    en: 'Google simulation failure.',
    kn: 'ಗೂಗಲ್ ಸಿಮ್ಯುಲೇಶನ್ ವೈಫಲ್ಯ.',
    hi: 'गूगल सिमुलेशन विफलता।'
  },
  invalid_credentials: {
    en: 'Invalid Credentials. Please use email: member@iccs.in and password: password or click OTP/Google demo shortcuts.',
    kn: 'ಅಮಾನ್ಯ ರುಜುವಾತುಗಳು. ದಯವಿಟ್ಟು ಇಮೇಲ್: member@iccs.in ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್: password ಬಳಸಿ ಅಥವಾ ಒಟಿಪಿ/ಗೂಗಲ್ ಶಾರ್ಟ್‌ಕಟ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.',
    hi: 'अमान्य क्रेडेंशियल। कृपया ईमेल: member@iccs.in और पासवर्ड: password का उपयोग करें या ओटीपी/गूगल शॉर्टकट पर क्लिक करें।'
  },
  invalid_mobile: {
    en: 'Please enter a valid 10-digit mobile number.',
    kn: 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.',
    hi: 'कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।'
  },
  otp_dispatch_error: {
    en: 'Could not dispatch OTP verification.',
    kn: 'ಒಟಿಪಿ ಪರಿಶೀಲನೆಯನ್ನು ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.',
    hi: 'ओटीपी सत्यापन नहीं भेजा जा सका।'
  },
  invalid_otp_len: {
    en: 'Please enter a valid 6-digit code.',
    kn: 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 6-ಅಂಕಿಯ ಕೋಡ್ ಅನ್ನು ನಮೂದಿಸಿ.',
    hi: 'कृपया एक मान्य 6-अंकीय कोड दर्ज करें।'
  },
  invalid_otp_val: {
    en: 'Invalid OTP Verification code. Please enter 123456 or 111111 for simulated access.',
    kn: 'ಅಮಾನ್ಯ ಒಟಿಪಿ ಕೋಡ್. ಸಿಮ್ಯುಲೇಟೆಡ್ ಪ್ರವೇಶಕ್ಕಾಗಿ ದಯವಿಟ್ಟು 123456 ಅಥವಾ 111111 ಅನ್ನು ನಮೂದಿಸಿ.',
    hi: 'अमान्य ओटीपी कोड। सिम्युलेटेड पहुंच के लिए कृपया 123456 या 111111 दर्ज करें।'
  },
  otp_verify_error: {
    en: 'Could not verify OTP token.',
    kn: 'ಒಟಿಪಿ ಟೋಕನ್ ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.',
    hi: 'ओटीपी टोकन सत्यापित नहीं किया जा सका।'
  },
  new_to_society: {
    en: 'New to the Credit Society? Please contact your nearest cooperative branch to open an account.',
    kn: 'ಸಹಕಾರ ಸಂಘಕ್ಕೆ ಹೊಸಬರೇ? ಖಾತೆ ತೆರೆಯಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹತ್ತಿರದ ಸಹಕಾರಿ ಶಾಖೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    hi: 'सहकारी समिति में नए हैं? खाता खोलने के लिए कृपया अपने नजदीकी सहकारी शाखा से संपर्क करें।'
  },

  // --- Inline App sections ---
  media_title: {
    en: 'Media & Press Hub',
    kn: 'ಮಾಧ್ಯಮ ಮತ್ತು ಪತ್ರಿಕಾ ಕೇಂದ್ರ',
    hi: 'मीडिया और प्रेस हब'
  },
  media_subtitle: {
    en: 'Society Bulletins & Press Coverage',
    kn: 'ಸೊಸೈಟಿ ಬುಲೆಟಿನ್ಗಳು ಮತ್ತು ಪತ್ರಿಕಾ ಪ್ರಸಾರ',
    hi: 'सोसाइटी बुलेटिन और प्रेस कवरेज'
  },
  media_desc: {
    en: 'Stay updated with our dividend declarations, financial literacy camps, branch inaugurations, and CSR community drives.',
    kn: 'ನಮ್ಮ ಲಾಭಾಂಶ ಘೋಷಣೆಗಳು, ಹಣಕಾಸು ಸಾಕ್ಷರತಾ ಶಿಬಿರಗಳು, ಶಾಖಾ ಉದ್ಘಾಟನೆಗಳು ಮತ್ತು ಸಿಎಸ್ಆರ್ ಸಮುದಾಯ ಡ್ರೈವ್ಗಳೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ.',
    hi: 'हमारे लाभांश घोषणाओं, वित्तीय साक्षरता शिविरों, शाखा उद्घाटनों और सीएसआर सामुदायिक पहलों के साथ अपडेट रहें।'
  },
  media_art1_title: {
    en: '8.25% FD Interest Yield Launch Press Release',
    kn: '8.25% ಎಫ್‌ಡಿ ಬಡ್ಡಿದರ ಹೆಚ್ಚಳದ ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ',
    hi: '8.25% एफडी ब्याज दर वृद्धि की प्रेस विज्ञप्ति'
  },
  media_art1_date: {
    en: 'May 20, 2026',
    kn: 'ಮೇ 20, 2026',
    hi: '20 मई, 2026'
  },
  media_art1_desc: {
    en: "Official announcement detailing the society's decision to hike standard interest yields to 8.25% p.a. (8.75% for senior citizen members) compiled under Central auditing guidelines.",
    kn: 'ಕೇಂದ್ರ ಲೆಕ್ಕಪರಿಶೋಧನಾ ಮಾರ್ಗಸೂಚಿಗಳ ಅಡಿಯಲ್ಲಿ ಸಂಕಲಿಸಲಾದ ಸಾಮಾನ್ಯ ಬಡ್ಡಿ ದರಗಳನ್ನು ವಾರ್ಷಿಕ 8.25% ಕ್ಕೆ (ಹಿರಿಯ ನಾಗರಿಕ ಸದಸ್ಯರಿಗೆ 8.75%) ಹೆಚ್ಚಿಸುವ ಸೊಸೈಟಿಯ ಅಧಿಕೃತ ಪ್ರಕಟಣೆ.',
    hi: 'केंद्रीय ऑडिटिंग दिशानिर्देशों के तहत संकलित सामान्य ब्याज दरों को 8.25% वार्षिक (वरिष्ठ नागरिक सदस्यों के लिए 8.75%) तक बढ़ाने की समिति की आधिकारिक घोषणा।'
  },
  media_art1_src: {
    en: 'Financial Chronicle',
    kn: 'ಫೈನಾನ್ಷಿಯಲ್ ಕ್ರಾನಿಕಲ್',
    hi: 'फाइनेंशियल क्रॉनिकल'
  },
  media_art2_title: {
    en: 'Micro-Entrepreneur Support Camp in Gomti Nagar',
    kn: 'ಗೋಮತಿ ನಗರದಲ್ಲಿ ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಿಗಳ ಬೆಂಬಲ ಶಿಬಿರ',
    hi: 'गोमती नगर में सूक्ष्म-उद्यमी सहायता शिविर'
  },
  media_art2_date: {
    en: 'May 12, 2026',
    kn: 'ಮೇ 12, 2026',
    hi: '12 मई, 2026'
  },
  media_art2_desc: {
    en: 'ICCS launched a subsidized credit disburser drive supporting over 200+ local women-owned shops with collateral-free commercial loans.',
    kn: 'ಐಸಿಸಿಎಸ್ ವತಿಯಿಂದ 200 ಕ್ಕೂ ಹೆಚ್ಚು ಸ್ಥಳೀಯ ಮಹಿಳಾ ಒಡೆತನದ ಅಂಗಡಿಗಳಿಗೆ ಜಾಮೀನು ರಹಿತ ವಾಣಿಜ್ಯ ಸಾಲಗಳನ್ನು ನೀಡುವ ಸಬ್ಸಿಡಿ ಸಾಲ ವಿತರಣಾ ಅಭಿಯಾನವನ್ನು ಪ್ರಾರಂಭಿಸಲಾಯಿತು.',
    hi: 'आईसीसीएस द्वारा 200 से अधिक स्थानीय महिला स्वामित्व वाली दुकानों को बिना किसी जमानत के व्यावसायिक ऋण देने के लिए एक रियायती ऋण वितरण अभियान शुरू किया गया।'
  },
  media_art2_src: {
    en: 'Cooperative Daily',
    kn: 'ಕೋಆಪರೇಟಿವ್ ಡೈಲಿ',
    hi: 'कोऑपरेटिव डेली'
  },
  media_art3_title: {
    en: 'Central Registrar Audit Declares Excellent Liquidity Score',
    kn: 'ಕೇಂದ್ರ ರಿಜಿಸ್ಟ್ರಾರ್ ಆಡಿಟ್ ಅತ್ಯುತ್ತಮ ದ್ರವ್ಯತೆ ಸ್ಕೋರ್ ಘೋಷಿಸಿದೆ',
    hi: 'केंद्रीय रजिस्ट्रार ऑडिट ने उत्कृष्ट तरलता स्कोर घोषित किया'
  },
  media_art3_date: {
    en: 'April 28, 2026',
    kn: 'ಏಪ್ರಿಲ್ 28, 2026',
    hi: '28 अप्रैल, 2026'
  },
  media_art3_desc: {
    en: 'Annual government inspection completed successfully. ICCS maintains a capital reserve ratio of 12.5%, surpassing regulatory thresholds.',
    kn: 'ವಾರ್ಷಿಕ ಸರ್ಕಾರಿ ತಪಾಸಣೆ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ. ಐಸಿಸಿಎಸ್ ನಿಯಂತ್ರಕ ಮಿತಿಗಳನ್ನು ಮೀರಿ 12.5% ಬಂಡವಾಳ ಮೀಸಲು ಅನುಪಾತವನ್ನು ಕಾಯ್ದುಕೊಂಡಿದೆ.',
    hi: 'वार्षिक सरकारी निरीक्षण सफलतापूर्वक पूरा हुआ। आईसीसीएस नियामक सीमा से अधिक 12.5% का पूंजी आरक्षित अनुपात बनाए रखता है।'
  },
  media_art3_src: {
    en: 'Delhi Times Business',
    kn: 'ದೆಹಲಿ ಟೈಮ್ಸ್ ಬಿಸಿನೆಸ್',
    hi: 'दिल्ली टाइम्स बिजनेस'
  },
  about_title: {
    en: 'About Our Cooperative',
    kn: 'ನಮ್ಮ ಸಹಕಾರಿ ಸಂಸ್ಥೆಯ ಬಗ್ಗೆ',
    hi: 'हमारी सहकारी के बारे में'
  },
  about_subtitle: {
    en: 'Our Heritage & Trust',
    kn: 'ನಮ್ಮ ಪರಂಪರೆ ಮತ್ತು ವಿಶ್ವಾಸ',
    hi: 'हमारी विरासत और विश्वास'
  },
  about_desc: {
    en: 'Established under Multi-State Cooperative Societies statutes, the Indian Cooperative Credit Society Limited is a premier financial institution. We empower over 50,000+ members through high dividend-yielding deposits and subsidized micro-credit channels.',
    kn: 'ಮಲ್ಟಿ-ಸ್ಟೇಟ್ ಸಹಕಾರ ಸಂಘಗಳ ಕಾಯ್ದೆಯಡಿ ಸ್ಥಾಪಿತವಾದ ಇಂಡಿಯನ್ ಕೋಆಪರೇಟಿವ್ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿ ಲಿಮಿಟೆಡ್ ಒಂದು ಪ್ರಮುಖ ಹಣಕಾಸು ಸಂಸ್ಥೆಯಾಗಿದೆ. ಹೆಚ್ಚಿನ ಲಾಭಾಂಶ ನೀಡುವ ಠೇವಣಿಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿ ಮೈಕ್ರೋ-ಕ್ರೆಡಿಟ್ ಚಾನೆಲ್ಗಳ ಮೂಲಕ ನಾವು 50,000 ಕ್ಕೂ ಹೆಚ್ಚು ಸದಸ್ಯರನ್ನು ಸಬಲಗೊಳಿಸುತ್ತೇವೆ.',
    hi: 'बहु-राज्य सहकारी समिति अधिनियम के तहत स्थापित, इंडियन कोऑपरेटिव क्रेडिट सोसाइटी लिमिटेड एक प्रमुख वित्तीय संस्थान है। हम उच्च लाभांश देने वाली जमाओं और रियायती सूक्ष्म-ऋण चैनलों के माध्यम से 50,000+ से अधिक सदस्यों को सशक्त बनाते हैं।'
  },
  board_governance: {
    en: 'Board of Governance',
    kn: 'ಆಡಳಿತ ಮಂಡಳಿ',
    hi: 'शासन बोर्ड'
  },
  board_c_name: {
    en: 'Shri Rajesh Kumar Sharma',
    kn: 'ಶ್ರೀ ರಾಜೇಶ್ ಕುಮಾರ್ ಶರ್ಮಾ',
    hi: 'श्री राजेश कुमार शर्मा'
  },
  board_c_role: {
    en: 'Chairman',
    kn: 'ಅಧ್ಯಕ್ಷರು',
    hi: 'अध्यक्ष'
  },
  board_c_bio: {
    en: 'Over 25 years of cooperative credit experience. Leading strategic expansion on PAN India scale.',
    kn: 'ಸಹಕಾರಿ ಸಾಲ ರಂಗದಲ್ಲಿ 25 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ಅನುಭವ. ಪ್ಯಾನ್ ಇಂಡಿಯಾ ಮಟ್ಟದಲ್ಲಿ ವ್ಯೂಹಾತ್ಮಕ ವಿಸ್ತರಣೆಯ ನೇತೃತ್ವ ವಹಿಸಿದ್ದಾರೆ.',
    hi: 'सहकारी ऋण में 25 से अधिक वर्षों का अनुभव। अखिल भारतीय स्तर पर रणनीतिक विस्तार का नेतृत्व कर रहे हैं।'
  },
  board_vc_name: {
    en: 'Dr. Sunita Devi Yadav',
    kn: 'ಡಾ. ಸುನೀತಾ ದೇವಿ ಯಾದವ್',
    hi: 'डॉ. सुनीता देवी यादव'
  },
  board_vc_role: {
    en: 'Vice Chairperson',
    kn: 'ಉಪಾಧ್ಯಕ್ಷರು',
    hi: 'उपाध्यक्ष'
  },
  board_vc_bio: {
    en: 'Academician and micro-finance expert. Overseeing rural literacy and development programs.',
    kn: 'ಶಿಕ್ಷಣ ತಜ್ಞೆ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಹಣಕಾಸು ತಜ್ಞೆ. ಗ್ರಾಮೀಣ ಸಾಕ್ಷರತೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸುತ್ತಿದ್ದಾರೆ.',
    hi: 'शिक्षाविद् और सूक्ष्म-वित्त विशेषज्ञ। ग्रामीण साक्षरता और विकास कार्यक्रमों की देखरेख कर रही हैं।'
  },
  board_md_name: {
    en: 'Shri Anirudh R. Deshmukh',
    kn: 'ಶ್ರೀ ಅನಿರುದ್ಧ ಆರ್. ದೇಶಮುಖ್',
    hi: 'श्री अनिरुद्ध आर. देशमुख'
  },
  board_md_role: {
    en: 'Managing Director',
    kn: 'ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು',
    hi: 'प्रबंध निदेशक'
  },
  board_md_bio: {
    en: 'Fintech pioneer and risk manager. Directing the bank digital transition and ledger compliance.',
    kn: 'ಫಿನ್ಟೆಕ್ ಪ್ರವರ್ತಕ ಮತ್ತು ಅಪಾಯ ನಿರ್ವಹಣಾ ತಜ್ಞರು. ಬ್ಯಾಂಕಿನ ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆ ಮತ್ತು ಲೆಡ್ಜರ್ ಅನುಸರಣೆಯ ನಿರ್ದೇಶನ ನೀಡುತ್ತಿದ್ದಾರೆ.',
    hi: 'फिनटेक अग्रणी और जोखिम प्रबंधक। बैंक के डिजिटल परिवर्तन और लेजर अनुपालन का निर्देशन कर रहे हैं।'
  },
  democratic_governance: {
    en: 'Democratic Governance',
    kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದ ಆಡಳಿತ',
    hi: 'लोकतांत्रिक शासन'
  },
  democratic_desc: {
    en: 'Member-controlled board with pro-rata voting rights and transparent financial disclosure sheets.',
    kn: 'ಪ್ರೊ-ರೇಟಾ ಮತದಾನದ ಹಕ್ಕುಗಳು ಮತ್ತು ಪಾರದರ್ಶಕ ಹಣಕಾಸು ಪ್ರಕಟಣೆ ಹಾಳೆಗಳೊಂದಿಗೆ ಸದಸ್ಯ-ನಿಯಂತ್ರಿತ ಮಂಡಳಿ.',
    hi: 'अनुपात के अनुसार मतदान अधिकारों और पारदर्शी वित्तीय प्रकटीकरण पत्रों के साथ सदस्य-नियंत्रित बोर्ड।'
  },
  asset_security: {
    en: 'Asset Security',
    kn: 'ಆಸ್ತಿ ಭದ್ರತೆ',
    hi: 'सम्पत्ति सुरक्षा'
  },
  asset_desc: {
    en: 'Rigorous audits, capital reserves protection, and safe vaults keeping systems.',
    kn: 'ಕಟ್ಟುನಿಟ್ಟಾದ ಲೆಕ್ಕಪರಿಶೋಧನೆಗಳು, ಬಂಡವಾಳ ಮೀಸಲು ರಕ್ಷಣೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಕಮಾನುಗಳ ವ್ಯವಸ್ಥೆಗಳು.',
    hi: 'कठिन ऑडिट, पूंजी भंडार संरक्षण और सुरक्षित तिजोरी प्रणालियां।'
  },
  community_growth: {
    en: 'Community Growth',
    kn: 'ಸಮುದಾಯದ ಬೆಳವಣಿಗೆ',
    hi: 'सामुदायिक विकास'
  },
  community_desc: {
    en: 'Reinvesting interest profits to finance gold loans and local micro-entrepreneurs.',
    kn: 'ಚಿನ್ನದ ಸಾಲಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಿಗಳಿಗೆ ಹಣಕಾಸು ಒದಗಿಸಲು ಬಡ್ಡಿ ಲಾಭವನ್ನು ಮರುಹೂಡಿಕೆ ಮಾಡುವುದು.',
    hi: 'स्वर्ण ऋण और स्थानीय सूक्ष्म-उद्यमियों को वित्तपोषित करने के लिए ब्याज लाभ का पुनर्निवेश।'
  },

  // --- Dynamic Dashboard & Others ---
  virtual_fd_title: {
    en: 'Simulated Online FD Portal',
    kn: 'ಸಿಮ್ಯುಲೇಟೆಡ್ ಆನ್‌ಲೈನ್ ಎಫ್‌ಡಿ ಪೋರ್ಟಲ್',
    hi: 'सिम्युलेटेड ऑनलाइन एफडी पोर्टल'
  },
  account_overview: {
    en: 'Account Overview',
    kn: 'ಖಾತೆ ಅವಲೋಕನ',
    hi: 'खाता अवलोकन'
  },
  savings_balance: {
    en: 'Savings Balance',
    kn: 'ಉಳಿತಾಯ ಬಾಕಿ',
    hi: 'बचत शेष'
  },
  active_deposits: {
    en: 'Active Deposits',
    kn: 'ಸಕ್ರಿಯ ಠೇವಣಿಗಳು',
    hi: 'सक्रिय जमा'
  },
  loan_outstandings: {
    en: 'Loan Outstandings',
    kn: 'ಬಾಕಿ ಇರುವ ಸಾಲಗಳು',
    hi: 'ऋण बकाया'
  },
  member_profile: {
    en: 'Member Profile',
    kn: 'ಸದಸ್ಯ ಪ್ರೊಫೈಲ್',
    hi: 'सदस्य प्रोफ़ाइल'
  },
  ekyc_status: {
    en: 'e-KYC Status',
    kn: 'ಇ-ಕೆವೈಸಿ ಸ್ಥಿತಿ',
    hi: 'ई-केवाईसी स्थिति'
  },
  kyc_verified: {
    en: 'Verified',
    kn: 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    hi: 'सत्यापित'
  },
  kyc_pending: {
    en: 'Pending',
    kn: 'ಬಾಕಿ ಇದೆ',
    hi: 'लंबित'
  },
  kyc_unsubmitted: {
    en: 'Unsubmitted',
    kn: 'ಸಲ್ಲಿಸಿಲ್ಲ',
    hi: 'अस्वीकृत'
  },
  upload_docs_btn: {
    en: 'Upload Documents',
    kn: 'ದಾಖಲೆಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    hi: 'दस्तावेज़ अपलोड करें'
  },
  open_fd_btn: {
    en: 'Open Fixed Deposit',
    kn: 'ಸ್ಥಿರ ಠೇವಣಿ ತೆರೆಯಿರಿ',
    hi: 'सावधि जमा खोलें'
  },
  apply_loan_btn: {
    en: 'Apply For Loan',
    kn: 'ಸಾಲಕ್ಕೆ ಅರ್ಜಿ ಹಾಕಿ',
    hi: 'ऋण के लिए आवेदन करें'
  },
  deposit_list_hdr: {
    en: 'Your Asset Portfolio Deposits',
    kn: 'ನಿಮ್ಮ ಆಸ್ತಿ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಠೇವಣಿಗಳು',
    hi: 'आपका जमा एसेट पोर्टफोलियो'
  },
  loan_list_hdr: {
    en: 'Active Loan Accounts',
    kn: 'ಸಕ್ರಿಯ ಸಾಲ ಖಾತೆಗಳು',
    hi: 'सक्रिय ऋण खाते'
  },
  transaction_history_hdr: {
    en: 'Recent Simulated Ledger Transactions',
    kn: 'ಇತ್ತೀಚಿನ ಸಿಮ್ಯುಲೇಟೆಡ್ ಲೆಡ್ಜರ್ ವಹಿವಾಟುಗಳು',
    hi: 'हालिया सिम्युलेटेड लेजर लेनदेन'
  },
  amount_in_inr: {
    en: 'Amount (INR)',
    kn: 'ಮೊತ್ತ (ರೂಪಾಯಿ)',
    hi: 'राशि (INR)'
  },
  maturity_term: {
    en: 'Maturity Term',
    kn: 'ಮುಕ್ತಾಯ ಅವಧಿ',
    hi: 'परिपक्वता अवधि'
  },
  status_hdr: {
    en: 'Status',
    kn: 'ಸ್ಥಿತಿ',
    hi: 'स्थिति'
  },
  accrued_int_label: {
    en: 'Accrued Interest',
    kn: 'ಸಂಚಿತ ಬಡ್ಡಿ',
    hi: 'अर्जित ब्याज'
  },
  pay_emi_btn: {
    en: 'Pay Monthly EMI',
    kn: 'ಮಾಸಿಕ ಇಎಂಐ ಪಾವತಿಸಿ',
    hi: 'मासिक ईएमआई का भुगतान करें'
  },
  emi_paid_status: {
    en: 'Paid EMI: {count} Months',
    kn: 'ಪಾವತಿಸಿದ ಇಎಂಐ: {count} ತಿಂಗಳುಗಳು',
    hi: 'भुगतान किया गया ईएमआई: {count} महीने'
  },
  welcome_user: {
    en: 'Namaste, {name}',
    kn: 'ನಮಸ್ತೆ, {name}',
    hi: 'नमस्ते, {name}'
  },
  member_id_value: {
    en: 'Member ID: {id}',
    kn: 'ಸದಸ್ಯರ ಐಡಿ: {id}',
    hi: 'सदस्य आईडी: {id}'
  },

  // --- Dynamic Product Catalog ---
  daily_deposit_name: {
    en: 'Daily Deposit',
    kn: 'ದಿನದ ಠೇವಣಿ',
    hi: 'दैनिक जमा'
  },
  daily_deposit_desc: {
    en: 'Ideal scheme for micro-merchants and small businesses. Daily collections collected directly from your storefront.',
    kn: 'ಸೂಕ್ಷ್ಮ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ಸೂಕ್ತವಾದ ಯೋಜನೆ. ನಿಮ್ಮ ಅಂಗಡಿಯಿಂದಲೇ ಪ್ರತಿದಿನ ಹಣ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.',
    hi: 'सूक्ष्म व्यापारियों और छोटे व्यवसायों के लिए आदर्श योजना। आपके स्टोरफ़्रंट से सीधे दैनिक संग्रह किया जाता है।'
  },
  mis_name: {
    en: 'Monthly Income Scheme',
    kn: 'ಮಾಸಿಕ ಆದಾಯ ಯೋಜನೆ',
    hi: 'मासिक आय योजना'
  },
  mis_desc: {
    en: 'Deposit a lump sum and receive fixed monthly interest payouts straight to your savings account.',
    kn: 'ಒಟ್ಟು ಮೊತ್ತವನ್ನು ಠೇವಣಿ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಉಳಿತಾಯ ಖಾತೆಗೆ ನೇರವಾಗಿ ಸ್ಥಿರ ಮಾಸಿಕ ಬಡ್ಡಿ ಪಾವತಿಗಳನ್ನು ಪಡೆಯಿರಿ.',
    hi: 'एकमुश्त राशि जमा करें और अपने बचत खाते में सीधे निश्चित मासिक ब्याज भुगतान प्राप्त करें।'
  },
  share_capital_name: {
    en: 'Share Capital',
    kn: 'ಷೇರು ಬಂಡವಾಳ',
    hi: 'शेयर पूंजी'
  },
  share_capital_desc: {
    en: 'Invest in the capital shares of our society, earn annual dividends, and gain legal voting rights.',
    kn: 'ನಮ್ಮ ಸೊಸೈಟಿಯ ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ, ವಾರ್ಷಿಕ ಲಾಭಾಂಶವನ್ನು ಗಳಿಸಿ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಮತದಾನದ ಹಕ್ಕನ್ನು ಪಡೆಯಿರಿ.',
    hi: 'हमारी समिति के शेयरों में निवेश करें, वार्षिक लाभांश अर्जित करें, और कानूनी मतदान अधिकार प्राप्त करें।'
  },
  vehicle_name: {
    en: 'Vehicle Loan',
    kn: 'ವಾಹನ ಸಾಲ',
    hi: 'वाहन ऋण'
  },
  vehicle_desc: {
    en: 'Drive your dream car or two-wheeler home with cheap monthly EMIs and flexible payoff schedules.',
    kn: 'ಅಗ್ಗದ ಮಾಸಿಕ ಇಎಂಐ ಮತ್ತು ಹೊಂದಿಕೊಳ್ಳುವ ಮರುಪಾವತಿ ವೇಳಾಪಟ್ಟಿಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕನಸಿನ ಕಾರು ಅಥವಾ ದ್ವಿಚಕ್ರ ವಾಹನವನ್ನು ಮನೆಗೆ ತನ್ನಿ.',
    hi: 'सस्ती मासिक ईएमआई और लचीले भुगतान कार्यक्रमों के साथ अपनी सपनों की कार या दोपहिया वाहन घर लाएं।'
  },
  personal_name: {
    en: 'Personal Loan',
    kn: 'ವೈಯಕ್ತಿಕ ಸಾಲ',
    hi: 'व्यक्तिगत ऋण'
  },
  personal_desc: {
    en: 'Simulate personal financial security for weddings, travel, medical needs, or retail consolidation.',
    kn: 'ಮದುವೆ, ಪ್ರಯಾಣ, ವೈದ್ಯಕೀಯ ಅಗತ್ಯಗಳು ಅಥವಾ ಚಿಲ್ಲರೆ ಸಾಲದ ಕ್ರೋಡೀಕರಣಕ್ಕಾಗಿ ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಭದ್ರತೆಯನ್ನು ಪಡೆಯಿರಿ.',
    hi: 'शादियों, यात्रा, चिकित्सा आवश्यकताओं या खुदरा ऋण समेकन के लिए व्यक्तिगत वित्तीय सुरक्षा प्राप्त करें।'
  },
  education_name: {
    en: 'Education Loan',
    kn: 'ಶಿಕ್ಷಣ ಸಾಲ',
    hi: 'शिक्षा ऋण'
  },
  education_desc: {
    en: 'Empower your child higher educational goals in top Indian and international universities with low interest rates.',
    kn: 'ಕಡಿಮೆ ಬಡ್ಡಿದರಗಳೊಂದಿಗೆ ಭಾರತೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟಯ ಉನ್ನತ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳಲ್ಲಿ ನಿಮ್ಮ ಮಗುವಿನ ಉನ್ನತ ಶಿಕ್ಷಣದ ಕನಸುಗಳನ್ನು ನನಸಾಗಿಸಿ.',
    hi: 'कम ब्याज दरों के साथ शीर्ष भारतीय और अंतर्राष्ट्रीय विश्वविद्यालयों में अपने बच्चे के उच्च शैक्षिक लक्ष्यों को सशक्त बनाएं।'
  },
  housing_name: {
    en: 'Housing Loan',
    kn: 'ಗೃಹ ಸಾಲ',
    hi: 'गृह ऋण'
  },
  housing_desc: {
    en: 'Build or purchase your dream house with affordable cooperative society home loan schemes.',
    kn: 'ಕೈಗೆಟುಕುವ ಸಹಕಾರಿ ಸೊಸೈಟಿಯ ಗೃಹ ಸಾಲ ಯೋಜನೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕನಸಿನ ಮನೆಯನ್ನು ನಿರ್ಮಿಸಿ ಅಥವಾ ಖರೀದಿಸಿ.',
    hi: 'सस्ती सहकारी समिति गृह ऋण योजनाओं के साथ अपने सपनों का घर बनाएं या खरीदें।'
  },

  // --- Footer Section ---
  footer_bio: {
    en: 'We have various strategic partnerships and alliances with eminent Indian and global companies which cater to various aspects of our daily operations on PAN India scale. Not only do these partnerships widen our business platform but they also lay a foundation for a sustainable future.',
    kn: 'ನಾವು ಪ್ರಮುಖ ಭಾರತೀಯ ಮತ್ತು ಜಾಗತಿಕ ಕಂಪನಿಗಳೊಂದಿಗೆ ವಿವಿಧ ಕಾರ್ಯತಂತ್ರದ ಪಾಲುದಾರಿಕೆಗಳು ಮತ್ತು ಮೈತ್ರಿಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ ಅದು ಪ್ಯಾನ್ ಇಂಡಿಯಾ ಮಟ್ಟದಲ್ಲಿ ನಮ್ಮ ದೈನಂದಿನ ಕಾರ್ಯಾಚರಣೆಗಳ ವಿವಿಧ ಅಂಶಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ. ಈ ಪಾಲುದಾರಿಕೆಗಳು ನಮ್ಮ ವ್ಯಾಪಾರ ವೇದಿಕೆಯನ್ನು ವಿಸ್ತರಿಸುವುದಲ್ಲದೆ ಸುಸ್ಥಿರ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಅಡಿಪಾಯವನ್ನು ಹಾಕುತ್ತವೆ.',
    hi: 'हमारे पास प्रमुख भारतीय और वैश्विक कंपनियों के साथ विभिन्न रणनीतिक साझेदारियां और गठबंधन हैं जो पैन इंडिया स्तर पर हमारे दैनिक संचालन के विभिन्न पहलुओं को पूरा करते हैं। ये साझेदारियां न केवल हमारे व्यावसायिक मंच को व्यापक बनाती हैं बल्कि एक स्थायी भविष्य की नींव भी रखती हैं।'
  },
  quick_links: {
    en: 'Quick Links',
    kn: 'ತ್ವರಿತ ಕೊಂಡಿಗಳು',
    hi: 'त्वरित ಸಂಪर्क'
  },
  footer_prod_title: {
    en: 'Products',
    kn: 'ಉತ್ಪನ್ನಗಳು',
    hi: 'उत्पाद'
  },
  copyright: {
    en: 'Copyright © 2026 Indian Cooperative Credit Society Limited. All rights reserved.',
    kn: 'ಕೃತಿಸ್ವಾಮ್ಯ © 2026 ಇಂಡಿಯನ್ ಕೋಆಪರೇಟಿವ್ ಕ್ರೆಡಿಟ್ ಸೊಸೈಟಿ ಲಿಮಿಟೆಡ್. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    hi: 'कॉपीराइट © 2026 इंडियन कोऑपरेटिव क्रेडिट सोसाइटी लिमिटेड। सर्वाधिकार सुरक्षित।'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('iccs_language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('iccs_language', lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['en'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
