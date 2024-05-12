import { API } from "../config";

const categoryApi = () => {
  const getCategori = () => {
    return fetch(`${API}/categories.json`).then((res) => {
      return res.json();
    });
  };

  return { getCategori };
};

export default categoryApi;
