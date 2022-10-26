import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se tem um input na tela', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText("Email");

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email")
});
