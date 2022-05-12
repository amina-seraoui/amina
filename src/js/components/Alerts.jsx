import {useState, useEffect} from 'react'

const Alerts = ({ setCreateAlert }) => {
    const [alerts, setAlerts] = useState([])

    const closeAlert = i => {
        // remove transition
        setAlerts(a => {
            const clone = [...a]
            clone[i].state = 0
            return clone
        })

        // remove element
        setTimeout(() => {
            setAlerts(a => {
                const clone = [...a]
                clone.splice(i, 1)
                return clone
            })
        }, 500)
    }

    const createAlert = (type, text) => {
        setAlerts(alerts => {
            const clone = [...alerts]
            const icon = type === 'success' ? 'valid.svg' : 'error.svg'
            const i = clone.push({type, text, state: 1, icon})

            setTimeout(() => {
                closeAlert(0)
            }, 3000)
            return clone
        })
    }

    useEffect(() => {
        setCreateAlert(f => createAlert)
    }, [])

    return Boolean(alerts.length) && <div className="alerts">
        {
            alerts.map((alert, i) => {
                return <div
                    key={i}
                    className={'alert ' + alert.type + (alert.state ? ' active' : '')}
                    onClick={e => closeAlert(i)}
                    title="click to close"
                >
                    <i />
                    {alert.text}
                </div>
            })
        }
    </div>
}

export default Alerts