import React, {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                i = {index}
                                removeNota={this.props.removeNota}
                                titulo={nota.txtTitulo}
                                nota={nota.txtNota}
                                categoria = {nota.categoria}

                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
