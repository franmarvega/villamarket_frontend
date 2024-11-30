import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { helloApi } from './helloService'

// Acción asíncrona para llamar a una API
export const getItems = createAsyncThunk('example/getItems', async (_, { rejectWithValue }) => {
  try {
    const response = await helloApi()
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Error inesperado')
  }
});

const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {}, // Puedes añadir acciones adicionales si las necesitas
  extraReducers: (builder) => {
    builder
    .addCase(getItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getItems.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default helloSlice.reducer;
