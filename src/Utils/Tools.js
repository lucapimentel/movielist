export default function formatUrlQuery(url, param, query) {
    let urlParams = new URLSearchParams();
    urlParams.append(param, query.toString());
  
    let parametizedUrl = query !== "" ? `${url}?${urlParams}` : url;
    return parametizedUrl;
  }
