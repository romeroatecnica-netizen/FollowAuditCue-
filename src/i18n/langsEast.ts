import type {Translations} from './types';

export const ar: Translations = {
  seo: {
    title: 'FollowAuditCue — معرفة من لا يتابعك على إنستغرام (.ZIP بدون كلمة مرور)',
    description:
      'افحص من لا يتابعك على إنستغرام محلياً 100% داخل متصفحك باستخدام ملف .ZIP الرسمي من ميتا. بدون كلمة مرور، بدون تسجيل دخول، وبياناتك لا تغادر جهازك.',
    appDescription:
      'أداة تدقيق خصوصية محلية بالكامل تقرأ ملف .ZIP الرسمي من إنستغرام/ميتا في المتصفح لحساب غير المتابعين والمتبادلين دون كلمة مرور.',
    howToName: 'كيفية معرفة من لا يتابعك على إنستغرام بدون كلمة مرور',
    howToDescription: 'حمّل أرشيف ميتا الرسمي بصيغة .ZIP وحلله محلياً داخل متصفحك.',
  },
  nav: {
    auditor: 'المدقق',
    howItWorks: 'دليل 3 خطوات',
    savedAudits: 'السجل المحلي',
    faq: 'الدليل والأسئلة',
    languageLabel: 'اللغة',
  },
  hero: {
    privacyLead: '100% في متصفحك — بدون كلمة مرور، بدون تسجيل دخول، بياناتك لا تغادر جهازك أبداً',
    h1: 'اكتشف من لا يتابعك على إنستغرام محلياً من ملف .ZIP الرسمي',
    subtitle:
      'اسحب ملف .ZIP الرسمي للمتابِعين والمتابَعين من مركز حسابات ميتا لحساب قوائم عدم المتابعة بالمثل، والمتبادلين، والمتابعين فوراً في ذاكرة المتصفح.',
    zeroUploadGuarantee:
      'صفر رفع إلى الخوادم · يدعم JSON و HTML من ميتا · بحث فوري وتصدير CSV/JSON',
    safetyWarningTitle: 'تنبيه أمان الحساب',
    safetyWarningBody:
      'لا تدخل كلمة مرور إنستغرام أبداً في تطبيقات أو إضافات خارجية؛ أنظمة ميتا ترصد الطلبات الآلية وقد تقيد حسابك.',
  },
  steps: {
    sectionTitle: 'كيف يعمل الفحص المحلي في 3 خطوات',
    sectionSubtitle: 'تتم المعالجة بالكامل داخل متصفحك دون اتصال خارجي.',
    items: [
      {
        num: '01',
        title: 'نزّل ملف .ZIP الرسمي من ميتا',
        detail:
          'من إنستغرام: الإعدادات ← مركز الحسابات ← معلوماتك وأذوناتك ← تنزيل معلوماتك ← اختر المتابعين والمتابَعين بصيغة JSON أو HTML.',
        pathHint: 'مركز حسابات ميتا · المتابعون والمتابَعون',
      },
      {
        num: '02',
        title: 'اسحب ملف .ZIP هنا',
        detail:
          'احفظ الأرشيف على جهازك وأفلته في المنطقة أدناه. تفك أداة JSZip الضغط محلياً في الذاكرة دون إرسال أي بيانات.',
        pathHint: 'قراءة محلية في الذاكرة · JSON و HTML',
      },
      {
        num: '03',
        title: 'راجع وصدّر محلياً',
        detail:
          'تنقّل بين من لا يتابعونك، المتبادلين، المتابعين والمتابَعين. ابحث وانسخ الأسماء أو صدّر CSV/JSON.',
        pathHint: 'حساب دقيق · بدون تتبع',
      },
    ],
  },
  dropzone: {
    title: 'أفلت ملف .ZIP الرسمي من إنستغرام هنا',
    subtitle: 'أو اختر ملف .zip من جهازك (يدعم أيضاً ملفات followers و following بصيغة .json أو .html).',
    browseBtn: 'اختر ملف .ZIP',
    sampleBtn: 'تحميل بيانات تجريبية',
    processingLabel: 'جارٍ فك الضغط محلياً داخل المتصفح...',
    acceptedFormats: 'الصيغ المدعومة: .zip (تصدير ميتا) أو .json / .html',
    loadedSummaryLabel: 'المصدر النشط',
    formatDetectedLabel: 'الصيغة',
    filesParsedLabel: 'الملفات المقروءة',
    sampleBadge: 'بيانات تجريبية وهمية',
    errorInvalidZip: 'تعذر فتح الملف كأرشيف .ZIP صالح.',
    errorMissingLists:
      'لم يتم العثور على ملفات المتابعين أو المتابَعين داخل الأرشيف. تأكد من تحديد "المتابعون والمتابَعون" عند طلب البيانات من ميتا.',
    errorEncryptedZip: 'ملفات .ZIP المحمية بكلمة مرور غير مدعومة.',
    errorGeneric: 'تعذر تحليل الملف. جرّب ملف .zip الأصلي أو البيانات التجريبية.',
  },
  results: {
    emptyTitle: 'جاهز للفحص المحلي',
    emptyBody: 'ارفع ملف .ZIP من ميتا أعلاه أو اضغط "تحميل بيانات تجريبية".',
    tabs: {
      notFollowingBack: 'لا يتابعونك',
      mutuals: 'متبادلون',
      followers: 'المتابعون',
      following: 'تتابعهم',
    },
    metrics: {
      notFollowingBackSub: 'من الحسابات التي تتابعها',
      mutualsSub: 'نسبة المتابعة المتبادلة',
      followersSub: 'متابعون فريدون',
      followingSub: 'حسابات متابَعة فريدة',
    },
    searchPlaceholder: 'تصفية حسب اسم المستخدم...',
    sortLabel: 'ترتيب',
    sortOptions: {
      az: 'الاسم (A–Z)',
      za: 'الاسم (Z–A)',
      newest: 'الأحدث في التصدير',
      oldest: 'الأقدم في التصدير',
    },
    copyListBtn: 'نسخ القائمة',
    copiedListBtn: 'تم النسخ!',
    exportCsvBtn: 'تصدير CSV',
    exportJsonBtn: 'تصدير JSON',
    printBtn: 'طباعة الملخص',
    clearSessionBtn: 'مسح الجلسة',
    tableHeaders: {
      index: '#',
      username: 'الحساب',
      exportedDate: 'تاريخ التصدير',
      relationship: 'الحالة',
      actions: 'إجراءات',
    },
    relationships: {
      notFollowingBack: 'لا يتابعك بالمثل',
      mutual: 'متبادل',
      followerOnly: 'يتابعك',
      following: 'تتابعه',
    },
    copySingle: 'نسخ',
    copiedSingle: 'تم',
    openProfile: 'فتح الملف الشخصي',
    noSearchMatches: 'لا توجد حسابات مطابقة للبحث.',
    noUnfollowersCongrats: 'جميع الحسابات التي تتابعها تتابعك بالمثل في هذا الملف.',
    showingRange: 'عرض {shown} من أصل {total} حساب',
    showMoreBtn: 'عرض 50 إضافية',
    unknownDate: '—',
  },
  saved: {
    title: 'السجل المحلي لعمليات التدقيق',
    subtitle: 'احتفظ بملخصات الأعداد في متصفحك لمتابعة التغييرات بمرور الوقت.',
    privacyNote:
      'الخصوصية أولاً: تُحفظ الأعداد الإجمالية والتاريخ وملاحظتك الاختيارية فقط في localStorage؛ ولا تُخزن قوائم الأسماء أبداً.',
    notePlaceholder: 'ملاحظة اختيارية (مثلاً: مراجعة شهرية)',
    saveBtn: 'حفظ الملخص',
    savedFeedback: 'تم الحفظ محلياً',
    exportHistoryBtn: 'تصدير السجل JSON',
    importHistoryBtn: 'استيراد السجل JSON',
    copyLinkBtn: 'نسخ الرابط المباشر',
    copiedLinkBtn: 'تم نسخ الرابط',
    printSummaryBtn: 'طباعة التقرير',
    clearHistoryBtn: 'مسح السجل',
    emptyHistory: 'لا توجد ملخصات محفوظة بعد.',
    importError: 'ملف سجل JSON غير صالح.',
    importSuccess: 'تم استيراد السجل محلياً.',
    columns: {
      date: 'التاريخ',
      source: 'المصدر',
      notBack: 'لا يتابعون',
      mutuals: 'متبادلون',
      followers: 'المتابعون',
      following: 'تتابعهم',
      note: 'ملاحظة',
      remove: 'حذف',
    },
  },
  ads: {
    slotLabel: 'إعلان',
    sponsoredNote: 'مساحة إعلانية محجوزة (Media.net)',
  },
  affiliate: {
    title: 'أدوات أمان الحساب والنسخ الاحتياطي الموصى بها',
    subtitle: 'وسائل عملية لحماية حسابك وأرشفة ملفات التصدير بأمان.',
    disclosure: 'إفصاح: تساعد الروابط التالية في إبقاء FollowAuditCue مجانياً.',
    items: [
      {
        category: 'مفاتيح أمان 2FA',
        title: 'مفاتيح أمان FIDO2 / USB-C (سلسلة YubiKey)',
        description: 'تحقق ثنائي مادي مقاوم للتصيد لحسابات إنستغرام وميتا.',
        ctaLabel: 'استعراض المفاتيح',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'نسخ احتياطي خارجي',
        title: 'أقراص SSD خارجية محمولة (1TB–2TB)',
        description: 'احفظ نسخ ميتا الكاملة للصور والمقاطع والبيانات بعيداً عن السحابة.',
        ctaLabel: 'عرض أقراص SSD',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'إدارة كلمات المرور',
        title: 'مديرو كلمات مرور موثوقون',
        description: 'أنشئ كلمات مرور فريدة دون تكرارها عبر المنصات.',
        ctaLabel: 'استكشاف الأدوات',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'كيفية معرفة من لا يتابعك على إنستغرام بأمان بدون تطبيقات',
    intro: 'تحليل ملف .ZIP الرسمي من ميتا محلياً يحمي حسابك من الحظر وسرقة بيانات الدخول.',
    sections: [
      {
        title: 'لماذا يجب تجنب تطبيقات تتبع المتابعين التي تطلب كلمة المرور',
        paragraphs: [
          'مشاركة كلمة المرور أو ملفات تعريف الارتباط مع تطبيقات خارجية يعرّض حسابك للاختراق والحظر التلقائي من ميتا.',
        ],
      },
      {
        title: 'تنزيل بيانات المتابعين والمتابَعين من ميتا',
        paragraphs: [
          'من مركز الحسابات اختر تنزيل معلوماتك وحدد المتابعين والمتابَعين بصيغة JSON أو HTML ثم اسحب ملف .ZIP هنا.',
        ],
      },
    ],
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        question: 'هل أحتاج إلى إدخال كلمة مرور إنستغرام؟',
        answer: 'لا أبداً. الأداة تقرأ فقط ملف .ZIP الرسمي الذي تحمّله من ميتا.',
      },
      {
        question: 'هل يتم رفع ملف .ZIP إلى أي خادم؟',
        answer: 'لا. تتم المعالجة بنسبة 100% محلياً داخل متصفحك.',
      },
      {
        question: 'هل يدعم صيغتي JSON و HTML؟',
        answer: 'نعم، يتم التعرف تلقائياً على كلا التنسيقين.',
      },
    ],
    transparencyNotice:
      'مدقق خصوصية 100% من جانب العميل. لا يُطلب أبداً إدخال كلمة مرور أو تسجيل دخول، ويتم تحليل ملف .ZIP محلياً في متصفحك دون أن يغادر جهازك.',
  },
  print: {
    reportTitle: 'FollowAuditCue — ملخص التدقيق المحلي لإنستغرام',
    generatedOn: 'تاريخ الإنشاء',
    sourceLabel: 'مصدر الأرشيف',
    privacyFooter: 'تمت المعالجة محلياً 100% في المتصفح · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · مدقق ملفات .ZIP لإنستغرام بخصوصية تامة.',
    canonicalNotice: 'النسخة الأساسية: https://followauditcue.bastelar.com/?lang=ar',
  },
};

