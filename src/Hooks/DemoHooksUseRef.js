import React, { useState, useRef } from "react";

//useRef Hook dùng để DOM đến component hoặc để lưu  giá trị sau mỗi lần setState giá trị vẫn giữ nguyên(truy xuất thông quá .current)
export default function DemoHooksUseRef() {
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);

  let userName = useRef("");
  const [userLogin, setUserLogin] = useState({ userName: "" });

  const handleLogin = () => {
    // console.log("inputUserName: ", inputUserName.current.value);
    // console.log("inputPassword: ", inputPassword.current.value);

    console.log("userName", userName.current);
    console.log("userLogin", userLogin.userName);
    userName.current = "abc";
    setUserLogin({
      userName: userName.current,
    });
  };
  return (
    <div className="container">
      <h2>Login </h2>
      <div className="from-group">
        <h3> UserName </h3>
        <input
          ref={inputUserName}
          type="text"
          className="form-control"
          name="userName"
          placeholder=""
        />
      </div>
      <div className="from-group">
        <h3> Password </h3>
        <input
          ref={inputPassword}
          type="text"
          className="form-control"
          name="password"
          placeholder=""
        />
      </div>
      <div className="from-group">
        <button
          className="btn btn-primary  mt-3"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
