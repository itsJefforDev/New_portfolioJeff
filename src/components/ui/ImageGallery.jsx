import React, { useState } from "react";

const ImageGallery = () => {

    const images = import.meta.glob('../../assets/images/*', {
        eager: true,
        import: 'default',
    })

    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "react",
            image: images['../../assets/images/react.png'],
        },
        {
            title: "angular",
            image: images['../../assets/images/angular.png'],
        },
        {
            title: "Spring boot",
            image: images['../../assets/images/spring boott.png'],
        },
        {
            title: "Laravel",
            image: images['../../assets/images/laravel.png'],

        },
        {
            title: "express.js",
            image: images['../../assets/images/express2.jpg'],

        },
        {
            title: "Node.js",
            image: images['../../assets/images/nodejs2.jpg'],

        },
        {
            title: "MySQL",
            image: images['../../assets/images/mysql.png'],

        },
        {
            title: "MongoDB",
            image: images['../../assets/images/mongodb2.png'],

        },
            {
            title: "LookerStudio",
            image: images['../../assets/images/lookerstudio.png'],

        },

    ];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-1xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 h-[5rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-contain rounded-2xl" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />
            </div>
        </>
    );
};

export default ImageGallery;