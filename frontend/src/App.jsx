import "./App.css"

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content container">
        <div className="row">
            <div className="col-4">
             <Card/>   
            </div>
            <div className="col-4">
             <Card/>   
            </div>
            <div className="col-4">
             <Card/>   
            </div>
            <div className="col-4">
             <Card/>   
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  );
}

export default App
