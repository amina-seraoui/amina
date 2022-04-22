const Tabs = ({ active, setActive, tabs }) => {
    return <ul className="tabs">
        {
            tabs.map((tab, i) => {
                return <li
                    key={i}
                    className={active === tab ? 'active' : ''}
                    onClick={() => setActive(tab)}
                >
                    {tab}
                </li>
            })
        }
    </ul>
}

export default Tabs