import "./App.css";
import Panel from "./components/panel/panel";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <h2>PANEL</h2>
      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          nonummy auctor massa. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </p>
      </Panel>
      <Button label="Alert" />
    </div>
  );
}

export default App;
