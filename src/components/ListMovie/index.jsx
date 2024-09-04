import React from "react";
import { Button } from "../Button";
import styles from "./style.module.scss";
import { useUserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { useReviewContext } from "../../providers/ReviewContext";

export const ListMovie = ({ movie }) => {
  const {user } = useUserContext()
  const {handleMovieClick} = useReviewContext()

  return (
    <li className={styles.liContainer}>
      <div className={styles.divBox}>
        <img src={movie.image} alt={movie.name} />
        <div className={styles.divMovie}>
          <div className={styles.divName}>
            <div className={styles.divInfo}>
              <Button>{movie.type}</Button>
              {user && user.length > 0 ? <Link to="/aboutmovie"><button className={styles.btnInfo} onClick={() => handleMovieClick(movie)}>Info</button></Link> : null}
            </div>
            <h3>{movie.name}</h3>
          </div>
          <div className={styles.divSpan}>
            <span>{movie.duration}m</span>
            <div>
              <span className="material-symbols-outlined">star</span>
              <p>5.0</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
