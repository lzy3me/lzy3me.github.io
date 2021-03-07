import gql from "graphql-tag";

export const PullPinned = gql`
  query {
    user(login: "lzy3me") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            description
            homepageUrl
            primaryLanguage {
              name
            }
            languages(first: 3) {
              edges {
                size
              }
              nodes {
                color
                name
              }
            }
          }
        }
      }
    }
  }
`;
