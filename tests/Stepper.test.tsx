import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from '../src/components/Stepper';

describe('Stepper', () => {
  it('renders without errors', () => {
    const steps = [
      { label: 'Step 1', icon: null },
      { label: 'Step 2', icon: null },
      { label: 'Step 3', icon: null },
    ];
    render(<Stepper steps={steps} currentStep={0} isVisible={true} />);
    const stepElements = screen.getAllByText(/Step 1/i);
    const desktopStepElement = stepElements.find(el =>
      el.closest('.md\\:flex')
    );
    expect(desktopStepElement).toBeInTheDocument();
  });
});