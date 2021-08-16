import React from "react";
import "./loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <div className="content">
                <div className="outercircle">
                    <div className="innercircle"></div>
                </div>
                <span>RSM</span>
            </div>
        </div>
    );
}
