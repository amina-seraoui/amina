import Image from 'next/image'

const Frame = ({ img }) => {
    return <figure className="frame">
        <Image
            src={'/assets/img/' + img}
            width={1050}
            height={700}
        />
    </figure>
}

export default Frame