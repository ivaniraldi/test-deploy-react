import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Card from "./components/Card"

function App() {

  const nombre = "Ivan";
  const edad = 27;

  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


  return (
    <>
      <NavBar/>
      <Main/>
      <Card titulo="Remera de verano talla M" precio={5000}/>
      <Card titulo="Zapatos talla 41" precio={8000}/>
    </>
  );
}

export default App;
