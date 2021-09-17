import React from 'react';
import { HeaderArea } from './headerStyled';
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header(){
    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <img src="../../../logo2.png" alt="logo"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home"><HomeOutlinedIcon />Início</Link></li>
                        <li><Link to="/config"><BuildIcon />Configuração</Link></li>
                        <li><Link to="/logout"><ExitToAppIcon />Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;