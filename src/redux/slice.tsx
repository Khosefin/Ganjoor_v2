import { HomeOutlined } from "@ant-design/icons";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const poetsSlice = createSlice({
  name: "poets",
  initialState: {
    poetName: "",
    CenturyNum: "",
    Breadcrumb: [
      {
        href: "/",
        title: (
          <>
            <HomeOutlined />
            <span>صفحه ی اصلی</span>
          </>
        ),
      },
    ],
  },
  reducers: {
    setPoetsFilter: (state, action) => {
      state.poetName = action.payload;
    },
    setCenturyFilter: (state, action) => {
      state.CenturyNum = action.payload;
    },
    setBreadcrumb: (state, action) => {
      state.Breadcrumb = [...state.Breadcrumb, action.payload];
    },
  },
});

export const { setPoetsFilter, setCenturyFilter, setBreadcrumb } =
  poetsSlice.actions;

export const store = configureStore({
  reducer: {
    poets: poetsSlice.reducer,
  },
});
