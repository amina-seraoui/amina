import Image from 'next/image'

const Frame = ({ img }) => {
    return <div className="frame">
        <Image
            src={'/assets/img/' + img}
            width={1050}
            height={700}
        />
    </div>
}

export default Frame