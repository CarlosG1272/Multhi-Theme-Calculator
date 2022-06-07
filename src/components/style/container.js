import styled from "styled-components"

export const MySection = styled.section`
background-color: rgb(32, 39, 49);
height: max-content;
margin: auto;
width: 100vh;
border: 15px solid ${props=> props.theme.heavyBorderSection}; // heavyBorderSection
outline: 1px solid ${props => props.theme.sectionBorder}; // sectionBorder
text-align: center;
color:${props => props.theme.sectionColor}; // sectionColor
`
export const MyDisplay = styled.div`
color: ${props => props.theme.displayColor}; //displayColor
background-color: ${props => props.theme.displayBG}; //displayBG
outline: 1px solid ${props => props.theme.displayBorder}; //displayBorder
`
export const MyButtonsContainer = styled.div`
  background-color: ${props => props.theme.buttonsContainerBG};
  background-image: ${props=> props.theme.buttonIMG}; // butttonsBG
`

export const MyButtonNumber = styled.button`
filter: drop-shadow(0 0 2px ${props => props.theme.buttonNumberBG}) contrast(2) brightness(2); // buttonNumberBG
color: ${props => props.theme.buttonNumberColor}; // buttonNumberColor
border: 1px solid ${props => props.theme.buttonNumberBorder};  // buttonNumberBorder
&:hover{
  background-color: ${props => props.theme.buttonNumberBG}; // buttonNumberBG
  filter: drop-shadow(0 0 5px ${props => props.theme.buttonNumberBG}) contrast(2) brightness(2); //buttonNumberBG
}
`


export const MyEqualsButton = styled.button`
filter: drop-shadow(0 0 2px ${props => props.theme.equalsButtonBG}) contrast(2) brightness(2); // equalsButtonBG
color: ${props => props.theme.equalsButtonColor}; //equalsButtonColor
border: 1px solid ${props => props.theme.equalsButtonBorder}; //equalsButtonBorder
background-color: transparent;
&:hover {
 background-color: ${props => props.theme.equalsButtonBG};
 filter: drop-shadow(0 0 5px ${props => props.theme.equalsButtonBG}) contrast(2) brightness(2);
 color: black;
}
`
export const ClearButtons = styled.button`
    color: ${props => props.theme.clearColor}; //clearColor
    border: 1px solid ${props => props.theme.clearBorder}; //clearBorder
    background-color: transparent; //clearBG
    filter: drop-shadow(0 0 2px ${props => props.theme.clearBG}) contrast(2) brightness(2);
    &:hover{
      cursor: pointer;
      color: black;
      background-color: ${props => props.theme.clearBG};
      filter: drop-shadow(0 0 5px ${props => props.theme.clearBG}) contrast(2) brightness(2);
    }
`

export const OperationButtons = styled.button`
    color: ${props => props.theme.operationColor}; // operationColor
    border: 1px solid ${props => props.theme.operationBorder}; // operationBorder
    background-color: transparent;
    filter: drop-shadow(0 0 2px ${props => props.theme.operationBG}) contrast(2) brightness(2); // operationBG
    &:hover {
      cursor: pointer;
      color: black;
      background-color: ${props => props.theme.operationBG};
      filter: drop-shadow(0 0 5px ${props => props.theme.operationBG}) contrast(2) brightness(2);
    }
`

export const MyInput = styled.input`
   width: 70%;
   height: 1em;
    font-size: .8em;
    margin-right: 20px;
    background-color: ${props=> props.theme.inputBG}; //inputBG
    text-align: end;
    border: .5px solid ${props=> props.theme.inputBorder}; //inputBorder
    color: ${props=> props.theme.inputColor};
`

export const MyTags = styled.span`
  color: ${props=> props.theme.tagColor};
`