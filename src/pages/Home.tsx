import "../i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{t("hero.home.title")}</h1>
      <p>{t("hero.home.subtitle")}</p>
      <p>{t("hero.home.description")}</p>
    </div>
  );
};

export default Home;
