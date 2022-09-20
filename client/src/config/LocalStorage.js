import { StringConstant } from "../assets/constants";

import jwtDecode from "jwt-decode";
import sign from "jwt-encode";

export function setAccessToken(token) {
  localStorage.setItem(StringConstant.TokenAccess, token);
}

export function getAccessToken() {
  return localStorage.getItem(StringConstant.TokenAccess);
}

export function removeAccessToken() {
  return localStorage.removeItem(StringConstant.TokenAccess);
}

export function setRefreshToken(token) {
  localStorage.setItem(StringConstant.TokenRefresh, token);
}

export function getRefreshToken() {
  return localStorage.getItem(StringConstant.TokenRefresh);
}

export function removeRefreshToken() {
  return localStorage.removeItem(StringConstant.TokenRefresh);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(StringConstant.TokenRefresh);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function setAccessConstants(token) {
  const secret = "secret";
  const jwt = sign(token, secret);
  localStorage.setItem(StringConstant.TokenAccessConstants, jwt);
}

export function getAccessConstants() {
  try {
    const jwt = localStorage.getItem(StringConstant.TokenAccessConstants);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function removeAccessConstants() {
  return localStorage.removeItem(StringConstant.TokenAccessConstants);
}

export default {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  getCurrentUser,
  removeAccessConstants,
};
