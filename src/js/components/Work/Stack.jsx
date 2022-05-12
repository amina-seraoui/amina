import Frame from '../Frame'
import CardInfo from '../CardInfo'

const Stack = ({work, prev, next}) => {
    const {role, stack, img, files} = work
    return <section>
        <div className="container">
            <div className="title">
                <h2><span className="strong">Stack</span> technique</h2>
                <h3 className="subtitle">Technologies utilisées</h3>
            </div>
            <div className="content">
                <Frame img={'works/' + img}/>
                <CardInfo>
                    {
                        [
                            {
                                label: 'Rôle',
                                value: role
                            },
                            {
                                label: 'Technologies',
                                value: <ul className="list">
                                    { stack.map((s, i) => {
                                        return <li key={i}>{s}</li>
                                    }) }
                                </ul>
                            },
                            {
                                label: 'Fichiers',
                                value: <ul className="files">
                                    {
                                        files.map((file, i) => {
                                            return <li key={i} className="file">
                                                <a
                                                    className="link"
                                                    href={file.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i className={'far fa-file-' + file.format} />
                                                    <span>{file.label}</span>
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                            }
                        ]
                    }
                </CardInfo>
            </div>
        </div>
    </section>
}

export default Stack