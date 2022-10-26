import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('procurar titulo da pagina', () => {
  const { history } = renderWithRouter(<App />);

  const tittle = screen.getByRole('heading', { level: 1, name: /Você está na página Início/i });
  expect(tittle).toBeInTheDocument();

  const linkSobre = screen.getByText(/sobre/i)
  expect(linkSobre).toBeInTheDocument();

  userEvent.click(linkSobre);
  const tittle2 = screen.getByRole('heading', { level: 1, name: /Você está na página Sobre/i });
  expect(tittle2).toBeInTheDocument();
  expect(history.location.pathname).toBe('/about');
});

test('veja se renderiza uma pagina Not Found', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/about');
  })


  // const linkSobre = screen.getByText(/sobre/i);
  // userEvent.click(linkSobre);
  expect(history.location.pathname).toBe('/about');


})
