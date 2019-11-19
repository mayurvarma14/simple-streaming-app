import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streams from "../apis/streams";

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const createStream = values => async dispatch => {
  const response = await streams.post("/streams", values);
  dispatch({ type: CREATE_STREAM, payload: response.data });
};
