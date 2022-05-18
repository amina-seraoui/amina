import {useIntl} from 'react-intl'

const LightBox = ({ children, isOpen, setIsOpen }) => {
    const handleClick = e => {
        if (e.target.classList.contains('light-box')) {
            setIsOpen(false)
        }
    }

    const intl = useIntl()
    const click = intl.formatMessage({id: 'clicktoclose', defaultMessage: 'Click to close'})

    return <div className={'light-box' + (isOpen ? ' active' : '')} onClick={handleClick} title={click}>
        {children}
    </div>
}

export default LightBox
