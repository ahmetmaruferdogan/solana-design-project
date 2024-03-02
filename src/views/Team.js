import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import '../scss/style.scss'
import Yasin from '../images/Yasin.svg';
import Maruf from '../images/Maruf.svg';
import Javid from '../images/Javid.svg';
import Serkan from '../images/Serkan.svg';
import Block from "../components/block-components/Block";

const Team = () => {
  return (
    <CRow>
      <CCol xs={12} xl={12}>
        <CCard className="mb-lg-5">
          <CCardHeader>
            <strong>PROJECT TEAM</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm={6}>
                <Block
                  block={1}
                  nonce={247954}
                  data={"Ahmet Maruf Erdoğan"}
                  img={Maruf}
                  prev={"0000000000000000000000000000000000000000000000000000000000000000"}
                  hash={"0000000000000000000000000000000000000000000000000000000000000000"}
                />
              </CCol>
              <CCol sm={6}>
                <Block
                  block={2}
                  nonce={247954}
                  data={"Javid Guliyev"}
                  img={Javid}
                  prev={"0000000000000000000000000000000000000000000000000000000000000000"}
                  hash={"0000000000000000000000000000000000000000000000000000000000000000"}
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm={6}>
                <Block
                  block={3}
                  nonce={247954}
                  data={"Serkan Karagöz"}
                  img={Serkan}
                  prev={"0000000000000000000000000000000000000000000000000000000000000000"}
                  hash={"0000000000000000000000000000000000000000000000000000000000000000"}
                />
              </CCol>
              <CCol sm={6}>
                <Block
                  block={4}
                  nonce={247954}
                  data={"Yasin Şimşek"}
                  img={Yasin}
                  prev={"0000000000000000000000000000000000000000000000000000000000000000"}
                  hash={"0000000000000000000000000000000000000000000000000000000000000000"}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Team
