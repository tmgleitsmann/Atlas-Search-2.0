import axios from 'axios';
import {getPlayers} from '../../ApiRoutes';

export const updateTeam = (playerObj={}, cardId) => {
  return{
    type:'UPDATE_TEAM',
    cardId,
    payload:playerObj
  };
};

export const removePlayer = (cardId) => {
  return{
    type:'REMOVE_PLAYER',
    cardId
  }
};

export const preloadPlayers = () => {
  return (dispatch) => {
    return axios
    .get(getPlayers)
    .then((req) => {
        req.data.map((player) =>{
            player.value.$numberLong = Number(player.value.$numberLong);
            dispatch(updateTeam({
              imageUrl:player.Photo,
              name:player.Name,
              overall:player.Overall.$numberInt,
              club:player.Club,
              country: player.Country,
              position: player.Position,
              shooting: player.SHO.$numberInt,
              dribbling:player.DRI.$numberInt,
              passing:player.PAS.$numberInt,
              phsyicality:player.PHY.$numberInt,
              defending:player.DEF.$numberInt,
              pace:player.PAC.$numberInt,
              foot:player.Foot.$numberInt,
              skill:Math.floor(player.Skill.$numberInt/80)
            }, player.value.$numberLong));
            return true;
        });
    })
    .catch((res) => {return Promise.reject(res);});
  }
};


