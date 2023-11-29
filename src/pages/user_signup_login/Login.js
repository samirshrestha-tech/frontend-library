import React, { useRef } from "react";
import { MainLayOut } from "../../components/layout/MainLayOut";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../axiosHelper";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    if (!email || !password) {
      return toast.error("Both inputs must be filled");
    }

    // axios

    const { status, message } = await loginUser({ email, password });
    toast[status](message);
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
      passref: emailRef,
    },

    {
      label: "Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
      passref: passwordRef,
    },
  ];
  return (
    <MainLayOut>
      <div>
        {" "}
        <div className="bg-dark p-3 text-light">
          <Form
            className="form-center border shadow-lg p-4 rounded mt-5"
            onSubmit={handleOnSubmit}
          >
            <h2>Create New admin</h2>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            {/* buutons */}
            <div className="d-grid mt-2">
              <Button variant="primary" type="submit" value="submit">
                {" "}
                Create new admin{" "}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </MainLayOut>
  );
};

export default Login;
