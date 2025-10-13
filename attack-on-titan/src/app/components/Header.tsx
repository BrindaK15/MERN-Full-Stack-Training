interface HeaderProps {
    title: string;
    subtitle: string;
    aotRedClass: string 
}

const Header: React.FC<HeaderProps>= ({ title, subtitle, aotRedClass}) => {
    return (
        <header className="text-center mb-12 pt-4">
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-black ${aotRedClass} uppercase drop-shadow=[0_4px_6px_rgba(255,0,0,0.6)]`}>
                {title}
            </h1>
            <p className=" mt-3 text-xl md:text-3xl font-light text-gray-600 border-b border-yellow-300/50 pb-2 inline-block ">
                {subtitle}
            </p>
        </header>
    )
}

export default Header