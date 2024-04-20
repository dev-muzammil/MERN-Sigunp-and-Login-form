import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
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

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      setUser({ email: "", password: "" });
      navigate("/");
    }else{
      return response.status(400).json("Invalid Credentials")
    }
  };

  return (
    <>
      <main>
        <section className=" registration grid-two-cols">
          <section className="registration-image">
            <img src="/images/hero.gif" alt="" />
          </section>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
          </form>
        </section>
      </main>
  </>
  )
}

export default Login
