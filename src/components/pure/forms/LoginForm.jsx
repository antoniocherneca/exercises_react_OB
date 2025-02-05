/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginForm = () => {
  const initialCredentials = [
    {
      user: "",
      pass: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);

  return <div></div>;
};

export default LoginForm;
