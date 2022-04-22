import {useEffect, useState} from 'react'

const SkillBar = ({ skill, visible }) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (visible && value < skill.value) {
                setValue(val => (val + 1))
            } else {
                clearTimeout(timeout)
            }
        }, 5)
    }, [visible, value])

    return <div className="skill-bar">
        <span className="badge" style={{left: 'calc(' + value + '% - 1.5rem)'}}>{value}%</span>
        <progress value={value} max={100} />
        <span className="label">{skill.label}</span>
    </div>
}

export default SkillBar