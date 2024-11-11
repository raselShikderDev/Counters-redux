import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./getPost"

const initialState = {
  posts: [],
  isLoading: false,
  isEror: false,
  error: null,
}

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const posts = await getPosts()
  return posts
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isEror = false;
      state.isLoading = true;
    })
      .addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    })
      .addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isEror = false;
      state.error = action.error?.message;
  })
  }
})

export default postSlice.reducer