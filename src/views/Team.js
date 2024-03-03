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
                  nonce={91676}
                  data={"Ahmet Maruf Erdoğan"}
                  img={Maruf}
                  prev={"0000000000000000000000000000000000000000000000000000000000000000"}
                  hash={"000001d622c0965ee814134d87b45f8de1069df90ba080df618ca5c4c16188d9"}
                />
              </CCol>
              <CCol sm={6}>
                <Block
                  block={2}
                  nonce={5537}
                  data={"Javid Guliyev"}
                  img={Javid}
                  prev={"000001d622c0965ee814134d87b45f8de1069df90ba080df618ca5c4c16188d9"}
                  hash={"000048ee1876f51b5f8ae05b42cded8157f701eee253609fc8653c2c3aab516e"}
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm={6}>
                <Block
                  block={3}
                  nonce={79933}
                  data={"Serkan Karagöz"}
                  img={Serkan}
                  prev={"000048ee1876f51b5f8ae05b42cded8157f701eee253609fc8653c2c3aab516e"}
                  hash={"000050b72a1fbb67737baa5b3f9ea1eb81a351df327b43b8db9eb4d71180fa0b"}
                />
              </CCol>
              <CCol sm={6}>
                <Block
                  block={4}
                  nonce={22372}
                  data={"Yasin Şimşek"}
                  img={Yasin}
                  prev={"000050b72a1fbb67737baa5b3f9ea1eb81a351df327b43b8db9eb4d71180fa0b"}
                  hash={"0000726898533cf60a534d67d581331465fde13fa95f22d44f73bd9c71073f87"}
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
