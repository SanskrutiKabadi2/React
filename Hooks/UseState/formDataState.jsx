import { useState } from "react";

function FormDataState() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <h3>{formData.name}</h3>
      <h3>{formData.email}</h3>
      <h3>{formData.password}</h3>
    </>
  );
}

export default FormDataState;
