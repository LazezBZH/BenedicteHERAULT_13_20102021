import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import User from "../../pages/User/User";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
      </Switch>
      <Footer />
    </div>
  );
}
