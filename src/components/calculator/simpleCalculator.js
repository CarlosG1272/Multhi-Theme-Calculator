import React from "react";
import styles from "./calculator.module.scss"

export default class Calculator extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstInput: "", 
            secondInput: "", 
            operator: "",
            result: 0
        }
    }

    numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]
    operators = ["+", "-", "*", "/"]

    normalClick = (value)=>{
        if(this.state.operator === "") {
          this.setState({...this.state, firstInput: this.state.firstInput + value});
        } else {
          this.setState({...this.state, secondInput: this.state.secondInput + value});
        }
    }

    operatorClick = (operator)=> {
        if (this.state.firstInput === "" && operator === "-") {
          this.normalClick(operator)
        } 
      else if (this.state.secondInput === "" && operator === "-" && this.state.operator !== "") 
      {
          this.normalClick(operator)
        } 
        else this.setState({...this.state, operator: operator})

        // Para que mi respueste automaticamente quede como el firstInput
        if(this.state.result) {
          this.setState ({firstInput: this.state.result, secondInput: "", operador:"", result: 0})
        }
      }

    result= ()=> {
        let number1 = Number(this.state.firstInput) 
        let number2 = Number(this.state.secondInput)
        let operador = this.state.operator
        if (operador === "-") this.setState({...this.state, result: number1 - number2})
        else if (operador==="+") this.setState({...this.state, result: number1 + number2})
        else if (operador==="/") this.setState({...this.state, result: number1 / number2})
        else if (operador==="*")this.setState({...this.state, result: number1 * number2})  

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
        this.setState({firstInput: "", secondInput:"", operator: "", result:0})
      }
    
      handleChange = (e)=> {
        let value = e.target.value; 
        if(typeof Number(value) === "number" || value ===".") {
          this.normalClick(value)
        } else if(value ==="+" || value === "-" || value === "*" || value=== "/" ){
          this.operatorClick(value)
        } 
      }

    render(){
        return (
    <section className={styles.container}>
            
      <div className={styles.display}>
        <div id={styles.operations} 
        onChange={this.handleChange}> {this.state.firstInput} {this.state.operator} {this.state.secondInput}</div>
        
        <input id={styles.operations} 
        value={`${this.state.firstInput} ${this.state.operator} ${this.state.secondInput}`}
        onChange={this.handleChange}
        >
          {/* {this.state.firstInput} <span>{this.state.operator}</span> <span>{this.state.secondInput}</span> */}
        </input>
        <div id={styles.result}>{this.state.result}</div>
      </div>


      <div className={styles.buttonsContainer}>
          {/* Primero necesito un contenedor para mis numeros, punto decimal e igual */}
          <div className={styles.numbersContainer}>
              {this.numbers.map(el=> 
                <button  className={styles.buttonNumber} id={styles.el} onClick={()=>this.normalClick(el)} key={el}>
              {el}</button>)}
              <button onClick={this.result} id={styles.equals}>=</button>  
          </div>

          <div className={styles.anotherContainer}>
                <div className={styles.clearContainer}>
                  <button onClick={this.clear} id={styles.C}>C</button>
                  <button onClick={this.allClear} id={styles.AC}>AC</button>
                </div>

                <div className={styles.operatorsContainer}> 
                  {this.operators.map(el=> 
                    <button onClick={()=>this.operatorClick(el)} className={styles.operators}>{el}</button>
                  )}
                </div>
          </div>  

      </div>
    </section>
        )}

}

