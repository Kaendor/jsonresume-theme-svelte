import { expect, test } from 'vitest';
import { render } from '../index';

test('exports HTML', () => {
	const input = {};
	const output = render(input);

	expect(output).toContain('<p>');
});