export const hi: Translations = {
  seo: {
    title: 'FollowAuditCue — इंस्टाग्राम पर कौन फॉलो बैक नहीं करता देखें (.ZIP, बिना पासवर्ड)',
    description:
      'बिना पासवर्ड और लॉगिन के अपने आधिकारिक Meta .ZIP एक्सपोर्ट से ब्राउज़र में 100% लोकल तरीके से देखें कि इंस्टाग्राम पर कौन आपको फॉलो बैक नहीं करता।',
    appDescription:
      '100% क्लाइंट-साइड प्राइवेसी ऑडिटर जो बिना पासवर्ड के आपके Meta .ZIP से Not Following Back और Mutuals की गणना करता है।',
    howToName: 'बिना पासवर्ड इंस्टाग्राम पर फॉलो बैक न करने वालों को कैसे देखें',
    howToDescription: 'आधिकारिक Meta .ZIP डाउनलोड करें और ब्राउज़र में लोकल जांच करें।',
  },
  nav: {
    auditor: 'ऑडिटर',
    howItWorks: '3-स्टेप गाइड',
    savedAudits: 'सेव इतिहास',
    faq: 'गाइड और FAQ',
    languageLabel: 'भाषा',
  },
  hero: {
    privacyLead: '100% आपके ब्राउज़र में — कोई पासवर्ड नहीं, कोई लॉगिन नहीं, आपका डेटा डिवाइस से बाहर नहीं जाता',
    h1: 'अपने आधिकारिक .ZIP से देखें कि इंस्टाग्राम पर कौन फॉलो बैक नहीं करता',
    subtitle:
      'Meta Accounts Center से डाउनलोड की गई Followers and following .ZIP फाइल यहाँ डालें और तुरंत Not Following Back, Mutuals, Followers व Following देखें।',
    zeroUploadGuarantee:
      'कोई सर्वर अपलोड नहीं · Meta JSON और HTML सपोर्ट · तुरंत लोकल खोज और CSV/JSON एक्सपोर्ट',
    safetyWarningTitle: 'अकाउंट सुरक्षा चेतावनी',
    safetyWarningBody:
      'किसी भी थर्ड-पार्टी ऐप या एक्सटेंशन में अपना इंस्टाग्राम पासवर्ड न डालें; ऑटोमेशन से अकाउंट ब्लॉक हो सकता है।',
  },
  steps: {
    sectionTitle: '3 चरणों में लोकल ऑडिट कैसे काम करता है',
    sectionSubtitle: 'पूरी प्रक्रिया बिना सर्वर के आपके ब्राउज़र में चलती है।',
    items: [
      {
        num: '01',
        title: 'आधिकारिक Meta .ZIP डाउनलोड करें',
        detail:
          'Instagram Settings → Accounts Center → Your information and permissions → Download your information → केवल Followers and following (JSON या HTML) चुनें।',
        pathHint: 'Meta Accounts Center · Followers & following',
      },
      {
        num: '02',
        title: '.ZIP फाइल यहाँ ड्रॉप करें',
        detail:
          'डाउनलोड की गई .zip फाइल को नीचे बॉक्स में ड्रैग करें। JSZip इसे लोकल RAM में खोलता है।',
        pathHint: 'लोकल RAM प्रोसेसिंग · JSON और HTML',
      },
      {
        num: '03',
        title: 'लिस्ट देखें और एक्सपोर्ट करें',
        detail:
          'Not Following Back, Mutuals, Followers और Following टैब देखें, खोजें, कॉपी करें या CSV/JSON डाउनलोड करें।',
        pathHint: 'सटीक परिणाम · जीरो ट्रैकिंग',
      },
    ],
  },
  dropzone: {
    title: 'अपनी आधिकारिक इंस्टाग्राम .ZIP फाइल यहाँ छोड़ें',
    subtitle: 'या डिवाइस से .zip चुनें (निकाली गई followers / following .json या .html फाइलें भी चलेंगी)।',
    browseBtn: '.ZIP फाइल चुनें',
    sampleBtn: 'सैंपल डेटा लोड करें',
    processingLabel: 'ब्राउज़र में लोकल अनपैक हो रहा है...',
    acceptedFormats: 'समर्थित: .zip (Meta एक्सपोर्ट) या .json / .html फाइलें',
    loadedSummaryLabel: 'सक्रिय स्रोत',
    formatDetectedLabel: 'फ़ॉर्मेट',
    filesParsedLabel: 'पढ़ी गई फाइलें',
    sampleBadge: 'काल्पनिक सैंपल डेटा',
    errorInvalidZip: 'यह मान्य .ZIP फाइल के रूप में नहीं खुल सकी।',
    errorMissingLists:
      'इस आर्काइव में followers या following फाइलें नहीं मिलीं। Meta से एक्सपोर्ट करते समय "Followers and following" चुनें।',
    errorEncryptedZip: 'पासवर्ड से सुरक्षित .ZIP फाइलें समर्थित नहीं हैं।',
    errorGeneric: 'फाइल पढ़ी नहीं जा सकी। मूल .zip या सैंपल डेटा आज़माएँ।',
  },
  results: {
    emptyTitle: 'लोकल ऑडिट के लिए तैयार',
    emptyBody: 'ऊपर अपनी Meta .ZIP फाइल अपलोड करें या "सैंपल डेटा लोड करें" पर क्लिक करें।',
    tabs: {
      notFollowingBack: 'फॉलो बैक नहीं करते',
      mutuals: 'म्यूचुअल्स',
      followers: 'फॉलोअर्स',
      following: 'फॉलोइंग',
    },
    metrics: {
      notFollowingBackSub: 'फॉलो किए गए खातों में से',
      mutualsSub: 'फॉलो-बैक दर',
      followersSub: 'यूनिक फॉलोअर्स',
      followingSub: 'यूनिक फॉलोइंग',
    },
    searchPlaceholder: '@यूज़रनेम से खोजें...',
    sortLabel: 'क्रम',
    sortOptions: {
      az: 'नाम (A–Z)',
      za: 'नाम (Z–A)',
      newest: 'नवीनतम तारीख',
      oldest: 'सबसे पुरानी तारीख',
    },
    copyListBtn: 'लिस्ट कॉपी करें',
    copiedListBtn: 'कॉपी हो गई!',
    exportCsvBtn: 'CSV एक्सपोर्ट',
    exportJsonBtn: 'JSON एक्सपोर्ट',
    printBtn: 'सारांश प्रिंट करें',
    clearSessionBtn: 'सेशन साफ़ करें',
    tableHeaders: {
      index: '#',
      username: 'अकाउंट',
      exportedDate: 'एक्सपोर्ट तारीख',
      relationship: 'स्थिति',
      actions: 'कार्रवाई',
    },
    relationships: {
      notFollowingBack: 'फॉलो बैक नहीं',
      mutual: 'म्यूचुअल',
      followerOnly: 'आपको फॉलो करते हैं',
      following: 'फॉलो कर रहे हैं',
    },
    copySingle: 'कॉपी',
    copiedSingle: 'कॉपी हुआ',
    openProfile: 'प्रोफ़ाइल खोलें',
    noSearchMatches: 'खोज से कोई खाता मेल नहीं खाता।',
    noUnfollowersCongrats: 'आप जिन्हें फॉलो करते हैं, वे सभी आपको फॉलो बैक करते हैं।',
    showingRange: '{total} में से {shown} खाते दिख रहे हैं',
    showMoreBtn: '50 और दिखाएँ',
    unknownDate: '—',
  },
  saved: {
    title: 'लोकल ऑडिट इतिहास',
    subtitle: 'समय के साथ बदलाव ट्रैक करने के लिए अपने ब्राउज़र में सारांश सहेजें।',
    privacyNote:
      'गोपनीयता: localStorage में केवल कुल संख्या, तारीख और आपका नोट सहेजा जाता है—यूज़रनेम लिस्ट कभी सेव नहीं होती।',
    notePlaceholder: 'वैकल्पिक नोट (जैसे: मुख्य अकाउंट)',
    saveBtn: 'सारांश सहेजें',
    savedFeedback: 'लोकल सेव हुआ',
    exportHistoryBtn: 'इतिहास JSON एक्सपोर्ट',
    importHistoryBtn: 'इतिहास JSON इम्पोर्ट',
    copyLinkBtn: 'डायरेक्ट लिंक कॉपी करें',
    copiedLinkBtn: 'लिंक कॉपी हुआ',
    printSummaryBtn: 'रिपोर्ट प्रिंट करें',
    clearHistoryBtn: 'इतिहास मिटाएँ',
    emptyHistory: 'अभी कोई सहेजा गया सारांश नहीं है।',
    importError: 'अमान्य इतिहास JSON फाइल।',
    importSuccess: 'इतिहास लोकल रूप से इम्पोर्ट हो गया।',
    columns: {
      date: 'तारीख',
      source: 'स्रोत',
      notBack: 'फॉलो बैक नहीं',
      mutuals: 'म्यूचुअल्स',
      followers: 'फॉलोअर्स',
      following: 'फॉलोइंग',
      note: 'नोट',
      remove: 'हटाएँ',
    },
  },
  ads: {
    slotLabel: 'विज्ञापन',
    sponsoredNote: 'आरक्षित विज्ञापन स्थान (Media.net)',
  },
  affiliate: {
    title: 'अकाउंट सुरक्षा और बैकअप उपकरण',
    subtitle: 'अपने सोशल खातों की सुरक्षा और ऑफ़लाइन बैकअप के लिए उपयोगी संसाधन।',
    disclosure: 'सहबद्ध सूचना: नीचे दिए लिंक FollowAuditCue को मुफ़्त रखने में मदद करते हैं।',
    items: [
      {
        category: '2FA सुरक्षा कुंजी',
        title: 'FIDO2 / USB-C सिक्योरिटी की (YubiKey)',
        description: 'इंस्टाग्राम और Meta अकाउंट के लिए फ़िशिंग-रोधी हार्डवेयर सुरक्षा।',
        ctaLabel: 'सिक्योरिटी की देखें',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'ऑफ़लाइन बैकअप',
        title: 'पोर्टेबल NVMe एक्सटर्नल SSD (1TB–2TB)',
        description: 'अपने पूरे Meta एक्सपोर्ट को क्लाउड से बाहर सुरक्षित रखें।',
        ctaLabel: 'बैकअप SSD देखें',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'पासवर्ड सुरक्षा',
        title: 'ऑडिटेड पासवर्ड मैनेजर',
        description: 'हर सेवा के लिए अलग और मजबूत पासवर्ड बनाएँ।',
        ctaLabel: 'मैनेजर देखें',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'बिना पासवर्ड या ऐप के इंस्टाग्राम अनफॉलोअर्स कैसे जांचें',
    intro: 'Meta की आधिकारिक .ZIP फाइल का लोकल विश्लेषण आपके अकाउंट को पूरी तरह सुरक्षित रखता है।',
    sections: [
      {
        title: 'पासवर्ड मांगने वाले ऐप्स से क्यों बचें',
        paragraphs: [
          'थर्ड-पार्टी ऐप्स में लॉगिन करने से अकाउंट हैक होने या Meta द्वारा सस्पेंड किए जाने का खतरा रहता है।',
        ],
      },
      {
        title: 'Meta से Followers and following एक्सपोर्ट कैसे लें',
        paragraphs: [
          'Accounts Center → Download your information में जाकर केवल Followers and following चुनें और प्राप्त .zip फाइल यहाँ डालें।',
        ],
      },
    ],
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        question: 'क्या मुझे इंस्टाग्राम पासवर्ड डालना होगा?',
        answer: 'नहीं। FollowAuditCue कभी पासवर्ड या लॉगिन नहीं मांगता।',
      },
      {
        question: 'क्या मेरी .ZIP फाइल किसी सर्वर पर अपलोड होती है?',
        answer: 'कभी नहीं। पूरी प्रोसेसिंग JSZip से आपके ब्राउज़र में ही होती है।',
      },
      {
        question: 'क्या JSON और HTML दोनों चलते हैं?',
        answer: 'हाँ, दोनों आधिकारिक Meta फ़ॉर्मेट अपने आप पहचाने जाते हैं।',
      },
    ],
    transparencyNotice:
      '100% क्लाइंट-साइड प्राइवेसी ऑडिटर। कभी कोई पासवर्ड या लॉगिन नहीं मांगा जाता और आपकी .ZIP फाइल डिवाइस से बाहर भेजे बिना ब्राउज़र में ही पढ़ी जाती है।',
  },
  print: {
    reportTitle: 'FollowAuditCue — लोकल इंस्टाग्राम ऑडिट सारांश',
    generatedOn: 'तैयार किया गया',
    sourceLabel: 'आर्काइव स्रोत',
    privacyFooter: 'ब्राउज़र में 100% लोकल प्रोसेस · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · गोपनीयता-केंद्रित लोकल इंस्टाग्राम .ZIP ऑडिटर।',
    canonicalNotice: 'कैनोनिकल संस्करण: https://followauditcue.bastelar.com/?lang=hi',
  },
};

