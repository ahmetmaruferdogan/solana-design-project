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
import MilestoneTimeline from'../page_components/MilestoneTimeline'

const Milestones = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>MILESTONES</strong>
          </CCardHeader>
          <CCardBody> 
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 1 }}>
                <MilestoneTimeline/>
              </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Milestones
