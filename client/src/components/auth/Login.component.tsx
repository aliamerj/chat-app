import "../../_Styles_/login.style/loginStyle.css";
import Google from "../../_Styles_/login.style/images/icons/icon-google.png";
import {
  ContainerStyle,
  FacebookButton,
  FacebookStyle,
  FieldContainerStyle,
  FieldTitleStyle,
  FormStyle,
  GoogleButton,
  ImageGoogleStyle,
  InputStyle,
  InputWrapperStyle,
  LoginButton,
  LoginButtonContainter,
  SignWithStyle,
  WrapperInterStyle,
  WrapperStyle,
} from "../../_Styles_/login.style/loginPage.style";

const LoginComponent = () => {
  return (
    <ContainerStyle>
      <WrapperStyle
        style={{
          backgroundImage: 'url("../../_Styles_/login.style/images/bg-01.jpg")',
        }}
      >
        <WrapperInterStyle>
          <FormStyle>
            <SignWithStyle>Sign In With</SignWithStyle>
            <FacebookButton href="#">
              <FacebookStyle src="https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/facebook.png" />
              Facebook
            </FacebookButton>
            <GoogleButton href="http://localhost:5000/auth/google">
              <ImageGoogleStyle alt="GOOGLE" src={Google} />
              Google
            </GoogleButton>
            <FieldContainerStyle>
              <FieldTitleStyle>Username</FieldTitleStyle>
            </FieldContainerStyle>
            <InputWrapperStyle>
              <InputStyle type="text" placeholder="Username" />
            </InputWrapperStyle>

            <FieldContainerStyle>
              <FieldTitleStyle>Password</FieldTitleStyle>
            </FieldContainerStyle>
            <InputWrapperStyle>
              <InputStyle type="password" placeholder="Username" />
            </InputWrapperStyle>
            <LoginButtonContainter>
              <LoginButton>Sign In</LoginButton>
            </LoginButtonContainter>
          </FormStyle>
        </WrapperInterStyle>
      </WrapperStyle>
    </ContainerStyle>
  );
};

export default LoginComponent;
