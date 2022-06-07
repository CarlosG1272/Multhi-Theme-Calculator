import styled from "styled-components"

export const ThemesContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        display: ${({isShowing})=> isShowing ? "block":"none" };
        height: 3rem;
        text-align: center;
        width: 7rem;
        color: white;
        cursor: pointer;
        margin: 10px;
        &:hover {
            color: yellow;
    }
}
`