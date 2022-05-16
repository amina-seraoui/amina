const LightBox = ({ children, isOpen, setIsOpen }) => {
    return <div className={'lightbox' + (isOpen ? ' active' : '')} onClick={e => setIsOpen(false)}>
        {children}
    </div>
}

export default LightBox
