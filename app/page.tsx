import { Text, Flex } from "@mantine/core";
import { EarthIcon } from "lucide-react";

export default function Home() {
  return (
    <Flex gap="xs">
      <Text>Hello, world! </Text>
      <EarthIcon />
    </Flex>
  );
}
