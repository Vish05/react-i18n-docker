import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";

interface Description {
  line1: string;
  line2: string;
}

function App() {
  const { t } = useTranslation();

  const description: Description = {
    line1: t("description.line1", {
      name: "Vishal Tanna",
    }),
    line2: t("description.line2", {
      name: "Vishal Tanna",
    }),
  };
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("grettings")}</h1>
      <p>{description.line1}</p>
      <Trans
        i18nKey={"description.line2"}
        values={{
          name: "Vishal Tanna",
        }}
      />
      {/* // <span>{description.line2}</span> */}
    </div>
  );
}

export default App;
