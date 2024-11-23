const callToApi = (searchSerie) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      const series = data.map((serie) => {
        return serie.show;
      });
      const result = {
        name: series.name,
        genres: series.genres,
        image: series.image,
        summary: series.summary,
        url: series.url,
      };
      return result;
    });
};

export default callToApi;
