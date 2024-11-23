const callToApi = () => {
  return fetch() // url de la api
    .then((response) => response.json())
    .then((data) => {
      const result = () => {
        // código
      };
      return result;
    });
};

export default callToApi;
