"use client";

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
  } = useForm<Task>({ defaultValues: { name: "walking" } });

  console.log("errors: ", errors);

  const name = watch("name");

  const onSubmit: SubmitHandler<Task> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl">Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">TaskName: </label>
        <input
          className="border border-gray-500 rounded"
          type="text"
          id="name"
          {...register("name", {
            required: "Task名を入力してください",
          })}
        />
        <input type="submit" className="border border-black ml-2 rounded" />
        <p>{name}</p>
      </form>
    </div>
  );
};

export default CrateTaskPage;
