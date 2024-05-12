import { API } from "../config";

const courseApi = () => {
  const getCourse = () => {
    return fetch(`${API}/course`).then((res) => res.json());
  };

  const getAllCourse = () => {
    return fetch(`${API}/courses.json`).then((res) => res.json());
  };

  const getCourseBySlug = (slug) => {
    return fetch(`${API}/course/details/${slug}`).then((res) => res.json());
  };
  return { getCourse, getCourseBySlug, getAllCourse };
};

export default courseApi;
