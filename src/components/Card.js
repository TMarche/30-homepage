import React from "react";
import styled from "styled-components";
import { FlexRow, ZoomImage } from "./GenericStyled";

const Card = ({ className, text, index, image, link, completionDate }) => {
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
            <div style={{ overflow: "hidden" }}>
                <a href={link}>
                    <ZoomImage image={image} height="200px" />
                </a>
            </div>
            <div
                style={{
                    padding: "10px",
                    borderRadius: "0 0 10px 10px",
                    backgroundColor: "#111",
                    color: "white",
                }}
            >
                <div>Completed: {completionDate}</div>
            </div>
        </div>
    );
};

export default styled(Card)`
    border-radius: 10px;
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
        0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
`;
