import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    @media all and (max-width: 768px){
        margin: 1px 26px;
    
    }


`

export const Container = styled.div`
    width: 534px;
    height: 500px;
    border-radius: 35px;
    margin-top: 10px;
`

export const Title = styled.h2`
    text-align: center;
    margin-top: 12px;
    font-size: 38px;
`
export const UlTasks = styled.ul`
    list-style-type: none;
`


