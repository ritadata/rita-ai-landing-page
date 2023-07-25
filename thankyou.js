const Header = () => (
  <div className="navbar__container__fluid animate__animated animate__fadeIn">
    <div className="logo__section">
      <img
        src="assets/logo.svg"
        alt="Logo"
        width="100%"
        height="100%"
        className="d-inline-block align-top header__left__logo"
      />
    </div>
    <div className="content__section">
      <h3>Thank you we'll be in touch.</h3>
      <p>
        In the meantime, try out the Rita App to View,
        <br />
        Control and Earn money from your data.
      </p>
    </div>

    <div className="illustration__wrapper__download">
      <div className="input__section__primary"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="thankyou__container__wrapper">
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
