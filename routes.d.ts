import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(authenticated)` | `/(authenticated)/(tabs)` | `/(authenticated)/(tabs)/home` | `/(authenticated)/home` | `/(tabs)` | `/(tabs)/home` | `/_sitemap` | `/home`
      DynamicRoutes: `/media/${OneRouter.SingleRoutePart<T>}`
      DynamicRouteTemplate: `/media/[mediaId]`
      IsTyped: true
    }
  }
}