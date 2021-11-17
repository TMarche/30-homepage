import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2rem;
`;

export const Spacer = styled.div`
    margin: 2rem;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
