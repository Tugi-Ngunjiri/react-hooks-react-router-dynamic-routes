// ./src/components/MovieShow.js
import React from "react";
import { useParams } from "react-router-dom";


function MovieShow({ movies }) {
    // call useParams to access the `params` from the url
    const params = useParams();
    console.log(params);
  
    return (
      <div>
        {/* And here we access the `movieId` stored in `params` to render 
          information about the selected movie */}
        <h3>{movies[params.movieId].title}</h3>
      </div>
    );
  }

  const Movies = () => {const [Movies, Movies]=useState("Movieshows");
return (
    <div>
<div><input type="text" value={Movieshows}placeholder="Enter a message" onChange={e => setMovieshows(e.target.value)}></input></div>,
<p>
<strong>{Movies}</strong> 
</p>
</div>
)
  }


  




export default MovieShow;