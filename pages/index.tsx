import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getRepoData } from "../lib/repos";
import Layout from "../components/layout";
import Button from "../components/button";
import Input from "../components/input";

interface Props {
  setRepoData: any;
}

const Home: React.FC<Props> = ({ setRepoData }) => {
  const [user, setUser] = useState<string>("");
  const [repo, setRepo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = `https://api.github.com/repos/${user}/${repo}`;
    const repoData = await getRepoData(url);
    if (Object.keys(repoData).length !== 0) {
      setRepoData(repoData);
    } else {
      return setError(true);
    }
    router.push("./create");
  };
  return (
    <Layout>
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold mb-4">Create a Superrepo</h2>
        <p>
          Generate a GitHub repository link that is worth sharing on social
          media! ✌️
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>
            User
            <Input
              value={user}
              placeholder={"facebook"}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-8">
          <label>
            Repo
            <Input
              value={repo}
              placeholder={"react"}
              onChange={(e) => setRepo(e.target.value)}
            />
          </label>
        </div>
        <Button color="green" type="submit">
          Submit
        </Button>
      </form>
      {/* TODO: Add Error Component */}
    </Layout>
  );
};

export default Home;
