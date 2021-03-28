import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
      return (
            <div className='header-container'>
                  <Container>
                        <Row>
                              <Col>
                                    <h1 className='header'>Sports X</h1>
                              </Col>
                        </Row>
                  </Container>

            </div>
      );
};

export default Header;