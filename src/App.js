import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaCategorias/ListaDeCategorias";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: [],
            categorias:[]
        }
        this.addNotas = this.addNotas.bind(this);
        this.removeNota = this.removeNota.bind(this);
        this.addCategoria = this.addCategoria.bind(this);
    }

    addNotas(nota) {
        const {txtTitulo, txtNota, categoria} = nota
        const novaNota = {txtTitulo, txtNota, categoria}
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {notas: novoArrayNotas}
        this.setState(novoEstado)
    }

    addCategoria(categoria){
        const novoArrayCategoria = [...this.state.categorias, categoria]
        const newState = {categorias: novoArrayCategoria}
        this.setState(newState)
    }

    removeNota(i) {
        let notas = this.state.notas
        notas.splice(i, 1)
        this.setState({notas})
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro addNotas={this.addNotas} listCategorias = {this.state.categorias}/>
                <main className = "conteudo-principal">
                    <ListaDeCategorias addCategoria={this.addCategoria} categorias = {this.state.categorias} />
                    <ListaDeNotas notas={this.state.notas} removeNota={this.removeNota} />
                </main>
            </section>
        );
    }
}

export default App;