export const ru: Translations = {
  seo: {
    title: 'FollowAuditCue — Кто не подписан взаимно в Instagram (.ZIP, без пароля)',
    description:
      'Проверьте невзаимные подписки в Instagram на 100% локально в браузере по официальному .ZIP-архиву Meta. Без пароля, без входа и без отправки данных.',
    appDescription:
      'Локальный браузерный аудитор конфиденциальности для анализа официального .ZIP-экспорта Instagram/Meta без пароля.',
    howToName: 'Как узнать, кто отписался или не подписан взаимно в Instagram без пароля',
    howToDescription: 'Скачайте официальный .ZIP из Meta и проверьте его локально в браузере.',
  },
  nav: {
    auditor: 'Аудитор',
    howItWorks: 'Инструкция',
    savedAudits: 'История',
    faq: 'Гид и FAQ',
    languageLabel: 'Язык',
  },
  hero: {
    privacyLead: '100% в вашем браузере — без пароля и входа, данные не покидают устройство',
    h1: 'Узнайте, кто не подписан в ответ в Instagram — локально из .ZIP',
    subtitle:
      'Перетащите официальный архив .ZIP с подписчиками и подписками из Центра аккаунтов Meta, чтобы мгновенно рассчитать невзаимные подписки, взаимные, подписчиков и подписки в памяти браузера.',
    zeroUploadGuarantee:
      'Без загрузки на сервер · Поддержка JSON и HTML Meta · Мгновенный поиск и экспорт CSV/JSON',
    safetyWarningTitle: 'Предупреждение о безопасности аккаунта',
    safetyWarningBody:
      'Не вводите пароль от Instagram в сторонние приложения или расширения: Meta блокирует автоматизированный сбор данных и передачу доступа.',
  },
  steps: {
    sectionTitle: 'Как работает локальная проверка в 3 шага',
    sectionSubtitle: 'Вся обработка выполняется локально во вкладке браузера.',
    items: [
      {
        num: '01',
        title: 'Скачайте официальный .ZIP Meta',
        detail:
          'Instagram → Настройки → Центр аккаунтов → Ваша информация и разрешения → Скачать информацию → выберите «Подписчики и подписки» (JSON или HTML).',
        pathHint: 'Центр аккаунтов Meta · Подписчики и подписки',
      },
      {
        num: '02',
        title: 'Перетащите .ZIP сюда',
        detail:
          'Сохраните архив на устройство и перетащите в окно ниже. JSZip распакует его локально в оперативной памяти.',
        pathHint: 'Чтение в RAM · JSON и HTML',
      },
      {
        num: '03',
        title: 'Изучите и экспортируйте',
        detail:
          'Переключайтесь между списками «Не подписаны в ответ», «Взаимные», «Подписчики» и «Подписки», копируйте и сохраняйте CSV/JSON.',
        pathHint: 'Точный расчёт · Ноль слежки',
      },
    ],
  },
  dropzone: {
    title: 'Перетащите официальный .ZIP-экспорт Instagram сюда',
    subtitle: 'Или выберите файл .zip (также поддерживаются распакованные файлы followers / following .json и .html).',
    browseBtn: 'Выбрать файл .ZIP',
    sampleBtn: 'Загрузить пример данных',
    processingLabel: 'Локальная распаковка архива в браузере...',
    acceptedFormats: 'Поддерживается: .zip (экспорт Meta) или файлы .json / .html',
    loadedSummaryLabel: 'Источник',
    formatDetectedLabel: 'Формат',
    filesParsedLabel: 'Файлов прочитано',
    sampleBadge: 'Демонстрационные данные',
    errorInvalidZip: 'Не удалось открыть файл как корректный .ZIP-архив.',
    errorMissingLists:
      'В архиве не найдены файлы подписчиков или подписок. Убедитесь, что в Meta выбран раздел «Подписчики и подписки».',
    errorEncryptedZip: 'Зашифрованные .ZIP-архивы с паролем не поддерживаются.',
    errorGeneric: 'Не удалось разобрать файл. Выберите исходный .zip или загрузите пример.',
  },
  results: {
    emptyTitle: 'Готово к локальному аудиту',
    emptyBody: 'Загрузите .ZIP из Meta выше или нажмите «Загрузить пример данных».',
    tabs: {
      notFollowingBack: 'Не подписаны в ответ',
      mutuals: 'Взаимные',
      followers: 'Подписчики',
      following: 'Подписки',
    },
    metrics: {
      notFollowingBackSub: 'от ваших подписок',
      mutualsSub: 'доля взаимности',
      followersSub: 'уникальных подписчиков',
      followingSub: 'уникальных подписок',
    },
    searchPlaceholder: 'Фильтр по @username...',
    sortLabel: 'Сортировка',
    sortOptions: {
      az: 'Имя (A–Z)',
      za: 'Имя (Z–A)',
      newest: 'Сначала новые',
      oldest: 'Сначала старые',
    },
    copyListBtn: 'Копировать список',
    copiedListBtn: 'Скопировано!',
    exportCsvBtn: 'Экспорт CSV',
    exportJsonBtn: 'Экспорт JSON',
    printBtn: 'Печать отчёта',
    clearSessionBtn: 'Очистить сессию',
    tableHeaders: {
      index: '#',
      username: 'Аккаунт',
      exportedDate: 'Дата в экспорте',
      relationship: 'Статус',
      actions: 'Действия',
    },
    relationships: {
      notFollowingBack: 'Не подписан в ответ',
      mutual: 'Взаимно',
      followerOnly: 'Подписан на вас',
      following: 'Вы подписаны',
    },
    copySingle: 'Копировать',
    copiedSingle: 'Скопировано',
    openProfile: 'Открыть профиль',
    noSearchMatches: 'По вашему запросу ничего не найдено.',
    noUnfollowersCongrats: 'Все, на кого вы подписаны, подписаны на вас в ответ.',
    showingRange: 'Показано {shown} из {total}',
    showMoreBtn: 'Показать ещё 50',
    unknownDate: '—',
  },
  saved: {
    title: 'Локальная история проверок',
    subtitle: 'Сохраняйте сводку показателей в браузере для отслеживания динамики.',
    privacyNote:
      'Конфиденциальность: в localStorage сохраняются только цифры, дата и заметка — списки аккаунтов не сохраняются.',
    notePlaceholder: 'Необязательная заметка (например, основной профиль)',
    saveBtn: 'Сохранить сводку',
    savedFeedback: 'Сохранено локально',
    exportHistoryBtn: 'Экспорт истории JSON',
    importHistoryBtn: 'Импорт истории JSON',
    copyLinkBtn: 'Копировать ссылку',
    copiedLinkBtn: 'Ссылка скопирована',
    printSummaryBtn: 'Распечатать отчёт',
    clearHistoryBtn: 'Очистить историю',
    emptyHistory: 'Сохранённых сводок пока нет.',
    importError: 'Неверный формат файла истории JSON.',
    importSuccess: 'История импортирована локально.',
    columns: {
      date: 'Дата',
      source: 'Источник',
      notBack: 'Не в ответ',
      mutuals: 'Взаимные',
      followers: 'Подписчики',
      following: 'Подписки',
      note: 'Заметка',
      remove: 'Удалить',
    },
  },
  ads: {
    slotLabel: 'Реклама',
    sponsoredNote: 'Зарезервированный рекламный блок (Media.net)',
  },
  affiliate: {
    title: 'Рекомендуемые средства защиты и резервного копирования',
    subtitle: 'Практичные решения для безопасности аккаунта и хранения архивов.',
    disclosure: 'Партнёрское уведомление: ссылки ниже помогают поддерживать FollowAuditCue бесплатным.',
    items: [
      {
        category: 'Аппаратная 2FA',
        title: 'Ключи безопасности FIDO2 / USB-C (YubiKey)',
        description: 'Надёжная защита от фишинга для Instagram и Центра аккаунтов Meta.',
        ctaLabel: 'Выбрать ключ',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Офлайн-архив',
        title: 'Портативные внешние SSD NVMe (1TB–2TB)',
        description: 'Храните полные архивы Meta локально вне облачных сервисов.',
        ctaLabel: 'Посмотреть SSD',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Пароли',
        title: 'Проверенные менеджеры паролей',
        description: 'Уникальные длинные пароли для каждого сервиса без повторений.',
        ctaLabel: 'Перейти к обзору',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'Как безопасно проверить невзаимные подписки в Instagram без пароля',
    intro: 'Локальный разбор официального .ZIP-экспорта Meta полностью исключает риск блокировки аккаунта.',
    sections: [
      {
        title: 'Почему опасны приложения, запрашивающие пароль',
        paragraphs: [
          'Передача логина или cookies сторонним сервисам нарушает правила Meta и нередко приводит к взлому или блокировке.',
        ],
      },
      {
        title: 'Как скачать список подписчиков и подписок в Meta',
        paragraphs: [
          'Откройте Центр аккаунтов → Скачать информацию → Подписчики и подписки (JSON или HTML) и загрузите .ZIP в FollowAuditCue.',
        ],
      },
    ],
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Нужно ли вводить пароль от Instagram?',
        answer: 'Нет. Сервис не запрашивает пароли и не подключается к вашему аккаунту.',
      },
      {
        question: 'Отправляется ли .ZIP-файл на сервер?',
        answer: 'Нет, всё обрабатывается на 100% локально в памяти браузера через JSZip.',
      },
      {
        question: 'Поддерживаются ли оба формата — JSON и HTML?',
        answer: 'Да, оба официальных формата Meta распознаются автоматически.',
      },
    ],
    transparencyNotice:
      '100% клиентский аудитор конфиденциальности. Пароль и вход не запрашиваются никогда, а ваш .ZIP-архив обрабатывается локально в браузере, не покидая устройство.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Локальный отчёт аудита Instagram',
    generatedOn: 'Создано',
    sourceLabel: 'Источник архива',
    privacyFooter: 'Обработано 100% локально в браузере · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Локальный приватный аудитор .ZIP-архивов Instagram.',
    canonicalNotice: 'Каноническая версия: https://followauditcue.bastelar.com/?lang=ru',
  },
};

