
import "./menu.scss";
import { NavLink } from "react-router-dom";

function Menu() {

  return (
    <>
      {/* <div className='menu-container'>
        <div className='menu-position-container'>
        <div className='menu-logo'>
          <a href='#'>REACT.AUTO</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Главная</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Объявления</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Поиск</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Кабинет</a>
        </div>
      </div>
    </div> */}
      <div className="menu-container">
        <div className="menu-position-container">
          <div className="menu-logo">
            <a href="#">REACT.AUTO</a>
          </div>
          <div className="menu-link">
            <NavLink to="main">Главная</NavLink>
          </div>
          <div className="menu-link">
            <NavLink to="">Объявления</NavLink>
          </div>
          <div className="menu-link">
            <NavLink to="search">Поиск</NavLink>
          </div>
          <div className="menu-link">
            <NavLink to="profile">Кабинет</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
