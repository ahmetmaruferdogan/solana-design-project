import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Blockchain = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>WHAT IS BLOCKCHAIN?</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <p className="text-medium-emphasis">
              A blockchain is a distributed database or ledger shared among a computer networks nodes. They are best
              known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record
              of transactions, but they are not limited to cryptocurrency uses. Blockchains can be used to make data in
              any industry immutable, the term used to describe the inability to be altered.
            </p>

            <p className="text-medium-emphasis">
              A blockchain consists of programs called scripts that conduct the tasks you usually would in a database:
              Entering and accessing information and saving and storing it somewhere. A blockchain is distributed,
              which means multiple copies are saved on many machines, and they must all match for it to be valid.
            </p>

            <strong>BLOCKCHAIN TRILLEMA BAHSEDILECEK</strong>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Blockchain
