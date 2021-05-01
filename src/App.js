import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaCategorias/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ListNotas from "./dados/ListNotas";

class App extends Component {
    constructor() {
        super();

        this.categorias = new Categorias()
        this.notas = new ListNotas()
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    addNotas={this.notas.addNota}
                    categorias={this.categorias}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        addCategoria={this.categorias.addCategoria}
                        categorias={this.categorias}
                    />
                    <ListaDeNotas
                        notas={this.notas}
                        removeNota={this.notas.removeNota}/>
                </main>
            </section>
        );
    }
}

export default App;
