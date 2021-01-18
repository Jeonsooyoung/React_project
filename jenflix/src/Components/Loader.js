import React from "react"
import styled from "styled-component"

const Container = styled.div`
    height:100vh;
    width:100vw,
    display:flex;
    justify-content:center;
`

export default () => <Container><span role="img" aria-label="loading">clock</span></Container>