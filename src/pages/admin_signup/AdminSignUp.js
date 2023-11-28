import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { Button } from "react-bootstrap";
import { postAdminUser } from "../../axiosHelper";
import { toast } from "react-toastify";
const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const AdminSignUp = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Passwords  do not match");
    }
    const pending = postAdminUser(rest);

    toast.promise(pending, {
      pending: "please wait",
    });

    const { status, message } = await pending;

    toast[status](message);
  };

  const inputs = [
    {
      label: "First name",
      name: "fname",
      placeholder: "Sam",
      type: "text",
      required: true,
    },
    {
      label: "Last name",
      name: "lname",
      placeholder: "Smith",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "0406239250",
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "******",
      type: "password",
      required: true,
    },
  ];
  return (
    <div className="bg-dark p-3 text-light">
      <Form
        className="form-center border shadow-lg p-4 rounded mt-5"
        onSubmit={handleOnSubmit}
      >
        <h2>Create New admin</h2>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
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
  );
};

export default AdminSignUp;
