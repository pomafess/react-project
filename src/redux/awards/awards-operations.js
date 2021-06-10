import AwardsService from './awards-service';
import { fetchAwardsRequest, fetchAwardsSuccess, fetchAwardsError } from './awards-actions';

const awardsService = new AwardsService();

export const fetchAwards = () => async dispatch => {
    dispatch(fetchAwardsRequest());
    try {
        const data = await awardsService.get('gift');
        console.log(data);
        dispatch(fetchAwardsSuccess(data.ruGifts))
    } catch (error) {
        dispatch(fetchAwardsError(error.message));
    }
}
export default fetchAwards;

