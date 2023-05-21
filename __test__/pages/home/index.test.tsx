import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/pages/home';

describe('<Home />', () => {
  // <Home/> 컴포넌트에 'Test one' text가 있는지 확인하는 test
  it('renders a heading', () => {
    const { container } = render(<Home />);

    const home = screen.getByText('Test one');

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
