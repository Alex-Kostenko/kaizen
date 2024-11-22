"use client";

import styled from "@emotion/styled";

export const StyledKaizen = styled.section`
  max-width: 1180px;
  margin-inline: auto;
  margin-top: 64px;
  display: grid;
  grid-template-columns: auto 482px;
  justify-content: space-between;
  position: relative;

  > img {
    width: 482px;
    height: 480px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center center;
  }
`;

export const Container = styled.article`
  display: block;
`;

export const Header = styled.h1`
  color: var(--black);
  font-size: 128px;
  font-weight: 700;
  letter-spacing: 41px;
  line-height: 1.67;
  position: relative;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 97.5px;
    letter-spacing: 0.16em;
  }

  > span {
    color: var(--dark-gray);
    font-weight: 200;
    letter-spacing: 0.16em;
    line-height: 156.03px;

    @media (max-width: 768px) {
      font-size: 80px;
      line-height: 97.52px;
      letter-spacing: 0.02em;
    }
  }
`;

export const Quote = styled.p`
  font-variant: small-caps;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  position: absolute;
  color: var(--black);
  letter-spacing: 1.6px;
  bottom: 10px;
  word-spacing: 3.9px;
`;

export const Japanese = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 18px;
  font-family: "Fira Sans Condensed";
`;

export const Text = styled.p`
  font-size: 24px;
  font-variant: small-caps;
  font-weight: 300;
  line-height: 29px;
  width: 66%;
  letter-spacing: 2.5px;
  word-spacing: -4px;
`;

export const Cover = styled.div`
  position: absolute;
  top: 16px;
  left: 287px;

  > img {
    width: 100%;
    height: 100%;
  }
`;