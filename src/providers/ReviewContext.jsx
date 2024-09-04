import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../service/api";

export const ReviewContext = createContext({});

export const ReviewProvider = ({ children }) => {
  const [movieImg, setMovieImg] = useState(() => {
    return JSON.parse(localStorage.getItem("@movieImg:")) || null;
  });
  const [modalReview, setModalReview] = useState(false);

  const [review, setReview] = useState([]);

  const [listReview, setListReview] = useState([]);

  const [idMovie, setIdMovie] = useState(() => {
    return JSON.parse(localStorage.getItem("@movieImg:")) || null;
  });

  console.log(idMovie?.id);
  

  const token = localStorage.getItem("@TOKEN:");

  useEffect(() => {
    const getReview = async () => {
      try {
        if (idMovie) {
          const { data } = await api.get(
            `/movies/${idMovie.id}?_embed=reviews`
          );
          setListReview(data.reviews);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getReview();
  }, [idMovie]);

  const handleMovieClick = (image) => {
    setMovieImg(image);
    localStorage.setItem("@movieImg:", JSON.stringify(image));
    setIdMovie(image);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/aboutmovie") {
      localStorage.removeItem("@movieImg:");
    }
  }, [location.pathname]);

  const createReview = async (formData) => {
    try {
      await api.post("/reviews", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListReview([...listReview, formData]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        movieImg,
        setMovieImg,
        handleMovieClick,
        createReview,
        modalReview,
        setModalReview,
        listReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => useContext(ReviewContext);
