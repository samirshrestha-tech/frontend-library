import React from "react";
import { Form } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { Button } from "react-bootstrap";

const AdminSignUp = () => {
  const inputs = [
    {
      label: "Fname",
      name: "fname",
      placeholder: "",
    },
  ];
  return (
    <div>
      <Form className="form-center border shadow-lg p-4 rounded">
        <h2>Create New admin</h2>
        <CustomInput />

        {/* buutons */}

        <div className="d-grid mt-2">
          <Button variant="primary" type="submit">
            {" "}
            Create new admin{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminSignUp;
