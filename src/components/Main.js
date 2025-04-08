import React, { Component } from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import Form from "./form";
import Tasks from "./tasks";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [
      "Fazer café",
      "Estudar React",
      "Fazer exercícios",
      "Ler um livro",
      "Assistir a um filme",
    ],
    index: -1,
  };
  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      this.setState({ tarefas: JSON.parse(tarefas) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) != -1) return;
    if (index === -1) {
      const novasTarefas = [...tarefas];
      novasTarefas.push(novaTarefa);
      this.setState({ tarefas: novasTarefas, novaTarefa: "" });
    } else {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;
      this.setState({ tarefas: novasTarefas, novaTarefa: "", index: -1 });
    }
  };

  handleDeleteTask = (event, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({ tarefas: novasTarefas });
  };

  handleEditTask = (event, index) => {
    const { tarefas } = this.state;
    this.setState({
      index: -1,
      novaTarefa: tarefas[index],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tasks
          tarefas={tarefas}
          handleDeleteTask={this.handleDeleteTask}
          handleEditTask={this.handleEditTask}
        />
      </div>
    );
  }
}
