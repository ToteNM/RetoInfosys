import * as React from "react";
import img from "../../IMG/LogoFS.png"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import './style/style.css'

function Respuestas(props) {
    return(
        <div className="botonRespuestas">
            <ButtonGroup disableElevation variant="contained">
                <Button onClick={props.handleNext} value={props.value} name={props.number}>Si</Button>
                <Button onClick={props.handleNext} value="0" name={props.number}>No</Button>
            </ButtonGroup>
        </div>
    );
}

export default Respuestas