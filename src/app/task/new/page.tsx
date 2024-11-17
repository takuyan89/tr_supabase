import { SubmitHandler, useForm } from "react-hook-form";
type Task = {
  name: string;
};

const CrateTaskPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => console.log(data);

  return (
    <div>
      <h1>Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Task名</span>
        <input
          type="text"
          {...register("name", {
            required: "Task名を入力してください",
          })}
        />
      </form>
    </div>
  );
};

export default CrateTaskPage;
