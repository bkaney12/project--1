import { http, http_com } from "../../service/axios-config";

export const createWork = (work) => {
  return http.post("", work);
};
export const deleteWork = (id) => {
  return http.delete(`${id}`);
};

export const editWork = (work) => {
  return http.patch(`${work.id}`, work);
};

export const createComment = (comment) => {
  return http_com.post("", comment);
};
