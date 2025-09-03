import "../i18n";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <h1 className="text-balance text-5xl">{t("hero.home.title")}</h1>
          <p className="text-blue">{t("hero.home.subtitle")}</p>
          <p>{t("hero.home.description")}</p>
        </section>
      </div>
    </>
  );
};

export default Home;
