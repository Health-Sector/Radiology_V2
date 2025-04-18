import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a language context
const LanguageContext = createContext();

// Available languages
export const languages = {
  en: {
    name: 'English',
    flag: 'flag01',
    code: 'en'
  },
  fr: {
    name: 'French',
    flag: 'flag02',
    code: 'fr'
  },
  es: {
    name: 'Spanish',
    flag: 'flag03',
    code: 'es'
  },
  it: {
    name: 'Italian',
    flag: 'flag04',
    code: 'it'
  },
  de: {
    name: 'German',
    flag: 'flag05',
    code: 'de'
  },
  ja: {
    name: 'Japanese',
    flag: 'flag06',
    code: 'ja'
  }
};

// Translations for different languages
export const translations = {
  en: {
    // Header
    userProfile: 'User Profile',
    myProfile: 'My Profile',
    viewPersonalProfileDetails: 'View personal profile details.',
    editProfile: 'Edit Profile',
    modifyYourPersonalDetails: 'Modify your personal details.',
    accountSettings: 'Account Settings',
    manageYourAccountParameters: 'Manage your account parameters.',
    privacySettings: 'Privacy Settings',
    controlYourPrivacyParameters: 'Control your privacy parameters.',
    signOut: 'Sign Out',
    home: 'Home',
    reportCorrection: 'Report Correction',
    anonymizer: 'Anonymizer',
    radiology: 'Radiology',
    // Sidebar
    pages: 'Pages',
    authentication: 'Authentication',
    login: 'Login',
    register: 'Register',
    recoverPassword: 'Recover Password',
    confirmMail: 'Confirm Mail',
    lockScreen: 'Lock Screen',
    reportHistory: 'Report History',
    noHistoryAvailable: 'No history available',
    clear: 'Clear',
    report: 'Report',
    selectedReport: 'Selected Report',
    // Dashboard
    medicalReportAnalysis: 'Medical Report Analysis',
    analysisResults: 'Analysis Results',
    summary: 'Summary',
    diagnosticDiscrepancies: 'Diagnostic Discrepancies',
    correctedReport: 'Corrected Report',
    highlightedReport: 'Highlighted Report',
    pasteOrType: 'Paste or type medical report text here...',
    analyzeReport: 'Analyze Report',
    clearText: 'Clear Text',
    enterMedicalReportText: 'Enter Medical Report Text',
    orUploadReportFile: 'Or Upload Report File',
    analyzing: 'Analyzing...',
    errorTypesDistribution: 'Error Types Distribution',
    analysisAccuracy: 'Analysis Accuracy',
    pleaseAnalyzeReport: 'Please analyze a report to see accuracy metrics',
    medicalErrors: 'Medical Errors',
    typographicalErrors: 'Typographical Errors',
    misspelledWords: 'Misspelled Words',
    errorCount: 'Error Count',
    errors: 'errors',
    // Anonymizer
    anonymizerDescription: 'Upload medical reports to anonymize sensitive information',
    uploadFile: 'Upload File',
    selectFile: 'Select File',
    supportedFormats: 'Supported formats: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'Anonymize File',
    anonymizing: 'Anonymizing...',
    pleaseSelectFile: 'Please select a file to anonymize',
    errorProcessingFile: 'Error processing file',
    results: 'Results',
    downloadAnonymizedFile: 'Download Anonymized File',
    downloading: 'Downloading...',
    errorDownloadingFile: 'Error downloading file',
    originalContent: 'Original Content',
    anonymizedContent: 'Anonymized Content'
  },
  fr: {
    // Header
    userProfile: 'Profil Utilisateur',
    myProfile: 'Mon Profil',
    viewPersonalProfileDetails: 'Voir les détails du profil personnel.',
    editProfile: 'Modifier le Profil',
    modifyYourPersonalDetails: 'Modifier vos informations personnelles.',
    accountSettings: 'Paramètres du Compte',
    manageYourAccountParameters: 'Gérer les paramètres de votre compte.',
    privacySettings: 'Paramètres de Confidentialité',
    controlYourPrivacyParameters: 'Contrôler vos paramètres de confidentialité.',
    signOut: 'Déconnexion',
    home: 'Accueil',
    reportCorrection: 'Correction de Rapport',
    anonymizer: 'Anonymiseur',
    radiology: 'Radiologie',
    // Sidebar
    pages: 'Pages',
    authentication: 'Authentification',
    login: 'Connexion',
    register: 'Inscription',
    recoverPassword: 'Récupérer Mot de Passe',
    confirmMail: 'Confirmer Email',
    lockScreen: 'Écran de Verrouillage',
    reportHistory: 'Historique des Rapports',
    noHistoryAvailable: 'Aucun historique disponible',
    clear: 'Effacer',
    report: 'Rapport',
    selectedReport: 'Rapport Sélectionné',
    // Dashboard
    medicalReportAnalysis: 'Analyse de Rapport Médical',
    analysisResults: 'Résultats d\'Analyse',
    summary: 'Résumé',
    diagnosticDiscrepancies: 'Divergences Diagnostiques',
    correctedReport: 'Rapport Corrigé',
    highlightedReport: 'Rapport Mis en Évidence',
    pasteOrType: 'Collez ou tapez le texte du rapport médical ici...',
    analyzeReport: 'Analyser le Rapport',
    clearText: 'Effacer le Texte',
    enterMedicalReportText: 'Entrez le Texte du Rapport Médical',
    orUploadReportFile: 'Ou Téléchargez un Fichier de Rapport',
    analyzing: 'Analyse en cours...',
    errorTypesDistribution: 'Distribution des Types d\'Erreurs',
    analysisAccuracy: 'Précision de l\'Analyse',
    pleaseAnalyzeReport: 'Veuillez analyser un rapport pour voir les métriques de précision',
    medicalErrors: 'Erreurs Médicales',
    typographicalErrors: 'Erreurs Typographiques',
    misspelledWords: 'Mots Mal Orthographiés',
    errorCount: 'Nombre d\'Erreurs',
    errors: 'erreurs',
    // Anonymizer
    anonymizerDescription: 'Téléchargez des rapports médicaux pour anonymiser les informations sensibles',
    uploadFile: 'Télécharger un Fichier',
    selectFile: 'Sélectionner un Fichier',
    supportedFormats: 'Formats pris en charge: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'Anonymiser le Fichier',
    anonymizing: 'Anonymisation en cours...',
    pleaseSelectFile: 'Veuillez sélectionner un fichier à anonymiser',
    errorProcessingFile: 'Erreur lors du traitement du fichier',
    results: 'Résultats',
    downloadAnonymizedFile: 'Télécharger le Fichier Anonymisé',
    downloading: 'Téléchargement en cours...',
    errorDownloadingFile: 'Erreur lors du téléchargement du fichier',
    originalContent: 'Contenu Original',
    anonymizedContent: 'Contenu Anonymisé'
  },
  es: {
    // Header
    userProfile: 'Perfil de Usuario',
    myProfile: 'Mi Perfil',
    viewPersonalProfileDetails: 'Ver detalles del perfil personal.',
    editProfile: 'Editar Perfil',
    modifyYourPersonalDetails: 'Modificar tus datos personales.',
    accountSettings: 'Configuración de la Cuenta',
    manageYourAccountParameters: 'Administrar los parámetros de tu cuenta.',
    privacySettings: 'Configuración de Privacidad',
    controlYourPrivacyParameters: 'Controlar los parámetros de privacidad.',
    signOut: 'Cerrar Sesión',
    home: 'Inicio',
    reportCorrection: 'Corrección de Informes',
    anonymizer: 'Anonimizador',
    radiology: 'Radiología',
    // Sidebar
    pages: 'Páginas',
    authentication: 'Autenticación',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    recoverPassword: 'Recuperar Contraseña',
    confirmMail: 'Confirmar Correo',
    lockScreen: 'Pantalla de Bloqueo',
    reportHistory: 'Historial de Informes',
    noHistoryAvailable: 'No hay historial disponible',
    clear: 'Limpiar',
    report: 'Informe',
    selectedReport: 'Informe Seleccionado',
    // Dashboard
    medicalReportAnalysis: 'Análisis de Informes Médicos',
    analysisResults: 'Resultados del Análisis',
    summary: 'Resumen',
    diagnosticDiscrepancies: 'Discrepancias Diagnósticas',
    correctedReport: 'Informe Corregido',
    highlightedReport: 'Informe Destacado',
    pasteOrType: 'Pega o escribe el texto del informe médico aquí...',
    analyzeReport: 'Analizar Informe',
    clearText: 'Borrar Texto',
    enterMedicalReportText: 'Introduzca el Texto del Informe Médico',
    orUploadReportFile: 'O Suba un Archivo de Informe',
    analyzing: 'Analizando...',
    errorTypesDistribution: 'Distribución de Tipos de Errores',
    analysisAccuracy: 'Precisión del Análisis',
    pleaseAnalyzeReport: 'Por favor, analice un informe para ver las métricas de precisión',
    medicalErrors: 'Errores Médicos',
    typographicalErrors: 'Errores Tipográficos',
    misspelledWords: 'Palabras Mal Escritas',
    errorCount: 'Recuento de Errores',
    errors: 'errores',
    // Anonymizer
    anonymizerDescription: 'Suba informes médicos para anonimizar información sensible',
    uploadFile: 'Subir Archivo',
    selectFile: 'Seleccionar Archivo',
    supportedFormats: 'Formatos soportados: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'Anonimizar Archivo',
    anonymizing: 'Anonimizando...',
    pleaseSelectFile: 'Por favor, seleccione un archivo para anonimizar',
    errorProcessingFile: 'Error al procesar el archivo',
    results: 'Resultados',
    downloadAnonymizedFile: 'Descargar Archivo Anonimizado',
    downloading: 'Descargando...',
    errorDownloadingFile: 'Error al descargar el archivo',
    originalContent: 'Contenido Original',
    anonymizedContent: 'Contenido Anonimizado'
  },
  it: {
    // Header
    userProfile: 'Profilo Utente',
    myProfile: 'Il Mio Profilo',
    viewPersonalProfileDetails: 'Visualizza i dettagli del profilo personale.',
    editProfile: 'Modifica Profilo',
    modifyYourPersonalDetails: 'Modifica i tuoi dati personali.',
    accountSettings: 'Impostazioni Account',
    manageYourAccountParameters: 'Gestisci i parametri del tuo account.',
    privacySettings: 'Impostazioni Privacy',
    controlYourPrivacyParameters: 'Controlla i tuoi parametri di privacy.',
    signOut: 'Disconnetti',
    home: 'Home',
    reportCorrection: 'Correzione Rapporto',
    anonymizer: 'Anonimizzatore',
    radiology: 'Radiologia',
    // Sidebar
    pages: 'Pagine',
    authentication: 'Autenticazione',
    login: 'Accesso',
    register: 'Registrati',
    recoverPassword: 'Recupera Password',
    confirmMail: 'Conferma Email',
    lockScreen: 'Blocca Schermo',
    reportHistory: 'Cronologia Rapporti',
    noHistoryAvailable: 'Nessuna cronologia disponibile',
    clear: 'Cancella',
    report: 'Rapporto',
    selectedReport: 'Rapporto Selezionato',
    // Dashboard
    medicalReportAnalysis: 'Analisi Rapporto Medico',
    analysisResults: 'Risultati Analisi',
    summary: 'Riepilogo',
    diagnosticDiscrepancies: 'Discrepanze Diagnostiche',
    correctedReport: 'Rapporto Corretto',
    highlightedReport: 'Rapporto Evidenziato',
    pasteOrType: 'Incolla o digita il testo del rapporto medico qui...',
    analyzeReport: 'Analizza Rapporto',
    clearText: 'Cancella Testo',
    enterMedicalReportText: 'Inserisci il Testo del Rapporto Medico',
    orUploadReportFile: 'O Carica un File di Rapporto',
    analyzing: 'Analisi in corso...',
    errorTypesDistribution: 'Distribuzione Tipi di Errore',
    analysisAccuracy: 'Precisione dell\'Analisi',
    pleaseAnalyzeReport: 'Analizza un rapporto per vedere le metriche di precisione',
    medicalErrors: 'Errori Medici',
    typographicalErrors: 'Errori Tipografici',
    misspelledWords: 'Parole Errate',
    errorCount: 'Conteggio Errori',
    errors: 'errori',
    // Anonymizer
    anonymizerDescription: 'Carica rapporti medici per anonimizzare informazioni sensibili',
    uploadFile: 'Carica File',
    selectFile: 'Seleziona File',
    supportedFormats: 'Formati supportati: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'Anonimizza File',
    anonymizing: 'Anonimizzazione in corso...',
    pleaseSelectFile: 'Seleziona un file da anonimizzare',
    errorProcessingFile: 'Errore durante l\'elaborazione del file',
    results: 'Risultati',
    downloadAnonymizedFile: 'Scarica File Anonimizzato',
    downloading: 'Download in corso...',
    errorDownloadingFile: 'Errore durante il download del file',
    originalContent: 'Contenuto Originale',
    anonymizedContent: 'Contenuto Anonimizzato'
  },
  de: {
    // Header
    userProfile: 'Benutzerprofil',
    myProfile: 'Mein Profil',
    viewPersonalProfileDetails: 'Persönliche Profildetails anzeigen.',
    editProfile: 'Profil Bearbeiten',
    modifyYourPersonalDetails: 'Ändern Sie Ihre persönlichen Daten.',
    accountSettings: 'Kontoeinstellungen',
    manageYourAccountParameters: 'Verwalten Sie Ihre Kontoparameter.',
    privacySettings: 'Datenschutzeinstellungen',
    controlYourPrivacyParameters: 'Steuern Sie Ihre Datenschutzparameter.',
    signOut: 'Abmelden',
    home: 'Startseite',
    reportCorrection: 'Berichtkorrektur',
    anonymizer: 'Anonymisierer',
    radiology: 'Radiologie',
    // Sidebar
    pages: 'Seiten',
    authentication: 'Authentifizierung',
    login: 'Anmelden',
    register: 'Registrieren',
    recoverPassword: 'Passwort Wiederherstellen',
    confirmMail: 'E-Mail Bestätigen',
    lockScreen: 'Sperrbildschirm',
    reportHistory: 'Berichtsverlauf',
    noHistoryAvailable: 'Kein Verlauf verfügbar',
    clear: 'Löschen',
    report: 'Bericht',
    selectedReport: 'Ausgewählter Bericht',
    // Dashboard
    medicalReportAnalysis: 'Medizinische Berichtsanalyse',
    analysisResults: 'Analyseergebnisse',
    summary: 'Zusammenfassung',
    diagnosticDiscrepancies: 'Diagnostische Diskrepanzen',
    correctedReport: 'Korrigierter Bericht',
    highlightedReport: 'Hervorgehobener Bericht',
    pasteOrType: 'Fügen Sie hier den medizinischen Berichtstext ein oder geben Sie ihn ein...',
    analyzeReport: 'Bericht Analysieren',
    clearText: 'Text Löschen',
    enterMedicalReportText: 'Medizinischen Berichtstext Eingeben',
    orUploadReportFile: 'Oder Berichtsdatei Hochladen',
    analyzing: 'Analysiere...',
    errorTypesDistribution: 'Fehlertypenverteilung',
    analysisAccuracy: 'Analysegenauigkeit',
    pleaseAnalyzeReport: 'Bitte analysieren Sie einen Bericht, um Genauigkeitsmetriken zu sehen',
    medicalErrors: 'Medizinische Fehler',
    typographicalErrors: 'Typografische Fehler',
    misspelledWords: 'Falsch Geschriebene Wörter',
    errorCount: 'Fehleranzahl',
    errors: 'Fehler',
    // Anonymizer
    anonymizerDescription: 'Laden Sie medizinische Berichte hoch, um sensible Informationen zu anonymisieren',
    uploadFile: 'Datei Hochladen',
    selectFile: 'Datei Auswählen',
    supportedFormats: 'Unterstützte Formate: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'Datei Anonymisieren',
    anonymizing: 'Anonymisierung läuft...',
    pleaseSelectFile: 'Bitte wählen Sie eine Datei zum Anonymisieren aus',
    errorProcessingFile: 'Fehler bei der Verarbeitung der Datei',
    results: 'Ergebnisse',
    downloadAnonymizedFile: 'Anonymisierte Datei Herunterladen',
    downloading: 'Herunterladen...',
    errorDownloadingFile: 'Fehler beim Herunterladen der Datei',
    originalContent: 'Originalinhalt',
    anonymizedContent: 'Anonymisierter Inhalt'
  },
  ja: {
    // Header
    userProfile: 'ユーザープロフィール',
    myProfile: 'マイプロフィール',
    viewPersonalProfileDetails: '個人プロフィールの詳細を表示します。',
    editProfile: 'プロフィール編集',
    modifyYourPersonalDetails: '個人情報を変更します。',
    accountSettings: 'アカウント設定',
    manageYourAccountParameters: 'アカウントのパラメータを管理します。',
    privacySettings: 'プライバシー設定',
    controlYourPrivacyParameters: 'プライバシーパラメータを制御します。',
    signOut: 'サインアウト',
    home: 'ホーム',
    reportCorrection: 'レポート修正',
    anonymizer: '匿名化ツール',
    radiology: '放射線科',
    // Sidebar
    pages: 'ページ',
    authentication: '認証',
    login: 'ログイン',
    register: '登録',
    recoverPassword: 'パスワード回復',
    confirmMail: 'メール確認',
    lockScreen: '画面ロック',
    reportHistory: 'レポート履歴',
    noHistoryAvailable: '履歴がありません',
    clear: 'クリア',
    report: 'レポート',
    selectedReport: '選択されたレポート',
    // Dashboard
    medicalReportAnalysis: '医療レポート分析',
    analysisResults: '分析結果',
    summary: '要約',
    diagnosticDiscrepancies: '診断の不一致',
    correctedReport: '修正されたレポート',
    highlightedReport: 'ハイライトされたレポート',
    pasteOrType: '医療レポートのテキストをここに貼り付けるか入力してください...',
    analyzeReport: 'レポートを分析',
    clearText: 'テキストをクリア',
    enterMedicalReportText: '医療レポートテキストを入力',
    orUploadReportFile: 'またはレポートファイルをアップロード',
    analyzing: '分析中...',
    errorTypesDistribution: 'エラータイプの分布',
    analysisAccuracy: '分析精度',
    pleaseAnalyzeReport: '精度メトリクスを確認するにはレポートを分析してください',
    medicalErrors: '医療エラー',
    typographicalErrors: '誤字',
    misspelledWords: 'スペルミス',
    errorCount: 'エラー数',
    errors: 'エラー',
    // Anonymizer
    anonymizerDescription: '機密情報を匿名化するために医療レポートをアップロード',
    uploadFile: 'ファイルをアップロード',
    selectFile: 'ファイルを選択',
    supportedFormats: '対応フォーマット: .txt, .docx, .xlsx, .xls',
    anonymizeFile: 'ファイルを匿名化',
    anonymizing: '匿名化中...',
    pleaseSelectFile: '匿名化するファイルを選択してください',
    errorProcessingFile: 'ファイル処理中にエラーが発生しました',
    results: '結果',
    downloadAnonymizedFile: '匿名化されたファイルをダウンロード',
    downloading: 'ダウンロード中...',
    errorDownloadingFile: 'ファイルのダウンロード中にエラーが発生しました',
    originalContent: '元のコンテンツ',
    anonymizedContent: '匿名化されたコンテンツ'
  }
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  // Function to change the language
  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  // Get translation for a specific key
  const t = (key) => {
    const lang = translations[currentLanguage] || translations.en;
    return lang[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
