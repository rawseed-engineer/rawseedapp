import React from "react";
import SesameOilBottle from "../../assets/sesame_bottle.png";
import BlackSeedOilBottle from "../../assets/blackseed_bottle.png";
import { useTranslation } from "react-i18next";

const Products: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
      <div>
        <div>
          {/* <Image
            src="/sesame_bottle.png"
            width={500}
            height={500}
            style={{ opacity: 1 }}
            alt="Rawseed oils"
          /> */}
          <img
            src={SesameOilBottle}
            alt="All RawSeed Oils"
            className="mx-8 w-md aspect-auto"
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-[#a18458] text-balance text-4xl font-bold tracking-tight md:text-4xl">
            {t("products.sesame.title")}
          </h2>
          <p className="text-pretty text-[#a18458] text-2xl">
            {t("products.sesame.description")}
          </p>
        </div>
      </div>
      <div>
        <div>
          <img
            src={BlackSeedOilBottle}
            alt="All RawSeed Oils"
            className="mx-8 w-md aspect-auto"
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-[#a18458] text-balance  text-4xl font-bold tracking-tight md:text-4xl">
            {t("products.black_seed.title")}
          </h2>
          <p className="text-pretty text-[#a18458] text-2xl">
            {t("products.black_seed.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
