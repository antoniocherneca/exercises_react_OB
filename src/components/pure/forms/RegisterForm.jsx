/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const RegisterForm = () => {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      pass: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return <div></div>;
};

export default RegisterForm;
