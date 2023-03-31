import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchData = createAsyncThunk(
  'search/searchData',
  async (searchTerm) => {
    const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products?name=${searchTerm}`);
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;