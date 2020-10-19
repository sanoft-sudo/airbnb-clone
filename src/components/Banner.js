import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import "../styles/Banner.css";
import SearchDate from './SearchDate';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <SearchDate/>}
                <Button onClick={()=> setShowSearch(!showSearch)}                                  variant="outlined"     className="banner__searchButton" >Search Dates
                </Button>
            </div>
            <div className="banner__info">
                 <h1 className="banner__title">go near</h1>
                <p className="banner__text">Settle in  somewhere new. Discover stays to live, work, or just relax.</p>
                <button className="banner__button">Explore      nearby</button>
            </div>
           
        </div>
    )
}

export default Banner
