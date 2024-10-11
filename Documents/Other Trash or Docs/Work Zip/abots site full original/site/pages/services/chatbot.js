import Layouts from "@layouts/root";

import ServiceChatbot from "@domains/service-chatbot";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function ServiceChatbotScreen({ ...props }) {
  return <ServiceChatbot {...props} />;
}

ServiceChatbotScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      serviceChatbotPage {
        data {
          attributes {
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
            bots {
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
      serviceChatbotPage: data?.serviceChatbotPage?.data?.attributes,
    },
    notFound: !data?.serviceChatbotPage?.data?.attributes,
    revalidate: 3600,
  };
}

export default ServiceChatbotScreen;
