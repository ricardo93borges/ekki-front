import React from "react";
import logo from "./logo.svg";
import "milligram";
import Modal from "./components/modal/modal";

function App() {
    return (
        <div className="App">
            <div className="container">
                <section className="row">
                    <div className="column" style={{ padding: 0 }}>
                        <h2
                            className="float-left"
                            style={{ margin: 0, marginLeft: "15px" }}
                        >
                            EKKI
                        </h2>
                    </div>
                    <div className="column" style={{ padding: 0 }}>
                        <ul
                            className="float-right"
                            style={{
                                listStyle: "none",
                                margin: 0,
                                height: "100%",
                                padding: "0 10px",
                                backgroundColor: "#9b4dca"
                            }}
                        >
                            <li style={{ margin: 0, marginTop: "10px" }}>
                                <a style={{ color: "#FFF" }}>Ricardo Borges</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section
                    className="row balance"
                    style={{
                        padding: "30px 0",
                        backgroundColor: "#9b4dca",
                        color: "#FFF"
                    }}
                >
                    <div
                        className="column column-50 column-offset-25"
                        style={{ textAlign: "center" }}
                    >
                        <span style={{ fontSize: "5em" }}>1000,</span>
                        <span style={{ fontSize: "2em" }}>00</span>
                    </div>
                </section>

                <div className="row">
                    <a
                        style={{
                            color: "#606c76",
                            padding: "5px",
                            borderBottom: "3px solid #9b4dca"
                        }}
                    >
                        Transações
                    </a>
                    <a
                        style={{
                            color: "#606c76",
                            padding: "5px",
                            borderBottom: "3px solid #9b4dca"
                        }}
                    >
                        Contatos
                    </a>
                </div>

                <div className="row">
                    <div className="column">
                        <button className="float-right">Transferir</button>
                    </div>
                </div>

                <section className="row transactions">
                    <div className="column">
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Valor</th>
                                    <th>Para</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01/07/2019</td>
                                    <td>R$ 50.00</td>
                                    <td>Jon Snow</td>
                                    <td>Concluído</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="row">
                    <div className="column">
                        <button className="float-right">Adicionar</button>
                    </div>
                </div>
                <section className="row contacts">
                    <div className="column">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jon Snow</td>
                                    <td>
                                        <button className={"float-right"}>
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <Modal display={"none"}>
                    <p>modal content</p>
                </Modal>
            </div>
        </div>
    );
}

export default App;
