import { DocumentFolder } from "@/types/document";
import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json<DocumentFolder>({
    id: "4",
    name: "New Folder",
    desc: "New Folder Description",
    folder: null,
  });
}
