import type {SerializeFrom} from '@shopify/remix-oxygen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductCard} from '~/components/ProductCard';
import {Link} from '~/components/Link';
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
    <section>
      <h2 className="text-center text-3xl mb-[60px]">PARTY A LA CARTE</h2>
      <div className="flex flex-nowrap justify-between gap-0.5 mb-12">
        {data.products.map((product: any) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
      <Link to="#" className='flex justify-center font-sansSerif text-m font-medium underline uppercase'>shop all</Link>
    </section>
  );
}
