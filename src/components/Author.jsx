import React, { useEffect, useState } from "react";
import "./Author.css";

import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Author = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  console.log(login.username, login.password);
  console.log(login);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('')

  const authorF = async (e) => {
    setIsLoading(true);
    spaceInput()
    spaceInputvalue()
    try {
      const response = axios.post(
        "https://codify-teens.vercel.app/login/",
        login
      );
      const data = await response;
      console.log(data);
      if (data.status === 200) {
        alert("Вы успешно авторизовались!");
        console.log("Вы успешно авторизовались!");
      }
      if (data.status === 404) {
        alert("Проблемы с сервером");
        console.log("Проблемы с сервером");
      }
    } catch (e) {
      alert("Неверный логин или пароль!")
    } finally {
      setIsLoading(false);
    }
  };

  const authF = (field, value) => {
    spaceInputvalue()
    setLogin((previousLogin) => {
      return {
        ...previousLogin,
        [field]: value,
      };
    });
  };



  const spaceInputvalue = (e) => {
    setValue(login)

  }

  const spaceInput = (e) => {
    if(value === ''){
      alert('Логин и пароль не могут быть пустыми!')
      return

    } else {
      return
    }
  }

  return (
    <div className="main">
      <h1>codify</h1>
      <div className="card">
        &nbsp;
        <div className="inputs">
          <TextField
            label="login"
            variant="outlined"
            type="text"
            value={login.username}
            onChange={(e) => authF("username", e.target.value) }
          />
          &nbsp;
          <TextField
            label="password"
            type="password"
            value={login.password}
            onChange={(e) => authF("password", e.target.value)}
          />
        &nbsp;
        <div className="space"></div>
          {isLoading && (
        <div className="loading">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
        &nbsp;
        </div>
        <Button disabled={isLoading} type="submit" onClick={authorF}>
          Отправить
        </Button>
      </div>
      
    </div>
  );
};

export default Author;
