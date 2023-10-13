import App from './src/lib/components/App.svelte';
import type { ResumeSchema } from './src/resume-schema';

export const render = (resume: ResumeSchema) => {
	const { html } = App.render({ resume });
	return html;
};

export default {
	render
};
