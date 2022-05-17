import Frame from '../Frame'

const Gallery = ({ img, setIsOpen, clickable }) => {
    return <div onClick={e => setIsOpen(true)} className="gallery" style={{ cursor: clickable ? 'pointer' : null}}>
        <Frame img={'works/' + img} />
    </div>
}

export default Gallery
