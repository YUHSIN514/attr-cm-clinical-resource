import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yuhsin514.github.io',
  base: '/attr-cm-clinical-resource',
  integrations: [
    starlight({
      title: 'ATTR-CM Clinical Resource',
      description: 'An evidence-based clinical resource for transthyretin amyloid cardiomyopathy.',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/YUHSIN514/attr-cm-clinical-resource'
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Diagnosis',
          items: [
            { label: 'Overview', link: '/diagnosis/overview/' },
            { label: 'AL Exclusion', link: '/diagnosis/al-exclusion/' },
            { label: 'Bone Scintigraphy', link: '/diagnosis/bone-scintigraphy/' }
          ]
        },
        {
          label: 'Imaging',
          items: [{ label: 'Echo · CMR · Nuclear', link: '/imaging/overview/' }]
        },
        {
          label: 'Clinical Cases',
          items: [
            { label: 'Case Library', link: '/clinical-cases/overview/' },
            { label: 'LVOT Obstruction', link: '/clinical-cases/lvot-obstruction/' }
          ]
        },
        {
          label: 'Screening & Referral',
          items: [{ label: 'Overview', link: '/screening-referral/overview/' }]
        },
        {
          label: 'Guidelines & Consensus',
          items: [{ label: 'Index', link: '/guidelines/index/' }]
        },
        {
          label: 'Genetics',
          items: [{ label: 'Variants & Testing', link: '/genetics/overview/' }]
        },
        {
          label: 'Research & Literature',
          items: [{ label: 'Evidence Index', link: '/research/index/' }]
        }
      ]
    })
  ]
});
