import { parseIntSafe } from "@/utils/number";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination = ({
  totalPage,
  currentPage,
  onChangePage,
}: IPaginationProps) => {
  return (
    <div className="flex justify-end items-center">
      {/* Render the first page */}
      <div className="mr-4">
        Page {currentPage} of {totalPage}
      </div>
      <div className="flex items-center  rounded-md">
        <Button
          key={1}
          variant="outline"
          size="icon"
          className="border-r-0 rounded-r-none bg-blue-500   hover:bg-blue-400"
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <Minus className="text-white w-5 h-5" />
        </Button>
        <Input
          className="w-20 rounded-none text-center !outline-none !ring-0 !ring-offset-0"
          value={currentPage}
          onChange={(e) => onChangePage(parseIntSafe(e.target.value))}
          type="number"
        />
        <Button
          key={1}
          variant="outline"
          size="icon"
          className="border-l-0 rounded-l-none bg-blue-500  hover:bg-blue-400"
          disabled={currentPage === totalPage}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <Plus className="text-white w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
