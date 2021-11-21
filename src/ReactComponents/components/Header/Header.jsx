import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../Redux/actions/logout";
import logo from "../../../assets/argentBankLogo.png";

/**
 * fonction to log out if connected
 * @function
 * @name logout
 * @returns {object}
 */

export const logout = () => {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch(logOut());
  };
};

const Header = () => {
  const dispatch = useDispatch();

  const selectLogin = (state) => state.getUser.isLogged;
  const login = useSelector(selectLogin);

  const selectUser = (state) => state.getUser.user;
  const user = useSelector(selectUser);

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="logo de argentBank"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      {login ? (
        <div>
          <Link to="./profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.body.firstName}
          </Link>
          <button className="main-nav-item" onClick={() => dispatch(logout())}>
            <i className="fas fa-sign-out-alt"></i>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="./login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <button className="main-nav-item">Sign In</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
