import {useState} from 'react'
import {InView} from 'react-intersection-observer'
import SkillBar from '../SkillBar'
import ThreeSkills from '../ThreeSkills'
import {FormattedMessage} from 'react-intl'

const Skills = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    return <section id="skills">
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="skills.title"
                        values={{ s: c => <span className="strong">{c}</span> }}
                        defaultMessage="My <s>skills</s>"
                    />
                </h2>
                <h3><FormattedMessage id="skills.subtitle" defaultMessage="My favourite stack"/></h3>
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
                        'Git',
                        'Wordpress',
                        'p5.js'
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