import { apiSlice } from "./apiSlice";

const SONG_URL = '/api/songs'

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
        getAllMusic: builder.mutation({
            query: () => ({
                url: `${SONG_URL}`,
                method: 'GET',
            })
        }),
        getAllAlbum: builder.mutation({
            query: () => ({
                url: `${SONG_URL}/albums`,
                method: 'GET'
            })
        }),
        getAllArtist: builder.mutation({
            query: () => ({
                url: `${SONG_URL}/artists`,
                method: 'GET'
            })
        })
    })
})

export const { useAddMusicMutation, useAddAlbumMutation, useAddArtistMutation, useGetAllMusicMutation, useGetAllAlbumMutation, useGetAllArtistMutation } = songApiSlice