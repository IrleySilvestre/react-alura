export default class Categorias {
    constructor() {
        this.itens = []
        this._inscritos = []
        this.addCategoria = this.addCategoria.bind(this);
        this.inscrever = this.inscrever.bind(this);
        this.notificar = this.notificar.bind(this);
        this.desisnscrever = this.desisnscrever.bind(this);
    }

    inscrever(func) {
        console.log(func)
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

    addCategoria(novaCategoria) {
        this.itens.push(novaCategoria)
        this.notificar()
    }
}