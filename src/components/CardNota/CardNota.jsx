import React, {Component} from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from '../../assets/img/trash.svg'

class CardNota extends Component {
    removeNota = () => {
        const i = this.props.i
        this.props.removeNota(i)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.removeNota}/>
                </header>
                <p className="card-nota_texto">{this.props.nota}</p>
                <h4>{this.props.categoria}</h4>
            </section>
        );
    }
}

export default CardNota;
