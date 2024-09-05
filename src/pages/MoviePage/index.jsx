import { Header } from "../../components/Header";
import movieImage from "../../assets/imgLogo.png";
import styles from "./style.module.scss";
import { Button } from "../../components/Button";
import { useMovieContext } from "../../providers/MovieContext";
import { ListMovie } from "../../components/ListMovie";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import { useEffect, useState } from "react";
import { useReviewContext } from "../../providers/ReviewContext";

export const MoviePage = () => {
  const {listProduct} = useMovieContext()
  const {movieImg, handleMovieClick} = useReviewContext()
  const {user, userLogout} = useUserContext()
  


useEffect(() => {
}, [movieImg]);

  const filterMovie = listProduct.filter(movie => movie.name === "The Random Heros")
  const filterListMovie = listProduct.filter(movie => movie.name !== "The Random Heros")
  
  return (
    <>
      {user && user.length > 0 ?  (
        <Header logo={movieImage} text={typeof user === 'string' ? user : user.name} button={<Link to="/" onClick={(e) => { e.preventDefault(); userLogout(); }}>Sair</Link>}/>

      ): (
        <Header logo={movieImage} text={"Cadastre-se"} link="/registerpage" button={<Link to="/loginpage">Entrar</Link>}  />

      )}
      <main className={styles.container}>
        <section className={styles.divMovie} onClick={() => handleMovieClick(filterMovie[0])}>
          {filterMovie.length > 0 ? (
            <>
          <img src={filterMovie[0].image} />
          <div className={styles.divAboutMovie}>
            <div className={styles.divName}>
              <div className={styles.divInfo}>
                <Button>{filterMovie[0].type}</Button>
                {user && user.length > 0 ? <Link to="/aboutmovie"><button className={styles.btnInfo}>Info</button></Link> : null}
              </div>
              <h1>{filterMovie[0].name}</h1>
            </div>
            <div className={styles.divAbout}>
              <span>{filterMovie[0].duration}m</span>
              <div className={styles.divReview}>
                <span className="material-symbols-outlined">star</span>
                <p>5.0</p>
              </div>
            </div>
          </div>
            </>

          ) : (
            <p>Filme não encontrado.</p>
          ) }
        </section>

        <ul className={styles.listMovie}>
          {filterListMovie.map(movie => (
            <ListMovie key={movie.id} movie={movie} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};
