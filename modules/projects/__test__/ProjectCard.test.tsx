import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectCard from '../ProjectCard';

describe('Project Card', () => {
    it('renders properly', () => {
        render(<ProjectCard />);
        expect(screen.getByTestId('project-card')).toBeInTheDocument();
    })

    it('has all necessary elements', () => {
        render(<ProjectCard />);
        expect(screen.getByTestId('project-card')).toHaveTextContent('Description');
        expect(screen.getByTestId('project-card')).toHaveTextContent('Technologies');

    })

    it('loads images properly', () => {
        render(<ProjectCard />);
        expect(screen.getAllByRole('img')).toHaveLength(1);
    })
});