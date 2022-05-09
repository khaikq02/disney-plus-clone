import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" />
          <SignUp>Get all there</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odit
            asperiores laboriosam dolor quas voluptas aut distinctio explicabo
            necessitatibus praesentium! Eaque, delectus. Culpa sequi deserunt
            cupiditate ex nihil, pariatur obcaecati?
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Content = styled.div``;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  cursor: pointer;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0px 12px 0px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 12px;
`;
