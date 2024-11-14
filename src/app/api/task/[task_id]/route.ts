import { deleteTask } from "@/features/tasks/delete-task";
import { updateTask } from "@/features/tasks/update-task";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      task_id: string;
    };
  }
) {
  const body = await request.json();

  const response = await updateTask(params.task_id, body);

  if (!response) {
    return NextResponse.json(
      { error: "Failed to fetch task list" },
      { status: 500 }
    );
  }

  return NextResponse.json(response, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const task_id = url.pathname.split("/").pop();

  console.log(task_id);

  if (!task_id) {
    return NextResponse.json(
      { error: "Task ID is missing or incorrect" },
      { status: 400 }
    );
  }

  const response = await deleteTask(task_id);

  if (!response) {
    return NextResponse.json(
      { error: "Failed to delete the task" },
      { status: 500 }
    );
  }

  return NextResponse.json(response, { status: 200 });
}
