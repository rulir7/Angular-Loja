export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}
//interface pro carrinho
export interface IProdutosCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Gamer", preco: 150.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 12 },
    { id: 2, descricao: "Monitor FullHD 120hz", preco: 1450.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 12 },
    { id: 3, descricao: "Teclado mecânico", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Fone 7.1", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Fone de ouvido 5.1", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Fone de ouvido stereo", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 4TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Combo de placa de vídeos RTX", preco: 25449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notebook I3", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notebook I7", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse USB", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse Wireless", preco: 300, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mini Mouse", preco: 51, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado semi-mecânico", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 }
]