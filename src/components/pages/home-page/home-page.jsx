import { CContainer, CCallout, CImage } from "@coreui/react";
import { Link } from "react-router-dom";
import homePage from "./home-page.png";

export const HomePage = () => {
  return (
    <main className="body flex-grow-1">
      <div className="text-center">
        <div>
          <h1 className="m-2 fst-italic text-warning fw-bolder">
            Flavor Palette
          </h1>
          <p>Добро пожаловать на ваш идеальный гид по миру кулинарии</p>
        </div>
      </div>

      <CContainer>
        <div className="d-grid gap-2 col-4 mx-auto m-5 btn  btn-secondary">
          <Link className="nav-link " to="/restaurants">
            ВЫБРАТЬ РЕСТОРАН
          </Link>
        </div>

        <CCallout color="light">
          На Flavor Palette мы верим, что еда — это нечто большее, чем просто
          питание. Это целое приключение, полное новых открытий и незабываемых
          впечатлений. Независимо от того, являетесь ли вы опытным гурманом или
          просто ищете новое место для ужина, наша платформа предоставит вам всё
          необходимое для выбора идеального ресторана в вашем городе.
        </CCallout>

        <div className="row mb-4">
          <div className="col-md-6">
            <CImage fluid className="rounded" src={homePage} alt="restaurant" />
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <h4 className="text-warning my-4">
                Исследуйте рестораны по кухням
              </h4>
              Наша команда экспертов постоянно ищет новые и лучшие заведения,
              чтобы предложить вам самые актуальные и интересные
              гастрономические впечатления. Будьте в курсе последних трендов,
              открывайте скрытые жемчужины и пробуйте блюда, которые обязательно
              стоит попробовать. С нами исследование новых вкусов станет простым
              и увлекательным занятием.
            </div>
            <div className="mb-5">
              <h4 className="text-warning my-4">Наслаждайтесь доставкой</h4>
              Каждый день мы стремимся радовать вас новыми вкусовыми
              впечатлениями. На Flavor Palette вы найдете не только
              вдохновляющие рецепты и рекомендации по ресторанам, но и удобный
              сервис доставки любимых блюд прямо к вашему порогу.
            </div>
            <div className="mb-5">
              <h4 className="text-warning my-4">
                Оставляйте отзывы и делитесь впечатлениями
              </h4>
              Недавно посетили отличный ресторан? Или, возможно, остались
              недовольны своим визитом? Поделитесь своими мыслями с сообществом!
              Наш раздел отзывов позволяет пользователям оставлять честные
              отзывы, помогая другим сделать правильный выбор при планировании
              следующего визита.
            </div>
          </div>
        </div>
      </CContainer>
    </main>
  );
};
