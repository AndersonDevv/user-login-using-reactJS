import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Configuracao from './Pages/Configuracao/Config';

function Rotas(){
    return(
    <Switch>
        <Route exact path="/home">
            <Home />
        </Route>
        <Route exact path="/config">
            <Configuracao />
        </Route>
        <Route exact path="/sobre">Sobre nós</Route>
    </Switch>
    )
}
export default Rotas;