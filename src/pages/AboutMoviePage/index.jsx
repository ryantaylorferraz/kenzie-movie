import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import movieImage from "../../assets/imgLogo.png";
import { useUserContext } from '../../providers/UserContext';
import { Link } from 'react-router-dom';
import styles from "./style.module.scss";
import { useReviewContext } from '../../providers/ReviewContext';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { ModalReview } from '../../components/Modal/modalReview';



export const AboutMoviePage = () => {
  const {user, userLogout} = useUserContext()
  const {movieImg, createReview, modalReview, setModalReview, listReview} = useReviewContext()
  
  const primeiraLetras = listReview.map(review => {
    return review.name ? review.name[0] : '';
});

console.log(primeiraLetras);



  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);

  return (
    <>
      <section className={styles.container} >
        {
          movieImg && (
            <img src={movieImg.image} alt="" className={styles.backgroundImage} />
          )
        }
        <Header logo={movieImage} text={user} button={<Link to="/" onClick={(e) => { e.preventDefault(); userLogout(); }}>Sair</Link>} />
        <div className={styles.containerBox}>
          <div className={styles.divName}>
            <Button>{movieImg.type}</Button>
            <h1 className={styles.textName}>{movieImg.name}</h1>
          </div>
          <div className={styles.divStar}>
          <span>{movieImg.duration}m</span>
          <span className={styles.rating}>
                <span className="material-symbols-outlined" aria-hidden="true">star</span>
                <span>5.0</span>
                </span>
          </div>

        </div>
      </section>
      <main className={styles.mainContainer}>
        <p className={styles.paragraph}>"A América é uma sombra sinistra e cinzenta de si mesma após uma catástrofe. Um homem e seu filho vagam por este mundo pós-apocalíptico, tentando manter vivo o sonho da civilização. Eles viajam em direção ao mar sobrevivendo da melhor maneira possível, tentando evitar gangues de humanos selvagens que querem transformá-los em escravos, ou pior."</p>

        <section>
          <div className={styles.divReview}>
            <h1>Avaliações</h1>
            <Button onClick={() => setModalReview(true)}><span className="material-symbols-outlined">star</span>Avaliar</Button>
          </div>
          {modalReview ? <ModalReview movieImg={movieImg} /> : null}

          <div className={styles.listReview}>
            <ul className={styles.ulContainer}>
              {listReview.map((review) => (
              <li key={review.id} className={styles.liBox}>
                <h3>{review.name ? review.name[0] : ''}</h3>
                <span className={styles.rating}>
                <span className="material-symbols-outlined" aria-hidden="true">star</span>
                <span>{review.score}</span>
                </span>
                <p>{review.description}</p>
                <h4>{review.name}</h4>
              </li>
              ))}
            </ul>
          </div>

        </section>
      </main>
      <Footer />

    </>
  )
}
