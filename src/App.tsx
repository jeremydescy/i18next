import { useTranslation } from 'react-i18next'
import './App.css'

const languages = ['en', 'fr'] as const

function App() {
  const { t, i18n } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage ?? 'en'
  const activeLanguageLabel = t(`languages.${currentLanguage}`, currentLanguage)

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('hero.title')}</h1>
        <p className="lede">{t('hero.description')}</p>
        <div className="hero-actions">
          <a href="/locales/en/translation.json">{t('hero.ctaPrimary')}</a>
          <a href="#weblate">{t('hero.ctaSecondary')}</a>
        </div>
        <div className="status-card">
          <span>{t('hero.statusLabel')}</span>
          <strong>{t('hero.statusValue', { language: activeLanguageLabel })}</strong>
        </div>
      </section>

      <section className="language-panel">
        <div>
          <h2>{t('languages.title')}</h2>
          <p>{t('languages.description')}</p>
        </div>
        <div className="language-switcher" aria-label={t('languages.title')}>
          {languages.map((language) => (
            <button
              key={language}
              className={language === currentLanguage ? 'is-active' : ''}
              onClick={() => void i18n.changeLanguage(language)}
              type="button"
            >
              {t(`languages.${language}`)}
            </button>
          ))}
        </div>
      </section>

      <section className="sample-panel">
        <div className="section-heading">
          <h2>{t('sample.title')}</h2>
          <p>{t('sample.intro')}</p>
        </div>
        <div className="sample-grid">
          <article>
            <h3>{t('sample.release.title')}</h3>
            <p>{t('sample.release.body', { version: '1.0.0' })}</p>
          </article>
          <article>
            <h3>{t('sample.support.title')}</h3>
            <p>{t('sample.support.body', { hours: 4 })}</p>
          </article>
          <article>
            <h3>{t('sample.checkout.title')}</h3>
            <p>{t('sample.checkout.body', { count: 3 })}</p>
          </article>
        </div>
      </section>

      <section className="sample-panel">
        <div className="section-heading">
          <h2>{t('operations.title')}</h2>
          <p>{t('operations.intro')}</p>
        </div>
        <div className="sample-grid">
          <article>
            <h3>{t('operations.sync.title')}</h3>
            <p>{t('operations.sync.body')}</p>
          </article>
          <article>
            <h3>{t('operations.review.title')}</h3>
            <p>{t('operations.review.body')}</p>
          </article>
          <article>
            <h3>{t('operations.release.title')}</h3>
            <p>{t('operations.release.body')}</p>
          </article>
        </div>
      </section>

      <section className="weblate-panel" id="weblate">
        <div className="section-heading">
          <h2>{t('weblate.title')}</h2>
          <p>{t('weblate.description')}</p>
        </div>
        <dl>
          <div>
            <dt>{t('weblate.repoLabel')}</dt>
            <dd>{t('weblate.repoValue')}</dd>
          </div>
          <div>
            <dt>{t('weblate.maskLabel')}</dt>
            <dd>{t('weblate.maskValue')}</dd>
          </div>
          <div>
            <dt>{t('weblate.baseLabel')}</dt>
            <dd>{t('weblate.baseValue')}</dd>
          </div>
          <div>
            <dt>{t('weblate.formatLabel')}</dt>
            <dd>{t('weblate.formatValue')}</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default App
