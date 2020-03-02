import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import StarBlock from '../StarBlock/StarBlock';
import SliderComponent from '../Slider/Slider';
import CustomButton from '../Button/Button';
import './SubSearch.styles.scss';
import {basicApiUrl} from '../../ApiRoutes';


const SubSearch = ({history}) => {

  const [starsSelected, setStars] = useState(1);
  const [countrySelected, setCountry] = useState('');
  const [clubSelected, setClub] = useState('');
  const [positionSelected, setPosition] = useState('');
  const [minOverall, setMinOverall] = useState(1);
  const [maxOverall, setMaxOverall] = useState(99);

  const positionCheck = (playerPositions) =>{
    switch(positionSelected){
      case 'Forward':
        if(playerPositions.includes('ST') || playerPositions.includes('CF') || playerPositions.includes('LW') || playerPositions.includes('RW')){
          return 'Forward';
        }
      case 'Midfielder':
        if(playerPositions.includes('CAM') || playerPositions.includes('CM') || playerPositions.includes('LM') || playerPositions.includes('RM')){
          return 'Midfielder';
        }
      case 'Defender':
        if(playerPositions.includes('CB') || playerPositions.includes('LB') || playerPositions.includes('RB') || playerPositions.includes('LWB') 
          || playerPositions.includes('RWB')){
            return 'Defender';
        }
      case 'Goalkeeper':
        if(playerPositions.includes('GK')){
          return 'Goalkeeper';
        }
      default:
        return '';
    }
  }


  const quickSubmit = async() => {
    //will need to filter by position selected & stars selected
    console.log(positionSelected);
    const players = await axios.get(`${basicApiUrl}?arg=&natin=${countrySelected}&club=${clubSelected}&foot=&pos=&lowEnd=${minOverall}&highEnd=${maxOverall}`).then((req)=>req.data);
    const filtered = players.filter(player=>{
      if(starsSelected*80 <= player.Skill.$numberInt && positionSelected === positionCheck(player.Position)){
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
  const sliderCallback = (value, attribute) => {
    setMinOverall(value[0]);
    setMaxOverall(value[1]);
  }

  const assignFromForm = (event, value) => {
    switch(value){
      case 'countries':
        return setCountry(event.target.value);
      case 'clubs':
        return setClub(event.target.value);
      case 'positions':
        return setPosition(event.target.value);
      default:
        return;
    }
  }

  const resetAll = () => {
    window.location.reload();
  }

  return(
    <div className='quicksearch'>
      <span className='description' style={{color:'white', textDecoration:'underline'}}>Quickly Filter Attributes</span>
      <div className='attributes'>
        <div className='column1'>
          <span>Position</span>
            <form>
              <select onChange={(e) => assignFromForm(e, 'positions')} className="select-css">
                <option selected='selected' disabled>Select a Position</option>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
              </select>
              <i className="far fa-futbol"></i>
            </form>


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
          <span>Skill Moves</span>
          <StarBlock data={{changeStars:starsCallback}}className='starblock'/>
        </div>
        <div className='column3'>
          <span>Overall</span>
            <SliderComponent data={{minValue:minOverall, maxValue:maxOverall, callbackFn:sliderCallback, attribute:'Overall'}} />
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