import React, { useState } from "react";
import "Pages/scss/Login.scss";
import LoginImage from "Assets/img/SignIn.jpg";
import { AuthApi } from "Api/AuthApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeEmailhandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordhandler = (e) => {
    setPassword(e.target.value);
  };

  function onClickSubmitHandler(e) {
    e.preventDefault();
    AuthApi.Request_Login("/api/authentication", {
      userType: "u",
      emailAddr: email,
      passCode: password,
    })
      .then((response) => {
        const [Token, LogIn] = [response.data.token, response.data.logIn];

        // eslint-disable-next-line no-unused-expressions
        LogIn === "true"
          ? (localStorage.setItem("access_token", Token),
            toast.success("로그인 성공!", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2500,
            }),
            navigate("/"))
          : alert("error");
      })
      .catch((error) => {
        toast.error("로그인 실패", {
          autoClose: 2500,
        });
      });
  }

  return (
    <div className="Login__Container">
      <div className="Login__Wrapper">
        <div className="Login__Image__Card">
          <img src={LoginImage} alt="" />
        </div>
        <form className="Login__Card">
          <div className="Validation__Container">
            <div className="Validation__Text-box">
              <label className="Validation__Text">이메일</label>
            </div>
            <input
              className="Validation__Input"
              type="text"
              onChange={onChangeEmailhandler}
            />
          </div>

          <div className="Validation__Container">
            <div className="Validation__Text-box">
              <label className="Validation__Text">비밀번호</label>
            </div>
            <input
              className="Validation__Input"
              type="password"
              minLength="8"
              onChange={onChangePasswordhandler}
            />
          </div>
          <div className="Button__Container">
            <div></div>
            <input
              type="submit"
              value="로그인"
              className="Login__Button"
              disabled={email !== "" && password !== "" ? false : true}
              onClick={onClickSubmitHandler}
            />
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
