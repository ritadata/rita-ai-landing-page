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
      <h1>
        Your Personal AI
        <br />
        Advisor
      </h1>
      <p>
        Meet our Personal AI, your very own smart helper! Rita is like a wise
        friend who truly understands you
        <br />
        and is always guiding you. Whether it's helping you make big decisions,
        giving you tips to stay healthy
        <br />
        and more productive, or simply offering tailored recommendations, Rita
        Personal AI is there
      </p>

      <div className="input__section">
        <div className="input-container animated fadeIn">
          <input
            type="text"
            className="text-input-primary"
            placeholder="Email Address"
          />
          <a className="demo-button">Join Beta</a>
        </div>
      </div>
    </div>

    <div className="illustration__wrapper">
      <div className="input__section__primary">
        <div className="input-container send__email__container animated fadeIn">
          <input
            type="text"
            className="text-input"
            placeholder="Ask me any question"
          />
          <div class="input-icon">
            <img src="assets/smiley-icon.svg" alt="Send" width="100%" height="100%" />
          </div>
          <div className="demo-button flex-button">
            <a>Send </a>
            <img src="assets/send.svg" alt="Send" width="40%" height="40%" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="container__wrapper">
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
