import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField as MtTextField, Box } from '@mui/material';

const Input = styled(MtTextField)`
  width: 100%;
`;

const InputHolder = styled(Box)`
  padding-bottom: 0.5rem;
`;

const TextField = ({ onChange, ...props }) => (
  <InputHolder>
    <Input onChange={e => onChange(e.target.value)} {...props} />
  </InputHolder>
);

TextField.propTypes = { onChange: PropTypes.func };

TextField.defaultProps = { onChange: () => {} };

export default TextField;
