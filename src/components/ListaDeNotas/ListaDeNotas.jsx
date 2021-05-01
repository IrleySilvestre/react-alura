import React, {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    constructor() {
        super();
        this.state = {notas:[]}
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas)
    }

    componentWillUnmount() {
        this.props.notas.desisnscrever(this._novasNotas)
    }


    _novasNotas = (notas) => {
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.itens.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                i={index}
                                removeNota={this.props.removeNota}
                                titulo={nota.titulo}
                                nota={nota.texto}
                                categoria={nota.categoria}

                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
