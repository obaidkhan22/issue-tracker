import createIssueSchema from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue." }, { status: 404 });
  await prisma.issue.update({
    where: { id: parseInt(params.id) },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json("Issue updated successfully.");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });
  await prisma.issue.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json({});
}
