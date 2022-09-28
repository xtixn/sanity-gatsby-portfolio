export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '633461a41beb4306c9da97db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kzje8tev',
                  apiId: '5cd7e552-e6d9-4ff4-b96d-1aa86d738bf1'
                },
                {
                  buildHookId: '633461a5230a450a255410f3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-81gu9eks',
                  apiId: '50388d9d-d984-448b-a3f4-57d0de17102e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xtixn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-81gu9eks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
