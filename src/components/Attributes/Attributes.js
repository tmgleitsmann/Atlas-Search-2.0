import React, {useState} from 'react';
import SliderComponent from '../Slider/Slider';
import StarBlock from '../StarBlock/StarBlock';
import CustomButton from '../Button/Button';
import SelectForm from '../SelectForm/SelectForm';
import './Attributes.styles.scss';


const clubs = ['Arsenal FC', 'AS Roma','Atletico Madrid', 
  'FC Barcelona', 'FC Bayern Munich', 'Borrusia Dortmund', 'Chelsea FC', 'Inter Milan', 
  'Juventus', 'RB Leipzig', 'Liverpool', 'LOSC Lille', 'Olympique Lyon', 'Manchester City', 
  'Manchester United', 'Marseille', 'AC Milan', 'AS Monaco', 'Napoli', 'Sevilla', 'FC Shalke 04',
  'Real Madrid', 'AS Roma'];

const countries = ['Argentina', 'Austria', 'Brazil', 'Colombia', 'England', 'France', 'Germany',
  'Greece', 'Italy', 'Mexico', 'Netherlands', 'Poland', 'Portugal', 'Spain', 'USA'];

const positions = ['ST', 'CF', 'LF', 'RF', 'LW', 'RW', 'CAM', 'CM', 'LM', 'RM', 'CDM', 'LWB', 'LB',
  'RWB', 'RB', 'CB', 'GK'];

const Attributes = ({callback}) => {

  const [minOverall, setMinOverall] = useState(1);
  const [maxOverall, setMaxOverall] = useState(99);
  const [minPace, setMinPace] = useState(1);
  const [maxPace, setMaxPace] = useState(99);
  const [minDribbling, setMinDribbling] = useState(1);
  const [maxDribbling, setMaxDribbling] = useState(99);
  const [minShooting, setMinShooting] = useState(1);
  const [maxShooting, setMaxShooting] = useState(99);
  const [minPassing, setMinPassing] = useState(1);
  const [maxPassing, setMaxPassing] = useState(99);
  const [minDefending, setMinDefending] = useState(1);
  const [maxDefending, setMaxDefending] = useState(99);
  const [minPhysicality, setMinPhysicality] = useState(1);
  const [maxPhysicality, setMaxPhysicality] = useState(99);
  const [prefferedBoot, setPreferredBoot] = useState('');
  const [starsSelected, setStars] = useState(1);
  const [clubSelected, setClub] = useState('');
  const [countrySelected, setCountry] = useState('');
  const [exCountrySelected, setExCountry] = useState('');
  const [positionSelected, setPosition] = useState('');

  const starsCallback = (value) => {
    setStars(value)
  };

  const selectformCallback = (value, key) => {
    console.log(key);
    switch(key){
      case 'Clubs':
        return setClub(value);
      case 'In Countries':
        setExCountry('');
        return setCountry(value);
      case 'Ex Countries':
        setCountry('');
        return setExCountry(value)
      case 'Positions':
        return setPosition(value);
      default:
        return;
    }
  }

  const submitAttribs = () => {
    const callbackObj = {
      minOverall,
      maxOverall,
      minPace,
      maxPace,
      minDribbling,
      maxDribbling,
      minShooting,
      maxShooting,
      minPassing,
      maxPassing,
      minDefending,
      maxDefending,
      minPhysicality,
      maxPhysicality,
      prefferedBoot,
      starsSelected,
      clubSelected, 
      countrySelected,
      exCountrySelected,
      positionSelected
    };
    callback(callbackObj);
  }

  const resetAll = () => {
    window.location.reload();
  }

  const sliderCallback = (value, attribute) => {
    switch(attribute){
      case 'Overall':
        setMinOverall(value[0]);
        setMaxOverall(value[1]);
        return;
      case 'Pace':
        setMinPace(value[0]);
        setMaxPace(value[1]);
        return;
      case 'Dribbling':
        setMinDribbling(value[0]);
        setMaxDribbling(value[1]);
        return;
      case 'Shooting':
        setMinShooting(value[0]);
        setMaxShooting(value[1]);
        return;
      case 'Passing':
        setMinPassing(value[0]);
        setMaxPassing(value[1]);
        return;
      case 'Defending':
        setMinDefending(value[0]);
        setMaxDefending(value[1]);
        return;
      case 'Physicality':
        setMinPhysicality(value[0]);
        setMaxPhysicality(value[1]);
        return;
      default:
        return;
    }
  }

  return(
    <div className='attrib-overall'>
      <div className='attrib-container'>
        <div className='attrib-column1'>
          <span className='attrib-span'>Overall</span>  
          <SliderComponent className='attrib-slider' data={{minValue:minOverall, maxValue:maxOverall, callbackFn:sliderCallback, attribute:'Overall'}} />
          <span className='attrib-span'>Pace</span>
          <SliderComponent className='attrib-slider' data={{minValue:minPace, maxValue:maxPace, callbackFn:sliderCallback, attribute:'Pace'}} />
          <span className='attrib-span'>Dribbling</span>
          <SliderComponent className='attrib-slider' data={{minValue:minDribbling, maxValue:maxDribbling, callbackFn:sliderCallback, attribute:'Dribbling'}}/>
          <SelectForm listTitle={'Clubs'} values={clubs} callbackfn={selectformCallback}/>

        </div>
        <div className='attrib-column2'>
          <span className='attrib-span'>Shooting</span>  
          <SliderComponent className='attrib-slider' data={{minValue:minShooting, maxValue:maxShooting, callbackFn:sliderCallback, attribute:'Shooting'}} />
          <span className='attrib-span'>Passing</span>
          <SliderComponent className='attrib-slider' data={{minValue:minPassing, maxValue:maxPassing, callbackFn:sliderCallback, attribute:'Passing'}} />
          <span className='attrib-span'>Defending</span>
          <SliderComponent className='attrib-slider' data={{minValue:minDefending, maxValue:maxDefending, callbackFn:sliderCallback, attribute:'Defending'}} />
          <div className='countries-btns'>
            <SelectForm listTitle={'In Countries'} values={countries} callbackfn={selectformCallback}/>
            <SelectForm listTitle={'Ex Countries'} values={countries} callbackfn={selectformCallback}/>
          </div>
        </div>
        <div className='attrib-column3'>
          <span className='attrib-span'>Physicality</span>  
          <SliderComponent className='attrib-slider' data={{minValue:minPhysicality, maxValue:maxPhysicality, callbackFn:sliderCallback, attribute:'Physicality'}} />
          <span className='attrib-span'>Preferred Boot</span>
          <div className='boots'>
            <i onClick={()=>setPreferredBoot('Left')} className={`${prefferedBoot==='Left'? 'boot-toggled fas fa-angle-left' : 'fas fa-angle-left'}`}></i>
            <i onClick={()=>setPreferredBoot('Right')} className={`${prefferedBoot==='Right'? 'boot-toggled fas fa-angle-right' : 'fas fa-angle-right'}`}></i>
          </div>
          <span className='attrib-span'>Skill Moves</span>
          <StarBlock className='attrib-stars' data={{changeStars:starsCallback}}/>
          <div style={{marginTop:'-15px'}}>
            <SelectForm listTitle={'Positions'} values={positions} callbackfn={selectformCallback}/>
          </div>
        </div>
      </div>
      <div className='attrib-buttons'>
          <div onClick={resetAll}>
            <CustomButton text={'Reset'}/>
          </div>
          <div onClick={submitAttribs}>
            <CustomButton text={'Submit'}/>
          </div>
      </div>
    </div>

  );
};
export default Attributes;