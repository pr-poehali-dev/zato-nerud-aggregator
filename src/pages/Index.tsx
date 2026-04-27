import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [cart, setCart] = useState<{ name: string; volume: string }[]>([]);

  const quizQuestions = [
    {
      q: 'Тип материала',
      options: ['Щебень гранитный', 'Песок карьерный', 'ПГС', 'Отсев дробления'],
    },
    {
      q: 'Объём поставки',
      options: ['до 100 т', '100–500 т', '500–2000 т', 'свыше 2000 т'],
    },
    {
      q: 'Регион доставки',
      options: ['Москва и МО', 'Санкт-Петербург и ЛО', 'ЦФО', 'Другой регион'],
    },
    {
      q: 'Срок поставки',
      options: ['Срочно (1–3 дня)', 'В течение недели', 'В течение месяца', 'Гибкий график'],
    },
  ];

  const suppliers = [
    { name: 'Поставщик А', price: '1 240 ₽/т', term: '3 дня', rating: 4.9, certs: 'ГОСТ 8267-93', best: 'price' },
    { name: 'Поставщик Б', price: '1 285 ₽/т', term: '2 дня', rating: 4.8, certs: 'ГОСТ 8267-93', best: 'term' },
    { name: 'Поставщик В', price: '1 310 ₽/т', term: '4 дня', rating: 5.0, certs: 'ГОСТ + ISO 9001', best: 'rating' },
    { name: 'Поставщик Г', price: '1 295 ₽/т', term: '3 дня', rating: 4.7, certs: 'ГОСТ 8267-93', best: null },
  ];

  const principles = [
    { icon: 'ShieldCheck', title: 'Верификация поставщиков', text: 'Проверка юр. лица, лицензий и репутации до подключения.' },
    { icon: 'FileSearch', title: 'Прозрачные ТКП', text: 'Все условия в одной таблице — цена, сроки, качество.' },
    { icon: 'Scale', title: 'Без скрытых наценок', text: 'Работаем на комиссии от поставщика, не от заказчика.' },
    { icon: 'Network', title: 'Единое окно', text: 'Один запрос — десятки коммерческих предложений.' },
  ];

  const handleAddToCart = () => {
    if (quizAnswers[0] && quizAnswers[1]) {
      setCart([...cart, { name: quizAnswers[0], volume: quizAnswers[1] }]);
      setQuizStep(0);
      setQuizAnswers({});
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
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

      {/* HERO */}
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

      {/* QUIZ */}
      <section id="quiz" className="border-b border-border bg-secondary/40 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">02 — Quiz</span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight text-navy md:text-5xl">
                Подбор материалов
              </h2>
              <p className="mt-4 text-steel">
                Ответьте на 4 вопроса — соберём корзину и разошлём запрос проверенным поставщикам.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Card className="rounded-none border-2 border-navy bg-card p-8 md:p-12">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Шаг {quizStep + 1} из {quizQuestions.length}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-navy">
                    {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <Progress value={((quizStep + 1) / quizQuestions.length) * 100} className="mb-8 h-1 rounded-none" />

                <h3 className="mb-8 font-display text-2xl font-bold uppercase text-navy md:text-3xl">
                  {quizQuestions[quizStep].q}
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                  {quizQuestions[quizStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setQuizAnswers({ ...quizAnswers, [quizStep]: opt })}
                      className={`group flex items-center justify-between border-2 p-4 text-left transition-all ${
                        quizAnswers[quizStep] === opt
                          ? 'border-navy bg-navy text-white'
                          : 'border-border bg-background hover:border-navy'
                      }`}
                    >
                      <span className="font-medium">{opt}</span>
                      <Icon
                        name={quizAnswers[quizStep] === opt ? 'Check' : 'ArrowRight'}
                        size={16}
                        className={quizAnswers[quizStep] === opt ? 'text-amber' : 'text-muted-foreground group-hover:text-navy'}
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <Button
                    variant="outline"
                    disabled={quizStep === 0}
                    onClick={() => setQuizStep(quizStep - 1)}
                    className="rounded-none border-navy text-navy hover:bg-navy hover:text-white font-mono text-xs uppercase"
                  >
                    <Icon name="ArrowLeft" size={14} className="mr-2" />
                    Назад
                  </Button>
                  {quizStep < quizQuestions.length - 1 ? (
                    <Button
                      disabled={!quizAnswers[quizStep]}
                      onClick={() => setQuizStep(quizStep + 1)}
                      className="rounded-none bg-navy hover:bg-navy/90 text-white font-mono text-xs uppercase"
                    >
                      Далее
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      disabled={!quizAnswers[quizStep]}
                      onClick={handleAddToCart}
                      className="rounded-none bg-amber hover:bg-amber/90 text-navy font-mono text-xs uppercase font-bold"
                    >
                      Добавить в корзину
                      <Icon name="ShoppingCart" size={14} className="ml-2" />
                    </Button>
                  )}
                </div>
              </Card>

              {/* CART */}
              <div className="mt-6 border-2 border-dashed border-navy bg-background p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold uppercase text-navy">
                    <Icon name="ShoppingCart" size={18} className="mr-2 inline-block" />
                    Корзина запроса
                  </h4>
                  <Badge className="rounded-none bg-navy text-white font-mono">{cart.length} поз.</Badge>
                </div>
                {cart.length === 0 ? (
                  <p className="font-mono text-sm text-muted-foreground">Корзина пуста — пройдите квиз для добавления позиции.</p>
                ) : (
                  <div className="space-y-2">
                    {cart.map((item, i) => (
                      <div key={i} className="flex items-center justify-between border border-border bg-secondary/40 px-4 py-2 font-mono text-sm">
                        <span className="font-medium text-navy">{item.name}</span>
                        <span className="text-steel">{item.volume}</span>
                      </div>
                    ))}
                    <Button className="mt-4 w-full rounded-none bg-navy hover:bg-navy/90 text-white font-mono text-xs uppercase">
                      Отправить запрос ({cart.length})
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">03 — Compare</span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight text-navy md:text-5xl">
                Сравнение ТКП
              </h2>
              <p className="mt-4 max-w-xl text-steel">
                Все коммерческие предложения по запросу — в одной таблице. Цена, срок, рейтинг, сертификация.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-steel">
              <Icon name="Filter" size={14} />
              Запрос: Щебень 5–20 / 1 200 т / Москва
            </div>
          </div>

          <Card className="overflow-hidden rounded-none border-2 border-navy bg-card">
            <div className="grid grid-cols-12 border-b-2 border-navy bg-navy py-4 font-mono text-[10px] uppercase tracking-wider text-amber">
              <div className="col-span-3 px-6">Поставщик</div>
              <div className="col-span-2 px-6">Цена</div>
              <div className="col-span-2 px-6">Срок</div>
              <div className="col-span-2 px-6">Рейтинг</div>
              <div className="col-span-3 px-6">Сертификация</div>
            </div>
            {suppliers.map((s, i) => (
              <div key={i} className="grid grid-cols-12 items-center border-b border-border py-5 transition-colors hover:bg-secondary/40 last:border-b-0">
                <div className="col-span-3 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center bg-navy text-white font-display font-bold">
                      {s.name.split(' ')[1]}
                    </div>
                    <div>
                      <div className="font-medium text-navy">{s.name}</div>
                      {s.best && (
                        <Badge className={`mt-1 rounded-none font-mono text-[9px] uppercase ${
                          s.best === 'price' ? 'bg-amber text-navy' :
                          s.best === 'term' ? 'bg-navy text-amber' :
                          'bg-steel text-white'
                        }`}>
                          {s.best === 'price' ? 'Лучшая цена' : s.best === 'term' ? 'Самый быстрый' : 'Топ-рейтинг'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-span-2 px-6 font-mono font-bold text-navy">{s.price}</div>
                <div className="col-span-2 px-6 font-mono text-steel">{s.term}</div>
                <div className="col-span-2 px-6">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="fill-amber text-amber" />
                    <span className="font-mono font-medium text-navy">{s.rating}</span>
                  </div>
                </div>
                <div className="col-span-3 flex items-center justify-between px-6">
                  <span className="font-mono text-xs text-steel">{s.certs}</span>
                  <Button size="sm" variant="ghost" className="rounded-none hover:bg-navy hover:text-white font-mono text-xs uppercase">
                    Открыть
                    <Icon name="ArrowUpRight" size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>Обновлено 27.04.2026 · Источник: верифицированные поставщики</span>
            <button className="flex items-center gap-2 text-navy hover:text-amber">
              Скачать сводку (PDF)
              <Icon name="Download" size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border bg-navy py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">04 — About</span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
                Принципы<br />работы<br />агрегатора
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                ZATO.NERUD — независимая B2B-платформа. Мы не продаём материал, а соединяем подрядчиков с проверенными карьерами и заводами напрямую.
              </p>
              <div className="mt-8 border-t border-white/20 pt-8">
                <div className="font-mono text-xs uppercase tracking-wider text-amber">Юридический статус</div>
                <div className="mt-2 text-white/80">ООО «ЗАТО.НЕРУД» · ОГРН 1234567890123</div>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 lg:col-span-7 lg:grid-cols-2">
              {principles.map((p, i) => (
                <div key={i} className="bg-navy p-8 transition-colors hover:bg-navy/60">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-amber text-amber">
                    <Icon name={p.icon} size={22} />
                  </div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-amber">0{i + 1}</div>
                  <h3 className="mb-2 font-display text-xl font-bold uppercase">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">05 — FAQ</span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy md:text-5xl">
                Частые<br />вопросы
              </h2>
              <p className="mt-6 text-steel">
                Не нашли ответ? Напишите в поддержку — отвечаем в течение 30 минут в рабочее время.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="border-t-2 border-navy">
                {[
                  { q: 'Сколько стоит подбор материала?', a: 'Для заказчика сервис бесплатный. Мы получаем комиссию от поставщика после успешной сделки.' },
                  { q: 'Как проверяются поставщики?', a: 'Проверяем юридический статус, лицензии, наличие сертификатов ГОСТ и историю поставок. Раз в полгода — повторная верификация.' },
                  { q: 'Что входит в ТКП?', a: 'Цена за тонну, условия и срок поставки, способ оплаты, сертификаты качества, контактные данные ответственного лица.' },
                  { q: 'Можно ли заказать партию срочно?', a: 'Да. В квизе укажите «срочно (1–3 дня)» — система отправит запрос только тем поставщикам, у которых материал в наличии.' },
                  { q: 'Какие документы предоставляет поставщик?', a: 'Договор поставки, счёт, УПД, паспорт качества партии, сертификат ГОСТ. По запросу — данные радиационного контроля.' },
                  { q: 'Работаете ли вы с физлицами?', a: 'Платформа ориентирована на B2B. Для физлиц возможен подбор только при объёмах от 100 тонн.' },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="py-6 text-left font-display text-lg font-medium uppercase tracking-tight text-navy hover:no-underline">
                      <span className="flex gap-6">
                        <span className="font-mono text-sm text-amber">0{i + 1}</span>
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-12 text-steel">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-secondary/40 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">06 — Contacts</span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy md:text-5xl">
                Контакты<br />и поддержка
              </h2>
              <p className="mt-6 text-steel">
                Команда поддержки на связи в рабочие дни с 9:00 до 19:00 МСК.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 000-00-00' },
                  { icon: 'Mail', label: 'E-mail', value: 'hello@zatonerud.ru' },
                  { icon: 'MapPin', label: 'Офис', value: 'Москва, Пресненская наб., 12' },
                  { icon: 'Clock', label: 'Часы работы', value: 'Пн–Пт, 09:00–19:00 МСК' },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 border-l-2 border-amber pl-4">
                    <Icon name={c.icon} size={18} className="mt-1 text-navy" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="font-medium text-navy">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="rounded-none border-2 border-navy bg-card p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold uppercase text-navy">Написать в поддержку</h3>
                <p className="mt-2 text-sm text-steel">Опишите задачу — менеджер свяжется в течение 30 минут.</p>

                <div className="mt-8 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Имя*</label>
                      <Input className="rounded-none border-2 border-border focus:border-navy h-12" placeholder="Иван Петров" />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Компания</label>
                      <Input className="rounded-none border-2 border-border focus:border-navy h-12" placeholder="ООО «СтройКом»" />
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Телефон*</label>
                      <Input className="rounded-none border-2 border-border focus:border-navy h-12" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">E-mail</label>
                      <Input className="rounded-none border-2 border-border focus:border-navy h-12" placeholder="email@company.ru" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Сообщение</label>
                    <Textarea className="rounded-none border-2 border-border focus:border-navy min-h-[120px]" placeholder="Опишите задачу или вопрос..." />
                  </div>
                  <Button size="lg" className="rounded-none bg-navy hover:bg-navy/90 text-white h-12 font-mono text-xs uppercase tracking-wider">
                    Отправить заявку
                    <Icon name="Send" size={14} className="ml-2" />
                  </Button>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-navy py-12 text-white/70">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-amber text-navy font-display text-xl font-bold">Z</div>
              <span className="font-display text-lg font-bold tracking-wider text-white">ZATO.NERUD</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed">B2B-агрегатор поставщиков нерудных материалов. Работаем с 2024 года.</p>
          </div>
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-wider text-amber">Сервис</div>
            <ul className="space-y-2 text-sm">
              <li>Квиз-подбор</li>
              <li>Сравнение ТКП</li>
              <li>Аналитика</li>
              <li>Вебхуки</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-wider text-amber">Документы</div>
            <ul className="space-y-2 text-sm">
              <li>Оферта</li>
              <li>Политика конфиденциальности</li>
              <li>Согласие на обработку</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-wider text-amber">Контакты</div>
            <ul className="space-y-2 text-sm">
              <li>+7 (495) 000-00-00</li>
              <li>hello@zatonerud.ru</li>
              <li>Москва</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 font-mono text-[10px] uppercase tracking-wider text-white/50">
          <span>© 2026 ZATO.NERUD · Все права защищены</span>
          <span>ОГРН 1234567890123 · ИНН 7700000000</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
