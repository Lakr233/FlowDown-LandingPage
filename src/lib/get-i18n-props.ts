import type { GetStaticPropsContext } from "next";

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (
        await import(`../i18n/${context.params?.locale || "en-US"}.json`)
      ).default,
    },
  };
}

export const getStaticPaths = () => {
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      { params: { locale: "en-US" } },
      { params: { locale: "zh-CN" } },
    ],
    fallback: false,
  };
};
