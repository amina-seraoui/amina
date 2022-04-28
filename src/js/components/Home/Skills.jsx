import {useState} from 'react'
import {InView} from 'react-intersection-observer'
import SkillBar from '../SkillBar'
import ThreeSkills from '../ThreeSkills'

const Skills = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    return <section id="skills" data-scroll-section="">
        <div className="container">
            <div className="title">
                <h2>My <span className="strong">skills</span></h2>
                <h3>What I'm good at</h3>
            </div>
            <div className="content">
                <ThreeSkills skills={
                    [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'php',
                        'ThreeJS',
                        'Sass',
                        'Symfony',
                        'React JS',
                        'Vue JS',
                        'firebase',
                        'Webpack',
                        'MySQL',
                        'MariaDB',
                        'Git'
                    ]
                } />
                <InView triggerOnce={true} as="div" className="skills" onChange={setIsVisible}>
                    {
                        children.map((skill, i) => {
                            return <SkillBar key={i} skill={skill} visible={isVisible} />
                        })
                    }
                </InView>
            </div>
        </div>
    </section>
}

export default Skills