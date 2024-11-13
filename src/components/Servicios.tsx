import img from '../assets/img/servicios.jpg';

export const Servicios = () => {
    return (
        <div className="min-h-[100vh] flex justify-center" id="servicios">
            <div className="w-full sm:w-5/6 xl:w-2/3 mx-auto my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center text-gray-800 p-4 2xl:w-4/5 mx-auto">
                        {/* Título responsivo */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                            Servicios
                        </h2>
                        <span className="line"></span>
                        <h2 className="text-lg sm:text-lg lg:text-xl font-bold mt-4">
                            <span className="font-bold text-[#3F6562]">•</span> Proyectos llave en mano
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl ml-3.5">
                            Ofrecemos un servicio integral que abarca desde la planificación y diseño hasta
                            la entrega final del proyecto, asegurando<span className="font-bold"> calidad y cumplimiento de plazos.</span>
                        </p>

                        <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                            <span className="font-bold text-[#3F6562]">•</span> Diseño
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl ml-3.5">
                            Nuestro equipo de arquitectos y diseñadores crea espacios innovadores y funcionales,
                            adaptados a las necesidades y preferencias de cada cliente.
                        </p>

                        <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                            <span className="font-bold text-[#3F6562]">•</span> Construcción húmeda
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl ml-3.5">
                            Realizamos construcciones tradicionales utilizando materiales como concreto y
                            ladrillo, garantizando estructuras sólidas y duraderas.
                        </p>
                        <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                            <span className="font-bold text-[#3F6562]">•</span> Construcción en seco
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl ml-3.5">
                            Especializados en la metodología <span className="font-bold">Steel Frame</span>, construimos con sistemas en seco que ofrecen rapidez, eficiencia y sustentabilidad.
                        </p>
                        <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                            <span className="font-bold text-[#3F6562]">•</span> Movimiento de suelo
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl ml-3.5">
                            Desarrollamos proyectos de infraestructura que incluyen la construcción de redes de
                            servicios, vialidades y otras obras civiles fundamentales para el desarrollo urbano.
                        </p>

                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={img}
                            alt="Una cosa"
                            className="w-full h-auto max-h-[80vh] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
