import "./App.css";
// import MsgBox from "./MsgBox";
import ProductTab from "./ProductTab";

function App() {
  let styles = {
    border: "3px solid #e0c367",
    borderRadius: "24px",
  };
  return (
    <div style={styles}>
      <h2>Blockbuster Deals | shop Now</h2>
      <ProductTab />
    </div>
  );
}

export default App;
