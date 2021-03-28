import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';
import './League.css';
import { useHistory } from 'react-router';

const League = (props) => {
      const { idLeague, strLeague, strSport, strLeagueAlternate } = props.league;
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
      const [image, setImage] = useState([]);
      const history = useHistory();
      const showLeagues = id => {
            history.push(`league/${id}`)
      }
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setImage(data.leagues[0]))
            //eslint-disable-next-line
      }, [])
      return (
            <div className="league-card">
                  <Container>
                        <Row>
                              <Col style={{padding:'0'}}>
                                    <Card className='card'>
                                          <Card.Img className='card-image' variant="top" src={image.strBadge} />
                                          <Card.Body>
                                                <Card.Title>{strLeague}</Card.Title>
                                                <Card.Text>
                                                      Sports Type: {strSport}
                                                      <br />
                                          League : {strLeagueAlternate}
                                                </Card.Text>
                                                <Button onClick={() => showLeagues(idLeague)} variant="info">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        </Row>
                  </Container>

            </div>


      );
};

export default League;