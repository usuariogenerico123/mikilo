import axios from "axios"
import { movies } from "./MoviesData"


export function GetByGenre(genre){
    let moviess = movies
    let jijo = [];
    
    moviess.forEach(v => {

        if(v.genre.includes(genre)){
            jijo.push(v);
        }
    })
    

    return jijo
}


export async function GetByGennre(genre){
    const url = `https://ebd7d2064044bc30-135-237-130-227.serveousercontent.com/api/movies/genre/${genre}`
    let resp = await axios.get(url)
    return resp
}