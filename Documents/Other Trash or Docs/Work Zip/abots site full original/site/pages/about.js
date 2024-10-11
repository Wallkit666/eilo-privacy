import Layouts from "@layouts/root";

import About from "@domains/about";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function AboutScreen({ ...props }) {
  return <About {...props} />;
}

AboutScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps() {
  const QUERY_ABOUT_PAGE = gql`
    query {
      aboutPage {
        data {
          attributes {
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
            experts(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  name
                  position
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
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_ABOUT_PAGE,
  });

  return {
    props: { about: data?.aboutPage?.data?.attributes },
    revalidate: 3600,
  };
}

export default AboutScreen;
