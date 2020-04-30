import ApiHelper from "../../../data/helper/ApiHelper";

export default async function getEpisodesByShowId(showId) {
  return await ApiHelper.get(`http://api.tvmaze.com/shows/${showId}/episodes`);
}
