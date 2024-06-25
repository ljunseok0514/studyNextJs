import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  titlte: "Home",
};

async function getMovies() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  const firstMovie = movies[0];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Top 20 Movies</h1>
      <div className={styles.firstMovie}>
        <img src={firstMovie.backdrop_path} alt="title" />
      </div>
      <div className={styles.movieListSection}>
        {movies.slice(1).map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
