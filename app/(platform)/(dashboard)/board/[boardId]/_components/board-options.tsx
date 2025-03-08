"use client";

import { MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";

interface BoardOptionsProps {
  id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <Button
          variant="ghost"
          onClick={onDelete}
          disabled={isLoading}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <div className="flex items-center justify-between w-full">
            <div>Delete this board</div>
            <div>
              <Trash2 className="h-4 w-4" />
            </div>
          </div>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
