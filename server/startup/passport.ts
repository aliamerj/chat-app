import { Console } from "console";
import passport from "passport";
import GoogleStrategy, {
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import User from "../modules/users.module";

const AUTH_OPTIONS = {
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY as string,
  callbackURL: "/auth/google/callback",
};
const verifyCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
): Promise<void> => {
  const user = await User.findOne({ email: profile.emails?.[0].value });
  if (user) done(null, user);
  else {
    if (profile.emails?.[0].verified) {
      const newUser = new User({
        name: profile.displayName,
        email: profile.emails?.[0].value,
        image: profile.photos?.[0].value,
      });
      await newUser.save();
      console.log("new user", newUser);
      done(null, newUser);
    } else {
      done("email rejected");
    }
  }
};

passport.use(new GoogleStrategy.Strategy(AUTH_OPTIONS, verifyCallback));
passport.serializeUser((user: any, done) => {
  console.log("serialize  User ID", user._id);
  done(null, user._id);
});
passport.deserializeUser(async (id: any, done) => {
  const user = await User.findById(id);
  done(null, user);
});
