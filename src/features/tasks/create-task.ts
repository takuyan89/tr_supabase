import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

type createTaskProps = {
  name: string;
};

// タスクを作成する関数
export const createTask = async (data: createTaskProps) => {
  const supabase = await createClient();

  // タスクを "tasks" テーブルに挿入
  const { data: result, error } = await supabase
    .from("tasks")
    .insert({ name: data.name })
    .select("id, name") // 作成したタスクのidとnameを選択
    .single(); // 1件だけ作成

  // エラーハンドリング
  if (error) {
    console.error("Error inserting task:", error.message);
    throw new Error(error.message);
  }

  // タスクが正常に作成された場合、作成したタスクを返す
  return result;
};
