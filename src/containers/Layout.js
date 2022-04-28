import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MenuMobile from './MenuMobile';
import MenuOptions from '../components/MenuOptions';
import WrapperComponent from '../hooks/useOutsideClickHandler';
import logo from '../assets/logos/rick_and_morty.png';
import '../styles/Layout.scss';

const Layout = ({children}) => {
  const [toggle, setToggle] = useState(false);
  const options = ['Locations', 'Episodes'];

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const handleResize = () => {
    const current = window.innerWidth;
    if (current > 700) {
      setToggle(false);
    }
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <header>
          <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="page logo" />
              </Link>
            </div>

            <MenuOptions options={options} className={"navbar-options"} />

            <WrapperComponent handleClick={setToggle}>
              <MenuMobile
                open={toggle}
                options={options}
                handleClick={setToggle}
              />
            </WrapperComponent>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </div>
      <aside id='aside'></aside>
      <div id='overlay'></div>
    </React.Fragment>
  );
}

export { Layout }