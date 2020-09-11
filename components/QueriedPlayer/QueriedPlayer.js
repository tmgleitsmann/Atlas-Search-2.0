import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {assignPlayer} from '../../redux/actions/playerDataActions';
import {resetPlayer} from '../../redux/actions/selectPlayerActions';
import {updateTeam} from '../../redux/actions/playerActions';
import {postPlayers} from '../../ApiRoutes';
import axios from 'axios';

import './QueriedPlayer.styles.scss';

const QueriedPlayer = ({playerData, activeObj, history, assignPlayer, updateTeam, resetPlayer}) => {
  //console.log(playerData);
  const stars = Math.floor(Number(playerData.Skill.$numberInt)/80);
  const defense = Math.ceil(Number(playerData.Defending.$numberInt)/3);

  const pushPlayer = () => {
    const playerObj = {
        name: playerData.Name,
        country: playerData.Country,
        club: playerData.Club,
        position: playerData.Position,
        overall: playerData.Overall.$numberInt,
        imageUrl: playerData.Photo,
        shooting: playerData.Finishing.$numberInt,
        dribbling: playerData.Dribbling.$numberInt,
        passing: playerData.Passing.$numberInt,
        physicality: playerData.Strength.$numberInt,
        defending: defense,
        skill: stars,
        foot: playerData.Foot[0],
        pace: playerData.Speed.$numberInt,
        id: playerData.ID.$numberInt
    }

    if(activeObj.active){
      updateTeam(playerObj, activeObj.cardId);
      axios.post(`${postPlayers}?ID=${playerObj.id}&value=${activeObj.cardId}`);
      resetPlayer();
      history.push('build-team');
    }
    else{
      assignPlayer(playerObj);
      history.push('build-team');
    }
  }

  const handleImgError = e => {
    e.target.src = "../images/player.png"
  }

  return(
    <div className='player-ind-wrapper' onClick={pushPlayer}>
      <div className='player-ind-text'>
        <div className='player-ind-header'>
          <span>{playerData.Name}</span>
          <img style={{height:'48px', width:'48px'}}src={playerData.Photo} onError={handleImgError}/>
        </div>
        <div className='player-ind-body-overall'>
          <div className='player-ind-body-col1'>
            <span>Overall: {playerData.Overall.$numberInt}</span>
            <span>Club: {playerData.Club}</span>
            <span>Country: {playerData.Country}</span>
            <span>Position: {playerData.Position.reduce((accumulator, currentValue) => {return accumulator+' '+currentValue}, ' ')}
            </span>
            <span>Foot: {playerData.Foot}</span>
            <span>Skill: {stars}</span>
          </div>
          <div className='player-ind-body-col2'>
            <span>Pace: {playerData.Speed.$numberInt}</span>
            <span>Shooting: {playerData.Finishing.$numberInt}</span>
            <span>Dribbling: {playerData.Dribbling.$numberInt}</span>
            <span>Passing: {playerData.Passing.$numberInt}</span>
            <span>Defending: {defense}</span>
            <span>Strength: {playerData.Strength.$numberInt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
    assignPlayer: playerObj => dispatch(assignPlayer(playerObj)),
    resetPlayer: () => dispatch(resetPlayer()),
    updateTeam: (playerObj, cardId) => dispatch(updateTeam(playerObj, cardId))
  }
}
const mapStateToProps = (state, props) => {
  return{
    activeObj: state.selectPlayer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QueriedPlayer));