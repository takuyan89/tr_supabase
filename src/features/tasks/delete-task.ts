import { createClient } from "@/utils/supabase/server";

export const deleteTask = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)
    .select("id")
    .single();

  if (error) {
    console.error("Error deleting task:", error);
    return null;
  }

  console.log("Task deleted:", data);
  return data;
};
