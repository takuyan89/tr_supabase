import { createTask } from "@/features/tasks/create-task";
import { getTaskList } from "@/features/tasks/get-task-list";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const response = await createTask(data);

  if (!response) {
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }

  return NextResponse.json({ response }, { status: 200 });
};

export const GET = async (request: NextRequest) => {
  const response = await getTaskList;

  if (!response) {
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }

  return NextResponse.json({ response }, { status: 200 });
};
