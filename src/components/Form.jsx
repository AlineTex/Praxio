import React, { useState } from "react";

import "../App.css";

export function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    genero: "",
    data_nascimento: "",
    cidade: "",
    estado: "",
    endereco: "",
  });

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const genero = e.target.genero.value;
    const dataNascimento = e.target.data_nascimento.value;
    const cidade = e.target.cidade.value;
    const estado = e.target.estado.value;
    const endereco = e.target.endereco.value;

    if (
      !nome ||
      !email ||
      !telefone ||
      !genero ||
      !dataNascimento ||
      !cidade ||
      !estado ||
      !endereco
    ) {
      setError(true);
      setSucess(false)
      return;
    } else {
      setError(false);
      setSucess(true)
    }

    setFormData({
      nome,
      email,
      telefone,
      genero,
      data_nascimento: dataNascimento,
      cidade,
      estado,
      endereco,
    });
    console.log(formData);
  };
  return (
    <>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <b>Fórmulário de Clientes</b>
            </legend>
            <br />
            <div className="inputBox">
              <input type="text" name="nome" id="nome" className="inputUser" />
              <label htmlFor="nome" className="labelInput">
                Nome completo
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="email"
                name="email"
                id="email"
                className="inputUser"
              />
              <label htmlFor="email" className="labelInput">
                Email
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="tel"
                name="telefone"
                id="telefone"
                className="inputUser"
              />
              <label htmlFor="telefone" className="labelInput">
                Telefone
              </label>
            </div>
            <p>Sexo:</p>
            <input type="radio" id="feminino" name="genero" value="feminino" />
            <label htmlFor="feminino">Feminino</label>
            <br />
            <input
              type="radio"
              id="masculino"
              name="genero"
              value="masculino"
            />
            <label htmlFor="masculino">Masculino</label>
            <br />
            <input type="radio" id="outro" name="genero" value="outro" />
            <label htmlFor="outro">Outro</label>
            <br />
            <br />
            <label htmlFor="data_nascimento">
              <b>Data de Nascimento:</b>
            </label>
            <input type="date" name="data_nascimento" id="data_nascimento" />
            <br />
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="cidade"
                id="cidade"
                className="inputUser"
              />
              <label htmlFor="cidade" className="labelInput">
                Cidade
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="estado"
                id="estado"
                className="inputUser"
              />
              <label htmlFor="estado" className="labelInput">
                Estado
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="endereco"
                id="endereco"
                className="inputUser"
              />
              <label htmlFor="endereco" className="labelInput">
                Endereço
              </label>
            </div>
            <br />
            <br />
            <input type="submit" name="submit" id="submit"  value='enviar'/>
          </fieldset>
          {error && <p id="error">Preencha todos os Campos!</p>}
          {sucess &&
            <p id="sucess">Dados inseridos com sucesso!</p>
          }
        </form>
      </div>
    </>
  );
}
