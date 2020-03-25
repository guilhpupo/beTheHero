import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';
import Api from '../../services/api';

export default function NewIncident() {

    const ongId = localStorage.getItem('ongId');

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor
        }

        try{
            await Api.post('casos',data,{
                headers:{
                    Authorization: ongId
                }
            });

            history.push('/profile');

        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt='Be The Hero'></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to='/profile' className='back-link'>
                        <FiArrowLeft size={16} color='#E02041' />
                    Voltar para home
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder='Título do caso'
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder='Descrição'
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder='Valor em reais'
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button type='submit' className='button'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}