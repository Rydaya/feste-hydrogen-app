import clsx from 'clsx';
import {MediaFile, Image} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';
import {Link} from '~/components/Link';
import {useQuery} from 'urql';

export function Hero({heading, height, loading, top}: any) {
  const [result] = useQuery({
    query: `query {
        heroes {
            id
            title
            description
            url
          }
        }`,
  });

  const {data, fetching, error} = result;

  if (fetching) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <section className="flex gap-2.5 justify-between mb-20">
        {data.heroes.map((collection: any) => {
          if (!collection?.url) {
            return null;
          }
          return (
            <div key={collection.id} className="grow relative">
              {collection?.url && (
                <Image
                  alt={`Image of ${collection?.title}`}
                  data={{
                    altText: collection.description,
                    height: 3155,
                    width: 2500,
                    url: collection?.url,
                  }}
                  height={'100%'}
                  sizes="(max-width: 100%) 100vw, 33vw"
                  width={'100%'}
                  widths={[400, 500, 600, 700, 800, 900]}
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                  className='object-contain'
                />
              )}
              <div className='text-center text-textWhite absolute bottom-10 left-[50%] translate-x-[-50%] w-[85%]'>
                <h2 className="text-1xl 1.5xl:text-2xl mb-5">{collection?.title}</h2>
                <Link to="#" className='font-sansSerif text-m uppercase underline'>{collection?.description}</Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
