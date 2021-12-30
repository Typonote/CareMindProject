import React, { useState } from "react";
import "Pages/scss/Login.scss";
import SignImage from "Assets/img/SignIn.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 오류 메시지
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onChangeNamehandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameMessage("2글자 이상 입력해주세요");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  };

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const onChangeEmailhandler = (e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다 : )");
      setIsEmail(true);
    }
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const onChangePasswordhandler = (e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다. : )");
      setIsPassword(true);
    }
  };

  return (
    <div className="Login__Container">
      <div className="Login__Wrapper">
        <div className="Image__Card">
          <img src={SignImage} alt="" />
        </div>
        <form className="Login__Card">
          <div className="Validation__Container">
            <div className="Validation__Text-box">
              <label className="Validation__Text">회원명</label>
            </div>
            <input
              className="Validation__Input"
              type="text"
              maxLength="20"
              onChange={onChangeNamehandler}
            />
            {isName ? (
              <div className="Correct__Message">{nameMessage}</div>
            ) : (
              <div className="Error__Message">{nameMessage}</div>
            )}
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
            {isEmail ? (
              <div className="Correct__Message">{emailMessage}</div>
            ) : (
              <div className="Error__Message">{emailMessage}</div>
            )}
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
            {isPassword ? (
              <div className="Correct__Message">{passwordMessage}</div>
            ) : (
              <div className="Error__Message">{passwordMessage}</div>
            )}
          </div>
          <div className="Validation__Container" style={{ height: "8rem" }}>
            <div className="Validation__Text-box">
              <label className="Validation__Text">자기소개</label>
            </div>
            <textarea
              className="Validation__Input"
              style={{ resize: "none", height: "6rem" }}
              rows="3"
              maxlength="512"
            />
          </div>
          <div className="Button__Container">
            <div></div>
            <input
              type="submit"
              value="회원가입"
              className="Login__Button"
              disabled={!(isName && isEmail && isPassword)}
            />

            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
