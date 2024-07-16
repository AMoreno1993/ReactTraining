export function TwitterFollowCard({ userName, name, isFollowing }) {
  const imageSrc = `https://unavatar.io/${userName}`;
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
          <span className="tw-followCard-userName">{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-btn">seguir</button>
      </aside>
    </article>
  );
}
