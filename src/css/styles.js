import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    max-width: 8000px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const BoxTasks = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0px;
    /* border: 1px solid #ddd; */
`;

export const CardTask = styled.div`
    display: grid;
    grid-template-columns: 95% 3%;
    grid-column-gap: 2%;

    margin-top: 20px;
   
`;

export const CardTitle = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: #AF6;
`;

export const CardNotFound = styled.div`
    width: 100%;
    background: #ddd;
    color: #333;
    text-align: center;
    padding: 20px 0px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
`;

export const CardDescription = styled.span`

    font-weight: 500;
    font-size: 14px;
    color: #FFF;

`;

export const CardPoints = styled.span`

color: #AF6;
width: 30px;
height: 30px;
display: block;
background: #000;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
border: 1px solid #AF6;

`;


export const CardTaskContent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 15px;
    width: 100%;
    background: #333;
`;

export const CardTaskButtons = styled.div`
display: flex; 
flex-direction: column;
justify-content: space-around;
color: #fff;
align-items: center;
/* border: 1px solid blue; */

.btn-trash{
    &:hover{
        cursor: pointer;
        color: red;
    }
}

.btn-edit{
    &:hover{
        cursor: pointer;
        color: #c8c8c8;
    }
}
`;

export const ButtonCreateTask = styled.span`
    width: 20%;
    border-radius: 4px;
    background: transparent;
    margin-left: auto;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    padding: 15px;

    margin-top: 20px;
    cursor: pointer;

    transition: background 0.2s ease-in-out;

    &:hover{
        background: #757c3e;
    }
`;

export const FormAddTask = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    transition: opacity 0.3s ease-in-out;

    opacity: ${props => props.show ? '1' : '0'};
`;

export const Input = styled.input`

    background: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    border-bottom: 1px solid #eee;
    height: 30px;
    padding: 0px 10px;
    font-size: 14px;
    color: #AF6;

    &::placeholder{
        color: grey;
        opacity: 0.6;
    }

`;

export const BtnAddTask = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    border-radius: 4px;
    padding: 0px 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    height: 30px;
    transition: opacity 0.2s ease-in-out;

    &:hover{
        opacity: 0.6;
    }
`;



