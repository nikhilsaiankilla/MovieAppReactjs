import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

// importing the wrapper and the logo from respective files 
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }

  const searchQueryHandler = (event) => {

    // executes when condition is true  
    if (event.key === 'Enter' && query.length > 0) {
      // navigates to the search page 
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false)
      }, 1000)
    }
  }

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie');
    } else if (type === 'tv') {
      navigate('/explore/tv');
    } else {
      navigate('/')
    }
    setMobileMenu(false);
  }

  const controlScrollBar = () => {
    if (window.screenY > 200) {
      if (window.screenY > lastScrollY && !mobileMenu) {
        setShow('hide')
      } else {
        setShow('show')
      }
      setLastScrollY(window.screenY)
    } else {
      setShow('top')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlScrollBar);
    return () => {
      window.removeEventListener('scroll', controlScrollBar)
    }
  }, [lastScrollY])
  return (
    <header className={`header ${mobileMenu ? "mobileView" : " "} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" onClick={() => navigationHandler('home')} />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler('movie')}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler('tv')}>Tv Shows</li>
          <li className="menuItem"><HiOutlineSearch onClick={openSearch} /></li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {
            mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />
          }
        </div>
      </ContentWrapper>
      {
        showSearch && <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input type="text" placeholder='Search for movie or tv show...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      }
    </header>
  );
};

export default Header;