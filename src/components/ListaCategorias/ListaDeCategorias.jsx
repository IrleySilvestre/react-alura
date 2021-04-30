import React, {Component} from "react";
import './estilo.css'

class ListaDeCategorias extends Component {
    constructor(props) {
        super(props);
        this._handleEventoInput = this._handleEventoInput.bind(this);
    }

    _handleEventoInput(e) {
        if(e.key === "Enter"){
            let categoria = e.target.value
            this.props.addCategoria(categoria)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index)=>{
                        return  <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}

                </ul>
                <input
                    placeholder="Adicionar Categoria"
                    type="text"
                    onKeyUp={this._handleEventoInput}
                />
            </section>
        )
    }
}

export default ListaDeCategorias