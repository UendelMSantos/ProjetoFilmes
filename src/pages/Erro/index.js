import {Link} from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h2>404 not found</h2>
            <h3>Pagina não encontrada</h3>

            <Link to="/">Veja todos os Filmes</Link>
        </div>
    )
}

export default Erro;