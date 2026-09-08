import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yuhsin514.github.io',
  base: '/attr-cm-clinical-resource',
  integrations: [
    starlight({
      title: 'ATTR-CM Clinical Resource',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '繁體中文',
          lang: 'zh-TW',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      description: 'An evidence-based clinical resource for transthyretin amyloid cardiomyopathy.',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/YUHSIN514/attr-cm-clinical-resource'
        }
      ],
      sidebar: [
        {
          label: '首頁',
          translations: { en: 'Home' },
          link: '/'
        },
        {
          label: '診斷',
          translations: { en: 'Diagnosis' },
          items: [
            {
              label: '總覽',
              translations: { en: 'Overview' },
              link: '/diagnosis/overview/'
            },
            {
              label: 'AL 排除',
              translations: { en: 'AL Exclusion' },
              link: '/diagnosis/al-exclusion/'
            },
            {
              label: 'PYP 骨顯像',
              translations: { en: 'PYP Bone Scintigraphy' },
              link: '/diagnosis/bone-scintigraphy/'
            }
          ]
        },
        {
          label: '影像',
          translations: { en: 'Imaging' },
          items: [
            {
              label: 'Echo · CMR · 核醫',
              translations: { en: 'Echo · CMR · Nuclear' },
              link: '/imaging/overview/'
            }
          ]
        },
        {
          label: '臨床案例',
          translations: { en: 'Clinical Cases' },
          items: [
            {
              label: '案例總覽',
              translations: { en: 'Case Library' },
              link: '/clinical-cases/overview/'
            },
            {
              label: 'LVOT 阻塞',
              translations: { en: 'LVOT Obstruction' },
              link: '/clinical-cases/lvot-obstruction/'
            }
          ]
        },
        {
          label: '篩檢與轉診',
          translations: { en: 'Screening & Referral' },
          items: [
            {
              label: '總覽',
              translations: { en: 'Overview' },
              link: '/screening-referral/overview/'
            }
          ]
        },
        {
          label: '指引與共識',
          translations: { en: 'Guidelines & Consensus' },
          items: [
            {
              label: '依年份瀏覽',
              translations: { en: 'By Year' },
              link: '/guidelines/'
            }
          ]
        },
        {
          label: '治療與給付',
          translations: { en: 'Treatment & Reimbursement' },
          items: [
            {
              label: 'Tafamidis｜台灣健保',
              translations: { en: 'Tafamidis | Taiwan NHI' },
              link: '/treatment-reimbursement/tafamidis-taiwan-nhi/'
            }
          ]
        },
        {
          label: '遺傳與基因',
          translations: { en: 'Genetics' },
          items: [
            {
              label: '變異與檢測',
              translations: { en: 'Variants & Testing' },
              link: '/genetics/overview/'
            }
          ]
        },
        {
          label: '研究與文獻',
          translations: { en: 'Research & Literature' },
          items: [
            {
              label: '文獻索引',
              translations: { en: 'Evidence Index' },
              link: '/research/'
            }
          ]
        }
      ]
    })
  ]
});
