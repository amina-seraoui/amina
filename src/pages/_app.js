import '../css/style.scss'
import '../vendor/font-awesome/css/all.css'
import {IntlProvider} from 'react-intl'
import {useRouter} from 'next/router'
import fr from '../lang/fr.json'

const messages = {fr}

export default function App({ Component, pageProps }) {
    const {locale} = useRouter()

    return <IntlProvider
        locale={locale === 'default' ? 'en': locale}
        messages={messages[locale]}
        defaultLocale="en"
        onError={() => {}}
    >
        <Component {...pageProps} />
    </IntlProvider>
}
