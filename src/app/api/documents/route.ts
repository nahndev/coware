import { DocumentResourceType } from "@/constants/document";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    { id: "1", name: "Folder 1", desc: "Description 1", type: DocumentResourceType.Folder, folder: null },
    { id: "2", name: "Folder 2", desc: "Description 2", type: DocumentResourceType.Folder, folder: null },
    {
      id: "3",
      name: "File 1",
      type: DocumentResourceType.File,
      folder: { id: "1", name: "Folder 1", desc: "Description 1" },
    },
  ]);
}
