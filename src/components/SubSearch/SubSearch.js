import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import StarBlock from '../StarBlock/StarBlock';
import SliderComponent from '../Slider/Slider';
import CustomButton from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import SelectForm from '../SelectForm/SelectForm';
import Slider, { Range } from 'rc-slider';
import {getPlayers} from '../../autocomplete-script/soccer';
import 'rc-slider/assets/index.css';
import './SubSearch.styles.scss';
import {basicApiUrl, autocompleteApiUrl, fuzzyApiUrl, wildcardApiUrl} from '../../ApiRoutes';

const listValues = ['Basic', 'Autocomplete', 'Fuzzy Matching', 'Wildcard'];

const SubSearch = ({history}) => {

  const [starsSelected, setStars] = useState(1);
  const [countrySelected, setCountry] = useState('');
  const [clubSelected, setClub] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [urlString, setUrlString] = useState(basicApiUrl);

  const nameCallbackFn = (value, submit) =>{
    console.log(urlString);
    setPlayerName(value);
    if(submit){
      return quickSubmit();
    }
    if(urlString === autocompleteApiUrl){
      getPlayers(value, setPlayerName);
      console.log('past getplayers');
    }
    return;
  }

  const quickSubmit = async() => {
    if(urlString === autocompleteApiUrl){
      setUrlString(basicApiUrl);
    }
    const players = await axios.get(`${urlString}?arg=${playerName}&natin=${countrySelected}&club=${clubSelected}&foot=&pos=&lowEnd=&highEnd=`).then((req)=>req.data);
    const filtered = players.filter(player=>{
      if(starsSelected*80 <= player.Skill.$numberInt){
        return true;
      }
    })
    history.push({
      pathname:'/players-retrieved',
      state: { players:filtered }
    });
  }

  const starsCallback = (value) => {
    setStars(value)
  };

  const urlCallback = (urlValue) =>{
    switch(urlValue){
      case 'Basic':
        return setUrlString(basicApiUrl);
      case 'Autocomplete':
        return setUrlString(autocompleteApiUrl);
      case 'Fuzzy Matching':
        return setUrlString(fuzzyApiUrl);
      case 'Wildcard':
        return setUrlString(wildcardApiUrl);
      default:
        return setUrlString(basicApiUrl);
    }
  }

  const assignFromForm = (event, value) => {
    switch(value){
      case 'countries':
        return setCountry(event.target.value);
      case 'clubs':
        return setClub(event.target.value);
      default:
        return;
    }
  }

  const resetAll = () => {
    window.location.reload();
  }

  return(
    <div className='quicksearch'>
      <span className='description' style={{color:'white', fontSize:'26px'}}>PLAYER SEARCH</span>
      <div className='attributes'>
        <div className='column1'>
          <span>Country</span>
          <form>
              <select onChange={(e) => assignFromForm(e, 'countries')} className="select-css">
                <option selected='selected' disabled>Select a Country</option>
                <option>Germany</option>
                <option>France</option>
                <option>Italy</option>
                <option>Belgium</option>
                <option>Spain</option>
                <option>Portugal</option>
                <option>England</option>
                <option>Sweden</option>
                <option>USA</option>
                <option>Mexico</option>
                <option>Canada</option>
                <option>Brazil</option>
                <option>Argentina</option>
                <option>Columbia</option>
                <option>Ghana</option>
                <option>Cameroon</option>
                <option>Morocco</option>
              </select>
              <i className="far fa-flag"></i>
          </form>
        </div>
        <div className='column2'>
          <SearchBar namecallback={nameCallbackFn} color={'white'}/>
          <SelectForm listTitle={'Select API URL'} values={listValues} callbackfn={urlCallback}/>
          <span>Skill Moves</span>
          <StarBlock data={{changeStars:starsCallback}}className='starblock'/>
        </div>
        <div className='column3'>
          <span>Club</span>
            <form>
              <select onChange={(e) => assignFromForm(e, 'clubs')} className="select-css">
                <option selected='selected' disabled>Select a Club</option>
                <option>Bayern Munich</option>
                <option>Borussia Dortmund</option>
                <option>RB Leipzig</option>
                <option>Paris Saint Germain</option>
                <option>Lyon</option>
                <option>Marseille</option>
                <option>Juventus</option>
                <option>Roma</option>
                <option>Lazio</option>
                <option>Inter Milan</option>
                <option>AC Milan</option>
                <option>Manchester City</option>
                <option>Manchester United</option>
                <option>Arsenal</option>
                <option>Chelsea</option>
                <option>Liverpool</option>
                <option>Tottenham</option>
                <option>Real Madrid</option>
                <option>Barcelona</option>
                <option>Atletico Madrid</option>
              </select>
              <i className="fas fa-home"></i>
            </form>
        </div>
      </div>
      <div className='final-buttons'>
        <div onClick={resetAll}>
          <CustomButton text={'Reset'}/>
        </div>
        <div onClick={()=>quickSubmit()}>
          <CustomButton text={'Submit'}/>
        </div>
      </div>
    </div> 
  );
};

export default withRouter(SubSearch);