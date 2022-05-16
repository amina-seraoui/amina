const LightBox = ({ children, isOpen, setIsOpen }) => {
    const handleClick = e => {
        if (e.target.classList.contains('light-box')) {
            setIsOpen(false)
        }
    }
    return <div className={'light-box' + (isOpen ? ' active' : '')} onClick={handleClick}>
        {children}
    </div>
}

export default LightBox
