import styled from 'styled-components';

export const NavbarBox = styled.div`
  margin: 10px;
  margin-bottom: 30px;
  border: 1px solid black;
  font-size: 60px;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: linear-gradient(45deg, rgba(255, 153, 2, 0.5) 20%, rgba(255, 153, 204, 0.4) 100%);
`;

export const NavbarTitle = styled.div`
  margin-left: 20px;
`;

export const NavbarLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: transparent;
`;
