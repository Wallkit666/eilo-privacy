import Layouts from "@layouts/root";

import Home from "@domains/home";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function HomeScreen({ ...props }) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const QUERY_TECHNOLOGY = gql`
    query {
      homePage {
        data {
          attributes {
            stacks(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  title
                  key
                  technologies {
                    data {
                      id
                      attributes {
                        key
                        title
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
            projects(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  title
                  description
                  name
                  technologies {
                    data {
                      id
                      attributes {
                        key
                        title
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
                  preview {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
            services(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  title
                  description
                  key
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
            strengths(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  user
                  position
                  user
                  message
                  avatar {
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
      countries(pagination: { pageSize: 100 }) {
        data {
          id
          attributes {
            name
            lat
            lng
            progects {
              id
              title
              description
              duration
              industry
              team_size
              duration
              budget
              technologies
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
    props: {
      home: data?.homePage?.data?.attributes,
      countries: data?.countries?.data,
    },
  };
}

HomeScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export default HomeScreen;
