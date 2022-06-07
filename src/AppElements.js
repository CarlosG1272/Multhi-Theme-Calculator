import styled from "styled-components"; 
export const Container = styled.section`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    background-color: ${(props)=> props.theme.bodyBG};
    background-image: url(${props=> props.theme.bodyURL}) ; 
`