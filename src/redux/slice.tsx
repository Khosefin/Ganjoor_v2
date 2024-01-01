import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sliceState } from "@/lib/types";

export const getCaptcha = createAsyncThunk(
  "User/captcha",
  async () => {
    try {
      const response = await axios.get("https://api.ganjoor.net/api/users/captchaimage");
          return response.data; 
    } catch (error) {
    }
  }
);

const poetsSlice = createSlice({
  name: "poets",
  initialState: {
    poetName: null,
    centuryNum: null,
    userInfo: null,
    error: null,
    loading: false,
    status: null,
    captcha: null,
  } as sliceState,
  reducers: {
    setPoetsFilter: (state, action) => {
      state.poetName = action.payload as string;
    },
    setCenturyFilter: (state, action) => {
      state.centuryNum = action.payload as number;
    },
    setloading: (state, action) => {
      state.loading = action.payload as boolean;
    },
    setCaptcha: (state, action) => {
      state.captcha = action.payload as string;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    SetLogout: (state, action) => {
      localStorage.removeItem("userInfo");
      state.userInfo = null;
      state.isRemember = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCaptcha.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCaptcha.fulfilled, (state, action) => {
        state.captcha = action.payload;
        state.status = "verified";
        state.loading = false;
        state.error = null;
      })
      .addCase(getCaptcha.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "rejected";
        if (action.payload.code === "ERR_NETWORK") {
          state.error =
            "مشکل دربرقراری ارتباط، لطفا از وصل بودن اینترنت اطمینان حاصل نمایید";
        }
      });
  },
});

export const {
  setPoetsFilter,
  setCenturyFilter,
  setloading,
  setCaptcha,
  setUserInfo,
  SetLogout,
} = poetsSlice.actions;

export const store = configureStore({
  reducer: {
    poets: poetsSlice.reducer,
  },
});
