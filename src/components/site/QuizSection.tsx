import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const QuizSection = () => {
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

  const handleAddToCart = () => {
    if (quizAnswers[0] && quizAnswers[1]) {
      setCart([...cart, { name: quizAnswers[0], volume: quizAnswers[1] }]);
      setQuizStep(0);
      setQuizAnswers({});
    }
  };

  return (
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
  );
};

export default QuizSection;
