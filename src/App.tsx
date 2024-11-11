import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [fotoAvatar, setFotoAvatar] = useState<string | null>(null);

  // Função para fazer a requisição ao GitHub
  async function fazerRequisicao() {
    try {
      const resposta = await axios.get('https://api.github.com/users/UserFlavioHasArrived');
      atualizarFoto(resposta.data); // Chama a função para atualizar o avatar
    } catch (error) {
      console.error('Erro ao buscar informações:', error);
    }
  }

  // Função para atualizar o estado com o URL da foto do avatar
  const atualizarFoto = (data: any) => {
    console.log(data); 
    setFotoAvatar(data.avatar_url); // A chave correta é `avatar_url`, não `avatar.url`
  };

  return (
    <>
      <div>
        <h1>Requisições de sexta!</h1>
        <div className="card"></div>
        <button onClick={fazerRequisicao}>
          Buscar perfil
        </button>

        {/* Condicionalmente renderiza a imagem do avatar */}
        {fotoAvatar && <img src={fotoAvatar} alt="Avatar" width="200" />}
      </div>
    </>
  );
}

export default App;
