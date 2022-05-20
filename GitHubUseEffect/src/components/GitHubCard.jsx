import React from "react";

export const GitHubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <img src={avatar_url} width="100px" alt={login} />
      </div>
      <div>{login}</div>
    </div>
  );
};
