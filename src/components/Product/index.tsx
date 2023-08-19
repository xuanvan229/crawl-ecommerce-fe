import { IProduct } from "@/types/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Product = ({ product }: { product: IProduct }) => {
  const onClick = () => {
    window.open(`https:${product.url}`, "_blank");
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <Card
        onClick={onClick}
        className="cursor-pointer h-full overflow-hidden hover:shadow-lg flex flex-col"
      >
        <img
          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover border-b shadow-xs"
          src={product.image}
          alt=""
        />
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-col justify-between h-full">
            <CardDescription>{product.category}</CardDescription>
            <p className="text-2xl font-bold">{product.price}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
