import React, {useState, useEffect} from 'react';
import FormationSelector from './FormationSelector/FormationSelector';
import {FORMATION_ONE, FORMATION_TWO, FORMATION_THREE, FORMATION_FOUR} from './Formations/Formations';
//import individual formations here.


const Formation = ({data, desiredFormation, callbackfn}) => {
  const retrieveFormation = () => {
    switch(desiredFormation){
      case '4-3-3':
        return <FORMATION_ONE data={data}/>
      case '4-4-2':
        return <FORMATION_TWO data={data}/>
      case '4-5-1':
        return <FORMATION_THREE data={data}/>
      case '5-4-1':
        return <FORMATION_FOUR data={data}/>
      default:
        return <FORMATION_ONE data={data}/>
    }
  }

  return(
    <div>
      <FormationSelector callbackfn={callbackfn} />
      {retrieveFormation()}
    </div>
  );
}

export default Formation;