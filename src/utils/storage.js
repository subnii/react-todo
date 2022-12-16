export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : undefined;
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
