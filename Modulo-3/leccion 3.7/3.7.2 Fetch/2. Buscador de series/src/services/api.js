const callToApi = (searchSerie) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      const series = data.map((serie) => {
        const serieData = {
          id: serie.show.id,
          name: serie.show.name,
          genres: serie.show.genres,
          image: serie.show.image,
          summary: serie.show.summary,
          url: serie.show.url,
        };
        return serieData;
      });
      return series;
    });
};

export default callToApi;
