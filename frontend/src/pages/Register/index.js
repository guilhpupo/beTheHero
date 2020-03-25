import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';

import Api from '../../services/api';

export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        }

        try {
            const response = await Api.post('ongs', data);
            alert(`Sua ID de acesso : ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert("Erro no cadastro, tente novamente mais tarde.");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt='Be The Hero'></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to='/' className='back-link'>
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder='Nome da ONG'
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder='WhatsApp'
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder='Cidade'
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                        <input
                            placeholder='UF'
                            style={{ width: '80px' }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='button'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}