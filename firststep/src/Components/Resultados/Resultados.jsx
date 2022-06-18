import * as React from "react";
import './style/style.css'
import red from '../../IMG/Rojo.png'
import orange from '../../IMG/Naranja.png'
import yellow from '../../IMG/Amarillo.png'
import green from '../../IMG/Verde.png'

function Resultados(props) {
    const [image, setImage] = React.useState('')
    const [description, setDescription] = React.useState('')

    React.useEffect(() => {
        if(props.red === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={red} alt="rojo"></img>)
            setDescription(<p>
                
            </p>)
        } else if(props.orange === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={orange} alt="rojo"></img>)
            setDescription(<p>
                Tus respuestas indicas que eres víctima de violencia moderada, es importante actuar ahora para que no incremente. De
            </p>)
        } else if(props.gold === true) {
            setImage(<img classname="violentometer" width="350px" height="auto" src={yellow} alt="rojo"></img>)
            setDescription(<p>
                Tus respuestas indicas que eres víctima de violencia moderada, es importante actuar ahora para que no incremente. De
            </p>)
        } else {
            setImage(<img classname="violentometer" width="350px" height="auto" src={green} alt="rojo"></img>)
            setDescription(<p className="description">
                Este nivel de violencia se caracteriza por actitudes, acciones o comportamientos que a simple vista podrían verse como bromas o juegos. Sin embargo, este tipo de actos son considerados violencia, y, no debes permitirlos si te hacen sentir mal. Este tipo de violencia generalmente se presenta en relaciones de pareja.  
            </p>)
        }
    })
    return(
        <div className="main">
            {image}
            {description}
        </div>
    );
}

export default Resultados;