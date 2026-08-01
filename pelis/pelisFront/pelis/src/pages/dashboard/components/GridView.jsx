import { CardMovie } from "./CardMovie";

export function GridView({movies}){
    console.log(movies);
    return(
        <div id="gridView" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            { movies.map((m, i) => (
                <CardMovie movie={m}/>
            ))}
        </div>
    )
}