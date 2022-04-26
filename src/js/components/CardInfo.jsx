const CardInfo = ({ children }) => {
    return <ul className="card-info">
        {
            children.map((info, i) => {
                return <li key={i}>
                    <h4 className="label">{info.label}</h4>
                    <div className="value">{info.value}</div>
                </li>
            })
        }
    </ul>
}

export default CardInfo