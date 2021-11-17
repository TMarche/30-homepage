import React from "react";
import styled from "styled-components";
import { FlexRow } from "./GenericStyled";

const Card = ({ className, text, index }) => {
    return (
        <div className={className}>
            <FlexRow
                style={{
                    backgroundColor: "#111",
                    color: "white",
                    padding: "10px",
                    fontSize: "24px",
                    borderRadius: "10px 10px 0 0",
                }}
            >
                <div>{index}</div>
                <div>{text}</div>
            </FlexRow>
            <div
                style={{
                    padding: "10px",
                    borderRadius: "0 0 10px 10px",
                }}
            >
                <div>Image</div>
                <div>Completed: </div>
            </div>
        </div>
    );
};

export default styled(Card)`
    border-radius: 10px;
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
        0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
`;
