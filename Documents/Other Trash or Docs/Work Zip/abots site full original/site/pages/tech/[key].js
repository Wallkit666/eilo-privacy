import Layouts from "@layouts/root";

import Tech from "@domains/tech";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function TechScreen({ ...props }) {
  return <Tech {...props} />;
}

TechScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticPaths() {
  const QUERY_TECHNOLOGIES = gql`
    {
      technologies {
        data {
          attributes {
            key
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_TECHNOLOGIES,
  });

  const paths = data.technologies.data.map((item) => ({
    params: { key: item?.attributes?.key },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const QUERY_TECHNOLOGY = gql`
    query Technology($key: String) {
      technologies(filters: { key: { eq: $key } }) {
        data {
          attributes {
            title
            description
            used
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            partners {
              data {
                id
                attributes {
                  url
                }
              }
            }
            Benefits {
              id
              title
              items {
                id
                title
                description
              }
            }
            BenefitsTags {
              id
              title
            }
          }
        }
      }
      principles(pagination: { page: 1, pageSize: 20 }) {
        data {
          id
          attributes {
            title
            description
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_TECHNOLOGY,
    variables: { key: params.key },
  });

  return {
    props: {
      technology: data?.technologies?.data?.at(0)?.attributes,
      principles: data?.principles?.data,
    },
    notFound: !data?.technologies?.data?.at(0)?.attributes,
    revalidate: 3600,
  };
}

export default TechScreen;
