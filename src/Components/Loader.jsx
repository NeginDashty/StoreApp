import React from 'react'
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';


const Loaderr=styled.div`
    width: 100%;
    text-align: center;
    height: 1000px;
    margin-top: 100px;
`

function Loader() {
  return (
    <>
    <Loaderr>
        <RotatingLines
          strokeColor="#fe5d42"
          strokeWidth="3"
          width="100"
          height="100"
          visible={true}
        />

    </Loaderr>
    </>
  )
}

export default Loader;