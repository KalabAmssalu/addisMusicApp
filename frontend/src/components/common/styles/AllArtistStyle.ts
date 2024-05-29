// CarouselStyles.ts
import styled from 'styled-components';

export const ArtistAvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ArtistAvatarItem = styled.div`
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
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(to top, #c33727, #e9c46a);
  }
  @media (max-width: 768px){
    width: 300px;
   
  }
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
