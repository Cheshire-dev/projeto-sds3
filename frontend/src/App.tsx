import DataBase from "components/DataBase";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container" >
        <h1 className="text-primary">Ola Mundo</h1>
        <DataBase />
      </div>
      <Footer />
    </>
  );
}

export default App;
