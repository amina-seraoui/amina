import Frame from '../Frame'
import CardInfo from '../CardInfo'
import Gallery from './Gallery'
import {FormattedMessage} from 'react-intl'
import {useRouter} from 'next/router'

const Stack = ({work, setIsOpen, clickable}) => {
    const {role, stack, img, files} = work
    const {locale} = useRouter()

    return <section>
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="stack.title"
                        values={{ s: a => <span className="strong">{a}</span> }}
                        defaultMessage="Technical <s>stack</s>"
                    />
                </h2>
                <h3 className="subtitle"><FormattedMessage id="stack.subtitle" defaultMessage="General information"/></h3>
            </div>
            <div className="content">
                <Gallery img={img} setIsOpen={setIsOpen} clickable={clickable}/>
                <CardInfo>
                    {
                        [
                            {
                                label: <FormattedMessage id="stack.role" defaultMessage="Role"/>,
                                value: role
                            },
                            {
                                label: <FormattedMessage id="stack.techno" defaultMessage="Technologies"/>,
                                value: <ul className="list">
                                    { stack.map((s, i) => {
                                        return <li key={i}>{s}</li>
                                    }) }
                                </ul>
                            },
                            {
                                label: <FormattedMessage id="stack.files" defaultMessage="Files"/>,
                                value: <ul className="files">
                                    {
                                        files?.map((file, i) => {
                                            return <li key={i} className="file">
                                                <a
                                                    className="link"
                                                    href={file.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i className={'far fa-file-' + file.format} />
                                                    <span>
                                                        {
                                                            (typeof file.label === 'string') ? file.label :
                                                            (typeof file.label === 'object') ?
                                                                (file.label[locale] ?? file.label['en']) : 'file'
                                                        }
                                                    </span>
                                                    {/*<span>{file.label}</span>*/}
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