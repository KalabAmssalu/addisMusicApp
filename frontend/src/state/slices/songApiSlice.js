import { apiSlice } from "./apiSlice";

const SONG_URL = '/api/songs';

export const songApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addMusic: builder.mutation({
            query: (data) => ({
                url: `${SONG_URL}`,
                method: 'POST',
                body: data
            })
        }),
        addAlbum: builder.mutation({
            query: (data) => ({
                url: `${SONG_URL}/albums`,
                method: 'POST',
                body: data
            })
        }),
        addArtist: builder.mutation({
            query: (data) => ({
                url: `${SONG_URL}/artists`,
                method: 'POST',
                body: data
            })
        }),
        getAllMusic: builder.query({
            query: () => ({
                url: `${SONG_URL}`,
                method: 'GET',
            })
        }),
        getMusicById: builder.query({
            query: (id) => ({
                url: `${SONG_URL}/${id}`,
                method: 'GET',
            })
        }),
        getAllAlbum: builder.query({
            query: () => ({
                url: `${SONG_URL}/albums`,
                method: 'GET'
            })
        }),
        getAllArtist: builder.query({
            query: () => ({
                url: `${SONG_URL}/artists`,
                method: 'GET'
            })
        }),
        getAllStatistics: builder.query({
            query: () => ({
                url: '/api/stat',
                method: 'GET'
            })
        }),
        deleteArtist: builder.mutation({
            query: (id) => ({
                url: `${SONG_URL}/artists/${id}`,
                method: 'DELETE'
            })
        }),
        deleteMusic: builder.mutation({
            query: (id) => ({
                url: `${SONG_URL}/${id}`,
                method: 'DELETE'
            })
        }),
        deleteAlbum: builder.mutation({
            query: (id) => ({
                url: `${SONG_URL}/albums/${id}`,
                method: 'DELETE'
            })
        }),
    })
});

export const {
    useAddMusicMutation,
    useAddAlbumMutation,
    useAddArtistMutation,
    useGetAllMusicQuery,
    useGetAllAlbumQuery,
    useGetAllArtistQuery,
    useGetMusicByIdQuery,
    useGetAllStatisticsQuery,
    useDeleteArtistMutation,
    useDeleteMusicMutation,
    useDeleteAlbumMutation,
} = songApiSlice;
