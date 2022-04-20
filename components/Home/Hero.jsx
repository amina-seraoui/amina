const Hero = ({ children, image }) => {
    return <section id="hero" style={{backgroundImage: 'url(/assets/img/' + image + ')'}}>
        {/*{to-do: add image background}*/}
        { children }
    </section>
}

export default Hero