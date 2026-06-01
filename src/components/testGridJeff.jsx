function testGridJeff() {
    return (<div className="container mx-auto mt-5 border-2 p-7 border-slate-900 rounded-2xl text-slate-200">

        <h1 className="text-slate-400 text-3xl mb-10">Componentes tailwind</h1>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 border-slate-900 rounded-2xl p-7">
                <h1 className="text-1xl mb-2">componente 2</h1>
                <h2 className="text-1xl text-slate-400 mb-2">Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="bg-slate-900 border-slate-900 rounded-2xl p-7">
                <h1 className="text-1xl mb-2">componente 2</h1>
                <h2 className="text-1xl text-slate-400 mb-2">Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="bg-slate-900 border-slate-900 rounded-2xl p-7">
                <h1 className="text-1xl mb-2">componente 2</h1>
                <h2 className="text-1xl text-slate-400 mb-2">Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="bg-slate-900 border-slate-900 rounded-2xl p-7">
                <h1 className="text-1xl mb-2">componente 2</h1>
                <h2 className="text-1xl text-slate-400 mb-2">Lorem ipsum dolor sit amet</h2>
            </div>
        </div>

        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Home</h1>

            <Button onClick={handleClick}>
                Botón Primario
            </Button>

            <Button variant="secondary">
                Botón Secundario
            </Button>

            <Button variant="danger">
                Eliminar
            </Button>
        </div>
    </div>);
}

export default testGridJeff;