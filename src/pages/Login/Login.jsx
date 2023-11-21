import React, { useState } from 'react';
import { ModalWrapper, ModalContent, CloseButton, InputStyle, LoginButton, LoginP, Center } from './styles';
import SignUp from './SignUp';
import axios from 'axios';

const Login = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpMode, setSignUpMode] = useState(false);
  const BASE_URL = 'http://localhost:4000';

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        userId: userId,
        password: password,
      });

      console.log('로그인 성공:', response.data);

      onClose();
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleBackToLoginClick = () => {
    setSignUpMode(false);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {isSignUpMode ? <LoginP>Sign Up</LoginP> : <LoginP>Login</LoginP>}
          <CloseButton onClick={onClose}>X</CloseButton>
        </div>
        {isSignUpMode ? (
          <SignUp onClose={() => handleBackToLoginClick()} />
        ) : (
          <>
            <Center>
              <label htmlFor="userId">User Id: </label>
              <InputStyle
                type="text"
                id="userId"
                placeholder="아이디를 입력해주세요."
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
            </Center>
            <Center>
              <label htmlFor="password">Password: </label>
              <InputStyle
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Center>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <div style={{ marginTop: '40px' }}>
              <span style={{ fontSize: '25px', marginRight: '20px' }}>회원이 아니신가요?</span>
              <LoginButton onClick={handleSignUpClick}>Sign up</LoginButton>
            </div>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Login;