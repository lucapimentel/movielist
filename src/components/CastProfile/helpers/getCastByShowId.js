import ApiHelper from "../../../data/helper/ApiHelper";

export default async function getCastByShowId(showId) {
  return await ApiHelper.get(`http://api.tvmaze.com/shows/${showId}/cast`);
}
