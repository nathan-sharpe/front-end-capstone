import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm button', () => {
    render(<BookingForm />);
    const buttonElement = screen.getByText("Submit Reservation");
    expect(buttonElement).toBeInTheDocument();
})