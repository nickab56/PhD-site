import { graphql, Link } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PublicationsPage = ({ data }) => {
  const metadata = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Publications" />

      <Header metadata={metadata} noBlog={true} />

      <div className="block pt-12 md:flex">
        <div className="pb-6 md:w-full md:max-w-150 md:p-0">
          <h2 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">
            Publications
          </h2>
        </div>

        <div className="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20">

          {/* Full Research Papers */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Research Papers
            </h1>

            <p className="text-sm text-gray-500 italic mb-8">
              Peer-reviewed papers and conference proceedings
            </p>

            <h2 className="text-xl font-semibold mb-5" style={{ color: '#990000' }}>
              2026
            </h2>

            <div className="mb-8">
              <p>
                <strong className="text-gray-900">Nick Abegg</strong>, Ritika
                Gairola, Christena Nippert-Eng, and Apu Kapadia.{' '}
                <a
                  href="https://www.researchgate.net/publication/410160096_Normalizing_Harm_Through_Teenagers'_Everyday_Experiences_with_Video_Games"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  “Normalizing Harm Through Teenagers’ Everyday Experiences
                  with Video Games.”
                </a>
              </p>
            </div>

            <div className="mb-8">
              <p>
                <strong className="text-gray-900">Nick Abegg</strong>, Sabila
                Nawshin, Aneka Williams, Chris McCarthy, Mary Jean Amon, and
                Apu Kapadia.{' '}
                <span className="font-semibold text-gray-900">
                  “American Attitudes Toward Parental Digital Sharing and
                  Proposed Policy and Technical Interventions.”
                </span>
              </p>
            </div>
          </section>

          {/* Preprints */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Preprints
            </h1>

            <h2 className="text-xl font-semibold mt-6 mb-5" style={{ color: '#990000' }}>
              2023
            </h2>

            <div className="mb-8">
              <p>
                <strong className="text-gray-900">Nick Abegg</strong>.{' '}
                <span className="font-semibold text-gray-900">
                  “UID as a Guiding Metric for Automated Authorship
                  Obfuscation.”
                </span>{' '}
                <em>arXiv preprint (cs.CL).</em>
              </p>
            </div>
          </section>

          <div className="pt-4">
            <Link
              to="/"
              className="text-sm font-semibold uppercase tracking-wider hover:underline"
              style={{ color: '#990000' }}
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        scholar
        github
        linkedin
      }
    }
  }
`;