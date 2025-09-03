import HomeBanner from './ components/HomeBanner';
import Container from './ components/Container';
import { products } from '../utils/products';
import { truncateText } from '@/utils/truncateText';
import ProductCard from './ components/products/ProductCard';
import getProducts, { IProductParams } from '@/actions/getProducts';
import NullData from './ components/NullData';
import Image from 'next/image';
import Link from 'next/link';
interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title="Rất tiếc! Không tìm thấy sản phẩm nào. Nhấp vào tất cả để xóa bộ lọc" />
    );
  }

  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5); // cách shuffle ngắn gọn
  }

  const shuffleProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        <HomeBanner />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[5px]">
          {shuffleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`} // đường dẫn chi tiết
              className="p-2 border rounded-md text-center block hover:shadow-md"
            >
              <Image
                src={product.images[0]?.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price.toLocaleString()}₫</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
