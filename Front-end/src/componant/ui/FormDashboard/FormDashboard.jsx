import { useState } from "react";

function FormDashboard({ onTyping }) {

    const handleTyping = (e) => {
      const value = e.target.value;
      
    if (e.target.value.length > 0) {
      onTyping(true);
    } else {
      onTyping(false); 
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleTyping}
          />
          <div id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDashboard;
