import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface Step {
  label: string;
  icon: React.ElementType | null;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden w-full bg-[var(--card-bg)] py-4 border-b border-[var(--card-border)]">
        <div className="flex justify-between items-center px-4">
          <button
            onClick={toggleDrawer}
            className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <FaBars size={20} />
          </button>
          <span className="text-[var(--accent)] font-medium">
            {steps[currentStep].label}
          </span>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-64 bg-[var(--background)] shadow-lg
          transform transition-all duration-300 ease-in-out z-50
          md:hidden border-r border-[var(--card-border)]
          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 border-b border-[var(--card-border)] flex justify-between items-center">
          <span className="text-[var(--foreground)] font-medium">Steps</span>
          <button
            onClick={toggleDrawer}
            className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            aria-label="Close navigation menu"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="py-4 bg-[var(--card-bg)]">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => {
                onStepClick?.(index);
                setIsDrawerOpen(false);
              }}
              className={`
                flex items-center space-x-3 px-4 py-3 cursor-pointer
                ${index === currentStep ? 'text-[var(--accent)] bg-[var(--card-border)]' : 'text-[var(--foreground)] opacity-50'}
                hover:bg-[var(--card-border)] transition-colors
              `}
            >
              {step.icon && <step.icon />}
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full justify-center bg-[var(--card-bg)] py-4 border-b border-[var(--card-border)]">
        <div className="flex flex-row items-center justify-center space-x-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => onStepClick?.(index)}
              className="cursor-pointer flex items-center space-x-2"
            >
              {step.icon && (
                <step.icon
                  className={`${
                    index === currentStep
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--foreground)] opacity-50'
                  }`}
                />
              )}
              <span
                className={`${
                  index === currentStep
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--foreground)] opacity-50'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      <div
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 md:hidden
          ${isDrawerOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}
        `}
        onClick={toggleDrawer}
      />
    </>
  );
};

export default Stepper;
