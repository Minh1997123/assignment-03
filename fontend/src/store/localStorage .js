export const getLocalStorage = function (key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const setLocalStorage = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = function (key) {
  localStorage.removeItem(key);
};
