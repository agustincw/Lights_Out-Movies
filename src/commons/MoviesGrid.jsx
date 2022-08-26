import { useEffect } from "react";
import styles from "../styles/Grid.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import MoviesCard from "./MoviesCard";
import { useParams } from "react-router-dom";

export default function moviesGrid() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

console.log("USEPARAMS", useParams())
//depende lo que clickeo
const {type} = useParams()

  useEffect(() => {
    dispatch(getMovies(type));
  }, [type]); // cuando cambie el type, se vuelve a ejecutar el useEffect

  console.log("PELICULAS", movies);

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie, i) => (
          <MoviesCard key={i} movie={movie} />
        ))};
      </ul>
    </div>
  );
}
