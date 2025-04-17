import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('должен отобразить текст "LifeQuest"', () => {
    render(<App />);
    expect(screen.getByText(/LifeQuest/i)).toBeInTheDocument();
  });
});
