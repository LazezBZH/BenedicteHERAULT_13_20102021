import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
