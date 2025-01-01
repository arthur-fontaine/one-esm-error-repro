import { Text, View } from "react-native";
import { useMedia } from "./hooks/use-media";

interface MediaPageProps {
  mediaId: string;
}

export function MediaPage(props: MediaPageProps) {
  const { media } = useMedia(props.mediaId);

  return (
    <View>
      <Text>{media?.title}</Text>
    </View>
  );
}
