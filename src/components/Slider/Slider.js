import React, {useState} from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Slider.styles.scss';

const SliderComponent = ({data}) => {

  const changeSliderValues = (event) => {
    console.log(event);
    console.log(data);
    data.callbackFn(event, data.attribute);
  }

  return(
    <div>
      <form>
        <div>
          <span className='slider-span'>{data.minValue} - {data.maxValue}</span>
          <Range
              min={1} 
              max={99} 
              step={1} 
              defaultValue={[1, 99]} 
              value={[data.minValue, data.maxValue]} 
              onChange={(e) => changeSliderValues(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default SliderComponent;