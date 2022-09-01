import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteSearch } from "../store/search";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { SearchContext } from "../contexts/searchContext";
// import { LoginContext } from "../contexts/loginContext";
import styles from "../styles/Navbar.module.css";
import Logo from "../assets/Logo.png"
import Search from "./Search";

export default function () {
  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const searchClean = () =>{
    dispatch(deleteSearch())
  }

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="Logo" height={"55px"} />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <Search/>
          <Link to="/movies" >
            <li>Peliculas</li>
          </Link>
          <Link to="/shows">
            <li>Shows</li>
          </Link>
          <Link to="/favourites">
            <li>Favoritos</li>
          </Link>
          <Link to="/user/login">
            <li>Login</li>
          </Link>
          <Link to="/user/register">
            <li>Register</li>
          </Link>
          {/* <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li> */}
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
}