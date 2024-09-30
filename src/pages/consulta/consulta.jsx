import { useState } from 'react'
import { Link } from 'react-router-dom';
import './consulta.scss'

import axios from 'axios'

export default function Consultar() {
    const [produto, setProduto] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5010/produtos/';
        let resp = await axios.get(url);
        setProduto(resp.data);
    }

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR PRODUTOS </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição do Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Url da Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {produto.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.produto}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.preco}</td>
                            <td>{item.categoria}</td>
                            <td><img src={item.imagem} alt="" width="100px"/></td>
                            <td><Link to= {`/cadastrar/${item.id}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>


        </div>
    )
}