import { Parallax } from "react-parallax";
import styled from 'styled-components';
import fondo from '../assets/img/fondos/obras.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chacras2 from '../assets/img/obras/chacras2/chachas2.jpg';
import chacras3 from '../assets/img/obras/chacras3/chacras3-1.jpg';
import sanEliseo from '../assets/img/obras/saneliseo/saneliseo1.jpg';
import santaClara from '../assets/img/obras/santaclara/santaclara1.jpg';
import alvarez from '../assets/img/obras/alvarez/alvarez1.jpg';

export const Obras = () => {
    // Configuramos el carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Array de obras con imágenes reales
    const obras = [
        {
            nombre: "Chacras 2",
            tipologia: "Vivienda unifamiliar",
            imagen: chacras2,
            localidad: "San Vicente"
        },
        {
            nombre: "Chacras 3",
            tipologia: "Vivienda unifamiliar",
            imagen: chacras3,
            localidad: "San Vicente"
        },
        {
            nombre: "San Eliseo",
            tipologia: "Vivienda unifamiliar",
            imagen: sanEliseo,
            localidad: "Canning"
        },
        {
            nombre: "Santa Clara al Sur",
            tipologia: "Vivienda unifamiliar",
            imagen: santaClara,
            localidad: "Canning"
        },
        {
            nombre: "Alvarez del Bosque",
            tipologia: "Vivienda unifamiliar",
            imagen: alvarez,
            localidad: "Pilar"
        }
    ];

    return (
        <div id="obras">
            <Parallax bgImage={fondo} strength={500} bgImageStyle={{ objectFit: 'cover' }}>
                <div className="h-[100vh] flex justify-center">
                    <StyledDiv className="w-full sm:w-5/6 xl:w-2/3 mx-auto my-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                            Nuestras Obras
                        </h2>
                        <HorizontalLine className="mx-auto mt-3 mb-8" />
                        <Slider {...settings} >
                            {obras.map((obra, index) => (
                                <StyledCard key={index} imageUrl={obra.imagen} className="overflow-hidden">

                                    <TextContainer className="">
                                        <Title>{obra.nombre}</Title>
                                        <Subtitle>{obra.tipologia}</Subtitle>
                                        <Location>{obra.localidad}</Location>
                                    </TextContainer>
                                </StyledCard>
                            ))}
                        </Slider>
                    </StyledDiv>
                </div>
            </Parallax>
        </div>
    );
};

const StyledDiv = styled.div`
  padding: 20px;
  top: 50%;
  left: 50%;
`;

interface StyledCardProps {
    imageUrl: string;
}

const HorizontalLine = styled.div`
  width: 60px;
  height: 3px;
  background-color: #CB955D;
`;

const StyledCard = styled.div<StyledCardProps>`
    background-color: #252525;
    border-radius: 18px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    background: url(${props => props.imageUrl}) no-repeat center center/cover;
    margin-left: 10px;
    margin-right: 10px;
    min-height: 60vh;
    max-width: 90%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const TextContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #CB955D; 
    opacity: 0.8;
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
`;

const Subtitle = styled.p`
    margin: 5px 0;
    font-size: 1rem;
    font-weight: bold;
    color: #3F6562;
`;

const Location = styled.p`
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
    color: #3F6562;
`;