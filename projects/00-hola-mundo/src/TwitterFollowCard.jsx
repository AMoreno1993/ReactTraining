/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterFollowCard({ userName = "unknown", name }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const imageSrc = `https://unavatar.io/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-btn is-following"
    : "tw-followCard-btn";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  console.log(isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-img"
          src={imageSrc}
          alt="avatar de midudev"
        />
        <div className="tw-followCard-div">
          <strong> {name} </strong>
          <span className="tw-followCard-userName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
