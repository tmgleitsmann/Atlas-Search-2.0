import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './CountrySlots.styles.scss'
import {basicApiUrl} from '../../ApiRoutes';

const CountrySlots = ({title, imagePath, history}) => {
  const queryCountries = async() =>{
    const players = await axios.get(`${basicApiUrl}?arg=&natin=${title}&club=&foot=&pos=&lowEnd="1"&highEnd="99"`).then((req)=>req.data);
    history.push({
      pathname:'/players-retrieved',
      state: { players, }
    });
  }


  return(
    <div className='content'>
      <div className='wrapper'>
        <div className={`background imgwrapper`} onClick={() =>queryCountries()}>
          <img alt='' src={imagePath.default} />
          <span className='countryTitles'>{title.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CountrySlots);