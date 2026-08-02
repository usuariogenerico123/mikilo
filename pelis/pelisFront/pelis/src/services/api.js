import axios from "axios";
import { ADDMOVIE_ENDPOINT } from "./config";

export async function PostAddMovie(movie){
    const bearer = localStorage.getItem("bearer");
    const config = {
        headers: {
            Authorization:`Bearer ${bearer}`
        }
    }
    const data = {
        
        title: movie.title,
        year: movie.year,
        duration: movie.duration,
        rating: movie.rating,
        genre: movie.genre,
        description: movie.description,
        director: movie.director,
        cast: movie.cast,
        image: movie.image,
        category: movie.category,
        movie_url: movie.movie_url
    }

    const resp = await axios.post(ADDMOVIE_ENDPOINT, data, config);
    if(resp.status == 201){
        console.log("--------pelicula creada-----")
        console.log(resp.status)
        console.log(resp.data);
        return {status:true, data:resp.data}
    }
    console.log(resp.data);
    return {status:false, data:resp.data}

}





