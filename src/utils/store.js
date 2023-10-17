import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const Store= configureStore({
  reducer:{
    app:appSlice,
    search:searchSlice,
    Chat:ChatSlice, 

  },
});



export default Store;