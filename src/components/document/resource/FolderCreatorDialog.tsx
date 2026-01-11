"use client";

import ButtonIcon from "@/components/ui/button-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilePlus } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateFolder } from "@/store/document";

const createFolderSchema = z.object({
  name: z.string().min(1, "Folder name is required"),
  description: z.string().optional(),
});

type CreateFolderDto = z.infer<typeof createFolderSchema>;

export type FolderCreatorDialogProps = {};

export const FolderCreatorAction: React.FC<FolderCreatorDialogProps> = ({}) => {
  const { mutate: handleCreateFolder } = useCreateFolder();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateFolderDto>({ resolver: zodResolver(createFolderSchema) });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonIcon icon={FilePlus} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Create new folder</DialogTitle>
          <DialogDescription>
            Enter the folder name and an optional description, then click save to create a new folder.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit((dto) => handleCreateFolder(dto))}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Folder Name</Label>
              <Input id="name" placeholder="My Folder" {...register("name")} />
              {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="A brief description" {...register("description")} />
              {errors.description && <p className="text-sm text-red-600">{errors.description.message}</p>}
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
