import * as React from "react";
import './style/style.css'

let stateMap = new Map()
    stateMap.set('cdmx', ["55-5345-5557", "Procuraduría General de Justicia de la CDMX", "https://www.fgjcdmx.gob.mx/"])
    stateMap.set('aguascalientes', ["01 (449) 910 2800", "Fiscalía General del Estado Aguascalientes", "https://www.fiscalia-aguascalientes.gob.mx/"])
    stateMap.set('baja-california', ["01 (686) 904 4100", "Procuraduría General de Justicia del Estado Baja California", "https://fgebc.gob.mx/"])
    stateMap.set('baja-california-sur', ["01 (612) 12 21752", "Procuraduría General de Justicia del Estado Baja California Sur", "http://www.pgjebcs.gob.mx/"])
    stateMap.set('campeche', ["01 981 811 94 01", "Fiscalía General del Estado Campeche", "http://www.fgecam.campeche.gob.mx/"])
    stateMap.set('coahuila', ["01 844 438 07 26", "Fiscalía General del Estado de Coahuila", "http://www.fiscaliageneralcoahuila.gob.mx/"])
    stateMap.set('colima', ["01 (312) 312 30 87", "Fiscalía General del Estado de Colima", "http://www.fgecolima.mx/"])
    stateMap.set('chiapas', ["01 (961) 61 723 00", "Fiscalía General del Estado de Chiapas", "https://www.fge.chiapas.gob.mx/"])
    stateMap.set('chihuahua', ["01 614 429 33 00", "Fiscalía General del Estado de Chihuahua", "http://fiscalia.chihuahua.gob.mx/"])
    stateMap.set('durango', ["01 (618) 137 35 02", "Fiscalía General del Estado Durango", "http://fiscalia.durango.gob.mx/"])
    stateMap.set('guanajuato', ["01 (473) 73 5 21 00 Ext. 40004 ", "Procuraduría General de Justicia del Estado de Guanajuato", "https://portalsocial.guanajuato.gob.mx/autores/procuradur%C3%ADa-general-de-justicia-del-estado-de-guanajuato"])
    stateMap.set('guerrero', ["01 (747) 49 4 2980", "Fiscalía General del Estado de Guerrero", "https://fiscaliaguerrero.gob.mx/"])
    stateMap.set('hidalgo', ["01 (771) 717 90 00", "Procuraduría General de Justicia del Estado de Hidalgo", "https://procuraduria.hidalgo.gob.mx/"])
    stateMap.set('jalisco', ["01 (33) 3668 79 40", "Fiscalía General del Estado de Jalisco", "https://fiscalia.jalisco.gob.mx/"])
    stateMap.set('edomex', ["01 (722)2 26 16 00 EXT. 3207", "Fiscalía General del Estado de México", "https://fgjem.edomex.gob.mx/"])
    stateMap.set('michoacan', ["01 (443) 322-36-00", "Procuraduría General de Justicia del Estado de Michoacán", "https://www.fiscaliamichoacan.gob.mx/"])
    stateMap.set('morelos', ["01(777) 329 15 00", "Fiscalía General del Estado de Morelos", "https://fiscaliamorelos.gob.mx/"])
    stateMap.set('nayarit', ["01 (311) 129 60 00 Ext. 17276", "Fiscalía General del Estado de Nayarit", "https://fiscaliageneral.nayarit.gob.mx/web/"])
    stateMap.set('nuevo-leon', ["01(81)2020 4000 Ext. 4040", "Fiscalía General de Justicia del Estado de Nuevo León", "https://fiscalianl.gob.mx/"])
    stateMap.set('oaxaca', ["01 951 501 6900 ext. 20602", "Fiscalía General del Estado de Oaxaca", "http://fge.oaxaca.gob.mx/"])
    stateMap.set('puebla', ["01 (222) 211 7900", "Fiscalía General del Estado de Puebla", "https://fiscalia.puebla.gob.mx/"])
    stateMap.set('queretaro', ["01 (442) 238-76-00 Ext. 1078, 1079", "Fiscalía General del Estado de Querétaro", "https://fiscaliageneralqro.gob.mx/portal/"])
    stateMap.set('quintana-roo', ["01 (983) 83 500 50 Ext. 1190", "Fiscalía General del Estado de Quintana Roo", "https://www.fgeqroo.gob.mx/portal/"])
    stateMap.set('san-luis-potosi', ["01 (444) 812-64-35", "Fiscalía General del Estado de San Luis Potosí", "https://fiscaliaslp.gob.mx/vi/"])
    stateMap.set('sinaloa', ["01 (667) 713 32 00", "Fiscalía General del Estado de Sinaloa", "http://fiscaliasinaloa.mx/"])
    stateMap.set('sonora', ["01(662) 108-16-20", "Fiscalía General de Justicia del Estado de Sonora", "https://fiscalia.sonora.gob.mx/"])
    stateMap.set('tabasco', ["01 (993) 313 65 50 Ext. 4017", "Fiscalía General del Estado de Tabasco", "https://www.fiscaliatabasco.gob.mx/"])
    stateMap.set('tamaulipas', ["01(834) 318 51 18 ext. 50000 y 50011", "Procuraduría General de Justicia del Estado de Tamaulipas", "https://www.fgjtam.gob.mx/"])
    stateMap.set('tlaxcala', ["01 (246) 46 50 500 Marcar No. 2", "Procuraduría General de Justicia del Estado de Tlaxcala", "https://pgjtlaxcala.gob.mx/"])
    stateMap.set('veracruz', ["01 228 841 61 70", "Fiscalía General del Estado de Veracruz", "http://fiscaliaveracruz.gob.mx/"])
    stateMap.set('yucatan', ["01 (999) 930 -3254 Ext. 41004 y 41017", "Fiscalía General del Estado de Yucatán", "http://www.fge.yucatan.gob.mx/"])
    stateMap.set('zacatecas', ["01 (492) 925 60 50", "Procuraduría General de Justicia del Estado de Zacatecas", "https://www.fiscaliazacatecas.gob.mx/"])
    stateMap.set('zacatecas', ["55 5346 0000 ", "Fiscalía General de la República", "https://www.gob.mx/fgr"])

