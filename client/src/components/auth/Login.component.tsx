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
import { START_LOGIN } from "../../store/auth.store/authSlice";
import { useAppDispatch } from "../../store/hooks";

const LoginComponent = () => {
  const dispatch = useAppDispatch();
  const loginWithGoogle = () => {
    dispatch(START_LOGIN());
    window.open("http://localhost:5000/auth/google", "_self");
  };
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
            <GoogleButton onClick={() => loginWithGoogle()}>
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
