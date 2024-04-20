import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      setUser({ username: "", email: "", password: "" });
      navigate("/login");
    }else{
      return response.status(400).json("Invalid Credentials")
    }
  };

  return (
    <>
      <main>
        <section className="registration grid-two-cols">
          <section className="registration-image">
            <img src="/images/hero.gif" alt="" />
          </section>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button className="btn btnr" type="submit">Register</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
