import React, { useState } from 'react';
import './App.css'; // Importe o arquivo CSS para estilização

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura === '' || peso === '') {
      alert('Por favor, preencha todos os campos.');
      return;  
    }
    

    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    

    let classificacao;
    if (imcCalculado < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      classificacao = 'Peso normal';
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      classificacao = 'Sobrepeso';
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      classificacao = 'Obesidade Grau I';
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      classificacao = 'Obesidade Grau II';
    } else {
      classificacao = 'Obesidade Grau III';
    }
    setClassificacao(classificacao);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label htmlFor="altura">Altura (em metros):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="peso">Peso (em kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button className='button' onClick={calcularIMC}>Calcular IMC</button>

      {imc !== null && (
        <div className="result">
          <h2>Resultado</h2>
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{imc}</td>
                <td>{classificacao}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}




export default App;