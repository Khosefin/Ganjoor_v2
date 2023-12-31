import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sliceState, userInfo } from "@/lib/types";

export const getUser = createAsyncThunk(
  "User/login",
  async (postData: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api.ganjoor.net/api/users/login",
        postData
      );
      console.log("Login successful");
      return response.data as userInfo;
    } catch (error) {
      throw rejectWithValue(error);
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
    isRemember: true,
    status: null,
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
    setRemember: (state, action) => {
      state.isRemember = action.payload as boolean;
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
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        if (state.isRemember) {
          localStorage.setItem("userInfo", JSON.stringify(action.payload));
        }
        state.status = "verified";
        state.loading = false;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "rejected";
        if (action.payload.code === "ERR_BAD_REQUEST") {
          state.error = "اطلاعات وارد شده صحیح نمیباشد..!";
        }
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
  setRemember,
  setUserInfo,
  SetLogout,
} = poetsSlice.actions;

export const store = configureStore({
  reducer: {
    poets: poetsSlice.reducer,
  },
});
