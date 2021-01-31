import { Descriptions, Row } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Education">
            <Descriptions title="Education" column={1} layout="vertical">
                <Descriptions.Item label="Computer enginierring">
                    Islamic azad university at Qom,Iran (From 2018)
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
