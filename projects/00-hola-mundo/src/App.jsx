import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    isFollowing: true,
    userName: "midudev",
    name: "Miguel Angel Durán",
  },
  {
    isFollowing: false,
    userName: "pheralb",
    name: "Pablo H",
  },
  {
    isFollowing: true,
    userName: "PacoHdez",
    name: "Paco Hernández",
  },
  {
    isFollowing: false,
    userName: "TMChein",
    name: "Tomás",
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          isFollowing={isFollowing}
        ></TwitterFollowCard>
      ))}
    </section>
  );
}
