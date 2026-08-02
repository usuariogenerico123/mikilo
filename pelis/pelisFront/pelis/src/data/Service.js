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
    const url = `https://c958d589c21bc959-51-8-152-65.serveousercontent.com/api/movies/genre/${genre}`
    let resp = await axios.get(url)
    return resp
}