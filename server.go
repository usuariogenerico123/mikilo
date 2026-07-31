package main 
import(

	"net/http"
)


func main(){

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("./")))


	serve := &http.Server{
		Addr: ":3007",
		Handler: mux,
	}
	serve.ListenAndServe()
}