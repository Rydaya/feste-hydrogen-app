import {FeaturedCollections} from '~/components/FeaturedCollections';
import {Hero} from '~/components/Hero';
import {ProductSwimlane} from '~/components/ProductSwimlane';

export const meta = () => {
  return {
    title: 'Hydrogen',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export default function Homepage() {
  return (
    <>
      <h2 className="text-center text-3xl mb-[60px]">HAVING FUN 101</h2>
      <FeaturedCollections title="Collections"/>
      <Hero />
      <ProductSwimlane title="PARTY A LA CARTE" count={3} />
    </>
  );
}
