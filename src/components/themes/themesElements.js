import styled from "styled-components"

export const ThemesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${({isShowing})=> isShowing ? "100%":".4rem" };
    & {
        transform: scale(${({isShowing})=> isShowing ? "1":"0" });
        transition: transform 1s linear;
    }
    
    div{
        height: ${({isShowing})=> isShowing ? "100%":"0" };
        display: ${({isShowing})=> isShowing ? "block":"none" };
        text-align: center;
        width: 7rem;
        color: white;
        cursor: pointer;
        margin: 10px;
        &:hover {
            color: black;
    }
}
`