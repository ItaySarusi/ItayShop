import React from 'react';
import {FooterContainer, SocialIcon, Title} from "./footer.styles";
import {Row} from "../../pages/order/order.styles";


const Footer = () => {
    return (
        <footer className="h-5">
            <FooterContainer>
                <Row>
                    <Title className='uppercase'>Find us on</Title>
                    <div className="social-icons  rounded ml-4">
                        <a href="https://twitter.com/FutkaR6" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon='twitter'/>
                        </a>
                        <a href="https://www.facebook.com/itay.sarusi.9" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon='facebook'/>
                        </a>
                        <a href="https://www.instagram.com/itaysarusi/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon='instagram'/>
                        </a>
                        <a href="https://www.linkedin.com/in/itay-sarusi-4835a2223/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon='linkedin'/>
                        </a>
                    </div>
                    <div>All rights reserved to Itay Sarusi</div>
                </Row>
            </FooterContainer>
        </footer>
    )
}


export default Footer