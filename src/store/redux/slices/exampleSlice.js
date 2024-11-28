import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import villaMarketApi from '@/utils/apiEndpoint'

// Acción asíncrona para llamar a una API
export const getItems = createAsyncThunk('example/getItems', async (_, { rejectWithValue }) => {
  console.log('Inicio slice')
  try {
    console.log('antes de la api')
    console.log(villaMarketApi)
    const response = await villaMarketApi.get('/hello/')
    console.log(response.data)
    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

const exampleSlice = createSlice({
  name: 'example',
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

export default exampleSlice.reducer;
