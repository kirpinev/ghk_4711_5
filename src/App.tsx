import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import ai from "./assets/ai.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { Status } from "@alfalab/core-components/status";
import { RedirectTo } from "../RedirectTo.tsx";

interface Product {
  title: string;
  text: string;
  image: string;
  isNew?: boolean;
}

const familyProducts: Array<Product> = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Product[] = [
  {
    title: "ИИ-помощник",
    text: "Мгновенные ответы на любые вопросы — от финансов до путешествий",
    image: ai,
    isNew: true,
  },
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const thxShow = LS.getItem(LSKeys.ShowThx, false);

  const submit = () => {
    window.gtag("event", "4711_get_sub", {
      variant_name: "4711_5",
    });
    window.location.replace(
        "alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&endpoint=v1/invest-main-screen-view/investment-longread/50373%3flocation=AM%26campaignCode=GH",
    );

    LS.setItem(LSKeys.ShowThx, true);
  };

  if (thxShow) {
    return <RedirectTo />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product, index) => (
            <div className={appSt.product} key={product.title}>
              {product.isNew && (
                <Status
                  view="contrast"
                  uppercase={false}
                  color="red"
                  size={24}
                  className={appSt.status}
                >
                  Новое
                </Status>
              )}
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                style={{ ...(index === 0 && { alignSelf: "center" }) }}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={submit}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
