import { Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Social">
            <Descriptions title="Social media" column={6}>
                <Descriptions.Item>
                    <a href="https://twitter.com/geeksesi">
                        <i class="fa fa-twitter"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://gitlab.com/geeksesi">
                        <i class="fa fa-gitlab"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://github.com/geeksesi">
                        <i class="fa fa-github"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://t.me/geeksesi">
                        <i class="fa fa-telegram"></i>
                    </a>
                </Descriptions.Item>
                <Descriptions.Item>
                    <a href="https://geeksesi.ir">
                        <i class="fa fa-rss"></i>
                    </a>
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
