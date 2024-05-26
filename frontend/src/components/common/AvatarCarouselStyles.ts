import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: #264653;
  &::-webkit-scrollbar {
    display: none;
  }
  justify-content: center;
  @media (max-width: 1024px) {
    justify-content: start;
        }
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  margin: 10px;
  scroll-snap-align: start;
  background-color: #264653;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ArtistAvatar = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
`;

export const ArtistName = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-top: 5px;
`;
