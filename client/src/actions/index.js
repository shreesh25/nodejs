import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () =>
  async function (dispatch) {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const submitTask = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/tasks", values);
  history.push("/tasks");
  dispatch({ type: FETCH_USER, payload: res.data });
};
