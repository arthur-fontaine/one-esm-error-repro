import { useQuery } from '@connectrpc/connect-query'
import { getMedia } from 'grpc-api/media/v1/media-MediaService_connectquery'

export function useMedia(mediaId: string) {
  const { data: media } = useQuery(getMedia, { id: mediaId })

  return { media }
}
