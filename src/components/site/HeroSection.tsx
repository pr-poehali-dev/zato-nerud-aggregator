import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

const HeroSection = ({ scrollTo }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-amber" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-steel">№ 001 / Платформа</span>
            </div>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-navy text-balance md:text-7xl lg:text-8xl">
              Нерудные<br />
              материалы<br />
              <span className="text-steel">без посредников</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-steel">
              Агрегатор проверенных поставщиков щебня, песка и ПГС. Один запрос — десятки коммерческих предложений в течение часа.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('quiz')} size="lg" className="rounded-none bg-navy hover:bg-navy/90 text-white px-8 h-12 font-mono text-xs uppercase tracking-wider">
                Подобрать материал
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button onClick={() => scrollTo('compare')} size="lg" variant="outline" className="rounded-none border-navy text-navy hover:bg-navy hover:text-white px-8 h-12 font-mono text-xs uppercase tracking-wider">
                Сравнить ТКП
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl font-bold text-navy">240+</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Поставщиков</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-navy">58</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Регионов</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-navy">~1ч</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Среднее ТКП</div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="diagonal-stripes absolute -inset-4" />
            <Card className="relative rounded-none border-2 border-navy bg-card p-8 shadow-[8px_8px_0_0_hsl(var(--navy))]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Запрос #ZN-2026-0427</span>
                <Badge className="rounded-none bg-amber text-navy font-mono text-[10px] uppercase">Активен</Badge>
              </div>
              <div className="space-y-3 border-y border-border py-6">
                {[
                  ['Материал', 'Щебень гранитный 5–20'],
                  ['Объём', '1 200 т'],
                  ['Регион', 'Москва, МКАД'],
                  ['Срок', 'до 3 дней'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between font-mono text-sm">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-medium text-navy">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="mb-2 flex justify-between font-mono text-xs">
                  <span className="text-muted-foreground">Поступило ТКП</span>
                  <span className="font-bold text-navy">12 / 15</span>
                </div>
                <Progress value={80} className="h-1 rounded-none" />
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-steel">
                <Icon name="Clock" size={14} />
                Лучшая цена: <span className="font-bold text-navy">1 240 ₽/т</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="border-t border-border bg-navy py-3 overflow-hidden">
        <div className="flex animate-scroll-x whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 font-mono text-xs uppercase tracking-wider text-amber">
              <span>Щебень 5–20 · 1 240 ₽/т</span><span className="text-steel">/</span>
              <span>Песок карьерный · 680 ₽/т</span><span className="text-steel">/</span>
              <span>ПГС · 540 ₽/т</span><span className="text-steel">/</span>
              <span>Отсев · 420 ₽/т</span><span className="text-steel">/</span>
              <span>Щебень 20–40 · 1 180 ₽/т</span><span className="text-steel">/</span>
              <span>Песок мытый · 820 ₽/т</span><span className="text-steel">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
