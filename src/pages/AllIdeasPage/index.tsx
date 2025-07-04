import { trpc } from '../../lib/trpc';

export const AllIdeasPage = () => {
  const {data, error, isLoading, isFetching, isError} = trpc.getIdeas.useQuery();

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }
  
  return (
    <div>
      <h1>IdeaNick</h1>
      {data?.ideas.map((idea) => {
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