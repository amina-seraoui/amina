const Hero = ({ children, image }) => {
    return <section id="hero" style={{backgroundImage: 'url(' + image + ')'}}>
        {/*{to-do: add image background}*/}
        { children }
    </section>
}

export default Hero