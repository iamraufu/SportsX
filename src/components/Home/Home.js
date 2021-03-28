import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';
import './Home.css'
import {Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
      const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
      const [league,setLeague] = useState([]);
      const image = 'https://i.ibb.co/dgtS2sM/Logo-Makr-66q1-DR.png'
      useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setLeague(data.leagues))
            //eslint-disable-next-line
      },[])
      return (
            <div>
                  <Nav className='nav'>
            <Nav.Item>
                  <Nav.Link href="/home"><img src={image} alt=""/></Nav.Link>
            </Nav.Item>
            </Nav>
                  <Header />
                  <div className="leagues">
                  {
                        league.map(lg => <League league={lg} key={lg.idLeague}></League>)
                  }
                  </div>
                  <button onClick={()=>window.scrollTo(0, 0)}><FontAwesomeIcon className='up' icon={faArrowUp} /></button>
            </div>
      );
};

export default Home;