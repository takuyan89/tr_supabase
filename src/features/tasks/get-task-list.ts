import { createClient } from "@/utils/supabase/server";

export const getTaskList = async () => {
  const supabase = await createClient();
  const { data: tasks, error } = await supabase.from("tasks").select();

  if (error) {
    console.error("Error fetching tasks:", error);
    return null;
  }

  return tasks;
};
