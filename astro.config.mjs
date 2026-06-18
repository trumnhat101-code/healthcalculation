import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://healthcalculation.com',
  integrations: [sitemap()],
  build: {
    format: 'file', // /bmi-calculator.html thay vì /bmi-calculator/index.html
  },
});
