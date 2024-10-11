const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

import apolloClient from "@libs/apollo";
import { gql } from "@apollo/client";

import { DOMAINCE } from "@configs/api";

function getTechnologies() {
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

  return apolloClient.query({
    query: QUERY_TECHNOLOGIES,
  });
}

function generateSiteMap({ technologies, posts }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${DOMAINCE}</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/services</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/services/strategy</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/services/mobile</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/services/web</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/services/chatbot</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/about</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/blog</loc>
     </url>
     <url>
       <loc>${DOMAINCE}/contacts</loc>
     </url>
     ${technologies
       .map((key) => {
         return `
       <url>
           <loc>${`${DOMAINCE}/tech/${key}`}</loc>
       </url>
     `;
       })
       .join("")}
      ${posts
        .map((key) => {
          return `
        <url>
            <loc>${`${DOMAINCE}/blog/${key}`}</loc>
        </url>
      `;
        })
        .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const QUERY_TECHNOLOGIES = gql`
    {
      technologies {
        data {
          attributes {
            key
          }
        }
      }
      posts(pagination: { pageSize: 100 }) {
        data {
          id
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: QUERY_TECHNOLOGIES,
  });

  const technologies = data.technologies.data.map(
    (item) => item?.attributes?.key
  );

  const posts = data.posts.data.map((item) => item?.id);

  const sitemap = generateSiteMap({ technologies, posts });

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
