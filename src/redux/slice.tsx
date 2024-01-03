import { configureStore, createSlice } from "@reduxjs/toolkit";
import { sliceState } from "@/lib/types";

const poetsSlice = createSlice({
  name: "poets",
  initialState: {
    poetName: null,
    centuryNum: null,
  } as sliceState,
  reducers: {
    setPoetsFilter: (state, action) => {
      state.poetName = action.payload as string;
    },
    setCenturyFilter: (state, action) => {
      state.centuryNum = action.payload as number;
    },
  },
});

export const { setPoetsFilter, setCenturyFilter } = poetsSlice.actions;

export const store = configureStore({
  reducer: {
    poets: poetsSlice.reducer,
  },
});
