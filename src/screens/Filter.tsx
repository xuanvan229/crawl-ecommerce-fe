import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IProductFilterProps {
  categories: string[];
  category: string;
  onChangeCategory: (category: string) => void;
}

export function ProductFilter({
  categories,
  category,
  onChangeCategory,
}: IProductFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 max-h-[400px] overflow-auto"
      >
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={category === ""}
          onCheckedChange={() => onChangeCategory("")}
        >
          All
        </DropdownMenuCheckboxItem>
        {categories.map((v) => (
          <DropdownMenuCheckboxItem
            key={v}
            checked={category === v}
            onCheckedChange={() => onChangeCategory(v)}
          >
            {v}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
