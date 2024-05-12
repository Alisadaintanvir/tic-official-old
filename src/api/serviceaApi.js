import { API } from "../config";

const serviceaApi = () => {
  const getService = () => {
    return fetch(`${API}/service/bycat`).then((res) => res.json());
  };

  const serviceCategory = () => {
    return fetch(`${API}/servicecategories.json`).then((res) => res.json());
  };

  return { getService, serviceCategory };
};

export default serviceaApi;
