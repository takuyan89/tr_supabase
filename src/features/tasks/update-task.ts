import { createClient } from "@/utils/supabase/server";

export const updateTask = async (id: string, body: any) => {
  const supabase = await createClient();

  const { data: task, error } = await supabase
    .from("tasks")
    .update(body)
    .eq("id", id)
    .select("id")
    .single();

  if (error) {
    console.error(error);
  }
  return task;
};
