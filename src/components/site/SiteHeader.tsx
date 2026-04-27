import { Button } from '@/components/ui/button';

interface SiteHeaderProps {
  scrollTo: (id: string) => void;
}

const SiteHeader = ({ scrollTo }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center bg-navy text-amber font-display text-xl font-bold">Z</div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wider text-navy">ZATO.NERUD</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">B2B Aggregator</span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ['Квиз', 'quiz'],
            ['Сравнение ТКП', 'compare'],
            ['О проекте', 'about'],
            ['FAQ', 'faq'],
            ['Контакты', 'contacts'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-xs uppercase tracking-wider text-steel transition-colors hover:text-navy"
            >
              {label}
            </button>
          ))}
        </nav>
        <Button onClick={() => scrollTo('quiz')} className="bg-navy hover:bg-navy/90 text-white rounded-none font-mono text-xs uppercase tracking-wider">
          Подобрать
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
