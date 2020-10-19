import React from 'react';
import "../styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';


function Header() {
    return (
        <div className="header">
            <img 
                className="header__icon"
                src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-512.png" 
                alt=""
            />
            <div className="header__center">
                <input 
                name="searchInput"
                type="text" 
                placeholder="Start your search"
                />
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Become a host</p>

                <div className="header__rightIconBUttons">
                     <LanguageIcon/>
                    <ExpandMoreIcon/>
                </div>
                <div className="header__rightAvatar">
                    <DehazeIcon/>
                    <Avatar/>
                </div>

            </div>
        </div>
    )
}

export default Header
