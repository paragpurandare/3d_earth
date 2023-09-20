import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;     
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 65px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

styled.h3`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Save Mother Earth</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
        You can help us cool off our world and have it go back to it's best
        state ever by donating to help our only world and our beloved EARTH!
        Be cool and let the earth be cool. Let the ice burgs to live. Globe is
        warming and will set to fire. Stop polluting, it will cost extra.
      </Paragraph>
      <DonateButton>Donate</DonateButton>
      {/* <MadeBy>
        <u>Made By:</u> Islem Maboud
      </MadeBy> */}
    </TopSectionContainer>
  );
}
