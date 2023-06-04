import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

const fetchUsers = () => API.get("/users");

const postUser = (newUser) => API.post("/users/", newUser);

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await fetchUsers();
    return dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await postUser(user);
    return dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const reducers = (users = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...users, action.payload];
    default:
      return users;
  }
};
