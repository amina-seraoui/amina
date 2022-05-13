import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

const Flag = ({ locale }) => {
    const {asPath} = useRouter()

    const flag = () => {
        if (locale === 'en') return 'gb'
        if (locale === 'ar') return 'dz'
        return locale
    }

    return (locale !== 'default') ? <Link href={asPath} locale={locale} passHref>
        <a>
            <Image
                className="flag"
                src={'https://flagicons.lipis.dev/flags/4x3/' + flag() + '.svg'}
                alt={flag() + ' flag'}
                width={24}
                height={24}
            />
        </a>
    </Link> : null
}

export default Flag