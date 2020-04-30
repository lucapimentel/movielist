import ApiHelper from "../../../data/helper/ApiHelper";

export default async function getShows() {
  return await ApiHelper.get("http://api.tvmaze.com/shows");
}
