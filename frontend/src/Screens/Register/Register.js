import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <form className="register_box">
        <div className="register_box-title">Create your account</div>
        <div className="register_box-input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your Name" id="name" />
        </div>
        <div className="register_box-input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="you@example.com" id="email" />
        </div>
        <div className="register_box-input">
          <label htmlFor="Address">Address</label>
          <textarea
            row="7"
            cols="30"
            type="textarea"
            placeholder="Your address"
            id="Address"
          />
        </div>
        <div className="register_box-input">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="********" id="password" />
        </div>
        <div className="register_box-input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" placeholder="********" id="confirmPassword" />
        </div>
        <div>
          <button className="btn" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
