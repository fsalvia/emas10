import img from '../assets/img/nosotros.jpg';

export const Nosotros = () => {
    return (
        <div className="min-h-[100vh] flex justify-center" id="nosotros">
            <div className="w-full sm:w-5/6 xl:w-2/3 mx-auto my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="flex justify-center items-center">
                        <img
                            src={img}
                            alt="Una cosa"
                            className="w-full h-auto max-h-[80vh] object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center text-gray-800 p-4 2xl:w-4/5 mx-auto">
                        {/* Título responsivo */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                            Nosotros
                        </h2>
                        <span className="line"></span>
                        {/* Texto responsivo */}
                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl mt-4">
                            En <span className="font-bold">E+10</span>, nos especializamos en transformar tus ideas en realidad con la mayor calidad y eficiencia. Como una empresa constructora joven y dinámica, nos destacamos por nuestra experiencia tanto en obra húmeda como en obra seca, adaptándonos a las necesidades específicas de cada proyecto.
                        </p>

                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl">
                            Nuestro equipo de profesionales altamente capacitados utiliza la última tecnología en construcción, incluyendo la metodología <span className="font-bold">Steel Frame</span>, que nos permite ofrecer soluciones innovadoras y sostenibles. Este sistema no solo garantiza una mayor rapidez en la ejecución de las obras, sino también una excelente resistencia y durabilidad.
                        </p>

                        <p className="mb-4 text-sm sm:text-base lg:text-[1rem] xl:text-lg 2xl:text-xl">
                            En <span className="font-bold">E+10</span>, creemos en la importancia de combinar tradición y modernidad para entregar proyectos que superen las expectativas de nuestros clientes. Ya sea una vivienda, un edificio comercial o una remodelación, estamos comprometidos con la excelencia en cada detalle, desde la planificación hasta la entrega final.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
