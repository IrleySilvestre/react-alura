export default class ListNotas {
    constructor() {
        this.itens = []
        this._inscritos = []
        this.addNota = this.addNota.bind(this);
        this.removeNota = this.removeNota.bind(this);
        this.inscrever = this.inscrever.bind(this);
        this.notificar = this.notificar.bind(this);
        this.desisnscrever = this.desisnscrever.bind(this);
    }

    addNota(nota){
        const {txtTitulo, txtNota, categoria}= nota
        const novaNota = new Nota(txtTitulo, txtNota, categoria)
        this.itens.push(novaNota)
        this.notificar()

    }

    removeNota(indice){
        this.itens.splice(indice,1)
        this.notificar()
    }


    inscrever(func) {
        this._inscritos.push(func)
    }

    desisnscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func)
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.itens)
        })
    }

}

class Nota {
    constructor( titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}