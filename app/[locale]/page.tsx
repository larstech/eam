import { Text, Flex } from "@mantine/core";
import { EarthIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <Flex gap="xs">
      <Text>{t("hello")}</Text>
      <EarthIcon />
    </Flex>
  );
}
