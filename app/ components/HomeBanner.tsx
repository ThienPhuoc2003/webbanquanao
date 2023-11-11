import Image from 'next/image';

const HomeBanner = () => {
    return (
        <div className="relative bg-white mb-8 overflow-hidden">
            <div className="mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-evenly">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Summer Sale</h1>
                    <p className="text-lg md:text-xl text-gray-800 mb-2">Enjoy discounts on selected items</p>
                    <p className="text-2xl md:text-5xl text-yellow-400 font-bold">GET 50% OFF</p>
                </div>
                <div className="w-full relative aspect-video overflow-hidden">
                <Image src="/banner-image.png" 
                fill 
                alt="Banner Image" 
                className="object-contain"/>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
