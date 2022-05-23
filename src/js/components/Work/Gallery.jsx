import Frame from '../Frame'

const Gallery = ({ img, setIsOpen, clickable, count }) => {
    return <div
        onClick={e => setIsOpen(true)}
        className="gallery"
        style={{ cursor: clickable ? 'pointer' : null}}
        data-count={count}
    >
        <Frame img={img} />
    </div>
}

export default Gallery
