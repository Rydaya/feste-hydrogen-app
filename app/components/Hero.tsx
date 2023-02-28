import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';
import {Link} from '~/components/Link';
import {useQuery} from 'urql';

export function Hero({
  heading,
  height,
  loading,
  top,
}: any) {
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

  let spreadFirst = {
    __typename: 'MediaImage',
    mediaContentType: 'IMAGE',
    alt: data?.heroes[0]?.description,
    previewImage: {
      url: data?.heroes[0]?.url,
    },
    id: data?.heroes[0]?.id,
    image: {
      url: data?.heroes[0]?.url,
      width: 2500,
      height: 2500,
    },
  };

  let spreadSecond = {
    __typename: 'MediaImage',
    mediaContentType: 'IMAGE',
    alt: data?.heroes[1]?.description,
    previewImage: {
      url: data?.heroes[1]?.url,
    },
    id: data?.heroes[1]?.id,
    image: {
      url: data?.heroes[1]?.url,
      width: 2500,
      height: 2500,
    },
  };

  return (
    <Link to={"#"}>
      <section
        className={clsx(
          'relative justify-end flex flex-col w-full',
          top && '-mt-nav',
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]',
        )}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {data?.heroes && (
            <div>
              <SpreadMedia
                scale={2}
                sizes='(min-width: 80em) 700px, (min-width: 48em) 450px, 500px'
                widths={[500, 450, 700]}
                width={375}
                data={spreadFirst as any as Media}
                loading={loading}
              />
            </div>
          )}
          {spreadSecond && (
            <div className="hidden md:block">
              <SpreadMedia
                sizes="(min-width: 80em) 700, (min-width: 48em) 450, 500"
                widths={[450, 700]}
                width={375}
                data={spreadSecond as any as Media}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
          {heading?.value && <h2 className="">{data?.heroes[0]?.title}</h2>}
          <h2 className="">{data?.heroes[1]?.title}</h2>
        </div>
      </section>
    </Link>
  );
}

interface SpreadMediaProps {
  data: Media | MediaImage | MediaVideo;
  loading?: HTMLImageElement['loading'];
  scale?: 2 | 3;
  sizes: string;
  width: number;
  widths: number[];
}

function SpreadMedia({
  data,
  loading,
  scale,
  sizes,
  width,
  widths,
}: SpreadMediaProps) {
  return (
    <MediaFile
      data={data}
      className="block object-cover w-full h-full"
      mediaOptions={{
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          width: (scale ?? 1) * width,
          previewImageOptions: {scale, src: data.previewImage?.url ?? ''},
        },
        image: {
          loading,
          loaderOptions: {scale, crop: 'center'},
          widths,
          sizes,
          width,
          alt: data.alt || '',
        },
      }}
    />
  );
}
