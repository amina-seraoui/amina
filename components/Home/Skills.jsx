import {useState} from 'react'
import {InView} from 'react-intersection-observer'
import SkillBar from '../SkillBar'

const Skills = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    return <section id="skills" data-scroll-section="">
        <div className="container">
            <div className="title">
                <h2>My <span className="strong">skills</span></h2>
                <h3>What I'm good at</h3>
            </div>
            <InView triggerOnce={true} as="div" className="content" onChange={setIsVisible}>
                {
                    children.map((skill, i) => {
                        return <SkillBar key={i} skill={skill} visible={isVisible} />
                    })
                }
            </InView>
        </div>
    </section>
}

export default Skills