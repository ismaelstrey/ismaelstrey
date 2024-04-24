import axios, { AxiosResponse } from "axios";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  // Adicione mais campos conforme necessário
}

async function getUserInfo(username: string): Promise<GitHubUser | null> {
  try {
    const response: AxiosResponse<GitHubUser> = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter informações do usuário ${username}:`, error);
    return null;
  }
}

// Substitua "username" pelo nome de usuário do GitHub que você deseja obter informações
const username = "ismaelstrey";

const infoUserGitHub = async () =>
  await getUserInfo(username)
    .then((userData: GitHubUser | null) => {
      if (userData) {
        return userData;
      } else {
        console.log(
          `Não foi possível obter informações sobre o usuário ${username}`
        );
      }
    })
    .catch((error) => {
      console.error("Erro ao processar a solicitação:", error);
    });

async function getReadme(
  username: string,
  repository: string
): Promise<string | null> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://api.github.com/repos/${username}/${repository}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao obter o README do repositório ${username}/${repository}:`,
      error
    );
    return null;
  }
}

// Substitua "username" pelo seu nome de usuário do GitHub e "repository" pelo nome do seu repositório

const repository = username;

const getReadmeGit = async () =>
  await getReadme(username, repository)
    .then((readmeContent: string | null) => {
      if (readmeContent) {
        return readmeContent;
      } else {
        console.log(
          `Não foi possível obter o README do repositório ${username}/${repository}`
        );
      }
    })
    .catch((error) => {
      console.error("Erro ao processar a solicitação:", error);
    });

export { infoUserGitHub, getReadmeGit };
