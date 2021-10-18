import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Creating a test suite
describe('Greeting component', () => {
  test('renders Hello World', () => {
    // Arange
    render(<Greeting />);

    // Act
    // nothing to do in this case

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you! by default", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("It's good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    // Arange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.getByText('Changed!');
    expect(paragraphElement).toBeInTheDocument();
  });

  test("doesn't render It's good to see you! if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("It's good to see you!");
    expect(paragraphElement).toBeNull();
  });
});
