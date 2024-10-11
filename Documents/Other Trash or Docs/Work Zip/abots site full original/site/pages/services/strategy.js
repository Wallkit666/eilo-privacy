import Layouts from "@layouts/root";

import ServiceStrategy from "@domains/service-strategy";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function ServiceStrategyScreen({ ...props }) {
  return <ServiceStrategy {...props} />;
}

ServiceStrategyScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      serviceStrategyPage {
        data {
          attributes {
            stages {
              id
              title
              description
              number {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            service {
              data {
                attributes {
                  icon {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
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
  });

  return {
    props: {
      principles: data?.principles?.data,
      serviceStrategyPage: data?.serviceStrategyPage?.data?.attributes,
    },
    notFound: !data?.serviceStrategyPage?.data?.attributes,
    revalidate: 3600,
  };
}

export default ServiceStrategyScreen;
