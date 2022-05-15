import Socials from '../Socials'
import {FormattedMessage} from 'react-intl'

const SocialsBar = () => {
    return <nav id="socials-bar">
        <Socials/>
        <h4 className="subtitle"><FormattedMessage id="socials" defaultMessage="Socials"/></h4>
    </nav>
}

export default SocialsBar