import {Image} from '@shopify/hydrogen';
import {Link} from '~/components/Link';
import {useQuery} from 'urql';

export function FeaturedCollections({
  title = 'Collections',
  ...props
}: {
  title?: string;
  [key: string]: any;
}) {
  const [result] = useQuery({
    query: `query {
        featureCollections {
            id
            name
            url
            description
            handle
            color
          }
        }`,
  });

  const {data, fetching, error} = result;

  if (fetching) return <>Loading...</>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <section className='flex flex-nowrap gap-2.5 justify-between mb-20'>
      <>
        {data.featureCollections.map((collection: any) => {
          if (!collection?.url) {
            return null;
          }
          return (
            <div className={'p-2.5 pb-[62px]'} style={{backgroundColor: collection.color}}>
              <div key={collection.id} className="max-w-[312px] mb-7">
                {collection?.url && (
                  <Image
                    alt={`Image of ${collection.name}`}
                    data={{
                      altText: collection.description,
                      height: 3155,
                      width: 2500,
                      url: collection.url,
                    }}
                    height={224}
                    sizes="(max-width: 20em) 100vw, 33vw"
                    width={312}
                    widths={[400, 500, 600, 700, 800, 900]}
                    loaderOptions={{
                      scale: 2,
                      crop: 'center',
                    }}
                  />
                )}
              </div>
              <div className='flex flex-col items-center text-center'>
                <h3 className="text-xl mb-2.5">{collection.name}</h3>
                {collection.description && (
                  <p className="text-s max-w-[272px] mb-4">{collection.description}</p>
                )}
                {collection.handle && <Link to="#" className='font-sansSerif text-xs font-medium underline uppercase'> {collection.handle} </Link>}
              </div>
            </div>
          );
        })}
      </>
    </section>
  );
}
