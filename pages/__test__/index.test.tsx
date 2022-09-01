import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from '../index'

describe('Main Page', () => {
    it('loads properly', () => {
        render(<Home />);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    })
    it('has all necessary elements', () => {
        render(<Home />);
        expect(screen.getByTestId('home-page')).toHaveTextContent('Remy Papillon');
        expect(screen.getByTestId('home-page')).toHaveTextContent('Aspiring Front-End Developer');
        expect(screen.getByTestId('home-page')).toHaveTextContent('Technologies');
    })
})