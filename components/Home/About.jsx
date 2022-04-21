import Frame from '../Frame'
import CardInfo from '../CardInfo'

const About = ({ age }) => {
    return <section id="about" data-scroll-section="">
        <div className="container">
            <div className="title">
                <h2><span className="strong">About</span> me</h2>
                <h3>In few words</h3>
            </div>
            <div className="content">
                <Frame img="about.jpg" />
                <CardInfo>
                    {[
                        {
                            label: 'First name',
                            value: 'Amina'
                        },
                        {
                            label: 'Last name',
                            value: 'Seraoui'
                        },
                        {
                            label: 'Available',
                            value: 'Remote only'
                        },
                        {
                            label: 'Languages',
                            value: 'French, English, Arabic'
                        },
                        {
                            label: 'Age',
                            value: age
                        },
                        {
                            label: 'Phone',
                            value: <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
                        },
                        {
                            label: 'E-mail',
                            value: <a className="link" href="mailto:amina.seraoui@outlook.fr">amina.seraoui@outlook.fr</a>
                        },
                        {
                            label: 'Github',
                            value: <a className="link" href="github.com/amina-seraoui">github.com/amina-seraoui</a>
                        }
                    ]}
                </CardInfo>
            </div>
            <div className="buttons" data-scroll="">
                <a data-scroll="" data-scroll-speed=".15" data-scroll-direction="vertical" href="#contact" className="btn primary">Contact me</a>
                <a data-scroll="" data-scroll-speed="-.15" data-scroll-direction="vertical" href="#works" className="btn secondary">Check my portfolio</a>
            </div>
        </div>
    </section>
}

export default About