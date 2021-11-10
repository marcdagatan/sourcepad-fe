import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlock = styled.div`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  padding: ${props => props.padding};
`;

const Block = ({ children, width, maxWidth, padding }) => (
  <StyledBlock width={width} maxWidth={maxWidth} padding={padding}>
    {children}
  </StyledBlock>
);

Block.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
};

Block.defaultProps = {
  children: <></>,
  width: '100%',
  maxWidth: '960px',
  padding: '1rem',
};

export default Block;
