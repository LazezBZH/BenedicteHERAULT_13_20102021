import logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="main-nav">
      <Link to="/">
        <img src={logo} alt="logo de argentBank" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <Link to="./login" className="main-nav-item">
          <i className="fa fa-user-circle"> </i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
