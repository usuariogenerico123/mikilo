import axios from "axios";
import { MOVIES_ENDPOINT } from "./config";





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

    const resp = await axios.post(MOVIES_ENDPOINT, data, config);
    if(resp.status == 201){
        console.log("--------pelicula creada-----")
        console.log(resp.status)
        //console.log(resp.data);
        return {status:true, data:resp.data}
    }
    console.log(resp.data);
    return {status:false, data:resp.data}

}

export async function GetItems(){
    const bearer = localStorage.getItem("bearer");
    const config = {
        headers: {
            Authorization:`Bearer ${bearer}`
            }
        }

    const resp = await axios.get(MOVIES_ENDPOINT, config);
    if(resp.status == 200){
        return {status:true, data:resp.data};
    }
    return {status:false, data:resp.data};
    
}


export async function UpdateItem(movie){
    const data = {
        id: movie.id,
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
}


