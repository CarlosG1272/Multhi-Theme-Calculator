import styled from "styled-components"

export const Container = styled.section`
    background-color: ${(props)=> props.theme.contactBarBG};
    svg{
        color: ${(props)=> props.theme.contactColor}
    }
`