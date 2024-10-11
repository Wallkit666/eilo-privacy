import Layouts from "@layouts/root";

import Services from "@domains/services";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function ServicesScreen({ ...props }) {
  return <Services {...props} />;
}

ServicesScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      servicesPage {
        data {
          attributes {
            technologies {
              data {
                id
                attributes {
                  key
                  title
                  short_description
                  logo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  Tags {
                    id
                    title
                  }
                }
              }
            }
            services {
              data {
                id
                attributes {
                  title
                  description
                  preview {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  key
                  Tags {
                    id
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_TECHNOLOGY,
  });

  return {
    props: { servicesPage: data?.servicesPage?.data?.attributes },
    revalidate: 3600,
  };
}

export default ServicesScreen;
