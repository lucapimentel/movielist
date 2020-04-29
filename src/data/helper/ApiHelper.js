export default class ApiHelper {
  static async get(url, query = "") {
    let formatedUrl = formatUrlQuery(url, query);
    return fetchRequest("GET", formatedUrl);
  }
}

function formatUrlQuery(url, query) {
  let urlParams = new URLSearchParams();
  urlParams.append("q", query.toString());

  let parametizedUrl = query !== "" ? `${url}?${urlParams}` : url;
  return parametizedUrl;
}

async function fetchRequest(method, url) {
  const fetchRequest = fetch(url, { method });
  return fetchRequest
    .then((response) => handleErrors(response))
    .then((response) => handleJSON(response));
}

async function handleErrors(response) {
  if (response.ok) {
    return response;
  } else {
    throw response;
  }
}

async function handleJSON(response) {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    return response;
  }
}
