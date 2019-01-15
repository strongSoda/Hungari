import styled from 'styled-components';

// this is a styled component a.k.a truly resuable component as it carries it's css along.
export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid #009ffd;
    color: #009ffd;
    border-radius: 0.5rem;
    padding: 0.2 rem 0.5rem;
    cursor: pointer; 
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #009ffd;
        color: #2a2a72;
    } 
    &:focus {
        outline: none;
    }
`