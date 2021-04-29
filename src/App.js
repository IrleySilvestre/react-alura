import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: []
        }
        this.addNotas = this.addNotas.bind(this);
    }

    addNotas(nota) {
        const {txtTitulo, txtNota} = nota
        const novaNota = {txtTitulo, txtNota}
        const novoArrayNotas = [...this.state.notas,novaNota]
        const novoEstado = {notas: novoArrayNotas}
        this.setState(novoEstado)
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro addNotas = {this.addNotas}/>
                <ListaDeNotas notas = {this.state.notas}/>
            </section>
        );
    }
}

export default App;
