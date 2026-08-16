module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://nickabegg.com/`,
    // Your Name
    name: 'Nick Abegg',
    // Main Site Title
    title: `Nick Abegg | Social Science Researcher`,
    // Description that goes under your name in main bio
    description: `PhD student researching sociotechnical interactions of privacy, with a focus on vulnerable and marginalized groups.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/nickab56`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nick-abegg-392480230/`,
    // Content of the About Me section
    about: `I am a PhD student in Informatics Security (Privacy) at Indiana University Bloomington, with a minor in Psychology. Website is under development so more to come :)`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'American Attitudes Toward Parental Digital Sharing',
        description:
          'Research investigating American attitudes toward parental digital sharing (“sharenting”) and proposed policy and technical interventions to enhance children’s privacy.',
        link: '',
      },
      {
        name: 'Dyad Interviews of Parent-Child Digital Sharing',
        description:
          'Qualitative research examining how digital parental sharing is conducted, negotiated, and understood by parents and children.',
        link: '',
      },
      {
        name: 'Teenagers’ Felt Experiences of Harm in Video Games',
        description:
          'Research examining teenagers’ felt experiences of harm in video games.',
        link: `https://www.researchgate.net/publication/410160096_Normalizing_Harm_Through_Teenagers'_Everyday_Experiences_with_Video_Games`,
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
/*     experience: [
      {
        name: 'Research Assistant — Indiana University Bloomington',
        description:
          '2024 – Present | Privacy research on parental digital sharing, children’s privacy, and sociotechnical interactions. Methods include large-scale survey design, factor analysis, qualitative interviews, and thematic analysis.',
        link: '#',
      },
      {
        name: 'NSF REU — Pennsylvania State University',
        description:
          'May 2023 – Aug 2023 | Machine learning and cybersecurity research on automated authorship obfuscation using psycho-linguistic information theory and natural language processing.',
        link: '#',
      },
      {
        name: 'Computer Science Head Tutor — Saint Vincent College',
        description:
          '2022 – 2024 | Managed undergraduate tutors, coordinated with professors, and primarily tutored C++ and Data Structures.',
        link: '#',
      },
    ], */
      experience: [],
    // Optional: List your skills, they must have `name` and `description`.
/*     skills: [
      {
        name: 'Research Methods',
        description:
          'Large-scale survey design, factor analysis, qualitative interviews, thematic analysis, ethnography',
      },
      {
        name: 'Programming',
        description:
          'Python, R, C++',
      },
      {
        name: 'Research Tools',
        description:
          'Qualtrics, NVivo, RStudio, LaTeX, Git, Visual Studio Code',
      },
    ], */
      skills: [],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Abegg`,
        short_name: `Nick Abegg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
