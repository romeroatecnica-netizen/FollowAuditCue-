import type {Translations} from './types';

export const en: Translations = {
  seo: {
    title: "FollowAuditCue — Check Who Doesn't Follow You Back (.ZIP, No Password)",
    description:
      "Check who doesn't follow you back on Instagram 100% locally in your browser using your official Meta .ZIP export. No password, no login, your data never leaves your device.",
    appDescription:
      "100% client-side privacy auditor that reads your official Instagram/Meta .ZIP export in your browser to calculate Not Following Back, Mutuals, Followers, and Following without a password.",
    howToName: "How to check who doesn't follow you back on Instagram without a password",
    howToDescription:
      'Download your official Meta Followers and Following .ZIP archive and audit it locally in your browser with FollowAuditCue.',
  },
  nav: {
    auditor: 'Auditor',
    howItWorks: '3-Step Guide',
    savedAudits: 'Saved Audits',
    faq: 'Guide & FAQ',
    languageLabel: 'Language',
  },
  hero: {
    privacyLead: '100% in your browser — no password, no login, your data never leaves your device',
    h1: "Check Who Doesn't Follow You Back on Instagram — From Your Official .ZIP",
    subtitle:
      'Drop the official Followers and following .ZIP export from Meta Accounts Center to compute Not Following Back, Mutuals, Followers, and Following deterministically in memory.',
    zeroUploadGuarantee:
      'Zero server uploads · Supports JSON & HTML Meta exports · Instant local search & CSV/JSON export',
    safetyWarningTitle: 'Account safety notice',
    safetyWarningBody:
      'Never enter your Instagram password into third-party unfollower apps or browser extensions that automate requests—Meta flags automated scraping and credential sharing with account locks.',
  },
  steps: {
    sectionTitle: 'How the 3-step local audit works',
    sectionSubtitle: 'Everything runs offline-capable inside your browser tab once loaded.',
    items: [
      {
        num: '01',
        title: 'Download official Meta .ZIP',
        detail:
          'Open Instagram Settings → Accounts Center → Your information and permissions → Download your information. Select only Followers and following in JSON or HTML format.',
        pathHint: 'Meta Accounts Center · Followers and following',
      },
      {
        num: '02',
        title: 'Drop .ZIP into this page',
        detail:
          'Save the archive on your phone or computer and drag it into the dropzone below. JSZip unpacks it locally in RAM—nothing is transmitted anywhere.',
        pathHint: 'Local RAM parsing · JSON & HTML supported',
      },
      {
        num: '03',
        title: 'Review & export locally',
        detail:
          'Switch between Not Following Back, Mutuals, Followers, and Following. Filter usernames, copy handles, print a summary, or export CSV/JSON.',
        pathHint: 'Instant set diff · Zero tracking',
      },
    ],
  },
  dropzone: {
    title: 'Drop your official Instagram .ZIP export here',
    subtitle: 'Or select your .zip archive (also supports extracted followers & following .json / .html files).',
    browseBtn: 'Select .ZIP File',
    sampleBtn: 'Load Sample Data',
    processingLabel: 'Unpacking archive locally in browser...',
    acceptedFormats: 'Accepted: .zip (Meta export) or .json / .html files',
    loadedSummaryLabel: 'Active source',
    formatDetectedLabel: 'Format',
    filesParsedLabel: 'Files parsed',
    sampleBadge: 'Sample dataset (fictional accounts)',
    errorInvalidZip: 'This file could not be opened as a valid .ZIP archive. Make sure the download finished completely.',
    errorMissingLists:
      'No followers or following files were found inside this archive. When requesting your export in Meta Accounts Center, ensure "Followers and following" is selected.',
    errorEncryptedZip: 'Password-protected .ZIP archives are not supported. Request a standard unencrypted Meta export.',
    errorGeneric: 'Unable to parse the selected file. Try selecting the original .zip archive or Load Sample Data.',
  },
  results: {
    emptyTitle: 'Ready to audit locally',
    emptyBody: 'Upload your Meta .ZIP export above or click "Load Sample Data" to explore Not Following Back and Mutuals.',
    tabs: {
      notFollowingBack: 'Not Following Back',
      mutuals: 'Mutuals',
      followers: 'Followers',
      following: 'Following',
    },
    metrics: {
      notFollowingBackSub: 'of accounts you follow',
      mutualsSub: 'follow-back rate',
      followersSub: 'unique followers parsed',
      followingSub: 'unique accounts followed',
    },
    searchPlaceholder: 'Filter by @username...',
    sortLabel: 'Sort',
    sortOptions: {
      az: 'Username (A–Z)',
      za: 'Username (Z–A)',
      newest: 'Newest export date',
      oldest: 'Oldest export date',
    },
    copyListBtn: 'Copy List',
    copiedListBtn: 'Copied!',
    exportCsvBtn: 'Export CSV',
    exportJsonBtn: 'Export JSON',
    printBtn: 'Print Summary',
    clearSessionBtn: 'Clear Session Data',
    tableHeaders: {
      index: '#',
      username: 'Account',
      exportedDate: 'Export Date',
      relationship: 'Status',
      actions: 'Actions',
    },
    relationships: {
      notFollowingBack: 'Not following back',
      mutual: 'Mutual',
      followerOnly: 'Follows you',
      following: 'Following',
    },
    copySingle: 'Copy',
    copiedSingle: 'Copied',
    openProfile: 'Open profile',
    noSearchMatches: 'No accounts match your current filter.',
    noUnfollowersCongrats: 'Everyone you follow also follows you back in this export.',
    showingRange: 'Showing {shown} of {total} accounts',
    showMoreBtn: 'Show 50 more',
    unknownDate: '—',
  },
  saved: {
    title: 'Local Audit History',
    subtitle: 'Track follower count changes over time right inside your browser.',
    privacyNote:
      'Privacy by design: only aggregate counts, timestamps, and your optional note are stored in localStorage—sensitive handle lists are never saved automatically.',
    notePlaceholder: 'Optional note (e.g., Q4 cleanup, main creator account)',
    saveBtn: 'Save Audit Summary',
    savedFeedback: 'Saved locally',
    exportHistoryBtn: 'Export History JSON',
    importHistoryBtn: 'Import History JSON',
    copyLinkBtn: 'Copy Direct Link',
    copiedLinkBtn: 'Link Copied',
    printSummaryBtn: 'Print Report',
    clearHistoryBtn: 'Clear History',
    emptyHistory: 'No saved audit summaries yet. Run an audit or load sample data, then save a summary.',
    importError: 'Invalid history JSON file. Please select a file previously exported by FollowAuditCue.',
    importSuccess: 'Imported audit history locally.',
    columns: {
      date: 'Saved Date',
      source: 'Source',
      notBack: 'Not Back',
      mutuals: 'Mutuals',
      followers: 'Followers',
      following: 'Following',
      note: 'Note',
      remove: 'Remove',
    },
  },
  ads: {
    slotLabel: 'Advertisement',
    sponsoredNote: 'Reserved ad container (Media.net)',
  },
  affiliate: {
    title: 'Recommended Account Security & Backup Gear',
    subtitle: 'Practical tools for protecting your creator accounts and archiving personal exports safely.',
    disclosure: 'Affiliate disclosure: links below use sponsored tracking parameters and help keep FollowAuditCue free.',
    items: [
      {
        category: '2FA Hardware Security',
        title: 'FIDO2 / USB-C Security Keys (YubiKey Series)',
        description: 'Phishing-resistant hardware two-factor authentication for Instagram, email, and Meta Accounts Center.',
        ctaLabel: 'Compare security keys',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Encrypted Archive Backup',
        title: 'Portable NVMe External SSD (1TB–2TB)',
        description: 'Store full Meta photo, reel, and follower .ZIP exports offline on an encrypted physical drive.',
        ctaLabel: 'Browse backup SSDs',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Credential Hygiene',
        title: 'Audited Password Managers & Privacy Guides',
        description: 'Generate unique 24-character passwords so you never reuse credentials across social tools.',
        ctaLabel: 'Explore password managers',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'How to Check Instagram Unfollowers Safely Without Password or App',
    intro:
      'Searching for who doesn’t follow you back on Instagram often leads to sketchy apps that ask you to log in. Here is why local .ZIP auditing is the safest, deterministic alternative.',
    sections: [
      {
        title: 'Why you should avoid password-based Instagram tracker apps',
        paragraphs: [
          'Any third-party app or browser extension asking for your Instagram username, password, or session cookie gains full access to your account and direct messages. Beyond credential theft, automated API polling triggers Meta’s anti-bot systems, frequently resulting in temporary action blocks or permanent account suspension.',
          'Using Meta’s official "Download your information" archive removes that risk entirely. You obtain a static snapshot directly from Instagram and inspect it locally without ever connecting an unauthorized client.',
        ],
      },
      {
        title: 'Step-by-step: Exporting Followers and Following from Meta Accounts Center',
        paragraphs: [
          'Open the Instagram app or web browser, go to Settings and activity → Accounts Center → Your information and permissions → Download your information. Choose "Some of your information", check "Followers and following", and pick "Download to device".',
          'For fastest processing, select JSON format (HTML also works). Once Meta emails your download link, save the .zip file and drop it into FollowAuditCue.',
        ],
      },
      {
        title: 'Understanding Not Following Back vs. Mutuals',
        paragraphs: [
          'Not Following Back lists accounts present in your Following list that do not appear in your Followers list. This includes brands, celebrities, creators who haven’t followed back, and occasionally recently deactivated accounts.',
          'Mutuals are accounts where both sides follow each other. Reviewing both lists alongside your follow-back percentage helps you clean up inactive follows thoughtfully without relying on invasive automation.',
        ],
      },
      {
        title: 'Verifiably 100% client-side browser processing',
        paragraphs: [
          'FollowAuditCue has no backend upload endpoint. When you select a .zip archive, JSZip decompresses the relevant followers and following files directly inside your browser’s memory. You can even disconnect from Wi-Fi after loading the page and run the entire comparison offline.',
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Do I need to enter my Instagram password or log in?',
        answer:
          'No. FollowAuditCue never asks for your password, two-factor codes, or Instagram session cookies. It only reads the official .ZIP export file you download from Meta.',
      },
      {
        question: 'Does my .ZIP file get uploaded to any server?',
        answer:
          'Never. 100% of the decompression and set comparison runs locally inside your browser using JSZip. Your follower and following lists never leave your device.',
      },
      {
        question: 'Does it work with both JSON and HTML Meta exports?',
        answer:
          'Yes. FollowAuditCue automatically detects and parses both JSON exports (followers_1.json, following.json) and HTML exports (followers_1.html, following.html) inside your .ZIP archive.',
      },
      {
        question: 'Why does an account I know show up under Not Following Back?',
        answer:
          'If someone recently deactivated or deleted their account, or changed their privacy state, Meta may omit them from your Followers snapshot while keeping the reference in Following.',
      },
      {
        question: 'Are my follower lists saved in localStorage?',
        answer:
          'No. For your privacy, FollowAuditCue only saves aggregate counts, dates, and optional notes when you click "Save Audit Summary". Full username lists stay in temporary memory and are wiped when you click "Clear Session Data" or close the tab.',
      },
    ],
    transparencyNotice:
      '100% client-side privacy auditor. No password or login is ever requested, and your .ZIP export is parsed locally in your browser without leaving your device.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Local Instagram Audit Summary',
    generatedOn: 'Generated on',
    sourceLabel: 'Archive source',
    privacyFooter: 'Processed 100% locally in browser · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Privacy-first local Instagram .ZIP auditor.',
    canonicalNotice: 'Canonical edition: https://followauditcue.bastelar.com/',
  },
};

export const es: Translations = {
  seo: {
    title: 'FollowAuditCue — Ver quién no me sigue en Instagram (.ZIP, sin contraseña)',
    description:
      'Comprueba quién no te sigue de vuelta en Instagram 100 % en tu navegador con tu archivo .ZIP oficial de Meta. Sin contraseña, sin login y sin subir tus datos.',
    appDescription:
      'Auditor de privacidad 100 % local en el navegador que analiza el archivo .ZIP oficial de Instagram/Meta para calcular quién no te sigue de vuelta, mutuos, seguidores y seguidos sin contraseña.',
    howToName: 'Cómo ver quién no te sigue de vuelta en Instagram sin contraseña ni app',
    howToDescription:
      'Descarga tu archivo oficial .ZIP de seguidores y seguidos desde Meta y analízalo localmente en tu navegador con FollowAuditCue.',
  },
  nav: {
    auditor: 'Auditor',
    howItWorks: 'Guía 3 pasos',
    savedAudits: 'Historial',
    faq: 'Guía y FAQ',
    languageLabel: 'Idioma',
  },
  hero: {
    privacyLead: '100 % en tu navegador — sin contraseña, sin sesión, tus datos nunca salen de tu dispositivo',
    h1: 'Ver quién no me sigue de vuelta en Instagram desde el .ZIP oficial',
    subtitle:
      'Arrastra tu archivo oficial .ZIP de Seguidores y seguidos de Meta para calcular al instante quién no te sigue de vuelta, seguidores mutuos, seguidores y seguidos en memoria local.',
    zeroUploadGuarantee:
      'Cero envíos a servidores · Compatible con JSON y HTML de Meta · Buscador local y exportación CSV/JSON',
    safetyWarningTitle: 'Aviso de seguridad de tu cuenta',
    safetyWarningBody:
      'Evita aplicaciones o extensiones que piden tu contraseña de Instagram o realizan peticiones automáticas: Meta detecta el acceso automatizado y puede bloquear o suspender tu cuenta.',
  },
  steps: {
    sectionTitle: 'Cómo funciona la auditoría local en 3 pasos',
    sectionSubtitle: 'Todo el procesamiento se ejecuta en tu navegador sin conexión externa.',
    items: [
      {
        num: '01',
        title: 'Descarga el .ZIP oficial de Meta',
        detail:
          'Entra en Instagram → Configuración → Centro de cuentas → Tu información y permisos → Descargar tu información. Marca solo Seguidores y seguidos en formato JSON o HTML.',
        pathHint: 'Centro de cuentas · Seguidores y seguidos',
      },
      {
        num: '02',
        title: 'Arrastra o elige el .ZIP aquí',
        detail:
          'Guarda el archivo en tu móvil u ordenador y suéltalo abajo. JSZip lo descomprime localmente en RAM sin enviarlo a ningún servidor.',
        pathHint: 'Lectura local en RAM · JSON y HTML',
      },
      {
        num: '03',
        title: 'Revisa y exporta en tu dispositivo',
        detail:
          'Alterna entre No me siguen, Mutuos, Seguidores y Seguidos. Filtra nombres, copia listas o exporta en CSV/JSON.',
        pathHint: 'Cálculo determinista · Cero rastreo',
      },
    ],
  },
  dropzone: {
    title: 'Arrastra aquí tu archivo .ZIP oficial de Instagram',
    subtitle: 'O selecciona el .zip desde tu dispositivo (también admite archivos followers y following en .json o .html).',
    browseBtn: 'Seleccionar archivo .ZIP',
    sampleBtn: 'Cargar datos de ejemplo',
    processingLabel: 'Descomprimiendo archivo localmente en el navegador...',
    acceptedFormats: 'Formatos admitidos: .zip (exportación Meta) o archivos .json / .html',
    loadedSummaryLabel: 'Archivo activo',
    formatDetectedLabel: 'Formato',
    filesParsedLabel: 'Archivos leídos',
    sampleBadge: 'Datos de ejemplo ficticios',
    errorInvalidZip: 'No se pudo abrir como un archivo .ZIP válido. Comprueba que la descarga esté completa.',
    errorMissingLists:
      'No se encontraron listas de seguidores o seguidos dentro del archivo. Asegúrate de elegir "Seguidores y seguidos" al pedir tu copia en Meta.',
    errorEncryptedZip: 'No se admiten archivos .ZIP cifrados con contraseña. Solicita una exportación estándar de Meta.',
    errorGeneric: 'No se pudo procesar el archivo. Prueba con el .zip original o pulsa "Cargar datos de ejemplo".',
  },
  results: {
    emptyTitle: 'Listo para auditar localmente',
    emptyBody: 'Sube tu archivo .ZIP de Meta o pulsa "Cargar datos de ejemplo" para inspeccionar los resultados.',
    tabs: {
      notFollowingBack: 'No me siguen',
      mutuals: 'Mutuos',
      followers: 'Seguidores',
      following: 'Seguidos',
    },
    metrics: {
      notFollowingBackSub: 'de las cuentas que sigues',
      mutualsSub: 'tasa de seguimiento mutuo',
      followersSub: 'seguidores únicos',
      followingSub: 'cuentas seguidas únicas',
    },
    searchPlaceholder: 'Filtrar por @usuario...',
    sortLabel: 'Ordenar',
    sortOptions: {
      az: 'Usuario (A–Z)',
      za: 'Usuario (Z–A)',
      newest: 'Fecha más reciente',
      oldest: 'Fecha más antigua',
    },
    copyListBtn: 'Copiar lista',
    copiedListBtn: '¡Copiada!',
    exportCsvBtn: 'Exportar CSV',
    exportJsonBtn: 'Exportar JSON',
    printBtn: 'Imprimir resumen',
    clearSessionBtn: 'Limpiar sesión',
    tableHeaders: {
      index: '#',
      username: 'Cuenta',
      exportedDate: 'Fecha en exportación',
      relationship: 'Estado',
      actions: 'Acciones',
    },
    relationships: {
      notFollowingBack: 'No te sigue de vuelta',
      mutual: 'Mutuo',
      followerOnly: 'Te sigue',
      following: 'Siguiendo',
    },
    copySingle: 'Copiar',
    copiedSingle: 'Copiado',
    openProfile: 'Abrir perfil',
    noSearchMatches: 'Ninguna cuenta coincide con tu búsqueda.',
    noUnfollowersCongrats: 'Todas las cuentas que sigues también te siguen en esta exportación.',
    showingRange: 'Mostrando {shown} de {total} cuentas',
    showMoreBtn: 'Mostrar 50 más',
    unknownDate: '—',
  },
  saved: {
    title: 'Historial local de auditorías',
    subtitle: 'Guarda resúmenes en tu navegador para comparar tu evolución sin exponer listas.',
    privacyNote:
      'Privacidad por diseño: en localStorage solo se guardan conteos totales, fecha y tu nota opcional; las listas de usuarios no se almacenan.',
    notePlaceholder: 'Nota opcional (ej. limpieza noviembre, cuenta principal)',
    saveBtn: 'Guardar resumen',
    savedFeedback: 'Guardado localmente',
    exportHistoryBtn: 'Exportar historial JSON',
    importHistoryBtn: 'Importar historial JSON',
    copyLinkBtn: 'Copiar enlace directo',
    copiedLinkBtn: 'Enlace copiado',
    printSummaryBtn: 'Imprimir informe',
    clearHistoryBtn: 'Borrar historial',
    emptyHistory: 'Aún no hay resúmenes guardados. Carga un .ZIP o datos de ejemplo para guardar un resumen.',
    importError: 'Archivo JSON de historial no válido.',
    importSuccess: 'Historial importado localmente.',
    columns: {
      date: 'Fecha',
      source: 'Origen',
      notBack: 'No siguen',
      mutuals: 'Mutuos',
      followers: 'Seguidores',
      following: 'Seguidos',
      note: 'Nota',
      remove: 'Quitar',
    },
  },
  ads: {
    slotLabel: 'Publicidad',
    sponsoredNote: 'Espacio publicitario reservado (Media.net)',
  },
  affiliate: {
    title: 'Seguridad digital y copias de seguridad recomendadas',
    subtitle: 'Herramientas prácticas para proteger tus cuentas y archivar tus exportaciones personales.',
    disclosure: 'Aviso de afiliación: los siguientes enlaces ayudan a mantener FollowAuditCue gratuito.',
    items: [
      {
        category: 'Autenticación 2FA física',
        title: 'Llaves de seguridad FIDO2 / USB-C (Serie YubiKey)',
        description: 'Protección física contra phishing para Instagram, correo y Centro de cuentas de Meta.',
        ctaLabel: 'Ver llaves de seguridad',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Copia de seguridad offline',
        title: 'Discos SSD externos portátiles NVMe (1TB–2TB)',
        description: 'Guarda tus copias completas de fotos, reels y datos de Meta fuera de la nube.',
        ctaLabel: 'Ver discos SSD externos',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Higiene de contraseñas',
        title: 'Gestores de contraseñas auditados',
        description: 'Genera claves únicas y robustas sin reutilizar contraseñas en servicios sociales.',
        ctaLabel: 'Explorar gestores',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'Cómo ver quién no te sigue en Instagram sin app ni contraseña',
    intro:
      'Buscar quién dejó de seguirte suele llevar a aplicaciones que piden tu contraseña. Auditar el .ZIP oficial localmente elimina el riesgo por completo.',
    sections: [
      {
        title: 'Por qué evitar apps y extensiones que piden tu contraseña',
        paragraphs: [
          'Cualquier app externa que solicita tu usuario y contraseña de Instagram o lee cookies de sesión puede tomar el control de tu cuenta o realizar consultas automatizadas que violan las normas de Meta, provocando bloqueos temporales o suspensiones.',
          'Con el archivo oficial de exportación de Meta no compartes credenciales ni tokens con nadie: trabajas sobre un archivo descargado directamente por ti.',
        ],
      },
      {
        title: 'Cómo descargar el .ZIP oficial desde Meta / Instagram',
        paragraphs: [
          'En Instagram ve a Configuración y actividad → Centro de cuentas → Tu información y permisos → Descargar tu información. Elige "Parte de tu información", selecciona únicamente "Seguidores y seguidos" y elige descargar en el dispositivo.',
          'Recomendamos formato JSON por velocidad, aunque FollowAuditCue también lee exportaciones en HTML.',
        ],
      },
      {
        title: 'Cómo interpretar Not Following Back frente a Mutuos',
        paragraphs: [
          'En "No me siguen" aparecen las cuentas que tú sigues pero que no figuran en tu lista de seguidores actual. Ten en cuenta que cuentas desactivadas temporalmente también pueden aparecer ahí.',
          'En "Mutuos" verás las cuentas donde el seguimiento es recíproco, permitiéndote revisar tu comunidad de forma ordenada.',
        ],
      },
      {
        title: 'Privacidad verificable 100 % en el navegador',
        paragraphs: [
          'FollowAuditCue no tiene servidor de subida de archivos. JSZip descomprime el .ZIP dentro de la memoria de tu navegador; incluso puedes desconectar internet tras cargar la página y el auditor seguirá funcionando igual.',
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        question: '¿Necesito iniciar sesión o introducir mi contraseña de Instagram?',
        answer:
          'No. FollowAuditCue nunca solicita contraseñas, códigos 2FA ni cookies. Solo lee el archivo .ZIP oficial que descargas de Meta.',
      },
      {
        question: '¿Se sube mi archivo .ZIP a algún servidor?',
        answer:
          'Nunca. Toda la descompresión y comparación se ejecuta localmente en la memoria de tu navegador con JSZip.',
      },
      {
        question: '¿Funciona tanto con formato JSON como con HTML?',
        answer:
          'Sí. El lector detecta automáticamente archivos followers y following tanto en JSON como en HTML dentro del .ZIP.',
      },
      {
        question: '¿Se guardan las listas de usuarios en el navegador?',
        answer:
          'No. Solo puedes guardar resúmenes numéricos (conteos y nota opcional) en localStorage; las listas de nombres se borran al cerrar la pestaña o pulsar "Limpiar sesión".',
      },
    ],
    transparencyNotice:
      'Auditor de privacidad 100 % en el lado del cliente. Nunca se solicita contraseña ni inicio de sesión, y tu archivo .ZIP se analiza localmente en tu navegador sin salir de tu dispositivo.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Resumen local de auditoría de Instagram',
    generatedOn: 'Generado el',
    sourceLabel: 'Archivo de origen',
    privacyFooter: 'Procesado 100 % localmente en el navegador · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Auditor local de .ZIP de Instagram centrado en privacidad.',
    canonicalNotice: 'Edición canónica: https://followauditcue.bastelar.com/?lang=es',
  },
};

export const fr: Translations = {
  seo: {
    title: 'FollowAuditCue — Voir qui ne vous suit pas en retour (.ZIP, sans mot de passe)',
    description:
      'Vérifiez qui ne vous suit pas en retour sur Instagram 100 % localement dans votre navigateur via votre export .ZIP officiel Meta. Sans mot de passe ni connexion.',
    appDescription:
      'Auditeur de confidentialité 100 % local lisant votre archive .ZIP Instagram/Meta pour calculer les non-abonnés en retour, mutuels, abonnés et abonnements sans mot de passe.',
    howToName: 'Comment voir qui ne vous suit pas sur Instagram sans mot de passe',
    howToDescription: 'Téléchargez votre archive officielle Meta et analysez-la localement dans votre navigateur.',
  },
  nav: {
    auditor: 'Auditeur',
    howItWorks: 'Guide 3 étapes',
    savedAudits: 'Historique',
    faq: 'Guide & FAQ',
    languageLabel: 'Langue',
  },
  hero: {
    privacyLead: '100 % dans votre navigateur — sans mot de passe, sans connexion, vos données restent sur votre appareil',
    h1: 'Vérifiez qui ne vous suit pas en retour sur Instagram depuis votre .ZIP officiel',
    subtitle:
      'Déposez votre export officiel Followers et suivi (.ZIP) de l’Espace Comptes Meta pour obtenir instantanément les comptes qui ne vous suivent pas, vos mutuels, abonnés et abonnements.',
    zeroUploadGuarantee:
      'Aucun envoi serveur · Compatible JSON & HTML Meta · Recherche locale & export CSV/JSON',
    safetyWarningTitle: 'Avertissement de sécurité du compte',
    safetyWarningBody:
      'Ne saisissez jamais votre mot de passe Instagram dans des applications tierces : Meta détecte l’automatisation et peut restreindre ou suspendre votre compte.',
  },
  steps: {
    sectionTitle: 'Audit local en 3 étapes simples',
    sectionSubtitle: 'Tout s’exécute directement dans votre navigateur sans transfert réseau.',
    items: [
      {
        num: '01',
        title: 'Téléchargez le .ZIP officiel Meta',
        detail:
          'Dans Instagram : Paramètres → Espace Comptes → Vos informations et autorisations → Télécharger vos informations. Cochez uniquement Followers et suivi (JSON ou HTML).',
        pathHint: 'Espace Comptes Meta · Followers et suivi',
      },
      {
        num: '02',
        title: 'Déposez le .ZIP ici',
        detail:
          'Enregistrez l’archive sur votre appareil et glissez-la dans la zone ci-dessous. JSZip l’ouvre en mémoire locale.',
        pathHint: 'Lecture locale en RAM · JSON & HTML',
      },
      {
        num: '03',
        title: 'Consultez et exportez localement',
        detail:
          'Parcourez Non-retours, Mutuels, Abonnés et Abonnements. Filtrez, copiez la liste ou exportez en CSV/JSON.',
        pathHint: 'Calcul déterministe · Zéro pistage',
      },
    ],
  },
  dropzone: {
    title: 'Déposez votre export .ZIP officiel Instagram ici',
    subtitle: 'Ou sélectionnez votre fichier .zip (ou les fichiers followers / following .json ou .html extraits).',
    browseBtn: 'Choisir un fichier .ZIP',
    sampleBtn: 'Charger des données test',
    processingLabel: 'Décompression locale dans le navigateur...',
    acceptedFormats: 'Formats acceptés : .zip (export Meta) ou .json / .html',
    loadedSummaryLabel: 'Source active',
    formatDetectedLabel: 'Format',
    filesParsedLabel: 'Fichiers lus',
    sampleBadge: 'Jeu de données fictif',
    errorInvalidZip: 'Impossible d’ouvrir ce fichier comme une archive .ZIP valide.',
    errorMissingLists:
      'Aucun fichier followers/following trouvé dans cette archive. Sélectionnez bien « Followers et suivi » lors de l’export Meta.',
    errorEncryptedZip: 'Les archives .ZIP protégées par mot de passe ne sont pas prises en charge.',
    errorGeneric: 'Impossible d’analyser ce fichier. Essayez avec le .zip officiel ou les données test.',
  },
  results: {
    emptyTitle: 'Prêt pour l’audit local',
    emptyBody: 'Importez votre .ZIP Meta ci-dessus ou cliquez sur « Charger des données test ».',
    tabs: {
      notFollowingBack: 'Ne suivent pas',
      mutuals: 'Mutuels',
      followers: 'Abonnés',
      following: 'Abonnements',
    },
    metrics: {
      notFollowingBackSub: 'des comptes suivis',
      mutualsSub: 'taux de réciprocité',
      followersSub: 'abonnés uniques',
      followingSub: 'abonnements uniques',
    },
    searchPlaceholder: 'Filtrer par @identifiant...',
    sortLabel: 'Trier',
    sortOptions: {
      az: 'Identifiant (A–Z)',
      za: 'Identifiant (Z–A)',
      newest: 'Date la plus récente',
      oldest: 'Date la plus ancienne',
    },
    copyListBtn: 'Copier la liste',
    copiedListBtn: 'Copié !',
    exportCsvBtn: 'Exporter CSV',
    exportJsonBtn: 'Exporter JSON',
    printBtn: 'Imprimer le résumé',
    clearSessionBtn: 'Effacer la session',
    tableHeaders: {
      index: '#',
      username: 'Compte',
      exportedDate: 'Date d’export',
      relationship: 'Statut',
      actions: 'Actions',
    },
    relationships: {
      notFollowingBack: 'Ne vous suit pas',
      mutual: 'Mutuel',
      followerOnly: 'Vous suit',
      following: 'Suivi',
    },
    copySingle: 'Copier',
    copiedSingle: 'Copié',
    openProfile: 'Ouvrir le profil',
    noSearchMatches: 'Aucun compte ne correspond à votre filtre.',
    noUnfollowersCongrats: 'Tous les comptes que vous suivez vous suivent en retour dans cet export.',
    showingRange: 'Affichage de {shown} sur {total} comptes',
    showMoreBtn: 'Afficher 50 de plus',
    unknownDate: '—',
  },
  saved: {
    title: 'Historique local des audits',
    subtitle: 'Enregistrez vos compteurs dans votre navigateur pour suivre l’évolution.',
    privacyNote:
      'Confidentialité : seuls les totaux, la date et votre note optionnelle sont enregistrés dans localStorage ; aucune liste de comptes n’est stockée.',
    notePlaceholder: 'Note optionnelle (ex. tri d’automne)',
    saveBtn: 'Enregistrer le résumé',
    savedFeedback: 'Enregistré localement',
    exportHistoryBtn: 'Exporter l’historique JSON',
    importHistoryBtn: 'Importer l’historique JSON',
    copyLinkBtn: 'Copier le lien direct',
    copiedLinkBtn: 'Lien copié',
    printSummaryBtn: 'Imprimer le rapport',
    clearHistoryBtn: 'Vider l’historique',
    emptyHistory: 'Aucun audit enregistré. Lancez un audit puis enregistrez un résumé.',
    importError: 'Fichier JSON d’historique invalide.',
    importSuccess: 'Historique importé localement.',
    columns: {
      date: 'Date',
      source: 'Source',
      notBack: 'Non-retours',
      mutuals: 'Mutuels',
      followers: 'Abonnés',
      following: 'Abonnements',
      note: 'Note',
      remove: 'Supprimer',
    },
  },
  ads: {
    slotLabel: 'Publicité',
    sponsoredNote: 'Emplacement publicitaire réservé (Media.net)',
  },
  affiliate: {
    title: 'Sécurité des comptes et sauvegarde recommandées',
    subtitle: 'Équipements utiles pour protéger vos accès et archiver vos exports.',
    disclosure: 'Transparence : liens affiliés contribuant au maintien gratuit de FollowAuditCue.',
    items: [
      {
        category: 'Clé de sécurité 2FA',
        title: 'Clés FIDO2 / USB-C (Série YubiKey)',
        description: 'Authentification matérielle anti-phishing pour Instagram et Espace Comptes Meta.',
        ctaLabel: 'Voir les clés 2FA',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Sauvegarde hors ligne',
        title: 'SSD externes portables NVMe (1To–2To)',
        description: 'Archivez vos exports complets Meta (photos, reels, listes) hors ligne.',
        ctaLabel: 'Voir les SSD externes',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Gestion des accès',
        title: 'Gestionnaires de mots de passe audités',
        description: 'Créez des mots de passe uniques sans jamais les réutiliser.',
        ctaLabel: 'Découvrir les gestionnaires',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'Comment vérifier ses désabonnements Instagram sans mot de passe',
    intro:
      'Utiliser votre archive officielle Meta est la seule méthode fiable qui ne met jamais votre compte en danger.',
    sections: [
      {
        title: 'Pourquoi éviter les applications demandant vos identifiants',
        paragraphs: [
          'Les applications qui réclament votre mot de passe ou vos cookies de session exposent votre compte au piratage et aux blocages automatiques de Meta.',
          'Avec l’export officiel .ZIP, aucune connexion externe n’est établie.',
        ],
      },
      {
        title: 'Comment obtenir l’archive Followers et suivi',
        paragraphs: [
          'Dans l’Espace Comptes Meta, sélectionnez Vos informations et autorisations → Télécharger vos informations → Followers et suivi (JSON ou HTML).',
          'Déposez ensuite le .ZIP dans FollowAuditCue pour un calcul immédiat.',
        ],
      },
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Dois-je saisir mon mot de passe Instagram ?',
        answer: 'Non, jamais. FollowAuditCue lit uniquement le fichier .ZIP officiel téléchargé depuis Meta.',
      },
      {
        question: 'Mon fichier .ZIP est-il envoyé sur un serveur ?',
        answer: 'Non. Toute l’analyse s’effectue localement dans votre navigateur avec JSZip.',
      },
      {
        question: 'Les formats JSON et HTML sont-ils supportés ?',
        answer: 'Oui, les deux formats d’export Meta sont pris en charge automatiquement.',
      },
    ],
    transparencyNotice:
      'Auditeur de confidentialité 100 % côté client. Aucun mot de passe ni connexion n’est jamais demandé, et votre export .ZIP est analysé localement dans votre navigateur sans quitter votre appareil.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Résumé local d’audit Instagram',
    generatedOn: 'Généré le',
    sourceLabel: 'Archive source',
    privacyFooter: 'Traité 100 % localement · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Auditeur local de .ZIP Instagram respectueux de la vie privée.',
    canonicalNotice: 'Édition canonique : https://followauditcue.bastelar.com/?lang=fr',
  },
};

export const de: Translations = {
  seo: {
    title: 'FollowAuditCue — Wer folgt mir auf Instagram nicht zurück? (.ZIP, ohne Passwort)',
    description:
      'Prüfen Sie lokal im Browser mit Ihrem offiziellen Meta-.ZIP-Export, wer Ihnen auf Instagram nicht zurückfolgt. Ohne Passwort, ohne Login, ohne Server-Upload.',
    appDescription:
      '100 % lokaler Datenschutz-Auditor zum Auslesen Ihres offiziellen Instagram/Meta-.ZIP-Exports im Browser ohne Passwort.',
    howToName: 'Instagram-Entfolger ohne Passwort über .ZIP prüfen',
    howToDescription: 'Offiziellen Meta-Export herunterladen und lokal im Browser auswerten.',
  },
  nav: {
    auditor: 'Auditor',
    howItWorks: '3-Schritte-Anleitung',
    savedAudits: 'Verlauf',
    faq: 'Ratgeber & FAQ',
    languageLabel: 'Sprache',
  },
  hero: {
    privacyLead: '100 % in Ihrem Browser — kein Passwort, kein Login, Ihre Daten verlassen nie Ihr Gerät',
    h1: 'Prüfen Sie lokal per .ZIP, wer Ihnen auf Instagram nicht zurückfolgt',
    subtitle:
      'Legen Sie Ihren offiziellen Meta-Export („Follower und gefolgte Personen“) hier ab, um Nicht-Zurückfolgende, Gegenseitige, Follower und Gefolgte sofort im Arbeitsspeicher zu berechnen.',
    zeroUploadGuarantee:
      'Kein Server-Upload · Unterstützt JSON & HTML von Meta · Lokale Suche & CSV/JSON-Export',
    safetyWarningTitle: 'Hinweis zur Kontosicherheit',
    safetyWarningBody:
      'Geben Sie Ihr Instagram-Passwort niemals in Drittanbieter-Apps ein. Automatisierte Zugriffe führen häufig zu Sperrungen durch Meta.',
  },
  steps: {
    sectionTitle: 'So funktioniert das lokale 3-Schritte-Audit',
    sectionSubtitle: 'Die komplette Auswertung läuft offlinefähig direkt im Browser-Tab.',
    items: [
      {
        num: '01',
        title: 'Offizielles Meta-.ZIP laden',
        detail:
          'Instagram → Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Informationen herunterladen → „Follower und gefolgte Personen“ (JSON oder HTML).',
        pathHint: 'Meta Kontenübersicht · Follower & Gefolgte',
      },
      {
        num: '02',
        title: '.ZIP hier ablegen',
        detail:
          'Speichern Sie das Archiv auf Ihrem Gerät und ziehen Sie es in das Feld unten. JSZip entpackt es lokal im RAM.',
        pathHint: 'Lokale RAM-Analyse · JSON & HTML',
      },
      {
        num: '03',
        title: 'Auswerten & lokal exportieren',
        detail:
          'Wechseln Sie zwischen Nicht zurückfolgend, Gegenseitig, Follower und Gefolgt, filtern oder exportieren Sie CSV/JSON.',
        pathHint: 'Deterministisch · Kein Tracking',
      },
    ],
  },
  dropzone: {
    title: 'Offiziellen Instagram-.ZIP-Export hier ablegen',
    subtitle: 'Oder .zip-Datei auswählen (unterstützt auch entpackte followers/following .json- oder .html-Dateien).',
    browseBtn: '.ZIP-Datei wählen',
    sampleBtn: 'Beispieldaten laden',
    processingLabel: 'Archiv wird lokal im Browser entpackt...',
    acceptedFormats: 'Akzeptiert: .zip (Meta-Export) oder .json / .html',
    loadedSummaryLabel: 'Aktive Quelle',
    formatDetectedLabel: 'Format',
    filesParsedLabel: 'Gelesene Dateien',
    sampleBadge: 'Fiktiver Beispieldatensatz',
    errorInvalidZip: 'Die Datei konnte nicht als gültiges .ZIP-Archiv geöffnet werden.',
    errorMissingLists:
      'Keine Follower- oder Gefolgt-Dateien im Archiv gefunden. Bitte wählen Sie beim Meta-Export „Follower und gefolgte Personen“.',
    errorEncryptedZip: 'Passwortgeschützte .ZIP-Archive werden nicht unterstützt.',
    errorGeneric: 'Datei konnte nicht verarbeitet werden. Nutzen Sie das Original-.zip oder Beispieldaten.',
  },
  results: {
    emptyTitle: 'Bereit für das lokale Audit',
    emptyBody: 'Laden Sie oben Ihr Meta-.ZIP hoch oder testen Sie sofort mit Beispieldaten.',
    tabs: {
      notFollowingBack: 'Folgen nicht zurück',
      mutuals: 'Gegenseitig',
      followers: 'Follower',
      following: 'Gefolgt',
    },
    metrics: {
      notFollowingBackSub: 'der gefolgten Konten',
      mutualsSub: 'Gegenseitigkeitsrate',
      followersSub: 'eindeutige Follower',
      followingSub: 'eindeutig gefolgte Konten',
    },
    searchPlaceholder: 'Nach @Benutzername filtern...',
    sortLabel: 'Sortierung',
    sortOptions: {
      az: 'Name (A–Z)',
      za: 'Name (Z–A)',
      newest: 'Neuestes Exportdatum',
      oldest: 'Ältestes Exportdatum',
    },
    copyListBtn: 'Liste kopieren',
    copiedListBtn: 'Kopiert!',
    exportCsvBtn: 'CSV exportieren',
    exportJsonBtn: 'JSON exportieren',
    printBtn: 'Übersicht drucken',
    clearSessionBtn: 'Sitzung löschen',
    tableHeaders: {
      index: '#',
      username: 'Konto',
      exportedDate: 'Exportdatum',
      relationship: 'Status',
      actions: 'Aktionen',
    },
    relationships: {
      notFollowingBack: 'Folgt nicht zurück',
      mutual: 'Gegenseitig',
      followerOnly: 'Folgt Ihnen',
      following: 'Gefolgt',
    },
    copySingle: 'Kopieren',
    copiedSingle: 'Kopiert',
    openProfile: 'Profil öffnen',
    noSearchMatches: 'Keine Konten entsprechen dem Filter.',
    noUnfollowersCongrats: 'Alle Konten, denen Sie folgen, folgen Ihnen zurück.',
    showingRange: '{shown} von {total} Konten angezeigt',
    showMoreBtn: '50 weitere anzeigen',
    unknownDate: '—',
  },
  saved: {
    title: 'Lokaler Audit-Verlauf',
    subtitle: 'Speichern Sie Zusammenfassungen lokal im Browser.',
    privacyNote:
      'Datenschutz: Im localStorage werden nur Gesamtzahlen, Datum und Ihre optionale Notiz gespeichert — niemals Kontenlisten.',
    notePlaceholder: 'Optionale Notiz (z. B. Herbst-Check)',
    saveBtn: 'Zusammenfassung speichern',
    savedFeedback: 'Lokal gespeichert',
    exportHistoryBtn: 'Verlauf als JSON exportieren',
    importHistoryBtn: 'Verlauf-JSON importieren',
    copyLinkBtn: 'Direktlink kopieren',
    copiedLinkBtn: 'Link kopiert',
    printSummaryBtn: 'Bericht drucken',
    clearHistoryBtn: 'Verlauf löschen',
    emptyHistory: 'Noch keine gespeicherten Audits vorhanden.',
    importError: 'Ungültige Verlaufs-JSON-Datei.',
    importSuccess: 'Verlauf lokal importiert.',
    columns: {
      date: 'Datum',
      source: 'Quelle',
      notBack: 'Nicht zurück',
      mutuals: 'Gegenseitig',
      followers: 'Follower',
      following: 'Gefolgt',
      note: 'Notiz',
      remove: 'Entfernen',
    },
  },
  ads: {
    slotLabel: 'Anzeige',
    sponsoredNote: 'Reservierter Werbebereich (Media.net)',
  },
  affiliate: {
    title: 'Empfohlene Sicherheits- & Backup-Hardware',
    subtitle: 'Nützliche Werkzeuge für Kontoschutz und Offline-Archivierung.',
    disclosure: 'Affiliate-Hinweis: Diese Links unterstützen den kostenlosen Betrieb von FollowAuditCue.',
    items: [
      {
        category: '2FA-Sicherheitsschlüssel',
        title: 'FIDO2 / USB-C Security Keys (YubiKey-Serie)',
        description: 'Phishing-resistente Zwei-Faktor-Hardware für Instagram und Meta-Konten.',
        ctaLabel: 'Security Keys ansehen',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Offline-Archivierung',
        title: 'Tragbare NVMe-SSDs (1TB–2TB)',
        description: 'Sichern Sie vollständige Meta-Exporte verschlüsselt außerhalb der Cloud.',
        ctaLabel: 'Externe SSDs prüfen',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Passwort-Hygiene',
        title: 'Geprüfte Passwort-Manager',
        description: 'Einzigartige starke Passwörter ohne Wiederverwendung.',
        ctaLabel: 'Passwort-Manager entdecken',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'Instagram-Entfolger sicher ohne Passwort prüfen',
    intro:
      'Der offizielle Meta-.ZIP-Export vermeidet jedes Risiko durch Drittanbieter-Logins oder automatisierte Abfragen.',
    sections: [
      {
        title: 'Warum Sie Passwort-Apps meiden sollten',
        paragraphs: [
          'Apps, die Zugangsdaten oder Cookies verlangen, gefährden Ihr Konto und verstoßen gegen Metas Nutzungsbedingungen.',
          'Mit FollowAuditCue bleiben Zugangsdaten vollständig unberührt.',
        ],
      },
      {
        title: 'So laden Sie die Follower-Liste bei Meta herunter',
        paragraphs: [
          'Wählen Sie in der Kontenübersicht „Informationen herunterladen“ und aktivieren Sie „Follower und gefolgte Personen“ im JSON- oder HTML-Format.',
        ],
      },
    ],
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        question: 'Muss ich mein Instagram-Passwort eingeben?',
        answer: 'Nein. FollowAuditCue fragt niemals nach Passwörtern oder Logins.',
      },
      {
        question: 'Werden meine Daten auf einen Server geladen?',
        answer: 'Nein. Die Verarbeitung erfolgt zu 100 % lokal per JSZip im Browser.',
      },
      {
        question: 'Funktionieren JSON- und HTML-Exporte?',
        answer: 'Ja, beide offiziellen Exportformate von Meta werden automatisch erkannt.',
      },
    ],
    transparencyNotice:
      '100 % clientseitiger Datenschutz-Auditor. Es werden niemals Passwörter oder Logins abgefragt, und Ihr .ZIP-Export wird lokal im Browser ausgewertet, ohne Ihr Gerät zu verlassen.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Lokaler Instagram-Audit-Bericht',
    generatedOn: 'Erstellt am',
    sourceLabel: 'Archivquelle',
    privacyFooter: '100 % lokal im Browser verarbeitet · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Lokaler Datenschutz-Auditor für Instagram-.ZIP-Exporte.',
    canonicalNotice: 'Kanonische Version: https://followauditcue.bastelar.com/?lang=de',
  },
};

export const pt: Translations = {
  seo: {
    title: 'FollowAuditCue — Ver quem não segue de volta no Instagram (.ZIP, sem senha)',
    description:
      'Descubra quem não segue você de volta no Instagram 100% localmente no navegador com seu arquivo .ZIP oficial da Meta. Sem senha, sem login e sem enviar dados.',
    appDescription:
      'Auditor de privacidade 100% local que lê o arquivo .ZIP oficial do Instagram/Meta no navegador para calcular quem não segue de volta, mútuos, seguidores e seguindo.',
    howToName: 'Como ver quem não te segue de volta no Instagram sem senha',
    howToDescription: 'Baixe o .ZIP oficial da Meta e faça a auditoria localmente no navegador.',
  },
  nav: {
    auditor: 'Auditor',
    howItWorks: 'Guia 3 passos',
    savedAudits: 'Histórico',
    faq: 'Guia e FAQ',
    languageLabel: 'Idioma',
  },
  hero: {
    privacyLead: '100% no seu navegador — sem senha, sem login, seus dados nunca saem do dispositivo',
    h1: 'Veja quem não te segue de volta no Instagram pelo .ZIP oficial',
    subtitle:
      'Arraste o arquivo .ZIP oficial de Seguidores e seguindo da Meta para calcular instantaneamente quem não segue de volta, mútuos, seguidores e seguindo em memória local.',
    zeroUploadGuarantee:
      'Zero envio para servidores · Compatível com JSON e HTML da Meta · Busca local e exportação CSV/JSON',
    safetyWarningTitle: 'Aviso de segurança da conta',
    safetyWarningBody:
      'Nunca informe sua senha do Instagram em aplicativos de terceiros: a Meta bloqueia acessos automatizados e compartilhamento de credenciais.',
  },
  steps: {
    sectionTitle: 'Como funciona a auditoria local em 3 passos',
    sectionSubtitle: 'Tudo roda diretamente no seu navegador sem conexão externa.',
    items: [
      {
        num: '01',
        title: 'Baixe o .ZIP oficial da Meta',
        detail:
          'No Instagram: Configurações → Central de Contas → Suas informações e permissões → Baixar suas informações. Selecione apenas Seguidores e seguindo (JSON ou HTML).',
        pathHint: 'Central de Contas · Seguidores e seguindo',
      },
      {
        num: '02',
        title: 'Arraste o .ZIP para cá',
        detail:
          'Salve o arquivo no celular ou PC e solte na área abaixo. O JSZip lê tudo localmente na RAM.',
        pathHint: 'Leitura local em RAM · JSON e HTML',
      },
      {
        num: '03',
        title: 'Analise e exporte localmente',
        detail:
          'Alterne entre Não seguem de volta, Mútuos, Seguidores e Seguindo. Filtre, copie nomes ou exporte CSV/JSON.',
        pathHint: 'Cálculo determinístico · Zero rastreio',
      },
    ],
  },
  dropzone: {
    title: 'Solte aqui seu arquivo .ZIP oficial do Instagram',
    subtitle: 'Ou selecione o .zip do seu aparelho (também aceita arquivos followers e following em .json ou .html).',
    browseBtn: 'Selecionar arquivo .ZIP',
    sampleBtn: 'Carregar dados de exemplo',
    processingLabel: 'Descompactando arquivo localmente no navegador...',
    acceptedFormats: 'Formatos aceitos: .zip (exportação Meta) ou .json / .html',
    loadedSummaryLabel: 'Fonte ativa',
    formatDetectedLabel: 'Formato',
    filesParsedLabel: 'Arquivos lidos',
    sampleBadge: 'Dados fictícios de exemplo',
    errorInvalidZip: 'Não foi possível abrir como um arquivo .ZIP válido.',
    errorMissingLists:
      'Nenhuma lista de seguidores ou seguindo encontrada. Marque "Seguidores e seguindo" ao pedir a exportação na Meta.',
    errorEncryptedZip: 'Arquivos .ZIP protegidos por senha não são suportados.',
    errorGeneric: 'Não foi possível processar o arquivo. Tente o .zip original ou carregue os dados de exemplo.',
  },
  results: {
    emptyTitle: 'Pronto para auditar localmente',
    emptyBody: 'Envie seu .ZIP da Meta acima ou clique em "Carregar dados de exemplo".',
    tabs: {
      notFollowingBack: 'Não seguem de volta',
      mutuals: 'Mútuos',
      followers: 'Seguidores',
      following: 'Seguindo',
    },
    metrics: {
      notFollowingBackSub: 'das contas que você segue',
      mutualsSub: 'taxa de retorno',
      followersSub: 'seguidores únicos',
      followingSub: 'contas seguidas únicas',
    },
    searchPlaceholder: 'Filtrar por @usuário...',
    sortLabel: 'Ordenar',
    sortOptions: {
      az: 'Usuário (A–Z)',
      za: 'Usuário (Z–A)',
      newest: 'Data mais recente',
      oldest: 'Data mais antiga',
    },
    copyListBtn: 'Copiar lista',
    copiedListBtn: 'Copiado!',
    exportCsvBtn: 'Exportar CSV',
    exportJsonBtn: 'Exportar JSON',
    printBtn: 'Imprimir resumo',
    clearSessionBtn: 'Limpar sessão',
    tableHeaders: {
      index: '#',
      username: 'Conta',
      exportedDate: 'Data na exportação',
      relationship: 'Status',
      actions: 'Ações',
    },
    relationships: {
      notFollowingBack: 'Não segue de volta',
      mutual: 'Mútuo',
      followerOnly: 'Segue você',
      following: 'Seguindo',
    },
    copySingle: 'Copiar',
    copiedSingle: 'Copiado',
    openProfile: 'Abrir perfil',
    noSearchMatches: 'Nenhuma conta corresponde ao filtro.',
    noUnfollowersCongrats: 'Todas as contas que você segue também seguem você de volta.',
    showingRange: 'Exibindo {shown} de {total} contas',
    showMoreBtn: 'Mostrar mais 50',
    unknownDate: '—',
  },
  saved: {
    title: 'Histórico local de auditorias',
    subtitle: 'Acompanhe sua evolução ao longo do tempo no próprio navegador.',
    privacyNote:
      'Privacidade: apenas totais, data e sua nota opcional ficam no localStorage; listas de usuários nunca são salvas.',
    notePlaceholder: 'Nota opcional (ex. revisão mensal)',
    saveBtn: 'Salvar resumo',
    savedFeedback: 'Salvo localmente',
    exportHistoryBtn: 'Exportar histórico JSON',
    importHistoryBtn: 'Importar histórico JSON',
    copyLinkBtn: 'Copiar link direto',
    copiedLinkBtn: 'Link copiado',
    printSummaryBtn: 'Imprimir relatório',
    clearHistoryBtn: 'Limpar histórico',
    emptyHistory: 'Nenhum resumo salvo ainda.',
    importError: 'Arquivo JSON de histórico inválido.',
    importSuccess: 'Histórico importado localmente.',
    columns: {
      date: 'Data',
      source: 'Origem',
      notBack: 'Não seguem',
      mutuals: 'Mútuos',
      followers: 'Seguidores',
      following: 'Seguindo',
      note: 'Nota',
      remove: 'Remover',
    },
  },
  ads: {
    slotLabel: 'Publicidade',
    sponsoredNote: 'Espaço publicitário reservado (Media.net)',
  },
  affiliate: {
    title: 'Segurança de conta e backup recomendados',
    subtitle: 'Ferramentas úteis para proteger acessos e guardar seus arquivos pessoais.',
    disclosure: 'Divulgação de afiliados: estes links ajudam a manter o FollowAuditCue gratuito.',
    items: [
      {
        category: 'Chave 2FA física',
        title: 'Chaves de segurança FIDO2 / USB-C (YubiKey)',
        description: 'Autenticação física contra phishing para Instagram e Central de Contas Meta.',
        ctaLabel: 'Ver chaves de segurança',
        url: 'https://www.amazon.com/s?k=yubikey+usb+c+security+key&tag=followauditcue-20',
      },
      {
        category: 'Backup offline',
        title: 'SSDs externos portáteis NVMe (1TB–2TB)',
        description: 'Guarde seus backups completos da Meta fora da nuvem.',
        ctaLabel: 'Ver SSDs externos',
        url: 'https://www.amazon.com/s?k=portable+external+ssd+1tb&tag=followauditcue-20',
      },
      {
        category: 'Gestão de senhas',
        title: 'Gerenciadores de senhas auditados',
        description: 'Senhas únicas e fortes para nunca reutilizar credenciais.',
        ctaLabel: 'Conhecer gerenciadores',
        url: 'https://bitwarden.com/',
      },
    ],
  },
  editorial: {
    title: 'Como verificar quem não segue de volta sem aplicativo nem senha',
    intro:
      'Analisar o arquivo .ZIP oficial da Meta localmente protege sua conta contra bloqueios e roubo de credenciais.',
    sections: [
      {
        title: 'Por que evitar apps que pedem login do Instagram',
        paragraphs: [
          'Aplicativos que solicitam senha ou cookies podem comprometer sua conta e gerar restrições automáticas da Meta.',
          'Com o arquivo oficial, você não compartilha nenhum acesso.',
        ],
      },
      {
        title: 'Como baixar Seguidores e seguindo na Meta',
        paragraphs: [
          'Acesse Central de Contas → Suas informações e permissões → Baixar suas informações → Seguidores e seguindo (JSON ou HTML).',
        ],
      },
    ],
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        question: 'Preciso digitar minha senha do Instagram?',
        answer: 'Não. O FollowAuditCue nunca pede senha nem login.',
      },
      {
        question: 'Meu arquivo .ZIP é enviado para algum servidor?',
        answer: 'Nunca. Todo o processamento ocorre localmente no navegador com JSZip.',
      },
      {
        question: 'Aceita formato JSON e HTML?',
        answer: 'Sim, ambos os formatos oficiais da Meta são suportados.',
      },
    ],
    transparencyNotice:
      'Auditor de privacidade 100% no navegador. Nenhuma senha ou login é solicitado, e seu arquivo .ZIP é processado localmente sem sair do seu dispositivo.',
  },
  print: {
    reportTitle: 'FollowAuditCue — Resumo local de auditoria do Instagram',
    generatedOn: 'Gerado em',
    sourceLabel: 'Arquivo de origem',
    privacyFooter: 'Processado 100% localmente no navegador · https://followauditcue.bastelar.com',
  },
  footer: {
    tagline: 'FollowAuditCue · Auditor local de .ZIP do Instagram focado em privacidade.',
    canonicalNotice: 'Edição canônica: https://followauditcue.bastelar.com/?lang=pt',
  },
};
