import styled from "styled-components";

const MainModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .modal-wrapper{
        min-width:70%;
        max-width: 85%;
        min-height: 200px;
        max-height: 400px;
        background-color: white;
        border-radius:15px;
        padding-bottom: 10px;
        .topbar{
            display: flex;
            padding: 5px;
            justify-content: space-around;
            align-items: center;
            background-color: red;
            border-radius: 15px 15px 0 0;
            color: white;
            h2{
                width:90%;
                text-align:center;
            }
            span{
                color: white;
                font-size:1.2rem;
                text-align: right;
                cursor:pointer;
                border: solid 2px rgba(255,255,255,1);
                padding:5px 10px;
                border-radius: 12px;
            }
        }
    }
    .body{
        max-width:100%;
        max-height:300px;
        overflow: auto;
        padding:10px 20px;
        li{
            margin-bottom:10px;
        }
    }
 
`;

export default MainModalContainer;