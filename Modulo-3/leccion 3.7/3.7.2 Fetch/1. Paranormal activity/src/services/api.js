const callToApi = () => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      const result = () => {
        console.log("data", data);
      };
      return result;
    });
};

export default callToApi;
