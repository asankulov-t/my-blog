import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className={'container'}>
          <Home/>
          <Write/>
      </div>
    </div>
  );
}

export default App;
