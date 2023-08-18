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
        className="cursor-pointer h-full overflow-hidden hover:shadow-lg"
      >
        <img
          className="w-full h-[300px] object-cover"
          src={product.image}
          alt=""
        />
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{product.price}</p>
        </CardContent>
      </Card>
    </div>
  );
};
