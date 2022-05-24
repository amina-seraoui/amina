import Link from 'next/link'
import {useRouter} from 'next/router'

const Flag = ({ locale }) => {
    const {asPath} = useRouter()

    const flag = () => {
        if (locale === 'en') return 'gb'
        if (locale === 'ar') return 'dz'
        return locale
    }

    const title = () => {
        if (locale === 'en') return 'English'
        if (locale === 'ar') return 'عربي'
        if (locale === 'fr') return 'Français'
    }

    return (locale !== 'default') ? <Link href={asPath.split('#')[0]} locale={locale} passHref>
        <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="flag"
                src={'https://flagicons.lipis.dev/flags/4x3/' + flag() + '.svg'}
                alt={flag() + ' flag'}
                title={title()}
            />
        </a>
    </Link> : null
}

export default Flag
