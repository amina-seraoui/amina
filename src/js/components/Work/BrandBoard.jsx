import {FormattedMessage} from 'react-intl'

const BrandBoard = ({brandboard, name}) => {
    const style = brandboard.fonts.map(font => font.import)

    const copyColor = color => {
        navigator.clipboard.writeText(color)
    }

    return <>
        <section>
            <style jsx>{style}</style>
            <div className="container">
                <div className="title">
                    <h2>
                        <FormattedMessage
                            id="brandboard.title"
                            values={{ s: a => <span className="strong">{a}</span> }}
                            defaultMessage="<s>Brand</s> board"
                        />
                    </h2>
                    <h3>
                        <FormattedMessage id="brandboard.subtitle" defaultMessage="Graphical elements of the project"/>
                    </h3>
                </div>
                <article id="brandboard">
                    <div className="section logos">
                        <h4><FormattedMessage id="label.logos" defaultMessage="Logos"/></h4>
                        <div className="items">
                            {
                                brandboard.logos.map((logo, i) => {
                                    return <figure key={i} className="item logo">
                                        <img src={logo} alt={name + ' logo_' + i} width={64} height={64}/>
                                    </figure>
                                })
                            }
                        </div>
                    </div>
                    <div className="section fonts">
                        <h4><FormattedMessage id="label.fonts" defaultMessage="Fonts"/></h4>
                        <div className="items">
                            {
                                brandboard.fonts.map((font, i) => {
                                    return <div key={i} className="font item" style={{fontFamily: font.name}}>
                                        <h5>{font.name}</h5>
                                        <p>
                                            <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
                                            <span>0 1 2 3 4 5 6 7 8 9</span>
                                        </p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="section colors">
                        <h4><FormattedMessage id="label.colors" defaultMessage="Colors"/></h4>
                        <div className="items">
                            {
                                brandboard.colors.map((color, i) => {
                                        return <div className="color item" key={i} onClick={e => copyColor(color)} title="copy color">
                                            <i style={{backgroundColor: color}} />
                                            <span className="small">{color}</span>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </>
}

export default BrandBoard