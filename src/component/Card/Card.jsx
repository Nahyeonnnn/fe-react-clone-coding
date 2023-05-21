import React from 'react';
import styled from "styled-components";


const CardList = [
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
  ];


  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    /* margin: 100px 8rem 100px 8rem; */
    padding: 100px 8rem 100px 8rem;
    background-color: #efefef;
  `

const CardDiv = styled.div`
    width: 20vw;
    height: 50vh;
    display: inline-block;
    margin-right: 25px;
    margin-bottom: 15px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 3px #959595;

`;

const CardBody=styled.div`
    width: 100%;
    height: 35%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


`

const CardImg = styled.div`
    width: 100%;
    height: 50%;
    background-color: gray;
    border-radius: 5px 5px 0px 0px;
    background-color: #343a40;

`;

const CardText = styled.p`
    font-size: 15px;
    text-align: left;
    margin: 20px 15px 20px 15px;
`;

const CardMini=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 15px 10px 15px;
`;

const CardButton1 = styled.button`    
    background-color: white;
    padding: 4px 8px 4px 8px;
    border-style:solid;
    border-width: thin;
    border-radius: 3px 0px 0px 3px;
    font-size: 14px;
`;

const CardButton2 = styled.button`
    background-color: white;
    padding: 4px 8px 4px 8px;
    border-style:solid;
    border-width: thin;
    border-radius: 0px 3px 3px 0px;
    font-size: 14px;

`;

const CardSmallText = styled.small`
    
`;


const Card = (props) => {
    return (
        <CardContainer>
            {CardList.map((eachCard)=>
                <CardDiv>
                    <CardImg>{eachCard.CardImg}</CardImg>
                    <CardBody>
                        <CardText>{eachCard.CardText}</CardText>
                        <CardMini>
                            <div>
                                <CardButton1>View</CardButton1>
                                <CardButton2>Edit</CardButton2>
                            </div>
                            <CardSmallText>9 mins</CardSmallText>
                        </CardMini>
                    </CardBody>
                </CardDiv>
            )}
        
        </CardContainer>
    );
};

export default Card;