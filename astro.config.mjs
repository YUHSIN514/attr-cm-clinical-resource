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
      },
      description: 'An evidence-based clinical resource for transthyretin amyloid cardiomyopathy.',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '首頁',
          link: '/'
        },
        {
          label: '影像',
          items: [
            {
              label: 'Echo · CMR · 核醫',
              link: '/imaging/overview/'
            }
          ]
        },
        {
          label: '臨床案例',
          items: [
            {
              label: '案例總覽',
              link: '/clinical-cases/overview/'
            }
          ]
        },
        {
          label: '篩檢與照護模式',
          items: [
            {
              label: '總覽',
              link: '/screening-referral/overview/'
            }
          ]
        },
        {
          label: '指引與共識',
          items: [
            {
              label: '依年份瀏覽',
              link: '/guidelines/'
            }
          ]
        },
        {
          label: '研究與文獻',
          items: [
            {
              label: '文獻索引',
              link: '/research/'
            }
          ]
        },
        {
          label: 'Genetics & TTR Variants',
          items: [
            {
              label: '變異與檢測',
              link: '/genetics/overview/'
            }
          ]
        },
        {
          label: '治療與給付',
          items: [
            {
              label: 'Tafamidis｜台灣健保',
              link: '/treatment-reimbursement/tafamidis-taiwan-nhi/'
            }
          ]
        }
      ]
    })
  ]
});
