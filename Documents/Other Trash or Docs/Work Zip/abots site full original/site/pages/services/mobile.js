import Layouts from "@layouts/root";

import ServiceMobile from "@domains/service-mobile";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function ServiceMobileScreen({ ...props }) {
  return <ServiceMobile {...props} />;
}

ServiceMobileScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      serviceMobilePage {
        data {
          attributes {
            preview {
              data {
                attributes {
                  url
                }
              }
            }
            applications {
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
            reasons {
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
            approaches {
              id
              title
              subtitle
              description
              preview {
                data {
                  attributes {
                    url
                  }
                }
              }
              advantages {
                id
                title
              }
              disadvantages {
                id
                title
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
      serviceMobilePage: data?.serviceMobilePage?.data?.attributes,
    },
    notFound: !data?.serviceMobilePage?.data?.attributes,
    revalidate: 3600,
  };
}

export default ServiceMobileScreen;
