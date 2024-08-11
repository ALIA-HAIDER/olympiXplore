// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid/ArticlesCardsGrid';
import { EmailBanner } from '@/components/EmailBanner/EmailBanner';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { HeaderSearch } from '@/components/Header/HeaderSearch';
import { HeroImageRight } from '@/components/HeroImage/HeroImageRight';
import { HeroText } from '@/components/HeroText/HeroText';
import { Paraoly } from '@/components/para/Paraoly';
import { TableReviews } from '@/components/TableReviews/TableReviews';

export function HomePage() {
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <HeaderSearch/>
      <HeroImageRight/>
      <ArticlesCardsGrid/>
      <EmailBanner/>
      <HeroText/>
      <TableReviews/>
      <Paraoly/>
      <FooterLinks/>
    </>
  );
}
