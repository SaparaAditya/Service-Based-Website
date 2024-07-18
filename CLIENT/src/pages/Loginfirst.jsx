import { NavLink } from "react-router-dom";

export const Loginfirst = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">Login First</h2>
          {/* <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p> */}
          <br /><br />
          <div className="btns">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/">Home</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};