export interface ProductTypes {
    id: number,
    nome: string,
    categoria: string,
    preco: number,
    quantidade: number
}

export interface ProductRequestTypes {
    nome: string,
    categoria: string,
    preco: number,
    quantidade: number
}