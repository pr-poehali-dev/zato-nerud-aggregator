import SiteHeader from '@/components/site/SiteHeader';
import HeroSection from '@/components/site/HeroSection';
import QuizSection from '@/components/site/QuizSection';
import InfoSections from '@/components/site/InfoSections';

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <QuizSection />
      <InfoSections />
    </div>
  );
};

export default Index;
