import { useEffect } from "react";
import styles from "../styles/Search.module.css"
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import MoviesCard from "../commons/MoviesCard";
import { useParams } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Search() {

  
  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="enter your search"
        />
        <button className={styles.submit}>
        <AiOutlineSearch size={25} style={{ marginTop: "6px", color:"white"}}/>
        </button>
      </div>
    </div>
  );
}
