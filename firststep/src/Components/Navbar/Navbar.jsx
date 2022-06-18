import * as React from "react";
import img from "../IMG/LogoFS.png"
function Header() {
    return(
        <div className="navbar">
            <div className="sub-nav">
                <div>
                    Encuesta
                </div>
            </div>
            <div className="sub-nav">
                <div>
                    ¿Necesitas ayuda?
                </div>
                <div>
                    Violentómetro
                </div>
            </div>
        </div>
    )
}

export default Header;
