import * as React from 'react';
import Steps from './Steps'

class Form extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 0,
        answers : {
            residency: '',
            one:  '',
            two: '',
            three: '', 
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            ten: '',
            eleven: '',
            twelve: '',
            thirteen: '',
            fourteen: '',
            fifteen: '',
            sixteen: '',
            seventeen: '',
            eighteen: '',
            nineteen: '',
            twenty: '',
            twentyone: '',
            twentytwo: '',
            twentythree: ''
        }
      }
    }
  
    handleChange = event => {
        const {name, value} = event.target
        console.log(name, value)
        this.setState(
            prevState => {
                let answers = Object.assign({}, prevState.answers);  
                answers[name] = value; 
                console.log(answers)                    // update the name property, assign a new value                 
                return { answers };                                 // return new object jasper object
            }
        )    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }

    handleYesNoAnswer = event => {
      this.handleChange(event)
      this._next()
    }


    handleEnd = event => {
      localStorage.setItem('answers', this.state.answers);
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 22 ? 23 : currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 0 ? 0 : currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==0){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 23){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <h1>Encuesta</h1>
        <p>Pregunta {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Steps 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            handleNext={this.handleYesNoAnswer}
            handleEnd={this.handleEnd}
            answers={this.state.answers}
            next={this.nextButton()}
          />
          

          {this.previousButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }

export default Form;
