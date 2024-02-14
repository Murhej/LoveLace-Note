import Navbar from "./component/navbar";
import MusicBar from "./component/musicbar";
import Display from "./component/Display";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Display/>
      <MusicBar/>
    </div>
  );
}

export default App;
