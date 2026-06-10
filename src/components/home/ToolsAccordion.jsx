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

    const frontend = [
        {
            name: "React",
            icon: images['../../assets/images/react.png']
        },
        {
            name: "Angular",
            icon: images['../../assets/images/angular.png']
        },
        {
            name: "HTML",
            icon: images['../../assets/images/html.png']
        },
        {
            name: "CSS",
            icon: images['../../assets/images/css.png']
        },
        {
            name: "Tailwindcss",
            icon: images['../../assets/images/Tailwind-CSS.png']
        },
        {
            name: "bootstrap",
            icon: images['../../assets/images/bootstrap1.png']
        },
    ];


    const database = [
        {
            name: "MySQL",
            icon: images['../../assets/images/mysql.png']
        },
        {
            name: "MongoDB",
            icon: images['../../assets/images/mongodb.png']
        },
    ];

    const languagesMore = [
        {
            name: "Java",
            icon: images['../../assets/images/java.png']
        },
        {
            name: "JavaScript",
            icon: images['../../assets/images/javascript.png']
        },
        {
            name: "TypeScript",
            icon: images['../../assets/images/typescript.png']
        },
        {
            name: "PHP",
            icon: images['../../assets/images/php.png']
        },
        {
            name: "Python",
            icon: images['../../assets/images/python.png']
        },
        {
            name: "cSharp",
            icon: images['../../assets/images/csharp.png']
        },
        {
            name: "Docker",
            icon: images['../../assets/images/docker.png']
        },
        {
            name: "GIT",
            icon: images['../../assets/images/git.png']
        },
        {
            name: "Power BI",
            icon: images['../../assets/images/powerbi.png']
        },
        {
            name: "Looker Studio",
            icon: images['../../assets/images/lookerstudio.png']
        },
        {
            name: "Excel",
            icon: images['../../assets/images/excel.png']
        },
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
            content: (
                <div className="flex flex-wrap gap-4">
                    {frontend.map((front, index) => (
                        <div
                            key={index}
                            className="flex flex-col grow items-center bg-violet-950/30 rounded-2xl py-3 px-8 backdrop-blur-2xl"
                        >
                            <img
                                src={front.icon}
                                className="h-12"
                                alt={front.name}
                            />

                            <h1 className="text-sm font-sans mt-2">
                                {front.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/database.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Database</h1>
                </div>),
            content: (
                <div className="flex flex-wrap gap-4">
                    {database.map((db, index) => (
                        <div
                            key={index}
                            className="flex flex-col grow items-center bg-violet-950/30 rounded-2xl py-3 px-8 backdrop-blur-2xl"
                        >
                            <img
                                src={db.icon}
                                className="h-12"
                                alt={db.name}
                            />

                            <h1 className="text-sm font-sans mt-2">
                                {db.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: (
                <div className="flex">
                    <img src={images['../../assets/images/languageCode.png']} className="h-15" alt="" />
                    <h1 className="content-center ml-5 text-2xl">Languages and more</h1>
                </div>),
            content: (
                <div className="flex flex-wrap gap-4">
                    {languagesMore.map((lm, index) => (
                        <div
                            key={index}
                            className="flex flex-col grow items-center bg-violet-950/30 rounded-2xl py-3 px-8 backdrop-blur-2xl"
                        >
                            <img
                                src={lm.icon}
                                className="h-12"
                                alt={lm.name}
                            />

                            <h1 className="text-sm font-sans mt-2">
                                {lm.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )
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