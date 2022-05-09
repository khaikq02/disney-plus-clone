import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="./images/bg-img.jpg" alt="" />
      </Background>
      <ImgTitle>
        <img src="./images/pixar-bao.png" alt="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, id?
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, asperiores
        distinctio explicabo omnis corporis delectus doloremque inventore
        placeat temporibus! Alias quo unde delectus consequatur animi error
        eius, vel mollitia laborum?
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  margin-right: 22px;
  border: none;
  background-color: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;
  height: 56px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  span {
    text-transform: uppercase;
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
  min-height: 20px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
