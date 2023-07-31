const mixpanelToken = "9a9432edda95d53541aa76fd98bdb0bb";
mixpanel.init(mixpanelToken, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

const Header = () => {
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleJoinBetaClick = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      mixpanel.track("Personal AI", {
        email: email,
      });

      // Redirect to the 'thankyou' page
      window.location.href = "./thankyou";
    } else {
      // Invalid email address, show an error message or take appropriate action
      setIsValidEmail(false);
    }
  };

  return (
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
          and is always guiding you. Whether it's helping you make big
          decisions, giving you tips to stay healthy
          <br />
          and more productive, or simply offering tailored recommendations, Rita
          Personal AI is there
        </p>

        <div className="input__section">
          <div className="input-container animated fadeIn">
            <input
              type="text"
              className={`text-input-primary ${isValidEmail ? "" : "error"}`}
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(true); // Reset validation status on input change
              }}
            />
            <a className="demo-button" href="#" onClick={handleJoinBetaClick}>
              Join Beta
            </a>
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
            <div className="input-icon">
              <img
                src="assets/smiley-icon.svg"
                alt="Send"
                width="100%"
                height="100%"
              />
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
};

function App() {
  return (
    <div className="container__wrapper">
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
