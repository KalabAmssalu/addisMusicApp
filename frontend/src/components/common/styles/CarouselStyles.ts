// CarouselStyles.ts
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color:  #264653;
  &::-webkit-scrollbar {
    display: none;
  }
 
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin: 10px;
  scroll-snap-align: start;
  background-color:  #264653;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(to top, #c33727, #e9c46a);
  }
`;

export const MusicCover = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MusicTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: center;
  color: #e9c46a;
`;

export const ArtistName = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;
