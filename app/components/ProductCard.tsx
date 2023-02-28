import clsx from 'clsx';
import {
  Image,
  Money,
} from '@shopify/hydrogen';
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
    <div className="flex flex-col gap-2">
      <Link to="#">
        <div className={clsx('grid gap-4', className)}>
          <div className="card-image aspect-[4/5] bg-primary/5">
            {product && (
              <Image
                className="aspect-[4/5] w-full object-cover fadeIn"
                widths={[320]}
                sizes="320px"
                loaderOptions={{
                  crop: 'center',
                  scale: 2,
                  width: 320,
                  height: 400,
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
          </div>
          <div className="flex gap-1">
            <h3 className="w-full overflow-hidden whitespace-nowrap text-ellipsis ">
              {product.name}
            </h3>
            <Money withoutTrailingZeros data={{amount: product.price, currencyCode: "USD"}} />
          </div>
        </div>
      </Link>
    </div>
  );
}
