import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import { changePassword, checkUser } from "../../modules/user/actions";
import {
  LoginSubtitle,
  LoginTile,
  LoginTileSuccess,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const ChangePassword = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    password: "",
    repeatPassword: "",
    key: "",
  });
  const [key, setKey] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const { checkUser, changePassword } = props;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get("key");
    if (!key) {
      navigate("/404");
    }

    setLoginData({ ...loginData, key: key });
    checkUser({ secretKey: key }, checkUserCallBack);
  }, [location.search]);

  const inputFields = [
    {
      placeholder: "password",
      value: loginData.password,
      onChange: (e) => setLoginData({ ...loginData, password: e.target.value }),
    },
    {
      placeholder: "repeat password",
      value: loginData.repeatPassword,
      onChange: (e) =>
        setLoginData({ ...loginData, repeatPassword: e.target.value }),
    },
  ];

  const checkUserCallBack = (response) => {
    if (response.data.success) {
      setLoading(false);
      setUser(response.data.user);
    } else {
      toast.error("Link expired");
      navigate("/404");
    }
  };

  const changePasswordCallBack = (response) => {
    if (response.data.success) {
      setPasswordChanged(true);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const handleChangePassword = () => {
    setLoading(true);
    if (loginData.password !== loginData.repeatPassword) {
      toast.error("Passwords don't mach!");
    } else {
      changePassword(loginData, changePasswordCallBack);
    }
  };

  return (
    <Layout isLogin showVector={!loading}>
      {passwordChanged && (
        <LoginWrapper>
          <LoginTileSuccess>Password changed successfully!</LoginTileSuccess>
          <SimpleButton
            title="Go to login"
            onClick={() => navigate("/login")}
          />
        </LoginWrapper>
      )}
      {loading && <Loader />}
      {!loading && !passwordChanged && (
        <LoginWrapper>
          <LoginTile>Change password!</LoginTile>
          <LoginSubtitle>
            Hey {user.firstName}! Insert your new password below.
          </LoginSubtitle>
          {map(inputFields, (item) => {
            return (
              <MarginBottom value={3} key={item.placeholder}>
                <Input
                  value={item.value}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                />
              </MarginBottom>
            );
          })}
          <SimpleButton title="Save" onClick={() => handleChangePassword()} />
        </LoginWrapper>
      )}
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: (model, callBack) => dispatch(checkUser(model, callBack)),
    changePassword: (model, callBack) =>
      dispatch(changePassword(model, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(ChangePassword);
