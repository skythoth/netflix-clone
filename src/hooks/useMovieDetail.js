import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieDetailQuery = (id) => {
    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => api.get(`/movie/${id}`),
        select: (result) => result.data,
        enabled: !!id,
    })
}

export const useMovieReviewsQuery = (id) => {
    return useQuery({
        queryKey: ['movie-reviews', id],
        queryFn: () => api.get(`/movie/${id}/reviews`),
        select: (result) => result.data.results,
        enabled: !!id,
    })
}

export const useMovieVideosQuery = (id) => {
    return useQuery({
        queryKey: ['movie-videos', id],
        queryFn: () => api.get(`/movie/${id}/videos`),
        select: (result) => result.data.results,
        enabled: !!id,
    })
}