import "./App.css";
import Painel from "./components/painel/painel";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <h2>MEU PAINEL</h2>
      <Painel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          nonummy auctor massa. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </p>
      </Painel>
      <Button label="Alerta" />
    </div>
  );
}

export default App;
