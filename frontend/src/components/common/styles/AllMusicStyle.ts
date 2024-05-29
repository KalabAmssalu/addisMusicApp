import styled from 'styled-components';

export const PageContainer = styled.div`
    display: grid;
    scroll-behavior: smooth;
    justify-content: center;
    align-items: center;
    grid-template-columns: 30% 60%;
    width: 100%;
    height: 100dvh;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        padding-top: 2rem;
        margin-bottom: 1rem;
        height: auto;
    }
`;

export const SideSearchContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    border: 2px solid;
    gap: 0.5rem;
    border-image: linear-gradient(to right, #c33727, #e9c46a);
    border-image-slice: 1;
    margin-right: 1rem;
    height: 80vh;
    flex-direction: column;
    @media (max-width: 768px) {
       
        height: auto;
        margin-right: 0;
        border: none;
        border-bottom: 2px solid;
        border-image: linear-gradient(to right, #c33727, #e9c46a);
        border-image-slice: 1;
        padding-top: 10px;
    }
`;

export const MainContainer = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 1rem;
        height: 100vh;
        padding-top: 5rem;
        overflow-y: scroll;
        scroll-snap-type: mandatory;
        scroll-behavior: smooth;       
        @media (max-width: 768px){
            padding: 0.5rem;
            padding-top: 3rem;
        }
`;
