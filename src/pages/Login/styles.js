import styled from "styled-components";

export const Login = styled.div`
.form-div{
    background-color:rgba(72,72,72,0.4);
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 35px;
    padding-bottom: 50px;
    width: 450px;
    float: left;
    left:50%;
    position: absolute;
    margin-top:30px;
    margin-left: -260px;
    -moz-border-radius:7px;
    -webkit-border-radius: 7px;
}
.link{
    margin-top: 120px;
    text-align: center;
    font-size: 18px;
}

@media only screen and (max-width: 720px) {
    .form-div{
        left: 5%;
        margin-right: 3%;
        width: 88%;
        margin-left: 0;
        padding-left: 3%;
        padding-right: 3%;
    }
}
`
