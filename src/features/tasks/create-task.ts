import { createClient } from "@/utils/supabase/server";

type createTaskProps = {
  name: string;
};

export const createTask = async (data: createTaskProps) => {
  const supabase = await createClient();

  const { data: result, error } = await supabase
    .from("tasks")
    .insert({ name: data.name })
    .select("id")
    .single();

  if (error) {
    console.error("Error inserting task:", error.message);
    throw new Error(error.message);
  }

  return result;
};
