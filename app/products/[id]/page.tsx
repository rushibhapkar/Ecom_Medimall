import { products } from '@/data/dummyData';
import ProductClient from './ProductClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) ?? null;
  return <ProductClient product={product} />;
}