export class Endereco {
    constructor(
        public id?:number,
        public rua?:string,
        public numero?:number,
        public bairro?:string,
        public cep?:string,
        public complemento?:string,
        public cidade?:string,
        public uf?:string
    ){}
}
