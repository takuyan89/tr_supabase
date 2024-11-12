import { getTaskList } from "@/features/tasks/get-task-list";

export const revalidate = 0;

const Page = async () => {
  const tasks = await getTaskList();

  return (
    <main>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
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
