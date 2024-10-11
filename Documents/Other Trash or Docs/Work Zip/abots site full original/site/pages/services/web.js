import Layouts from "@layouts/root";

import ServiceWeb from "@domains/service-web";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function ServiceWebScreen({ ...props }) {
  return <ServiceWeb {...props} />;
}

ServiceWebScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      serviceWebPage {
        data {
          attributes {
            preview {
              data {
                attributes {
                  url
                }
              }
            }
            types {
              id
              title
              description
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            services {
              id
              title
              description
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            solutions {
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
      serviceWebPage: data?.serviceWebPage?.data?.attributes,
    },
    notFound: !data?.serviceWebPage?.data?.attributes,
    revalidate: 3600,
  };
}

export default ServiceWebScreen;