function Sugerencias(props) {

    const [redRecommendation, setRedRecommendation] = React.useState('')
    const [orangeRecommendation, setOrangeRecommendation] = React.useState('')
    const [goldRecommendation, setGoldRecommendation] = React.useState('')
    const [yellowRecommendation, setYellowRecommendation] = React.useState('')

    React.useEffect(() => {
        let stateData = stateMap.get(props.state)
        if(props.red === true) {
            setRedRecommendation(
                <div className="recommend">
                    <p>
                    Para denunciar un acto de violencia grave en un organismo de tu estado. <br></br><br></br>
                    Puedes hacerlo en la {stateData[1]}, a través de su sitio web <a href={stateData[2]}>{stateData[2]}</a>, o llamando al número telefónico {stateData[0]}
                </p>
                <p>
                    Recuerda que tu denuncia es anónima y no corres riesgo alguno por realizarla. 
                </p>
                </div>
            )
        }
        if(props.orange === true){
            setOrangeRecommendation(
                <div className="recommend">
                    <p>
                    Para denunciar un acto de violencia grave en un organismo de tu estado. <br></br><br></br>
                    Puedes hacerlo en la {stateData[1]}, a través de su sitio web <a href={stateData[2]}>{stateData[2]}</a>, o llamando al número telefónico {stateData[0]}
                </p>
                <p>
                    Recuerda que tu denuncia es anónima y no corres riesgo alguno por realizarla. 
                </p>
                </div>
            )
        }
        if(props.gold === true){
            setGoldRecommendation(
                <div className="recommend">
                    <p>
                    Para denunciar un acto de violencia grave en un organismo de tu estado. <br></br><br></br>
                    Puedes hacerlo en la {stateData[1]}, a través de su sitio web <a href={stateData[2]}>{stateData[2]}</a>, o llamando al número telefónico {stateData[0]}
                </p>
                <p>
                    Recuerda que tu denuncia es anónima y no corres riesgo alguno por realizarla. 
                </p>
                </div>
            )
        }
        if(props.yellow === true){
            setYellowRecommendation(
                <div className="recommend">
                    <p>
                    Para denunciar un acto de violencia grave en un organismo de tu estado. <br></br><br></br>
                    Puedes hacerlo en la {stateData[1]}, a través de su sitio web <a href={stateData[2]}>{stateData[2]}</a>, o llamando al número telefónico {stateData[0]}
                </p>
                <p>
                    Recuerda que tu denuncia es anónima y no corres riesgo alguno por realizarla. 
                </p>
                </div>
            )
        }
    }, [])

    return(
        <div className="main">
            {redRecommendation}
            {orangeRecommendation}
            {goldRecommendation}
            {yellowRecommendation}
        </div>
    )
}

export default Sugerencias;