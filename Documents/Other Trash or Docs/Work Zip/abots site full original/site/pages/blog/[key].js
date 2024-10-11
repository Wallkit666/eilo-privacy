import Layouts from "@layouts/root";

import Detail from "@domains/blog-detail";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

function DetailScreen({ ...props }) {
  return <Detail {...props} />;
}

DetailScreen.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

// export async function getStaticPaths() {
//   const QUERY_POSTS = gql`
//     {
//       posts(pagination: { pageSize: 200 }) {
//         data {
//           attributes {
//             key
//           }
//         }
//       }
//     }
//   `;

//   const { data } = await apolloClient.query({
//     query: QUERY_POSTS,
//   });

//   const paths = data.posts.data.map((item) => ({
//     params: { key: item?.attributes?.key },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   console.log("params.key", params.key);
// const QUERY_POST = gql`
//   query {
//     blogPage {
//       data {
//         attributes {
//           topStories(pagination: { pageSize: 100 }) {
//             id
//             post {
//               data {
//                 id
//                 attributes {
//                   title
//                   description
//                   preview {
//                     data {
//                       attributes {
//                         url
//                       }
//                     }
//                   }
//                   tags {
//                     id
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     posts(
//       filters: {
//         key: {
//           eq: "${params.key}"
//         }
//       }
//     ) {
//       data {
//         id
//         attributes {
//           content
//           tags {
//             id
//             title
//           }
//         }
//       }
//     }
//   }
// `;

// const { data } = await apolloClient.query({
//   query: QUERY_POST,
//   variables: { key: params.key },
// });

// return {
//   props: {
//     topStories: data?.blogPage?.data?.attributes?.topStories,
//     post: data?.posts?.data?.at(0),
//   },
//   notFound: !data?.posts?.data?.at(0),
//   revalidate: 3600,
// };
// }

// export async function getServerSideProps({ req, res, params }) {
export const getServerSideProps = async ({ req, res, params }) => {
  // res.setHeader(
  //   "Cache-Control",
  //   `public, s-maxage=3600, stale-while-revalidate=${3600 * 2}`
  // );

  const QUERY_POST = gql`
    query {
      blogPage {
        data {
          attributes {
            topStories(pagination: { pageSize: 100 }, sort: "post.createdAt:DESC") {
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
          }
        }
      }
      posts(
        filters: {
          key: {
            eq: "${params?.key}"
          }
        }
      ) {
        data {
          id
          attributes {
            content
            tags {
              id
              title
            }
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_POST,
  });

  console.log("data?.posts?.data?.at(0)", data?.posts?.data?.at(0));

  return {
    props: {
      topStories: data?.blogPage?.data?.attributes?.topStories,
      post: data?.posts?.data?.at(0),
    },
    // notFound: !data?.posts?.data?.at(0),
    // revalidate: 3600,
    // revalidate: 3600,
  };
};

export default DetailScreen;
