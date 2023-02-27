import React from "react";
import Movie from "../Movie/Movie";
import "./styles.css";

class Movies extends React.Component {
  getMovie = (name, rating, banner) => {
    return <Movie name={name} rating={rating} banner={banner} />;
  };

  render() {
    return (
      <div className="movies-section">
        {this.getMovie(
          "Sir",
          " 9.4/10 20.1K votes",
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sir-et00340527-1663587263.jpg"
        )}
        {this.getMovie(
          "Ant-Man and the Wasp: Quantumania",
          " 8.4/10 19.7K votes",
          "https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg"
        )}
        {this.getMovie(
          "Vinaro Bhagyamu Vishnu Katha",
          " 8.7/10 16.9K votes",
          "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/02/Vinaro-Bhagyamu-Vishnu-Katha.jpg"
        )}
        {/* <Movie
          name="Shehzada"
          rating=" 7.3/10 28.2K votes"
          banner="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shehzada_2023_film_poster.jpg/220px-Shehzada_2023_film_poster.jpg"
        /> */}
      </div>
    );
  }
}

export default Movies;
