import React from 'react';
import { useRecoilValue } from 'recoil';
import CreatorInfoState from '../../CreatorInfoState';
import './banner.css'

const Banner = (props) => {
  const text = useRecoilValue(CreatorInfoState);
    return (
      <div className="banner">
        <img className='banner__img' src={text.campaigns[0].banner}/>
      </div>
    );
  };

export default Banner;
