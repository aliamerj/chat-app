import {
  CenterStyle,
  ContainerStyle,
  IconStyle,
  InputStyle,
  Leftstyle,
  LineStyle,
  LoginButtonStyle,
  LoginTitleStyle,
  OrStyle,
  Rightstyle,
  SubmitStyle,
  WrapperStyle,
} from "../../_Styles_/loginPage.style";

const LoginComponent = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div
      style={{
        alignContent: "center",
      }}
    >
      <ContainerStyle>
        <LoginTitleStyle>Choose a Login Method</LoginTitleStyle>
        <WrapperStyle>
          <Leftstyle>
            <LoginButtonStyle method="Google" onClick={google}>
              <IconStyle
                src="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/google.png"
                alt="Login with google"
              />
              Google
            </LoginButtonStyle>
            <LoginButtonStyle method="Facebook">
              <IconStyle
                src="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/facebook.png"
                alt="Login with Facebook"
              />
              Facebook
            </LoginButtonStyle>
            <LoginButtonStyle method="Github">
              <IconStyle
                src="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/github.png"
                alt="Login with Github"
              />
              Github
            </LoginButtonStyle>
          </Leftstyle>
          <CenterStyle>
            <LineStyle />
            <OrStyle>OR</OrStyle>
          </CenterStyle>
          <Rightstyle>
            <InputStyle type="text" placeholder="Username" />
            <InputStyle type="password" placeholder="passowrd" />
            <SubmitStyle type="submit">Login</SubmitStyle>
          </Rightstyle>
        </WrapperStyle>
      </ContainerStyle>
    </div>
  );
};

export default LoginComponent;
