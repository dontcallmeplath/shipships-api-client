export const getResourceList = (resource) => {
  return fetch(`http://localhost:8000/${resource}`).then((res) => {
    return res.json();
  });
};

export const getSpecificResource = (resource, id) => {
  return fetch(`http://localhost:8000/${resource}/${id}`).then((res) => {
    return res.json();
  });
};

export const editResource = (resource, object, id) => {
  return fetch(`http://localhost:8000/${resource}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
};
