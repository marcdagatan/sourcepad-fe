import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import childrenPropTypes from '../proptypes/childrenPropTypes';

const StyledLink = styled(RouterLink)`
  color: #fff;
`;

const Link = ({ to, children }) => <StyledLink to={to}>{children}</StyledLink>;

Link.propTypes = {
  to: PropTypes.string,
  children: childrenPropTypes.isRequired,
};

Link.defaultProps = {
  to: '',
};

export default Link;
