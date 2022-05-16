import Frame from '../Frame'

const Gallery = ({ img, setIsOpen }) => {
    return <div onClick={e => setIsOpen(true)} className="gallery">
        <Frame img={'works/' + img} />
    </div>
}

export default Gallery
