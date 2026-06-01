const images = import.meta.glob('../assets/images/*', {
    eager: true,
    import: 'default',
})

export default function ProyectGallery() {
    return (
        <div className="mt-5">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <h1 className="text-3xl font-semibold text-center mx-auto text-sky-200">My proyects</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>

            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-7 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-2xl shadow-xl/30 shadow-violet-600"
                        src={images["../assets/images/uniCosmet.png"]}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">E-commerce</h1>
                        <p className="text-sm">Software of products' selling and buying oriented to comestic</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-2xl shadow-xl/30 shadow-violet-600"
                        src={images["../assets/images/JMDownloadsYT.jpg"]}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">JMDownloadsYT (In process)</h1>
                        <p className="text-sm">Youtube video downloader in mp3 and mp4</p>

                    </div>
                </div>
                {/* <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-2xl shadow-xl/30 shadow-violet-600"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div> */}
            </div>
        </div>
    );
};
