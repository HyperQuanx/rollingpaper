// Navbar.jsx

import React, { useState } from 'react';
import { NavbarBox, NavbarLogin, NavbarTitle } from './styles';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import Modal from '../Login/Login';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <NavbarBox>
        <NavbarTitle>Rolling-Paper ★</NavbarTitle>
        <NavbarLogin>
          <button
            onClick={handleOpenModal}
            style={{
              padding: '5px',
              fontSize: '60px',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <FontAwesomeIcon icon={faUser} /> */}
          </button>
        </NavbarLogin>

        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </NavbarBox>
    </div>
  );
};

export default Navbar;
=======
// Navbar.jsx

import React, { useState } from 'react';
import { NavbarBox, NavbarLogin, NavbarTitle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Modal from '../Login/Login';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <NavbarBox>
        <NavbarTitle>Rolling-Paper ★</NavbarTitle>
        <NavbarLogin>
          <button
            onClick={handleOpenModal}
            style={{
              padding: '5px',
              fontSize: '60px',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </NavbarLogin>

        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </NavbarBox>
    </div>
  );
};

export default Navbar;
