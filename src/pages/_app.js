import '../css/style.scss'
import '../vendor/fontawesome-6/css/all.min.css'
import {IntlProvider} from 'react-intl'
import {useRouter} from 'next/router'
import fr from '../lang/fr.json'
import ar from '../lang/ar.json'

const messages = {fr, ar}

const getDirection = locale => {
    if (locale === 'ar') return 'rtl'
    return 'ltr'
}

export default function App({ Component, pageProps }) {
    const {locale} = useRouter()

    return <IntlProvider
        locale={locale === 'default' ? 'en': locale}
        messages={messages[locale]}
        defaultLocale="en"
        onError={() => {}}
    >
        <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
}
