import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectCard from '../ProjectCard';


const testData = {
    title: 'Test Title',
    description: 'Test Description',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    languages: ['Lang1', 'Lang2', 'Lang3']
}

describe('Project Card', () => {
    it('renders properly', () => {
        render(<ProjectCard title={testData.title} description={testData.description} technologies={testData.technologies} languages={testData.languages} />);
        expect(screen.getByTestId('project-card')).toBeInTheDocument();
    })

    it('has all necessary elements', () => {
        render(<ProjectCard title={testData.title} description={testData.description} technologies={testData.technologies} languages={testData.languages} />);
        expect(screen.getByTestId('project-card')).toHaveTextContent('Description');
        expect(screen.getByTestId('project-card')).toHaveTextContent('Technologies');
        expect(screen.getByTestId('project-card')).toHaveTextContent('Languages');
        testData.technologies.forEach(tech => (expect(screen.getByTestId('project-card')).toHaveTextContent(tech)));
        testData.languages.forEach(language => (expect(screen.getByTestId('project-card')).toHaveTextContent(language)));
    })

    it('loads images properly', () => {
        render(<ProjectCard title={testData.title} image={"/firebase-chat-app-main-alt.svg"} description={testData.description} technologies={testData.technologies} languages={testData.languages} />);
        expect(screen.getAllByRole('img')).toHaveLength(1);
    })
});