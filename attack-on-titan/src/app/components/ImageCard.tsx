import Image from "next/image";


interface ImageCardProps {
    src: string,
    alt: string,
    title: string,
    description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({src,alt,title,description})=> {
    return (
        <section className="flex justify-center mb-16 px-0">
            <div  className="relative w-full min-h-[500px] h-[90vh] 
                            border-4 border-double border-gray-700 ring-4 ring-red-500/50 
                            shadow-[0_0_80px_rgba(160,0,0,0.8),_inset_0_0_20px_rgba(100,0,0,0.9)] 
                            overflow-hidden rounded-lg group">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className='object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-in-out '
                    priority
                    sizes='100vw'

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none ">
                    <div className="absolute inset-0 p-4 md:p-12 flex flex-col items-center justify-end text-white space-y-8">
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-center 
                                   border-b-4 border-yellow-300/50 pb-2 drop-shadow-xl`}>
                            {title}
                        </h2>

                        <div className="max-w-4xl p-4 md:p-6 bg-black/40 backdrop-blur-sm rounded-xl text-center border border-red-700/50">
                            <p className="text-base sm:text-xl font-medium leading-relaxed text-gray-200 drop-shadow-lg">
                                {description}
                                <span className="text-red-400 font-extrabold">Eren Yeager</span>, who vows to exterminate the itans after a Colossal Titan breaches the outermost wall.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageCard;