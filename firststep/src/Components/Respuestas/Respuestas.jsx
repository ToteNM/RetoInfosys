import * as React from "react";
import img from "../../IMG/LogoFS.png"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import './style/style.css'

function Respuestas() {
    return(
        <div className="botonRespuestas">
            <ButtonGroup disableElevation variant="contained">
                <Button>Si</Button>
                <Button>No</Button>
            </ButtonGroup>
        </div>
    );
}

export default Respuestas