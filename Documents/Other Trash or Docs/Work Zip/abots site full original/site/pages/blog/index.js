import Layouts from "@layouts/root";

import Blog from "@domains/blog";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function BlogScreen({ ...props }) {
  return <Blog {...props} />;
}

BlogScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export const getStaticProps = async ({ res }) => {
  // res.setHeader(
  //   "Cache-Control",
  //   `public, s-maxage=3600, stale-while-revalidate=${3600 * 2}`
  // );

  const QUERY_BLOG = gql`
    query {
      blogPage {
        data {
          attributes {
            stories(
              pagination: { pageSize: 100 }
              sort: "post.createdAt:DESC"
            ) {
              post {
                data {
                  id
                  attributes {
                    key
                    title
                    description
                    createdAt
                    preview {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    tags {
                      id
                      title
                    }
                  }
                }
              }
            }
            topStories(
              pagination: { pageSize: 100 }
              sort: "post.createdAt:DESC"
            ) {
              id
              post {
                data {
                  id
                  attributes {
                    key
                    title
                    description
                    createdAt
                    preview {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    tags {
                      id
                      title
                    }
                  }
                }
              }
            }
            mainStory {
              data {
                id
                attributes {
                  key
                  title
                  description
                  createdAt
                  preview {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  tags {
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
    query: QUERY_BLOG,
  });

  return {
    notFound: !data?.blogPage?.data?.attributes,
    props: { blogPage: data?.blogPage?.data?.attributes },
    revalidate: 3600,
  };
};

export default BlogScreen;
