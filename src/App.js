import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const title = 'react-i18next';

  const { t } = useTranslation();

  const changeLanguage = code => e => {
    localStorage.setItem('language', code);
    window.location.reload();
  }

  return (
    <div className="app">
      <div className="toolbar" role="banner">
        <img width="40" alt="React Logo"
          src={logo} />
        <span>{t('main.header.welcome')}</span>
      </div>

      <div className="content" role="main">
        <div className="card highlight-card card-small">
          <span>{t('main.page.title', { title })}</span>
        </div>

        <h2>{t('main.page.section.languages.title')}</h2>
        <p>{t('main.page.section.languages.subtitle')}</p>

        
        <p>{t("main.page.section.languages.word", { count: 1 })}</p>
        <p>{t("main.page.section.languages.word", { count: 2356 })}</p>



        <div className="card-container">
          <button onClick={changeLanguage('en')} className="card card-small">
            <span>{t('main.page.section.languages.english')}</span>
          </button>
          <button onClick={changeLanguage('fr')} className="card card-small">
            <span>{t('main.page.section.languages.french')}</span>
          </button>
          <button onClick={changeLanguage('ar')} className="card card-small">
            <span>{t('main.page.section.languages.arabic')}</span>
          </button>
          <button onClick={changeLanguage('gr')} className="card card-small">
            <span>{t('main.page.section.languages.german')}</span>
          </button>
          <button onClick={changeLanguage('ch')} className="card card-small">
            <span>{t('main.page.section.languages.chinese')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;