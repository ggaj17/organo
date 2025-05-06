import Funcionario from '../Funcionario'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        props.funcionarios.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='funcionarios'>
                {props.funcionarios.map( funcionario => <Funcionario corDeFundo={props.corPrimaria} key={funcionario.nome} nome={funcionario.nome} cargo={funcionario.cargo} imagem={funcionario.imagem}/> )}
            </div>
        </section>
    )
}

export default Time