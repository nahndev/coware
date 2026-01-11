import { CreateFolderDto, DocumentApi } from "@/service/document";
import { DocumentFolder, DocumentResource } from "@/types/document";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const documentQueryKeys = {
  all: ["documents"],
  list: () => [...documentQueryKeys.all, "list"] as const,
  detail: (id: string) => [...documentQueryKeys.all, "detail", id] as const,
};

export function useResource() {
  return useQuery<DocumentResource[]>({
    queryKey: documentQueryKeys.list(),
    queryFn: async () => DocumentApi.getAllResources(),
  });
}

export function useDocumentResourceByFolder(folder: DocumentFolder | null) {
  const { data: resources = [] } = useResource();
  return resources.filter((item: DocumentResource) => item.folder?.id === folder?.id) || [];
}

export function useCreateFolder() {
  const queryClient = useQueryClient();
  return useMutation<DocumentFolder, unknown, CreateFolderDto>({
    mutationFn: (data: CreateFolderDto) => DocumentApi.createFolder(data),
    onSuccess: (folder: DocumentFolder) => {
      queryClient.invalidateQueries({ queryKey: documentQueryKeys.list() });
      queryClient.setQueryData(documentQueryKeys.list(), (oldData: any) => [...(oldData || []), folder]);
    },
  });
}
