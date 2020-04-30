import ApiHelper from "../../../data/helper/ApiHelper";
import formatUrlQuery from "../../../Utils/Tools";

export default async function getShowsByQuery(query, queryValue) {
  const formatedUrl = formatUrlQuery("http://api.tvmaze.com/search/shows", query, queryValue);
  return await ApiHelper.get(formatedUrl);
}
