// vite.config.ts
import solid from 'solid-start/vite';
import staticAdapter from 'solid-start-static';

export default {
  plugins: [solid({ adapter: staticAdapter() })],
};
