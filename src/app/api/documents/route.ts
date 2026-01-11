import { NextResponse } from "next/server";
import { Document } from "@/types/document";

export function GET() {
  return NextResponse.json([
    { id: "1", name: "Folder 1", desc: "Description 1", folder: null },
    { id: "2", name: "Folder 2", desc: "Description 2", folder: null },
    {
      id: "3",
      name: "File 1",
      folder: { id: "1", name: "Folder 1", desc: "Description 1" },
    },
  ]);
}

export function POST() {
  return NextResponse.json<Document>({
    id: "4",
    name: "New Folder",
    desc: "New Folder Description",
    folder: null,
  });
}
