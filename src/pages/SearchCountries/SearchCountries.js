import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import imageList from '../../images/countries';
import CountrySlots from '../../components/CountrySlots/CountrySlots';
import SearchBar from '../../components/SearchBar/SearchBar';
import './SearchCountries.styles.scss';

const SearchCountries = () => {
  const [images, setImages] = useState(imageList.items);
  const [filterCountry, setFilterCountry] = useState('');

  const countryCallback = (value) => {
    setFilterCountry(value);
  }

  const reduced = images.reduce((filtered, option)=>{
    if (option.title.includes(filterCountry.toLowerCase())){
      filtered.push(option);
    }
    return filtered;
  }, []);
  
  return(
    <div className='countries-overall'>
      <Header />
      <div className='sp-sb'>
        <SearchBar callback={countryCallback} color={'red'}/>
      </div>
      <div className='wrapper'>
        {
          reduced.map(({...objectprops}, index) => (
            <CountrySlots key={index} {...objectprops} />
          ))
        }
      </div>
  </div>
  );
};

export default SearchCountries;