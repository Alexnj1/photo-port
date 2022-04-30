import React, { useState } from "react";

function Contactform() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value }) 
    // takes each dynamic form state name in the form state object based on the event target and sets it equal to that target's value
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange}></input>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange}></input>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}></textarea>
        </div>

        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default Contactform;
