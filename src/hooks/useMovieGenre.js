import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchPopularMovies = () => {
    return api.get('/genre/movie/list')
}

export const useMovieGenreQuery = () => {
    return useQuery ({
        queryKey : ['movie-genre'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data.genres,
        staleTime: 1000 * 60 * 5,
    })
}