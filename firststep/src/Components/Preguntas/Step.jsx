import * as React from 'react';
import Respuestas from '../Respuestas/Respuestas';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel, FormControl } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const estados = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Distrito Federal',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ]


function Step(props) {
    if (props.number === "residency") {
        return (
            <div className="form-group">
                <label htmlFor={props.number}>
                    <p>{props.question}</p>
                </label>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.value}
                        onChange={props.handleChange}
                        input={<OutlinedInput label="Estado" />}
                        name={props.number}
                        MenuProps={MenuProps}
                    >
                        {estados.map((estado) => (
                            <MenuItem
                                key={estado}
                                value={estado}
                            >
                                {estado}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br></br>
                {props.next}
            </div>
        )
    }
    if (props.option1){
        return (
            <div className="form-group">
                <label htmlFor={props.number}>
                    <p>{props.question}</p>
                    <ol>
                        <li>{props.option1}</li>
                        <li>{props.option2}</li>
                        <li>{props.option3}</li>
                        <li>{props.option4}</li>
                    </ol>
                </label>
                <Respuestas 
                    id={props.number}
                    handleNext={props.handleNext}
                    value={props.num}
                    number={props.number}
                />
            </div>
        )
    }
    if (props.handleEnd){
        return (
            <div className="form-group">
                <label htmlFor={props.number}>
                    <p>{props.question}</p>
                </label>
                <Respuestas 
                    id={props.number}
                    handleNext={props.handleEnd}
                    value={props.num}
                    number={props.number}
                />
            </div>
        )
    }
    return (
        <div className="form-group">
            <label htmlFor={props.number}>
                <p>{props.question}</p>
            </label>
            <Respuestas 
                id={props.number}
                handleNext={props.handleNext}
                value={props.num}
                number={props.number}
            />

        </div>
    )
}

export default Step;
