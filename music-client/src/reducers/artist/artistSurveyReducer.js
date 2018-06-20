import types from 'constants/actionTypes'
import initState from 'store/initState';
const artistSurvey=(init=initState.artist.artistSurvey,action)=>{
    if(action.type==types.artist.ARTIST_SURVEY){
        return action.payload
    }
    return init;
}
export default artistSurvey