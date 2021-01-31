import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>Activities</h3>
            </Row>

            <>
                <Row>
                    <h4 className="Year">2020</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://olivecademy.com">
                            Team Green Olive{" "}
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        make alive an old project
                        <Row className="sub-tech">
                            <small>Dockerize with laravel 5.8 and node 8</small>
                        </Row>
                        new features
                        <ul>
                            <li>
                                <a>File stream system</a>
                                <Row className="sub-tech">
                                    <small>nodejs</small>
                                    <small>Docker</small>
                                    <small>mysql</small>
                                </Row>
                            </li>
                            <li>
                                <a>Teachers and Admin dashboard</a>
                                <Row className="sub-tech">
                                    <small>Laravel</small>
                                    <small>React</small>
                                </Row>
                            </li>
                            <li>
                                <a>Comment system</a>
                                <Row className="sub-tech">
                                    <small>Laravel</small>
                                    <small>Html & css</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2020</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://payzos.io">
                            Payzos Payment service for Tezos network
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">CTO and BackEnd Developer</h5>
                </Row>
                <Row>
                    <p>
                        <a rel="noopener noreferrer" target="_blank" href="https://payzos.io">
                            Payzos
                        </a>{" "}
                        Tezos is a block chain network (with XTZ currency). this service make an
                        ability to shop owner customers to buy stuff with this currency.
                    </p>
                    <p>
                        Payzos has some extentions for these shop maker software
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/wp-payzos-payment-woocommerce"
                                >
                                    WooCommerce{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>REST API</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-payment-opencart"
                                >
                                    OpenCart{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>REST API</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-magento"
                                >
                                    Magento{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>Composer</small>
                                    <small>MVC</small>
                                    <small>OOP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-prestashop"
                                >
                                    PrestaShop{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>REST API</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
                <Row>
                    <p>
                        Other OpenSource repositories
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos"
                                >
                                    Backend{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>Composer</small>
                                    <small>REST API</small>
                                    <small>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://github.com/nikic/FastRoute"
                                        >
                                            FastRoute
                                        </a>
                                    </small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-frontend"
                                >
                                    Frontrnd{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>React</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/conseil-php"
                                >
                                    ConseilPHP{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>ComposerLib</small>
                                    <small>PHPSpec</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2018 - 2019</h4>
                    <h4 className="Title">OpenSource Projects</h4>
                </Row>
                <Row>
                    <p>
                        Some of OpenSource project wich i had contribute in
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/s-mtz/mangadl_tbot"
                                >
                                    Telegram bot to convert Comic and Manga to PDF
                                </a>
                                <Row className="sub-tech">
                                    <small>PHP</small>
                                    <small>MVC</small>
                                    <small>OOP</small>
                                    <small>Composer</small>
                                    <small>TDD</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/wp-zilon-woocommerce"
                                >
                                    Zilon WooCommerce plugin
                                </a>
                                <Row className="sub-tech">
                                    <small>Wordpress</small>
                                    <small>MVC</small>
                                    <small>REST API</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/LeaderBoardApi"
                                >
                                    Game leaderBoard api system
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>PHP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/QIAU-tg-bot-manager"
                                >
                                    Telegram Cli bot to manage student in Covid-19 pandemic for
                                    Islamic Azad University (computing group)
                                </a>
                                <Row className="sub-tech">
                                    <small>Python</small>
                                    <small>OOP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/kmtqom/search-book-by-isbn"
                                >
                                    Fetch full book detail by ISBN
                                </a>
                                <Row className="sub-tech">
                                    <small>ComposerLib</small>
                                    <small>TDD</small>
                                    <small>Scammer</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">2017</h4>
                    <h4 className="Title">
                        <a href="https://ermile.com/" rel="noopener noreferrer" target="_blank">
                            Ermile
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">Student Backend Developer</h5>
                </Row>
                <Row>
                    <p>
                        something i learend:
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/Ermile/PHP-URL"
                                >
                                    OOP structure in PHP and problem solving skill
                                </a>
                            </li>
                            <li>Multi languages sites with PoEdit</li>
                            <li>Basic DevOps (Nginx and Linux server configuration)</li>
                        </ul>
                    </p>
                </Row>
            </>
        </div>
    );
};
