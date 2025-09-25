


interface BannerProps {
    page: React.ReactNode;
    url: React.ReactNode;
}

const Banner = ({ page, url }: BannerProps) => {
    return (
        <div className={` relative bg-[url("${url}")] bg-center bg-fixed bg-cover overflow-hidden w-full h-100 flex flex-col justify-center items-center `}>
            <div className="absolute inset-0 bg-blue-950 opacity-50 z-0"></div>

            <h1 className='z-1 font-bold text-left! text-white text-4xl md:text-6xl font-sans italic capitalize'>{page}</h1>


        </div>
    )
}

export default Banner