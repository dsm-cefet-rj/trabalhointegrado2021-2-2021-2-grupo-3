import React from "react";
import Input  from "../../components/Input";

export default function DevoluçãoLivro() {
    return(
        <div>
            <Input 
                className="half-box spacing"
                id="dataDevolução"
                label="Agendar Devolução"
                placeholder="Digite a Data para a Devolução"
                type="date"
            />
        </div>
    );
};