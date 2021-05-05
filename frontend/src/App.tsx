import BarChart from "components/BarChat";
import DataBase from "components/DataBase";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DonutChart from "components/DonuntChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container" >
        <h1 className="text-primary py-3">DashBorde de Vendas</h1>

        <div className="row px-3"> 
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div>
          <h2 className="text-primary">Todas Vendas</h2>
        </div>

        <DataBase />
      </div>
      <Footer />
    </>
  );
}

export default App;
