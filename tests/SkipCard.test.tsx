import { render, screen } from '@testing-library/react';
import SkipCard from '../src/components/SkipCard';
import '@testing-library/jest-dom';

// Mock the SkipCardProps
const mockSkip = {
  id: 1,
  size: 6,
  hire_period_days: 7,
  transport_cost: 50,
  per_tonne_cost: 100,
  price_before_vat: 250,
  vat: 50,
  postcode: 'NW1',
  area: 'London',
  forbidden: false,
  created_at: '2024-01-01',
  updated_at: '2024-01-08',
  allowed_on_road: true,
  allows_heavy_waste: true,
};

describe('SkipCard', () => {
  it('renders without errors', () => {
    render(<SkipCard skip={mockSkip} selected={false} onClick={() => {}} />);
    const skipSizeElement = screen.getByText(/6 Yard Skip/i);
    expect(skipSizeElement).toBeInTheDocument();
  });
});
