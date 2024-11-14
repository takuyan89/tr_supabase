import { createClient } from "@/utils/supabase/server";

export const getTaskList = async () => {
  const supabase = await createClient();
  console.log("Supabase client created.");

  const { data: tasks, error } = await supabase.from("tasks").select();

  if (error) {
    console.error("Error fetching tasks:", error);
  }

  return tasks;
};
