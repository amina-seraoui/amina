const CardInfo = ({ children }) => {
    return <ul className="card-info">
        {
            children.map((info, i) => {
                return <li key={i}>
                    <h3 className="label">{info.label}</h3>
                    <span className="value">{info.value}</span>
                </li>
            })
        }
    </ul>
}

export default CardInfo