import type {SerializeFrom} from '@shopify/remix-oxygen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductCard} from '~/components/ProductCard';
import {useQuery} from 'urql';

export function ProductSwimlane({
  title = 'Featured Products',
  count = 12,
  ...props
}: {
  title?: string;
  products?: SerializeFrom<Product[]>;
  count?: number;
}) {
  const [result] = useQuery({
    query: `query {
        products {
            id
            name
            price
            url
          }
        }`,
  });

  const {data, fetching, error} = result;

  if (fetching) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <section >
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        {data.products.map((product: any) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
    </section>
  );
}
