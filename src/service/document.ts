import { DocumentFolder } from "@/types/document";
import * as z from "zod";
import { v4 as uuidV4 } from "uuid";
import { request } from "./request";

export const createFolderSchema = z.object({
  name: z.string().min(1, "Folder name is required"),
  desc: z.string().optional(),
});

export type CreateFolderDto = z.infer<typeof createFolderSchema>;

export class DocumentApi {
  static getAllResources() {
    return request.get<DocumentFolder[]>("/documents").then((res) => res.data);
  }

  static createFolder(data: CreateFolderDto) {
    return request.post<DocumentFolder>("/folders", data).then((res) => res.data);
  }
}
