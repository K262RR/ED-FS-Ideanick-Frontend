export const App = () => {

  return (
    <div>
      <h1>IdeaNick</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};
