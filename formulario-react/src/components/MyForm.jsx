import React from "react";
import styles from "../styles/MyForm.module.css";
import { useState } from "react";
const MyForm = ({ user }) => {
  // gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);
    console.log();
    console.log("Enviando o formulário");
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    /* Criando formulário com input de texto e botão de submit */
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleName}
            value={name}
          />
        </div>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleEmail}
            value={email}
          />
        </label>
        <label>
          <span>Descrição</span>
          <textarea
            type="text"
            id="bio"
            placeholder="Enter your Bio"
            onChange={handleBio}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função do sistema</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
