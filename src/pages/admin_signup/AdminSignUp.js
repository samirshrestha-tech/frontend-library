import React from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { Button } from "react-bootstrap";

const AdminSignUp = () => {
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
      <Form className="form-center border shadow-lg p-4 rounded mt-5">
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
  );
};

export default AdminSignUp;
