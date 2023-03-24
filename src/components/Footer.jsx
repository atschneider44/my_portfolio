import React, { Component } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";
import { Icon } from 'react-icons-kit';
import {mapMarker} from 'react-icons-kit/fa/mapMarker';
import {ic_alternate_email} from 'react-icons-kit/md/ic_alternate_email';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {star} from 'react-icons-kit/feather/star'

import {instagram} from 'react-icons-kit/feather/instagram'

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className='main-footer-section'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              
              <h6 className='text-uppercase fw-bold mb-4'>
              <Icon icon={star}></Icon>
                Anna-Theresa Schneiders' Portfolio
              </h6>
              <p>
                
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='/individualproject' className='text-reset'>
                  Individual Project
                </a>
              </p>
              <p>
                <a href='/groupproject' className='text-reset'>
                  Group Project
                </a>
              </p>
              <p>
                <a href='/internationalproject' className='text-reset'>
                  International Project
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
            </MDBCol>

          

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
            
              <Icon icon={mapMarker} color='secondary' className='me-2'/>
                Based in Rotterdam, Netherlands
              </p>
              <p>
                <Icon icon={ic_alternate_email} className='me-2'/>
                at.schneider44@gmail.com
              </p>
              <p>
              <Icon icon={ic_alternate_email} className='me-2'/>
                433651@student.fontys.nl
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
          <Icon icon={linkedinSquare} />
          </a>
          <a href='' className='me-4 text-reset'>
            <Icon icon={githubSquare} />
          </a>
          <a href='' className='me-4 text-reset'>
          <Icon icon={instagram} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Anna-Theresa Schneider
        </a>
      </div>
    </MDBFooter>
    );
  }
}
