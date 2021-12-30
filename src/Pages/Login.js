import React, { useState } from "react";
import "Pages/scss/Login.scss";
import LoginImage from "Assets/img/SignIn.jpg";
import { AuthApi } from "Api/AuthApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [type, setType] = useState("U");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeTypehandler = (e) => {
    setType(e.target.value);
  };

  const onChangeEmailhandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordhandler = (e) => {
    setPassword(e.target.value);
  };

  function onClickSubmitHandler(e) {
    e.preventDefault();
    AuthApi.Request_Login("/data/data.json", {
      userType: type,
      emailAddr: email,
      passCode: password,
    })
      .then((response) => response.json())
      .then((response) => {
        const [Token, LogIn] = [
          response.data[0].token,
          response.data[0].isLogin,
        ];

        // eslint-disable-next-line no-unused-expressions
        LogIn === "true"
          ? (localStorage.setItem("token", Token), navigate("/"))
          : alert("error");
      })
      .catch((error) => {
        alert("error");
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
              <p className="Validation__Text">유저타입</p>
            </div>
            <div className="Radio__Container">
              <label htmlFor="user" className="Validation__Text">
                유저
              </label>
              <input
                className="Type__Radio"
                type="radio"
                id="user"
                value="U"
                name="type"
                onClick={onChangeTypehandler}
                defaultChecked
              />
              <label htmlFor="admin" className="Validation__Text">
                관리자
              </label>
              <input
                className="Type__Radio"
                type="radio"
                id="admin"
                value="P"
                name="type"
                onChange={onChangeTypehandler}
                s
              />
            </div>
          </div>

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
