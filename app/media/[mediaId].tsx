import { useParams } from "one";
import { MediaPage } from "../../src/features/media/media-page";

export default function() {
  const { mediaId } = useParams<{
    mediaId: string;
  }>();

  if (mediaId === undefined) {
    return null;
  }

  return <MediaPage mediaId={mediaId} />;
}
