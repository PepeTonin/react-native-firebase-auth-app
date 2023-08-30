import axios from "axios";

const AUTH_ENDPOINT = "https://identitytoolkit.googleapis.com/v1/accounts:";

const API_KEY = "AIzaSyAaL05J2WNkuVRy_bcqov3H8mOpZB9pO2Y";

async function authenticate(mode, email, password) {
  const url = `${AUTH_ENDPOINT}${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
