import { AreaLogin } from './loginStyled'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { BtnDefaultIcons, BtnDefault } from '../../components/globalStyled';

import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
 

function Login(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/registrar"> 
                <AreaLogin>
                
                    <h1 className="organizarIcone">
                        <Link to="/">VOLTAR</Link>
                        Faça login em sua conta
                    </h1>
                    <p>Crie sua conta. É grátis!!!</p>
                </AreaLogin>
            </Route>

            <Route exact path ="*"> 
                <AreaLogin>
                    <h1>Faça o login em sua conta</h1>
                    <BtnDefaultIcons>
                        <FacebookIcon />
                        <div className="center">Fazer login com o facebook</div>
                    </BtnDefaultIcons>
                    <BtnDefaultIcons>
                        <AlternateEmailIcon />
                        <div className="center">Fazer login com o google</div>
                    </BtnDefaultIcons>

                    <p>OU</p>

                    <form>
                        <div className="form--input">
                            <label>E-mail</label>
                            <input type="email" placeholder="Digite seu e-mail"></input>
                        </div>

                        <div className="form--input">
                            <label>Senha</label>
                            <input type="password" placeholder="Digite sua senha"></input>
                        </div>

                        <BtnDefault>Entrar</BtnDefault>

                        <div className="footerLogin">
                            Não tem uma conta?
                            <Link to="/registrar"> Registre-se</Link>
                        </div>
                    </form>
                </AreaLogin>
            </Route>
        </Switch>

    
    </BrowserRouter>
    
    );
}

export default Login;