import DotedLoader from "./DotedLoader";
import React from "react";

export default function Button({
    className,
    label,
    onClick,
    loading,
    disabled,
    ...props
}) {
    return (
        <button
            className={`px-4 py-2.5 flex justify-center rounded-lg2 font-semibold min-w-32 ${
                disabled
                    ? "cursor-not-allowed text-grey3 bg-grey14 border border-grey3"
                    : "text-gray-50 bg-rwc-primary1"
            } text-white hover:bg-opacity-95 transition-all duration-300 ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <div className="">
                    <DotedLoader fill={`${props?.loaderFill ?? "#fff"}`} />{" "}
                </div>
            ) : (
                label
            )}
        </button>
    );
}
