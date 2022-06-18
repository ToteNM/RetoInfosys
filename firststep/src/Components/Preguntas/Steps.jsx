import * as React from 'react';
import Step from './Step'
import { Navigate } from "react-router-dom";

function Steps(props) {
    console.log(props.answers)
    if (props.currentStep === 0) {
        return (
            <Step 
                number="residency" 
                question="Selecciona tu estado de recidencia" 
                value={props.answers.residency} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
                next={props.next}
            />
        )
    } else if (props.currentStep === 1) {
        return (
            <Step 
                number="one" 
                question="¿Alguna vez te ha hecho comentarios disfrazados de bromas que te resultan hirientes?" 
                value={props.answers.one} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } else if (props.currentStep === 2) {
        return(
            <Step 
                number="two" 
                question="¿Alguna vez te has sentido manipulada o engañada por sus acciones?" 
                value={props.answers.two} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } else if (props.currentStep === 3) {
        return(
            <Step 
                number="three" 
                question="¿Alguna vez te ha ignorado como forma de castigo?" 
                value={props.answers.three} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } else if (props.currentStep === 4) {
        return(
            <Step 
                number="four" 
                question="¿Alguna vez te ha celado? (Te prohíbe utilizar ciertas prendas de ropa, te prohíbe amistades etc.)" 
                value={props.answers.four} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 5) {
        return(
            <Step 
                number="five" 
                question="¿Alguna vez te han culpabilizado por situaciones en las que no participaste?" 
                value={props.answers.five} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 6) {
        return(
            <Step 
                number="three" 
                question="¿Alguna vez te has sentido humillada?" 
                value={props.answers.six} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 7) {
        return(
            <Step 
                number="seven" 
                question="¿Alguna vez te has sentido incómoda de manera pública por culpa de él?" 
                value={props.answers.seven} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 8) {
        return(
            <Step 
                number="eight" 
                question="¿Alguna vez te han ofendido verbalmente?" 
                value={props.answers.eight} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 9) {
        return(
            <Step 
                number="nine" 
                question="¿Alguna vez te has sentido intimidada por la forma en que te trata?" 
                value={props.answers.nine} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 10) {
        return(
            <Step 
                number="ten" 
                question="¿Alguna vez has sentido que tienes que hacer lo que él te diga?" 
                value={props.answers.ten} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 11) {
        return(
            <Step 
                number="eleven" 
                question="¿Alguna vez has sentido que no puedes hacer lo que quieres?" 
                value={props.answers.eleven} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 12) {
        return(
            <Step 
                number="twelve" 
                question="¿Alguna vez te has sentido amenazada?" 
                value={props.answers.twelve} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 13) {
        return(
            <Step 
                number="thirteen" 
                question="¿Alguna vez ha destruido alguno de tus artículos personales?" 
                value={props.answers.thirteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 14) {
        return(
            <Step 
                number="fourteen" 
                question="¿Alguna vez te ha tocado de tal manera que no te hace sentir cómoda?" 
                value={props.answers.fourteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 15) {
        return(
            <Step 
                number="fifteen" 
                question="¿Alguna vez has sentido que las caricias pasan a nivel agresivo?" 
                value={props.answers.fifteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 16) {
        return(
            <Step 
                number="sixteen" 
                question="¿Alguna vez te ha pellizcado?" 
                value={props.answers.sixteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 17) {
        return(
            <Step 
                number="seventeen" 
                question="¿Alguna vez has sido rasguñada?" 
                value={props.answers.seventeen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 18) {
        return(
            <Step 
                number="eighteen" 
                question="¿Has experimentado violencia física?" 
                value={props.answers.eighteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 19) {
        return(
            <Step 
                number="nineteen" 
                question="¿Has sufrido de extorsión sexual o ser chantajeada sexualmente?" 
                value={props.answers.nineteen} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 20) {
        return(
            <Step 
                number="twenty" 
                question="¿Has sufrido de amenazas que te hagan sentir vulnerable?" 
                value={props.answers.twenty} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } 
    else if (props.currentStep === 21) {
        return(
            <Step 
                number="twentyone" 
                question="¿Has sufrido de violencia sexual?" 
                value={props.answers.twentyone} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } else if (props.currentStep === 22) {
        return(
            <Step 
                number="twentytwo" 
                question='Te sientes identificado por alguna de estas oraciones:'
                option1='He sido lastimada con objetos punzo cortantes'
                option2='Intervención médica por culpa de tu pareja'
                option3='Tengo marcas de golpes que me han lastimado internamente'
                option4='Ninguna'
                value={props.answers.twentytwo} 
                handleChange={props.handleChange} 
                handleNext={props.handleNext}
                num={props.currentStep}
            />
        )
    } else if (props.currentStep === 23) {
        return(
            <div>
                <Step 
                    number="twentythree" 
                    question="¿Has sentido miedo por tu vida?" 
                    value={props.answers.twentythree} 
                    handleChange={props.handleChange} 
                    handleNext={props.handleNext}
                    num={props.currentStep}
                    handleEnd={props.handleEnd}
                />
                <Navigate to="/resultados"/>
            </div>
        )
    } 
  }

export default Steps;
