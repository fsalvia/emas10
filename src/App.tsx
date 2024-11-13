import { Contacto } from "./components/Contacto";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { Nosotros } from "./components/Nosotros";
import { Obras } from "./components/Obras";
import { Servicios } from "./components/Servicios";


export default function App() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Nosotros />
    <Servicios />
    <Obras />
    <Contacto />
    <Footer />
    </>
  )
}