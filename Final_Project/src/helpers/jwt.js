import decode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("accessToken", token);
}

function parse(accessToken) {
  if (!accessToken) {
    return {
      valid: false,
      payload: null,
    };
  }

  const decoded = decode(accessToken);
  const currentTime = Date.now() / 1000;

  return {
    valid: decoded.exp > currentTime,
    payload: decoded.payload,
  };
}
export { parse, setToken };
