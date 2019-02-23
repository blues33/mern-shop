import React, { useEffect } from "react";

import Input from "../../Components/Input";

const SingIn = () => {
  document.bgColor = "#BFD9F2";

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Вход</h1>
        <hr />
        <form>
          <label htmlFor="email">
            Email
            <Input name="email" placeholder="email" />
          </label>
          <label htmlFor="password">
            Password
            <Input name="password" placeholder="password" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
