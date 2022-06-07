import React from "react";
import styles from "./calculator.module.scss"
import { MySection, MyDisplay, MyButtonsContainer, MyButtonNumber, MyEqualsButton, ClearButtons, OperationButtons, MyInput, MyTags} from "../style/container";



export default class CalculatorBorrador extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentInput: "", 
            inputs: [],
            operator: "",
            result: 0
        }
    }
    
    numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]
    operators = ["+", "-", "*", "/"]

    normalClick = (value)=>{

          this.setState({...this.state, currentInput: this.state.currentInput + value});
    }

    operatorClick = (operator)=> {
        if (this.state.currentInput === "" && operator === "-") {
          this.normalClick(operator)
        } 
      else if (operator === "-" && typeof Number(this.state.inputs[this.state.inputs.length - 2]) !== "number") 
      {
          this.normalClick(operator)
        } 
        else this.setState({...this.state, operator: operator, currentInput: "",
            inputs: [...this.state.inputs, this.state.currentInput, operator]})

        // Para que mi respueste automaticamente quede como el firstInput
        if(this.state.result) {
            this.setState ({currentInput: "", inputs: [this.state.result, operator], operador:"", result: 0})
         }
      }

    result= ()=> {
        let operators = this.state.inputs.filter((el, index)=> index%2 !== 0 && el )
        let values = this.state.inputs.filter((el, index)=> index%2 === 0 && el )
        // Por el delay de cargar el ultimo valor
        values.push(this.state.currentInput)
        
        let acc = Number(values[0]); 
        for(let i = 0; i < operators.length; i++) {
            let number2= Number(values[i+1])
            let operador = operators[i]
            if (operador === "-") acc = acc - number2
            else if (operador==="+") acc = acc + number2
            else if (operador==="/") acc = acc / number2
            else if (operador==="*") acc = acc * number2
        }
        this.setState({...this.state, currentInput: "",
        inputs: [...this.state.inputs, this.state.currentInput], result: acc})
      }

    clear = ()=> {
      if(this.state.operator === "") {
        this.setState({...this.state, 
          firstInput:this.state.firstInput.substring(0, this.state.firstInput.length - 1)})
      } else if (this.state.secondInput === ""){
        this.setState({...this.state, operator: ""})
      } else {
        this.setState({...this.state, 
          secondInput: this.state.secondInput.substring(0, this.state.secondInput.length - 1)})
      }}

    allClear = ()=> {
        this.setState({currentInput: "", inputs:[], operator: "", result:0})
      }
    
    handleChange = (e)=> {
        const re = /^[0-9\b]+$/;
        let currentValue = e.nativeEvent.data
        if(currentValue === "+" || currentValue === "-" || currentValue === "*" || currentValue === "/") {
            this.operatorClick(currentValue)
        } else if (re.test(currentValue)){
            this.normalClick(currentValue)
        } else if(e.nativeEvent.inputType === "deleteContentBackward"){
            this.setState({...this.state, currentInput: e.target.value})
        }
      }

    Enter = (e) => {
          if(e.key === "Enter") this.result()
      }



    render(){
        return (
    <MySection>
      CALCULATOR
      <MyDisplay className={styles.display}>
        <div id={styles.operations} 
        onChange={this.handleChange}> <MyTags className={styles.tags}>OPS</MyTags> {this.state.inputs}</div>
        
        <div className={styles.inputContainer}>
            <MyTags className={styles.tags}>CURRENT</MyTags>
            <MyInput id={styles.input} 
            value={this.state.currentInput}
            onChange={this.handleChange}
            onKeyUp={this.Enter}
            ></MyInput>
        </div>
        

        <div id={styles.result}> <MyTags className={styles.tags}>ANS</MyTags> {this.state.result}</div>
      </MyDisplay>


      <MyButtonsContainer className={styles.buttonsContainer}>
          {/* Primero necesito un contenedor para mis numeros, punto decimal e igual */}
          <div className={styles.numbersContainer}>
              {this.numbers.map(el=> 
                <MyButtonNumber  className={styles.buttonNumber} id={styles.el} onClick={()=>this.normalClick(el)} key={el}>
              {el}</MyButtonNumber>)}
              <MyEqualsButton onClick={this.result} id={styles.equals}>=</MyEqualsButton>  
          </div>

          <div className={styles.anotherContainer}>
                <div className={styles.clearContainer}>
                  <ClearButtons onClick={this.clear} id={styles.C}>C</ClearButtons>
                  <ClearButtons onClick={this.allClear} id={styles.AC}>AC</ClearButtons>
                </div>

                <div className={styles.operatorsContainer}> 
                  {this.operators.map(el=> 
                    <OperationButtons onClick={()=>this.operatorClick(el)} className={styles.operators}>{el}</OperationButtons>
                  )}
                </div>
          </div>  
        </MyButtonsContainer>
    </MySection>
        )}

}

