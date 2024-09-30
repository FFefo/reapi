import { useEffect, useState } from 'react'
import './cadastro.scss'

import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Cadastrar() {
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [qtdProduto, setQtdProduto] = useState(0);
    const [precoProduto, setPrecoProduto] = useState(0);
    const [categoriaProduto, setCategoriaProduto] = useState('');
    const [imagemProduto, setImagemProduto] = useState('');

    const { id } = useParams();

    async function Salvar() {
        const paramCorpo = {
            "descricao": descricaoProduto,
            "quantidade": qtdProduto,
            "preco": precoProduto,
            "categoria": categoriaProduto,
            "imagem": imagemProduto
        }

        const url = 'http://localhost:5010/produtos';
        let resp = await axios.post(url, paramCorpo);

        alert('Produto adicionado a vitrine, ID: ' + resp.data.novoId)


    }

    async function Buscar() {
        const url = `http://localhost:5010/produtos/${id}`;
        let resp = await axios.get(url);

        console.log(resp.data);

        setDescricaoProduto(resp.data.descricao);
    }

    useEffect(() => {
        Buscar()
    }, [])

    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR PRODUTOS </h1>

<h1>{id}</h1>

            <div className='form'>

                <div>
                    <label>Descrição do Produto:</label>
                    <input type='text' value={descricaoProduto} onChange={e => setDescricaoProduto(e.target.value)} />
                </div>

                <div>
                    <label>Quantidade em Estoque:</label>
                    <input type='text' value={qtdProduto} onChange={e => setQtdProduto(e.target.value)} />
                </div>

                <div>
                    <label>Preço do Produto:</label>
                    <input type='text' value={precoProduto} onChange={e => setPrecoProduto(e.target.value)} />
                </div>

                <div>
                    <label>Categoria do Produto:</label>
                    <input type='text' value={categoriaProduto} onChange={e => setCategoriaProduto(e.target.value)} />
                </div>

                <div>
                    <label>Imagem do Produto:</label>
                    <input type='text' value={imagemProduto} onChange={e => setImagemProduto(e.target.value)} />
                </div>

            </div>

            <button onClick={Salvar}> SALVAR </button>

        </div>
    )
}