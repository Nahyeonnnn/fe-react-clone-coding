import React from 'react';
import styled from "styled-components";

const footerText=[
    "Album example is © Bootstrap, but please download and customize it for yourself!",
    "New to Bootstrap? Visit the homepage or read our getting started guide."
  ];

const FooterBody=styled.div`
    margin: 50px 8rem 50px 8rem;
    display: flex;
    justify-content: space-around;
`;

const FooterText=styled.p`
    margin:5px;
    color: #788087

`;

const FooterLink=styled.a`
    margin:5px;
`;

const Footer = () => {
    return (
        <FooterBody>
            <div>
                {footerText.map((eachText)=>
                <FooterText>{eachText}</FooterText>
                )}
            </div>
            <FooterLink>Back to top</FooterLink>
        </FooterBody>
    );
};

export default Footer;