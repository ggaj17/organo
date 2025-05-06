import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const aoNovoFuncionarioAdicionado = (funcionario) => {
    const novosFuncionarios = [...funcionarios, funcionario];
    setFuncionarios(novosFuncionarios);
    localStorage.setItem('funcionarios', JSON.stringify(novosFuncionarios));
  };

  const [funcionarios, setFuncionarios] = useState(
    JSON.parse(localStorage.getItem('funcionarios')) || []
  );

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoFuncionarioCadastrado={funcionario => aoNovoFuncionarioAdicionado(funcionario)}/>

      {times.map(time => <Time
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        funcionarios={funcionarios.filter(funcionario => funcionario.time === time.nome)} 
      />)}
      <Rodape />
    </div>
  );
}

export default App;
