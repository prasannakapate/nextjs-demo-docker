import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Home Page', () => {
  it('renders the home page without crashing', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('displays the main container with correct structure', () => {
    const { container } = render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveStyle({
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    });
  });

  it('has proper accessibility structure', () => {
    const { container } = render(<Home />);
    // Check for main semantic element
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
