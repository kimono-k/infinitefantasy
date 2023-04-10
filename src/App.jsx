import "./styles/App.css";
import "./index.css";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
