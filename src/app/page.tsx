import axios from "axios";
import Link from "next/link";

export default async function HomePage() {
  const apiKey = process.env.NEXT_PUBLIC_TDM_API_KEY;
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
  const movies = response.data.results;

  return (
    <div className="w-full h-full p-5">
        {
          movies.map((movie: any) => {
            return (
              <div className="w-full flex items-start justify-center p-5 bg-electricblue rounded-lg" key={movie.id}>
                <div className="w-1/2 p-2 mt-12">
                  <h1 className="text-4xl font-extrabold mb-4">{movie.title}</h1>
                  <p className="text-lg text-justify mb-2">{movie.overview}</p>
                  <p className="text-lg">Rating: {movie.vote_average.toFixed(2)}</p>
                  <Link href={`/watch/${movie.id}`} key={movie.id}>
                    <button className="px-4 py-2 bg-brightred rounded-md mt-8 cursor-pointer">Watch Now</button>
                  </Link>
                </div>
                <div className="w-1/2 m-4">
                  <img className="w-1/2 rounded-md object-cover place-self-center" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
              </div>
            );
          })
        }
        <h1 className="text-3xl font-[Realce]">Popular Movies</h1>
    </div>
  );
}