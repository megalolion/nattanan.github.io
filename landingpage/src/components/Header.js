import React,{ useState}from "react";
import { FiCode,FiMenu,FiX } from "react-icons/fi";
import './Header.css'

function Header() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const cloaseMObileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="https://www.google.com/?hl=th">ReDev < FiCode /></a>
          </div>
          <ul className={click ? "menu active" :"menu"}>
            <li className="menu-link" onClick={cloaseMObileMenu}>
              <a href="https://www.google.com/?hl=th">ABOUT</a>
            </li>
            <li className="menu-link" onClick={cloaseMObileMenu}>
              <a href="https://www.google.com/?hl=th">CONTACT</a>
            </li>
            <li className="menu-link" onClick={cloaseMObileMenu}>
              <a href="https://www.google.com/?hl=th">BLOG</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
{click ?(
    <FiX />
) : (
    <FiMenu />

)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
