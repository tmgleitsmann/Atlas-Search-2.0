import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchComponent from '../../components/SearchComponents/SearchComponents';
import SubSearch from '../../components/SubSearch/SubSearch';
import imageList from '../../images/images';
import './Homepage.styles.scss';

const Homepage = () =>{
  const [images] = useState(imageList.items);
  console.log(images)
  return(
    <div className='overall'>
      <Header />
      <div className='wrapper'>
        {
          images.map(({...objectprops}, index) => (
            <SearchComponent key={index} {...objectprops} />
          ))
        }
      </div>
      <div className='sub-search'>
        <SubSearch />
      </div>
    </div>
  );
}

export default Homepage;