export const zh: Translations = {
  seo: {
    title: 'FollowAuditCue — 本地检测 Instagram 谁没有回关你（.ZIP 文件，无需密码）',
    description:
      '使用 Meta 官方导出的 .ZIP 压缩包，在浏览器本地 100% 离线检测 Instagram 谁没有回关你。无需密码、无需登录，数据绝不离开你的设备。',
    appDescription:
      '100% 浏览器本地隐私审计工具，解析官方 Instagram/Meta .ZIP 导出文件，计算未回关、互关、粉丝和关注列表。',
    howToName: '无需密码如何检查 Instagram 谁没有回关你',
    howToDescription: '下载 Meta 官方 .ZIP 数据包并在浏览器本地完成分析。',
  },
  nav: {
    auditor: '本地检测',
    howItWorks: '三步教程',
    savedAudits: '本地记录',
    faq: '指南与问答',
    languageLabel: '语言',
  },
  hero: {
    privacyLead: '100% 浏览器本地运行 — 无需密码、无需登录、数据绝不离开你的设备',
    h1: '通过官方 .ZIP 在本地查看 Instagram 谁没有回关你',
    subtitle:
      '拖入从 Meta 账户中心下载的「粉丝和关注对象」官方 .ZIP 导出文件，直接在浏览器内存中计算未回关、互关、粉丝与关注名单。',
    zeroUploadGuarantee:
      '零服务器上传 · 兼容 Meta JSON 与 HTML 格式 · 本地即时搜索与 CSV/JSON 导出',
    safetyWarningTitle: '账号安全提醒',
    safetyWarningBody:
      '切勿向第三方取关检测 App 或浏览器插件提供 Instagram 密码；自动化抓取会触发 Meta 风控并导致封号风险。',
  },
  steps: {
    sectionTitle: '三步完成本地隐私审计',
    sectionSubtitle: '所有解压与比对均在当前浏览器标签页中完成。',
    items: [
      {
        num: '01',
        title: '下载 Meta 官方 .ZIP',
        detail:
          '打开 Instagram 设置 → 账户中心 → 你的信息和权限 → 下载你的信息，仅勾选「粉丝和关注对象」（JSON 或 HTML 格式）。',
        pathHint: 'Meta 账户中心 · 粉丝和关注对象',
      },
      {
        num: '02',
        title: '将 .ZIP 拖入本页面',
        detail:
          '把压缩包保存到手机或电脑，拖入下方区域。JSZip 会在本地内存中直接解压，绝不上传。',
        pathHint: '本地内存解析 · 支持 JSON 与 HTML',
      },
      {
        num: '03',
        title: '本地查看与导出',
        detail:
          '在未回关、互关、粉丝和关注标签间切换，支持用户名筛选、一键复制及 CSV/JSON 导出。',
        pathHint: '确定性计算 · 零追踪',
      },
    ],
  },
  dropzone: {
    title: '将 Instagram 官方 .ZIP 导出文件拖放到此处',
    subtitle: '或点击选择 .zip 文件（也支持直接选取解压后的 followers / following .json 或 .html 文件）。',
    browseBtn: '选择 .ZIP 文件',
    sampleBtn: '加载示例数据',
    processingLabel: '正在浏览器本地解压分析...',
    acceptedFormats: '支持格式：.zip（Meta 导出包）或 .json / .html 文件',
    loadedSummaryLabel: '当前数据源',
    formatDetectedLabel: '格式',
    filesParsedLabel: '已解析文件数',
    sampleBadge: '虚构示例数据集',
    errorInvalidZip: '无法将该文件作为有效的 .ZIP 压缩包打开，请确认下载完整。',
    errorMissingLists:
      '压缩包中未找到粉丝或关注列表文件。请在 Meta 导出时确认勾选了「粉丝和关注对象」。',
    errorEncryptedZip: '暂不支持带密码加密的 .ZIP 文件，请选择标准无密码 Meta 导出。',
    errorGeneric: '无法解析所选文件，请使用原始 .zip 或点击「加载示例数据」。',
  },
  results: {
    emptyTitle: '准备就绪，可随时本地检测',
    emptyBody: '在上方拖入 Meta .ZIP 文件，或点击「加载示例数据」体验功能。',
    tabs: {
      notFollowingBack: '未回关',
      mutuals: '互相关注',
      followers: '粉丝',
      following: '正在关注',
    },
    metrics: {
      notFollowingBackSub: '占你关注账号的比例',
      mutualsSub: '回关率',
      followersSub: '去重粉丝数',
      followingSub: '去重关注数',
    },
    searchPlaceholder: '按 @用户名 筛选...',
    sortLabel: '排序',
    sortOptions: {
      az: '用户名 (A–Z)',
      za: '用户名 (Z–A)',
      newest: '导出日期从新到旧',
      oldest: '导出日期从旧到新',
    },
    copyListBtn: '复制列表',
    copiedListBtn: '已复制！',
    exportCsvBtn: '导出 CSV',
    exportJsonBtn: '导出 JSON',
    printBtn: '打印摘要',
    clearSessionBtn: '清除本次数据',
    tableHeaders: {
      index: '#',
      username: '账号',
      exportedDate: '导出记录日期',
      relationship: '状态',
      actions: '操作',
    },
    relationships: {
      notFollowingBack: '未回关你',
      mutual: '互关',
      followerOnly: '关注了你',
      following: '已关注',
    },
    copySingle: '复制',
    copiedSingle: '已复制',
    openProfile: '打开主页',
    noSearchMatches: '没有匹配当前筛选条件的账号。',
    noUnfollowersCongrats: '在此导出中，你关注的所有账号都回关了你。',
    showingRange: '显示 {shown} / {total} 个账号',
    showMoreBtn: '再显示 50 条',
    unknownDate: '—',
  },
  saved: {
    title: '本地审计历史记录',
    subtitle: '在浏览器本地记录统计摘要，方便长期对比变化。',
    privacyNote:
      '隐私设计：localStorage 仅保存汇总数字、日期与可选备注，绝不会持久化保存具体用户名列表。',
    notePlaceholder: '可选备注（例如：季度整理）',
    saveBtn: '保存摘要',
    savedFeedback: '已本地保存',
    exportHistoryBtn: '导出历史 JSON',
    importHistoryBtn: '导入历史 JSON',
    copyLinkBtn: '复制直达链接',
    copiedLinkBtn: '链接已复制',
    printSummaryBtn: '打印报告',
    clearHistoryBtn: '清空历史',
    emptyHistory: '暂无保存的摘要记录。',
    importError: '无效的历史记录 JSON 文件。',
    importSuccess: '已成功在本地导入历史记录。',
    columns: {
      date: '保存日期',
      source: '来源',
      notBack: '未回关',
      mutuals: '互关',
      followers: '粉丝',
      following: '关注',
      note: '备注',
      remove: '删除',
    },
  },
  ads: {
    slotLabel: '广告',
    sponsoredNote: '预留广告位 (Media.net)',
  },
  affiliate: {
    title: '账号安全与本地备份推荐工具',
    subtitle: '保护创作者账号并离线归档个人社交数据的实用装备。',
    disclosure: '联盟推广声明：以下链接有助于维持 FollowAuditCue 免费运行。',
    items: [
      {
        category: '硬件两步验证',
        title: 'FIDO2 / USB-C 安全密钥 (YubiKey 系列)',
        description: '为 Instagram、邮箱和 Meta 账户中心提供防钓鱼硬件密钥保护。',
        ctaLabel: '查看安全密钥',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: '离线加密备份',
        title: '便携式 NVMe 移动固态硬盘 (1TB–2TB)',
        description: '将完整的 Meta 照片、Reels 与关注数据离线保存在本地硬盘中。',
        ctaLabel: '浏览移动 SSD',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: '密码安全',
        title: '经审计的密码管理器',
        description: '为每个平台生成独立高强度密码，避免撞库风险。',
        ctaLabel: '了解密码管理器',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: '如何无需密码安全检查 Instagram 未回关列表',
    intro: '本地解析 Meta 官方 .ZIP 导出包，是唯一零封号风险且可验证隐私的方案。',
    sections: [
      {
        title: '为什么不应使用索要密码的检测 App',
        paragraphs: [
          '任何索要你 Instagram 密码或 Cookie 的应用都可能窃取账号权限，且自动化请求极易触发 Meta 安全封禁。',
        ],
      },
      {
        title: '如何获取 Meta 粉丝和关注导出包',
        paragraphs: [
          '在账户中心选择「下载你的信息」→ 勾选「粉丝和关注对象」（JSON 或 HTML），下载后拖入本页面即可。',
        ],
      },
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        question: '需要输入 Instagram 密码或登录吗？',
        answer: '完全不需要。本工具只读取你从 Meta 下载的官方 .ZIP 文件。',
      },
      {
        question: '我的 .ZIP 文件会上传到服务器吗？',
        answer: '绝不会。100% 的解压与集合比对均通过 JSZip 在本地浏览器内完成。',
      },
      {
        question: '同时支持 JSON 和 HTML 格式吗？',
        answer: '是的，工具会自动识别这两种官方导出格式。',
      },
    ],
    transparencyNotice:
      '100% 客户端隐私审计工具。绝不索要密码或登录凭据，你的 .ZIP 导出包仅在浏览器本地解析，绝不离开你的设备。',
  },
  print: {
    reportTitle: 'FollowAuditCue — Instagram 本地审计摘要',
    generatedOn: '生成时间',
    sourceLabel: '存档来源',
    privacyFooter: '100% 浏览器本地处理 · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · 隐私优先的本地 Instagram .ZIP 审计工具。',
    canonicalNotice: '规范版本：https://followauditcue.bastelar.com/?lang=zh',
  },
};

export const ja: Translations = {
  seo: {
    title: 'FollowAuditCue — Instagram片思い（フォローバックなし）を.ZIPでローカル確認（パスワード不要）',
    description:
      'Meta公式の.ZIPエクスポートを使い、パスワード・ログイン不要でブラウザ内100%ローカルでInstagramの片思いアカウントを確認。データは端末外へ送信されません。',
    appDescription:
      'Instagram/Meta公式.ZIPエクスポートをブラウザ内で解析し、片思い・相互フォロー・フォロワー・フォロー中をローカル算出するプライバシー監査ツール。',
    howToName: 'パスワードなしでInstagramの片思いアカウントを確認する方法',
    howToDescription: 'Meta公式の.ZIPデータをダウンロードし、ブラウザ上で安全にローカル解析します。',
  },
  nav: {
    auditor: 'ローカル解析',
    howItWorks: '3ステップ手順',
    savedAudits: '保存履歴',
    faq: '解説・FAQ',
    languageLabel: '言語',
  },
  hero: {
    privacyLead: '100%ブラウザ内処理 — パスワード不要・ログイン不要・データは端末外に一切送信されません',
    h1: '公式.ZIPからInstagramのフォローバックなしを安全にローカル確認',
    subtitle:
      'Metaアカウントセンターの「フォロワーとフォロー中」公式.ZIPをドロップするだけで、フォローバックなし・相互フォロー・フォロワー・フォロー中をメモリ上で即座に算出します。',
    zeroUploadGuarantee:
      'サーバー送信ゼロ · MetaのJSON/HTML両対応 · ローカル検索＆CSV/JSON書き出し',
    safetyWarningTitle: 'アカウント保護に関する注意',
    safetyWarningBody:
      'Instagramのパスワードを外部アプリや拡張機能に入力しないでください。自動リクエストはMetaの利用制限・凍結の対象になります。',
  },
  steps: {
    sectionTitle: '3ステップで完了するローカル監査',
    sectionSubtitle: 'ページ読み込み後はオフラインでも動作する完全ブラウザ処理です。',
    items: [
      {
        num: '01',
        title: 'Meta公式.ZIPを取得',
        detail:
          'Instagram設定 → アカウントセンター → あなたの情報とアクセス許可 → 情報をダウンロード から「フォロワーとフォロー中」（JSONまたはHTML）を選択して取得します。',
        pathHint: 'Metaアカウントセンター · フォロワーとフォロー中',
      },
      {
        num: '02',
        title: '.ZIPをここへドロップ',
        detail:
          '端末に保存した.zipを下の枠にドラッグ＆ドロップ。JSZipがブラウザのRAM上で直接展開します。',
        pathHint: 'ローカルRAM解析 · JSON/HTML対応',
      },
      {
        num: '03',
        title: '結果を確認・ローカル書き出し',
        detail:
          '片思い・相互・フォロワー・フォロー中を切り替え、検索やユーザー名コピー、CSV/JSON保存が行えます。',
        pathHint: '完全ローカル算出 · 追跡ゼロ',
      },
    ],
  },
  dropzone: {
    title: 'Instagram公式の.ZIPファイルをここにドロップ',
    subtitle: 'またはファイルを選択（展開済みのfollowers / following .json・.htmlにも対応）。',
    browseBtn: '.ZIPファイルを選択',
    sampleBtn: 'サンプルデータで試す',
    processingLabel: 'ブラウザ内でアーカイブをローカル展開中...',
    acceptedFormats: '対応形式：.zip（Metaエクスポート）または .json / .html',
    loadedSummaryLabel: '読み込み元',
    formatDetectedLabel: '形式',
    filesParsedLabel: '解析ファイル数',
    sampleBadge: '架空のサンプルデータ',
    errorInvalidZip: '有効な.ZIPアーカイブとして開けませんでした。ダウンロードが完了しているかご確認ください。',
    errorMissingLists:
      'フォロワーまたはフォロー中のファイルが見つかりません。Metaで「フォロワーとフォロー中」を選択して取得してください。',
    errorEncryptedZip: 'パスワード付き.ZIPには対応していません。通常のMetaエクスポートをご利用ください。',
    errorGeneric: 'ファイルを解析できませんでした。元の.zipまたはサンプルデータをお試しください。',
  },
  results: {
    emptyTitle: 'ローカル監査の準備完了',
    emptyBody: '上の枠にMetaの.ZIPを読み込むか「サンプルデータで試す」を押してください。',
    tabs: {
      notFollowingBack: '片思い（未返却）',
      mutuals: '相互フォロー',
      followers: 'フォロワー',
      following: 'フォロー中',
    },
    metrics: {
      notFollowingBackSub: 'フォロー中のアカウント比',
      mutualsSub: '相互フォロー率',
      followersSub: 'ユニークフォロワー数',
      followingSub: 'ユニークフォロー中数',
    },
    searchPlaceholder: '@ユーザー名で絞り込み...',
    sortLabel: '並び替え',
    sortOptions: {
      az: 'ユーザー名 (A–Z)',
      za: 'ユーザー名 (Z–A)',
      newest: '新しい日付順',
      oldest: '古い日付順',
    },
    copyListBtn: 'リストをコピー',
    copiedListBtn: 'コピーしました',
    exportCsvBtn: 'CSV書き出し',
    exportJsonBtn: 'JSON書き出し',
    printBtn: 'サマリー印刷',
    clearSessionBtn: 'セッション消去',
    tableHeaders: {
      index: '#',
      username: 'アカウント',
      exportedDate: '記録日',
      relationship: '状態',
      actions: '操作',
    },
    relationships: {
      notFollowingBack: 'フォローバックなし',
      mutual: '相互フォロー',
      followerOnly: 'フォロワー',
      following: 'フォロー中',
    },
    copySingle: 'コピー',
    copiedSingle: '完了',
    openProfile: 'プロフィールを開く',
    noSearchMatches: '条件に一致するアカウントがありません。',
    noUnfollowersCongrats: 'フォロー中のすべてのアカウントからフォローバックされています。',
    showingRange: '{total}件中 {shown}件を表示',
    showMoreBtn: 'さらに50件表示',
    unknownDate: '—',
  },
  saved: {
    title: 'ローカル監査履歴',
    subtitle: '数値サマリーをブラウザ内に保存し、推移を記録できます。',
    privacyNote:
      'プライバシー設計：localStorageに保存されるのは件数・日時・任意メモのみで、アカウント一覧は一切保存されません。',
    notePlaceholder: '任意メモ（例：月末チェック）',
    saveBtn: 'サマリーを保存',
    savedFeedback: 'ローカルに保存しました',
    exportHistoryBtn: '履歴JSONを書き出し',
    importHistoryBtn: '履歴JSONを読み込み',
    copyLinkBtn: 'ダイレクトリンクをコピー',
    copiedLinkBtn: 'リンクをコピーしました',
    printSummaryBtn: 'レポートを印刷',
    clearHistoryBtn: '履歴を消去',
    emptyHistory: '保存されたサマリーはまだありません。',
    importError: '履歴JSONの形式が正しくありません。',
    importSuccess: '履歴をローカルに読み込みました。',
    columns: {
      date: '保存日',
      source: 'ソース',
      notBack: '片思い',
      mutuals: '相互',
      followers: 'フォロワー',
      following: 'フォロー中',
      note: 'メモ',
      remove: '削除',
    },
  },
  ads: {
    slotLabel: '広告',
    sponsoredNote: '予約済み広告スペース (Media.net)',
  },
  affiliate: {
    title: 'アカウント保護・バックアップ推奨ツール',
    subtitle: 'アカウントの乗っ取り対策や個人データ保全に役立つ実用アイテム。',
    disclosure: 'アフィリエイト開示：以下のリンクはFollowAuditCueの無料提供を支えています。',
    items: [
      {
        category: '2段階認証キー',
        title: 'FIDO2 / USB-C セキュリティキー (YubiKey)',
        description: 'InstagramやMetaアカウントをフィッシングから守る物理セキュリティキー。',
        ctaLabel: 'セキュリティキーを見る',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'オフライン保管',
        title: 'ポータブル外付けNVMe SSD (1TB–2TB)',
        description: '写真やリールを含むMeta全エクスポートデータをクラウド外へ安全保管。',
        ctaLabel: '外付けSSDを探す',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'パスワード管理',
        title: '監査済みパスワードマネージャー',
        description: '使い回しを防ぎ、サービスごとに強力なパスワードを管理。',
        ctaLabel: '詳細を見る',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'アプリやパスワードを使わずにInstagramの片思いを確認する方法',
    intro: 'Meta公式の.ZIPをローカル解析することで、アカウント凍結リスクゼロで正確に把握できます。',
    sections: [
      {
        title: 'パスワード入力型アプリを避けるべき理由',
        paragraphs: [
          'ログイン情報やCookieを要求する非公式アプリは、不正アクセスやMetaによるアカウント停止の原因になります。',
        ],
      },
      {
        title: 'Metaからフォロワー・フォロー中をダウンロードする手順',
        paragraphs: [
          'アカウントセンターの「情報をダウンロード」で「フォロワーとフォロー中」をJSONまたはHTML形式で取得し、本ページへドロップしてください。',
        ],
      },
    ],
    faqTitle: 'よくある質問',
    faqs: [
      {
        question: 'Instagramのパスワード入力は必要ですか？',
        answer: 'いいえ。パスワードやログインは一切不要です。Metaから取得した.ZIPファイルのみを読み込みます。',
      },
      {
        question: '.ZIPファイルはサーバーに送信されますか？',
        answer: 'いいえ。JSZipにより100%ブラウザ内で処理され、端末の外に出ることはありません。',
      },
      {
        question: 'JSON形式とHTML形式の両方に対応していますか？',
        answer: 'はい。Meta公式のJSON・HTML両形式を自動判別して解析します。',
      },
    ],
    transparencyNotice:
      '100%クライアント側で動作するプライバシー監査ツールです。パスワードやログインは一切要求せず、.ZIPエクスポートは端末から送信されることなくブラウザ内でローカル解析されます。',
  },
  print: {
    reportTitle: 'FollowAuditCue — ローカルInstagram監査サマリー',
    generatedOn: '作成日時',
    sourceLabel: 'アーカイブ元',
    privacyFooter: 'ブラウザ内で100%ローカル処理 · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · プライバシー重視のローカルInstagram .ZIP監査ツール',
    canonicalNotice: '正規URL: https://followauditcue.bastelar.com/?lang=ja',
  },
};
