import * as React from "react";
import './style/style.css'
import { Typography } from "@mui/material";
import red from '../../IMG/Rojo.png'
import orange from '../../IMG/Naranja.png'
import yellow from '../../IMG/Amarillo.png'
import green from '../../IMG/Verde.png'
import Boton from "../Boton/Botton";
import { useNavigate } from "react-router-dom";

function Resultados(props) {

    let navigate = useNavigate()

    const routeChange = () => {
        navigate('/sugerencias')
    }

    const [image, setImage] = React.useState('')
    const [description, setDescription] = React.useState('')

    React.useEffect(() => {
        if(props.red === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={red} alt="rojo"></img>)
            setDescription(
                <Typography variant="p" className="description">
                Este tipo de violencia es la más grave de todas, pues recae en acciones consideradas como delitos en el país. Si denuncias estas conductas deberá haber una consecuencia jurídica para el agresor y tú, como víctima, debes ser acompañada y restituida en tus derechos.
            </Typography>
            )
        } else if(props.orange === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={orange} alt="naranja"></img>)
            setDescription(
            <Typography variant="p" className="description">
                Este nivel de violencia física es grave, pues a simple vista podrían parecer acciones pequeñas. Sin embargo, todas las acciones dentro de este nivel recaen como violencia física, la cual no debe de ser tolerada y puede llegar a niveles de denuncia ante la ley. Deben ser atendidas lo más pronto posible para no escalar a algún nivel superior.
            </Typography>
            )
        } else if(props.gold === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={yellow} alt="amarillo"></img>)
            setDescription(<Typography variant="p" className="description">
                Este tipo de violencia se caracteriza por acciones que te dañan dentro de tus círculos sociales. Es posible que los demás vean esto como acciones incorrectas, pero no llegan a ser consideradas como crímenes. Sin embargo, no deben ser soportadas y es posible realizar una denuncia ante un superior (maestros, jefes, padres, etc.)
            </Typography>)
        } else {
            setImage(<img classname="violentometer" width="350px" height="auto" src={green} alt="verde"></img>)
            setDescription(<Typography variant="p" className="description">
                Este nivel de violencia se caracteriza por actitudes, acciones o comportamientos que a simple vista podrían verse como bromas o juegos. Sin embargo, este tipo de actos son considerados violencia, y, no debes permitirlos si te hacen sentir mal. Este tipo de violencia generalmente se presenta en relaciones de pareja.  
            </Typography>)
        }
    }, [])
    return(
        <div className="main-resultados">
            {image}
            <div className="inner-flex">
                {description}
                <div className="to-suggestions">
                <div onClick={() => routeChange()}>
                    <Boton/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Resultados;