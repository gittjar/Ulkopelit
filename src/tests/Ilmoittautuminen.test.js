import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Ilmoittautuminen from '../components/Ilmoittautuminen';

describe('Ilmoittautuminen Component', () => {
  test('renders the form correctly', () => {
    render(
      <MemoryRouter>
        <Ilmoittautuminen />
      </MemoryRouter>
    );
    expect(screen.getByText('Ilmoittaudu mukaan!')).toBeInTheDocument();
  });

  test('shows error message on form submission failure', async () => {
    // Mock the fetch function to simulate a submission failure
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: 'Error occurred' }),
      })
    );

    render(
      <MemoryRouter>
        <Ilmoittautuminen />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Nimesi tai nimimerkki'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Sähköposti'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Mailan kätisyys'), { target: { value: 'Left' } });
    fireEvent.click(screen.getByText('Lähetä'));

    await waitFor(() => {
      expect(screen.getByText('Error occurred')).toBeInTheDocument();
    });

    // Restore the original fetch function
    global.fetch.mockRestore();
  });
});