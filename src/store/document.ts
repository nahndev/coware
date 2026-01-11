import { CreateDocumentDto, DocumentApi } from "@/service/document";
import { Document } from "@/types/document";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const documentQueryKeys = {
  all: ["documents"],
  list: () => [...documentQueryKeys.all, "list"] as const,
  detail: (id: string) => [...documentQueryKeys.all, "detail", id] as const,
};

export function useDocuments() {
  return useQuery<Document[]>({
    queryKey: documentQueryKeys.list(),
    queryFn: async () => DocumentApi.getAll(),
  });
}

export function useDocumentsByParent(folder: Document | null) {
  const { data: resources = [] } = useDocuments();
  return resources.filter((item: Document) => item.folder?.id === folder?.id) || [];
}

export function useCreateDocument() {
  const queryClient = useQueryClient();
  return useMutation<Document, unknown, CreateDocumentDto>({
    mutationFn: (data: CreateDocumentDto) => DocumentApi.createOne(data),
    onSuccess: (folder: Document) => {
      queryClient.invalidateQueries({ queryKey: documentQueryKeys.list() });
      queryClient.setQueryData(documentQueryKeys.list(), (oldData: any) => [...(oldData || []), folder]);
    },
  });
}
