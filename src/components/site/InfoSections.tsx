import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
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

  return (
    <>
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
    </>
  );
};

export default InfoSections;
