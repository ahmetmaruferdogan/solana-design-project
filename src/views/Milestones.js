import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Milestones = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>MILESTONES</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use the <code>CRow</code> component and set{' '}
              <code>&#123;xs|sm|md|lg|xl|xxl&#125;=&#123;&#123; cols: * &#125;&#125;</code> property
              to control how many grid columns (wrapped around your cards) you show per row. For
              example, here&#39;s <code>xs=&#123;&#123;cols: 1&#125;&#125;</code> laying out the
              cards on one column, and <code>md=&#123;&#123;cols: 1&#125;&#125;</code> splitting
              four cards to equal width across multiple rows, from the medium breakpoint up.
            </p>
            <DocsExample href="components/card/#grid-cards">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Milestones
