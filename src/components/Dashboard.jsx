import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Topbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  background: #111;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Body = styled.div`
  width: 100vw;
  margin-top: 65px;
  padding: 1rem;
`;

const Dashboard = ({ children, email }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate('/');
    }
  }, [email]);

  return (
    <>
      <Topbar>
        <Typography>Some test</Typography>
        <Typography>Welcome, {email}!</Typography>
      </Topbar>
      <Body>{children}</Body>
    </>
  );
};

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  email: PropTypes.string,
};

Dashboard.defaultProps = { email: '' };

const mapStateToProps = ({ auth: { user } }) => ({ email: user.email });

export default connect(mapStateToProps)(Dashboard);
