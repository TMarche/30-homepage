import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2rem;
`;

export const Spacer = styled.div`
    padding: 2rem;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ZoomImage = styled.div`
    height: ${(props) => (props.height ? props.height : "200px")};
    background-image: url(${(props) => props.image});
    width: 100%;
    background-size: cover;

    transition: transform 0.5s ease;

    :hover {
        transform: scale(1.2);
    }
`;
