import {useState} from 'react'
import {InView} from 'react-intersection-observer'
import SkillBar from '../SkillBar'
import SectionTitle from '../SectionTitle'

const Skills = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    return <section id="skills" data-scroll-section="">
        <div className="container">
            <SectionTitle
                h2={'My <span class="strong">skills</span>'}
                h3={'What I\'m good at'}
            />
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