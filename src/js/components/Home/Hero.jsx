const Hero = ({ children, image }) => {
    return <section
        id="hero"
        style={{backgroundImage: 'url(' + image + ')'}}
        data-scroll-section=""
    >
        {/*{to-do: add image background}*/}
        { children }
    </section>
}

export default Hero