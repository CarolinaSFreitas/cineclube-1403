import MovieItem from "./components/MovieItem";
import Search from "./components/Search";

export default function Home() {

  const movie = {
    id: 1,
    titulo: "Hereditário",
    genero: "Terror",
    preco: 12,
    duracao: 126,
    foto: "https://m.media-amazon.com/images/S/pv-target-images/6cd55bc1b57fe5325cb9282beafeed33f7afd1b84587ace542199387eafbec21.jpg"
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Search />

      <h1 className="my-3 mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lançamentos de Filmes: <span className="underline underline-offset-3 decoration-8 decoration-red-400 dark:decoration-red-500">Direto do Cinema</span></h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        <MovieItem movie={movie} />
        <MovieItem movie={movie} />
        <MovieItem movie={movie} />
        <MovieItem movie={movie} />
        <MovieItem movie={movie} />
        <MovieItem movie={movie} />
      </div>

    </div>

  );
}
