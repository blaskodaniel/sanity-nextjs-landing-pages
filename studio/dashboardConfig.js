export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60914793062edf1058214751',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zrfsph36',
                  apiId: '93983e5a-d17b-4216-ab5c-bb188b5e1911'
                },
                {
                  buildHookId: '60914794c9bd5d0fb62f2273',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2dy2pt8b',
                  apiId: 'b312aae1-5551-4a33-9d2a-6b84f4b2104e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blaskodaniel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2dy2pt8b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
