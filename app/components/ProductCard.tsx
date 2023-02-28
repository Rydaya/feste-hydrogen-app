import {Image, Money} from '@shopify/hydrogen';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import {Link} from '~/components/Link';

export function ProductCard({
  product,
  className,
  loading,
}: {
  product: SerializeFrom<any>;
  label?: string;
  className?: string;
  loading?: HTMLImageElement['loading'];
  onClick?: () => void;
  quickAdd?: boolean;
}) {
  return (
    <div className="grow flex flex-col gap-2">
      <Link to="#">
        {product && (
          <Image
            className="w-full object-cover fadeIn"
            widths={[]}
            sizes="(max-width: 100%) 100vw, 33vw"
            loaderOptions={{
              crop: 'center',
              scale: 2,
              width: '100%',
              height: 'auto',
            }}
            data={{
              altText: product.name,
              height: 3155,
              width: 2500,
              url: product.url,
            }}
            alt={`Picture of ${product.name}`}
            loading={loading}
          />
        )}
        <div className="flex p-5 justify-between items-center bg-bgProduct">
          <h3 className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-l italic">
            {product.name}
          </h3>
          <Money
            withoutTrailingZeros
            data={{amount: product.price, currencyCode: 'USD'}}
            className="font-sansSerif text-s font-medium"
          />
        </div>
      </Link>
    </div>
  );
}
