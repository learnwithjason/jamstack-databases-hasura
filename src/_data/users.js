const fetch = require('node-fetch');

module.exports = () => {
  async function getUsers() {
    const result = await fetch(
      'https://lwj-hasura-jamstack.hasura.app/v1/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query MyQuery {
              users {
                id
                githubUsername
                name
                lwjEpisode {
                  title
                  guest {
                    name
                    twitter
                  }
                }
              }
            }
          `,
          variables: {},
        }),
      }
    ).then((res) => res.json());

    return result.data.users;
  }

  return getUsers();
};
