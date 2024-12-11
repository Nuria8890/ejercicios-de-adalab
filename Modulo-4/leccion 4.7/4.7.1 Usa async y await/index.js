/* Rescribir este código usando async/await en vez de .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
*/

const loadJson = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  if (response.status == 200) {
    return data;
  } else {
    throw new Error(response.status);
  }
};

loadJson("https://javascript.info/no-such-user.json");
