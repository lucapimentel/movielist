import ApiHelper from "../../../data/helper/ApiHelper";

export default async function getShowById(showId) {
  return await ApiHelper.get(`http://api.tvmaze.com/shows/${showId}?embed=crew`);
}
