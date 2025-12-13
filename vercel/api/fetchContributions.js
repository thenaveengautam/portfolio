import axios from "axios";

const generatePRQuery = (repos, username) => {
  const queries = repos
    .map(repo => `repo:${repo} is:pr author:${username}`)
    .join(" ");

  return `
    query {
      search(query: "${queries}", type: ISSUE, first: 100) {
        nodes {
          ... on PullRequest {
            id
            title
            state
            number
            createdAt
            url
            additions
            deletions
          }
        }
      }
    }
  `;
};

export default async function handler(req, res) {
  try {
    const { username, repos } = req.query;

    if (!username || !repos) {
      return res.status(400).json({ error: "username and repos required" });
    }

    const query = generatePRQuery(repos.split(","), username);

    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
