import React from 'react';

interface Step {
  label: string;
  icon: React.ComponentType | null;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex md:flex-row flex-col items-center justify-between max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex justfiy-center">
              <span className={`mr-2 ${index === currentStep ? 'text-blue-500' : ''}`}>
                {step.icon && <step.icon />}
              </span>
              <span className="text-sm dark:text-white text-center">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-4 bg-gray-300 dark:bg-gray-700 ${index < currentStep ? 'bg-blue-500' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;