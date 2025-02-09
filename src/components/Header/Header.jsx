import "./Header.scss";
import Button from "../Button/Button";
import logo from "../../assets/icons/Rectangle.svg"

function Header() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" />
        <div className="header-btns">
          <Button name="Sign In" className="header-btn-1" />
          <Button name="Sign Up" className="header-btn-2" />
        </div>
      </header>
    </div>
  );
}

export default Header;
