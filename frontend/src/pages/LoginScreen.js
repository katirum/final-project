import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions/userActions";
import { MainScreen } from "../components/MainScreen";
import { Button } from "utils/GlobalStyles";


const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} */}
        <form onSubmit={submitHandler}>
          {/* <Form.Group controlId="formBasicEmail"> */}
            <label>Email address</label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
         {/*  </Form.Group> */}

         {/*  <Form.Group controlId="formBasicPassword"> */}
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          {/* </Form.Group> */}

          <Button type="submit">
            Submit
          </Button>
        </form>
        {/* <Row className="py-3">
          <Col> */}
            New Customer ? <Link to="/register">Register Here</Link>
        {/*   </Col>
        </Row> */}
      </div>
    </MainScreen>
  );
}

export default LoginScreen;