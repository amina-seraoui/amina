/*
* Usage :
*
<SectionTitle
    h2={''}
    h3={''}
/>
*
* */

const SectionTitle = ({ h2, h3 }) => {
    return <div className="title">
        {h2 && <h2 dangerouslySetInnerHTML={{__html: h2}}/>}
        <h3 dangerouslySetInnerHTML={{__html: h3}}/>
    </div>
}

export default SectionTitle
