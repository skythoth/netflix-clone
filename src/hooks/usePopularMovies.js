import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
    return api.get('/movie/popular')
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['popular-movies'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data.results,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    })
}