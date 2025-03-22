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
    <div className="flex w-full justify-center bg-[var(--card-bg)] py-4 border-b border-[var(--card-border)]">
      <div className="flex md:flex-row flex-col items-center justify-between max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex justfiy-center">
              <span className={`mr-2 ${index === currentStep ? 'text-[var(--accent)]' : 'text-[var(--foreground)] opacity-60'}`}>
                {step.icon && <step.icon />}
              </span>
              <span className="text-sm text-[var(--foreground)] text-center">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-1 mx-4 ${index < currentStep ? 'bg-[var(--accent)]' : 'bg-[var(--card-border)]'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;