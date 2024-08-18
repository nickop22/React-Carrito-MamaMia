import Navegacion from "./componentes/Navegacion.jsx";
import Home from "./componentes/Home.jsx";
import Footer from "./componentes/Footer.jsx";
import "./App.css";
import Registro from "./componentes/Registro.jsx";
import Login from "./componentes/login.jsx";
import CarritoCompras from "./componentes/CarritoCompras.jsx";

function App() {
  return (
    <>
      <Navegacion />
      <Home />
      <Registro />
      <Login />
      <CarritoCompras />
      <Footer />
    </>
  );
}

export default App;
