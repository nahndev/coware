import { DocumentResourceType } from "@/constants/document";
import { Identify } from "./common";

export type DocumentFolder = {
  id: Identify;
  name: string;
  desc: string;
  type: DocumentResourceType.Folder;

  folder: DocumentFolder | null;
};

export type DocumentFile = {
  id: Identify;
  name: string;
  type: DocumentResourceType.File;

  folder: DocumentFolder | null;
};

export type DocumentResource = DocumentFolder | DocumentFile;
