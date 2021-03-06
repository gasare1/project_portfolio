import styled from "styled-components";

export const Video = styled.div`
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(to bottom, #232526, #414345); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: #232a34;
`;
export const HomeContainer = styled.div`
  background: #0c0c0c;
  padding: 0 30px;
  height: 1024px;
  position: relative;

  margin-top: -6rem;
  @media screen and (max-width: 780) {
    height: 1366px;
    width: 1024px;
    margin-top: 6rem;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
export const HomeContent = styled.div`
  z-index: 3;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 100px;
  flex-direction: column;
  @media screen and (max-width: 780) {
  }
`;
export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20rem;
  font-family: "Encode Sans SC", sans-serif;
  z-index: 99;
  margin-top: 600px;
  @media screen and (max-width: 780) {
    margin: 20px;
    justify-content: left;
    display: flex;
    align-items: left;
  }
`;
export const HomeP = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(60, end), blink-caret 0.65s step-end 8;
  white-space: nowrap;
  border-right: 0.15em solid transparent;
  z-index: 99;
  @media screen and (max-width: 780) {
    margin-left: -12rem;
    justify-content: center;
    display: flex;
    align-items: center;
    display: none;
  }
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 500px;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-right: 0.15em solid orange;
    }
  }
  @media screen and (max-width: 700) {
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  @media screen and (max-width: 150) {
    margin-left: -100px;
  }
`;
export const HomeText = styled.div`
  color: #fff;
  align-items: center;
  align-content: center;
  float: right;
  margin-top: 20rem;
  z-index: 99;
  @media screen and (max-width: 1024px) {
    float: left;
  }
`;
export const HomeContentP = styled.p`
  font-size: 20px;
  z-index: 99;
  font-family: "Indie Flower", cursive;
  @media screen and (max-width: 1054px) {
    margin: auto;
  }
`;
