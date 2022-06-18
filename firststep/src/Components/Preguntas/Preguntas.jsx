import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Form from '../Preguntas/Form'
import Boton from '../Boton/Botton'

function Preguntas(){

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <div onClick={() => handleClickOpen()}>
            <Boton className="button">
                <span>Siguiente </span>
            </Boton>
            </div>
            <Dialog open={open} onClose={() => handleClose()} className="modal">
                <DialogContent>
                    <Form/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Preguntas