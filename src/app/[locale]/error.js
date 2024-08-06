"use client";
import { useTranslations } from "next-intl";
import bgImage from "@/assets/images/404-bg.png";
import Link from "next/link";

export default function Error({ error, reset }) {
  const t = useTranslations("NotFoundPage");
  return (
    <div
      style={{
        background: "#151515",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0em",
      }}
    >
      <div
        style={{
          background: `url(${bgImage.src}) no-repeat center center fixed`,
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      />
      <p
        style={{
          color: "#fff",
          fontSize: "5.3em",
          fontWeight: "800",
          textTransform: "uppercase",
          lineHeight: "100%",
          zIndex: "1",
        }}
      >
        {t("title")}
      </p>
      <p
        style={{
          color: "#fff",
          fontSize: "16.25em",
          fontWeight: "800",
          textTransform: "uppercase",
          lineHeight: "100%",
          zIndex: "1",
        }}
      >
        500
      </p>
      <p
        style={{
          color: "#fff",
          fontSize: "16.25em",
          fontWeight: "800",
          textTransform: "uppercase",
          lineHeight: "100%",
          zIndex: "1",
        }}
      >
        500
      </p>
      <p
        style={{
          color: "#fff",
          fontSize: "3.9em",
          fontWeight: "800",
          textTransform: "uppercase",
          lineHeight: "100%",
          zIndex: "1",
        }}
      >
        {t("page")}
      </p>
      <Link
        href="/"
        style={{
          background: "#3C7BF6",
          fontSize: "1.5em",
          color: "#fff",
          fontWeight: "800",
          textTransform: "uppercase",
          lineHeight: "100%",
          marginTop: "1em",
          padding: "1.25em 12em",
          borderRadius: "100px",
          zIndex: "1",
        }}
      >
        {t("button")}
      </Link>
    </div>
  );
}
