import React from "react";
import { Button } from "../Button";
import styles from "./style.module.scss";

export const ListMovie = ({ movie }) => {
  return (
    <li className={styles.liContainer}>
      <div className={styles.divBox}>
        <img src={movie.image} alt={movie.name} />
        <div className={styles.divMovie}>
          <div className={styles.divName}>
            <Button>{movie.type}</Button>
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
