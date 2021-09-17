import styled from 'styled-components';

export const HeaderArea = styled.div`
    height: 10vh;
    width: 100%;
    background-image: linear-gradient(to right, #FE5D26, #370d44);
    color: #fff;

    .container{
        height: 100%;
        padding: 5px 20px;
        display:flex;
        align-items:center;
        justify-content: space-between;
        a{
            text-decoration: none;
            cursor: pointer;
            color:#fff;
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        a:hover{
            color: #F5BB00;
        }
    }
    .container .logo img {
        width: 45px;
    }

    .container nav ul{
       display:flex;
       list-style: none;
       gap: 0.9rem;
    }
`