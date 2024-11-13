const Page = async () => {
  const response = await fetch("http://localhost:3000/api/task", {
    cache: "no-store",
  });

  const { tasks } = await response.json();

  return (
    <main>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task: any) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </main>
  );
};

export default Page;
