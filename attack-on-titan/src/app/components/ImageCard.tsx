import Image from "next/image";


interface ImageCardProps {
    src: string,
    alt: string,
    title: string,
    description: string;
}

const ImageCardProps: React.FC<ImageCardProps> = ({src,alt,title,description})=> {
    return (
        <section>
            <div>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className=''
                    priority
                    sizes='100vw'

                />
            </div>
        </section>
    )
}

export default ImageCardProps