import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/use-http";

const auth = createAsyncThunk("auth/register", async ({ data }) => {
  const { request } = useHttp();
  return await request({ method: "POST", url: "/signup/", data });
});

export { auth };
