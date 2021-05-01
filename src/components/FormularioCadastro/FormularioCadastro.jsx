import React, {Component} from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            txtTitulo: '',
            txtNota: '',
            categoria: ""
        }
        this.state = this.initialState
        this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
        this.handleChangeNota = this.handleChangeNota.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.addNota = this.addNota.bind(this);
        this.novaCategoria = this.novaCategoria.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novaCategoria)
    }

    novaCategoria(categoria){
        this.setState({categoria})
    }

    handleChangeTitulo(e) {
        this.setState({
            txtTitulo: e.target.value
        })
    }

    handleChangeCategoria(e) {
        this.setState({
            categoria: e.target.value
        })
    }

    handleChangeNota(e) {
        e.stopPropagation()
        this.setState({
            txtNota: e.target.value
        })
    }

    addNota(e) {
        e.preventDefault()
        e.stopPropagation()
        this.props.addNotas(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {txtTitulo, txtNota, categoria} = this.state
        return (
            <form className="form-cadastro ">
                <select
                    className="form-cadastro_input"
                    onChange={this.handleChangeCategoria}
                >
                    <option>Sem Categoria</option>
                    {this.props.categorias.itens.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    id="txtTitulo"
                    name="txtTitulo"
                    value={txtTitulo}
                    onChange={this.handleChangeTitulo}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    id="txtNota"
                    name="txtNota"
                    value={txtNota}
                    onChange={this.handleChangeNota}
                />
                <button className="form-cadastro_input form-cadastro_submit" onClick={this.addNota}>
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
