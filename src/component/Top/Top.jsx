import React from 'react';
import styled from "styled-components";

const TopBody=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px 30px 90px 30px;
`;

const TopButton = styled.button`
    background-color: ${(props)=>(props.ButtonColor)};
    border: none;
    margin-right: 4px;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 9px 10px 9px;
`;

const TopTitle=styled.h2`
    margin-bottom: 0px;
    font-size: 45px;
    font-weight: lighter;
`;

const TopText=styled.p`
    width: 650px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 25px;
    text-align: center;
    color: #788087
`;

const Top = (props) => {
    return (
        <TopBody>
            <TopTitle>{props.TopTitle}</TopTitle>
            <TopText>{props.TopText}</TopText>
            <div>
                <TopButton ButtonColor={props.TopButton}>Main call to action</TopButton>
                <TopButton ButtonColor={props.TopButton2}>Secondary action</TopButton>
            </div>
        </TopBody>
    );
};

export default Top;