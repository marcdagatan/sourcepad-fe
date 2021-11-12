import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import styled from 'styled-components';

const WizardBox = styled(Box)`
  width: 100%;
`;

const WizardContentBox = styled(Box)`
  width: 100%;
`;

const StepButtonsBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wizard = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep(currentStep => currentStep + 1);

  const prevStep = () => setActiveStep(currentStep => currentStep - 1);

  const resetWizard = () => setActiveStep(0);

  const activeStepContent = steps[activeStep];

  return (
    <WizardBox>
      <Stepper activeStep={activeStep}>
        {steps.map(content => (
          <Step key={content.title}>
            <StepLabel>{content.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <WizardContentBox>
        <h4>{activeStepContent.title}</h4>
        {activeStepContent.body}
      </WizardContentBox>
      <StepButtonsBox>
        <Box>
          <Button disabled={activeStep === 0} onClick={prevStep}>
            Back
          </Button>
        </Box>
        <Box>
          <Button disabled={activeStepContent.disabled || activeStep === steps.length - 1} onClick={nextStep}>
            Next Step
          </Button>
          <Button onClick={resetWizard}>Reset Steps</Button>
        </Box>
      </StepButtonsBox>
    </WizardBox>
  );
};

Wizard.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, body: PropTypes.node, disabled: PropTypes.bool }))
    .isRequired,
};

export default Wizard;
