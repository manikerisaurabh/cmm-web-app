const { render, screen } = require('@testing-library/react');
const Index = require('../index');

test('renders index component', () => {
	render(<Index />);
	const linkElement = screen.getByText(/your expected text/i);
	expect(linkElement).toBeInTheDocument();
});