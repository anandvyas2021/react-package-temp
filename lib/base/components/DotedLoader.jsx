import React from "react";

export default function DotedLoader({ className, fill, ...props }) {
    return (
        <svg
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            className={className}
            style={{
                display: "inlineBlock",
                height: "15px",
                width: "30px",
            }}
        >
            <circle fill={fill} stroke="none" cx="10" cy="60" r="15">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                ></animate>
            </circle>
            <circle fill={fill} stroke="none" cx="50" cy="60" r="15">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2"
                ></animate>
            </circle>
            <circle fill={fill} stroke="none" cx="90" cy="60" r="15">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"
                ></animate>
            </circle>
        </svg>
    );
}
