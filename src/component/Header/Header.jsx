import React from 'react';
import styled from 'styled-components';
import {AiOutlineCamera} from "react-icons/ai";
import {BsList} from "react-icons/bs";

const ContactButton=["Follow on Twitter","Like on Facebook","Email me"];
const HeaderAbout="Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.";

const HeaderBody = styled.div`
    background-color: #343a40;
    color: white;
    display: block;
    padding: 0.5rem 13rem 0 13rem;
    
`;

const HeaderHidden=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5vh;
`;

const HeaderTitle = styled.h3`
    font-size: 25px;
    margin: 0px;
`;

const HeaderFirst = styled.div`
    width: 60%;
`;

const HeaderSecond = styled.div`
    width: 30%;
    margin-left: 5vw;
`;

const HeaderText = styled.p`
    color: #788087
`;

const HeaderTitle2 = styled.h3`
    font-size: 20px;
    margin-left: 5px;
`;

const ContactLink = styled.a`
    display: flex;
`;

const HeaderBar= styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const BarList = styled.div`
    display: flex;
    align-items: center;
`;

const ListButton=styled.button`
    height: 80%;
    background-color: #343a40;
    border-color: white;
    border: 1px solid #5d646b;
    border-radius: 4px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

//343a40 header색ㄱ낄

const Header = (props) => {
    return (
        <HeaderBody>
            <HeaderHidden>
                <HeaderFirst>
                    <HeaderTitle>About</HeaderTitle>
                    <HeaderText>{HeaderAbout}</HeaderText>
                </HeaderFirst>
                <HeaderSecond>
                    <HeaderTitle>Contact</HeaderTitle>
                    {ContactButton.map((eachButton)=>(
                        <ContactLink>{eachButton}</ContactLink>
                    ))}
                </HeaderSecond>
            </HeaderHidden>
            
            <HeaderBar>
                <BarList>
                    <AiOutlineCamera size='25px'></AiOutlineCamera>
                    <HeaderTitle2>Album</HeaderTitle2>
                </BarList>
                <ListButton>
                    <BsList size='30px' color='#5d646b'></BsList>
                </ListButton>
                
            </HeaderBar>
        </HeaderBody>
    );
};

export default Header;