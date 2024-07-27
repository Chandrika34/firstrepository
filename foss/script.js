// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language-selector');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const actionButton = document.getElementById('action-button');

    const translations = {
        en: {
            title: 'Welcome',
            description: 'This is a simple multi-language frontend UI.',
            actionButton: 'Click me'
        },
        es: {
            title: 'Bienvenido',
            description: 'Esta es una interfaz de usuario de frontend multilingüe simple.',
            actionButton: 'Haz clic en mí'
        },
        kn: {
            title: 'ಸ್ವಾಗತ',
            description: 'ಇದು ಸರಳವಾದ ಬಹುಭಾಷಾ ಮುಂಭಾಗದ ಯುಐ.',
            actionButton: 'ನನ್ನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ'
        }
    };

    function updateLanguage(lang) {
        title.textContent = translations[lang].title;
        description.textContent = translations[lang].description;
        actionButton.textContent = translations[lang].actionButton;
    }

    languageSelector.addEventListener('change', function () {
        const selectedLang = languageSelector.value;
        updateLanguage(selectedLang);
    });

    // Default language
    updateLanguage('en');

    // Test Cases
    function runTests() {
        console.log('Running tests...');
        console.assert(title.textContent === 'Welcome', 'Default language should be English');
        languageSelector.value = 'es';
        languageSelector.dispatchEvent(new Event('change'));
        console.assert(title.textContent === 'Bienvenido', 'Language should change to Spanish');
        languageSelector.value = 'kn';
        languageSelector.dispatchEvent(new Event('change'));
        console.assert(title.textContent === 'ಸ್ವಾಗತ', 'Language should change to Kannada');
        languageSelector.value = 'en';
        languageSelector.dispatchEvent(new Event('change'));
        console.assert(title.textContent === 'Welcome', 'Language should change back to English');
        console.log('All tests passed!');
    }

    runTests();
});
