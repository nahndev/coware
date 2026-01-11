import { Document } from "@/types/document";
import * as z from "zod";
import { request } from "./request";

export const createDocumentSchema = z.object({
  name: z.string().min(1, "Folder name is required"),
  desc: z.string().optional(),
});

export type CreateDocumentDto = z.infer<typeof createDocumentSchema>;

export class DocumentApi {
  static getAll() {
    return request.get<Document[]>("/documents").then((res) => res.data);
  }

  static createOne(data: CreateDocumentDto) {
    return request.post<Document>("/documents", data).then((res) => res.data);
  }
}
