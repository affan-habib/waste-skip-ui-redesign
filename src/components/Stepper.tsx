import React from 'react';
import { FaCheck } from 'react-icons/fa';

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
    <div className="flex md:flex-row flex-col items-center justify-between w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex md:flex-col items-center flex-1">
          <div className="flex items-center justify-center">
            <span
              className={`rounded-full w-8 h-8 flex items-center justify-center ${index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
            >
              {index < currentStep ? <FaCheck /> : step.icon ? <step.icon /> : null}
            </span>
            {index < steps.length - 1 && (
              <div className={`h-1 md:h-1 flex-1 bg-gray-300 dark:bg-gray-700 ${index <= currentStep ? 'bg-blue-500' : ''}`} />
            )}
          </div>
          <span className="text-sm mt-1 dark:text-white text-center">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;