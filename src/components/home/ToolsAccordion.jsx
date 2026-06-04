import { div, h1, image } from "motion/react-client";
import Accordion from "../ui/Accordion";

function ToolsAccordion() {

    const images = import.meta.glob('../../assets/images/*', {
        eager: true,
        import: 'default',
    })

    const backend = [
        {
            name: "Spring boot",
            icon: images['../../assets/images/spring boot.png']
        },
        {
            name: "Laravel",
            icon: images['../../assets/images/laravel.png']
        },
        {
            name: "Express.js",
            icon: images['../../assets/images/express2.jpg']
        },
        {
            name: "Node.js",
            icon: images['../../assets/images/nodejs.png']
        },
        {
            name: ".NET",
            icon: images['../../assets/images/NET.png']
        }
    ];

    const faqs = [
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/code.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Backend</h1>
                </div>),
            content: (
                <div className="flex flex-wrap gap-4">
                    {backend.map((back, index) => (
                        <div
                            key={index}
                            className="flex flex-col grow items-center bg-violet-950/30 rounded-2xl py-3 px-8 backdrop-blur-2xl"
                        >
                            <img
                                src={back.icon}
                                className="h-12"
                                alt={back.name}
                            />

                            <h1 className="text-sm font-sans mt-2">
                                {back.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/frontend.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Frontend</h1>
                </div>),
            content: "Tailwind es un framework..."
        },
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/database.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Database</h1>
                </div>),
            content: "React es una librería..."
        },
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/languageCode.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Languages</h1>
                </div>),
            content: "React es una librería..."
        },
    ];
    return (
        <div className="p-6 bg-radial-[at_100%_50%] from-purple-950 to-slate-950 to-65%">
            <h1 className="text-4xl text-sky-200 mb-12 text-center">Tools and tecnologies</h1>
            <div className="flex flex-wrap justify-initial xs:flex-col">
                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        className="shadow-lg m-1 border-violet-100/0 flex flex-col w-110 grow backdrop-blur-2xl"
                        headerClassName="bg-violet-950/20 hover:bg-violet-950/40 p-6 backdrop-blur-2xl"
                        titleClassName="text-white"
                        iconClassName="text-white"
                        bodyClassName="p-5 text-violet-300 bg-violet-950/20 backdrop-blur-2xl"
                        title={faq.title}
                    >
                        <p>{faq.content}</p>
                    </Accordion>
                ))}
            </div>
        </div>
    );

}

export default ToolsAccordion;