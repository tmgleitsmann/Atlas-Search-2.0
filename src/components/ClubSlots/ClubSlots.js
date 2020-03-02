import React from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {basicApiUrl} from '../../ApiRoutes';

const ClubSlots = ({title, imagePath, history}) => {

  const queryClubs = async() =>{
    const players = await axios.get(`${basicApiUrl}?arg=&natin=&club=${title}&foot=&pos=&lowEnd="1"&highEnd="99"`).then((req)=>req.data);
    history.push({
      pathname:'/players-retrieved',
      state: { players, }
    });
  }

  return(
    <div className='content'>
      <div className='wrapper'>
        <div className={`background imgwrapper`} onClick={()=>queryClubs()}>
          <img alt='' src={imagePath} />
          <span className='countryTitles'>{title.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ClubSlots);