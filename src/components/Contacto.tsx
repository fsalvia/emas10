import { useState } from "react";
import img from '../assets/img/contacto.jpg';
import styled from "styled-components";
export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="min-h-[100vh] flex justify-center" id="nosotros">
            <div className="w-full sm:w-5/6 xl:w-2/3 mx-auto my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

                    <div className="flex justify-center items-center">
                        <img
                            src={img}
                            alt="Una cosa"
                            className="w-full h-auto max-h-[80vh] object-cover"
                        />
                    </div>

                    <div className=" w-full sm:w-3/4 px-4 sm:px-0 text-gray-800 mx-auto mb-[70px]">
                        <form
                            className="text-gray-500 fashion-heavy mx-auto bg-gray-200 bg-opacity-70 rounded-xl p-5 mb-12"
                            action="https://formsubmit.co/administracion@emas10.com"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_next"
                                value="http://emas10.com/"
                            ></input>
                            <input type="hidden" name="_cc" value="rcabral@emas10.com"></input>
                            <input type="hidden" name="_cc" value="fpaz@emas10.com"></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <div className="w-full ">

                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                                    Formulario de contacto
                                </h2>

                            </div>
                            <HorizontalLine className="mx-auto mt-3 mb-8" />
                            <div className="mb-4">
                                <label htmlFor="name" className="block font-medium mb-1">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="lastName" className="block font-medium mb-1">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block font-medium mb-1">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block font-medium mb-1">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={3}
                                    className="w-full px-3 py-2 border rounded-md"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                style={{ backgroundColor: "#CB955D" }}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HorizontalLine = styled.div`
  width: 60px;
  height: 3px;
  background-color: #CB955D;
`;