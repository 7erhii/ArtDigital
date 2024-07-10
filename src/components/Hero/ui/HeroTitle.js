export default function HeroTitle({ data }) {
  return (
    <div
      className="mx-auto text-center py-20  pb-0 "
      style={{ maxWidth: "62em" }}
    >
      <div className="hero__title relative text-nowrap">
        <h2
          className="uppercase text-8xl font-poppins pr-[3em]"
          style={{ fontSize: "5.25em", fontWeight: "600" }}
        >
          {/* {highlightKeyword(t("title-line1"))} */}

          {data.titleLine1}
        </h2>
        <h2
          className="uppercase text-8xl font-poppins "
          style={{ fontSize: "5.25em", fontWeight: "600" }}
        >
          {data.titleLine2}
        </h2>
        <button
          className="main-btn main-btn--red btn absolute top-0 right-0"
          style={{
            background: "#3C7BF6",
            padding: "1.5em 2em",
            border: "0.3em solid #6E94F1",
            color: "#fff",
          }}
        >
          {data.button}
        </button>
      </div>
      <div className="hero__subtitle font-poppins py-[5rem]">
        {/* <p>{t("subtitle")}</p> */}
      </div>
      {/* <button>CLICK1</button> */}
    </div>
  );
}
