import { faChrome, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Jumbotron, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetails.css'

const LeagueDetails = () => {
      const { id } = useParams()
      const [league, setLeague] = useState([]);
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
      const { strSport, strLeague, strCurrentSeason, intFormedYear, strGender, strCountry, strWebsite, strFacebook, strTwitter, strYoutube, strDescriptionEN, strFanart1, strFanart2, strFanart3, strFanart4, strBanner, strBadge, strPoster } = league
      const malePhoto = 'https://i.ibb.co/s5cWHnK/Rectangle-28.png'
      const femalePhoto = 'https://i.ibb.co/k585f4y/female.png'
      const isMale = true ? <Image src={malePhoto} fluid /> : <Image src={femalePhoto} fluid />
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setLeague(data.leagues[0]))
            //eslint-disable-next-line
      }, [])

      return (
            <div className='league-details'>
                  <img className="bg-image" src={strBanner} alt="" />
                  <Jumbotron fluid>
                  <img className='Banner' src={strBadge} alt="" />
                        <h2 className='league-title'>{strLeague}</h2>
                        <Container>
                              <Row>
                                    <Col>
                                          <img
                                                width={100}
                                                height={100}
                                                className="align-self-end mr-3"
                                                src={strPoster}
                                                alt="Generic placeholder"
                                          />
                                          <h3>Country: {strCountry}</h3>
                                          <h6>Sports Type: {strSport}</h6>
                                          <p>Current Session: {strCurrentSeason}
                                                <br />
                                          Formed in: {intFormedYear}
                                                <br />
                                                <p>League For: {strGender}
                                                      <br />
                                                </p>
                                          </p>
                                    </Col>
                                    <Col>
                                          {isMale}
                                    </Col>
                              </Row>

                              <p className="description">{strDescriptionEN}</p>
                              <h2 className='league-title'>Gallery</h2>
                              <img
                                    width={260}
                                    height={250}
                                    className="align-self-end mr-3"
                                    src={strFanart1}
                                    alt="Generic placeholder"
                              />
                              <img
                                    width={260}
                                    height={250}
                                    className="align-self-end mr-3"
                                    src={strFanart2}
                                    alt="Generic placeholder"
                              />
                              <img
                                    width={260}
                                    height={250}
                                    className="align-self-end mr-3"
                                    src={strFanart3}
                                    alt="Generic placeholder"
                              />
                              <img
                                     width={260}
                                     height={250}
                                    className="align-self-end mr-3"
                                    src={strFanart4}
                                    alt="Generic placeholder"
                              />
                        </Container>
                        <div className="links">
                        <FontAwesomeIcon icon={faChrome} />
                  <a href={strWebsite} alt=''>Website </a>
                  
                  <FontAwesomeIcon icon={faFacebook} />
                  <a href={strFacebook} alt=''> Facebook </a>
                  
                  <FontAwesomeIcon icon={faTwitter} />
                  <a href={strTwitter} alt=''> Twitter </a>
                  
                  <FontAwesomeIcon icon={faYoutube} />
                  <a href={strYoutube} alt=''> YouTube </a>
                        </div>
                        
                  <a href="https://sportsx.netlify.app" alt=''><Button variant="dark"><FontAwesomeIcon icon={faHome} /> Home</Button></a>
                  </Jumbotron>
                  
            </div>
      );
};

export default LeagueDetails;