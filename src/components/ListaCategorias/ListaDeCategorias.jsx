import React, {Component} from "react";
import './estilo.css'

class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = {categorias: []}
        this.novasCategorias = this.novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias)
    }

    // componentWillUnmount() {
    //     this.props.categorias.desisnscrever(this.novasCategorias)
    // }

    novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _handleEventoInput = (e) => {
        if (e.key === "Enter") {
            let categoria = e.target.value
            this.props.addCategoria(categoria)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.itens.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
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