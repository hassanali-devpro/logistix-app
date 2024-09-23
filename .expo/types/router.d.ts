/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Tab)` | `/(Tab)/Home` | `/(Tab)/Scan` | `/(Tab)/Tasks` | `/(Tab)/Tasks/Completed` | `/(Tab)/Tasks/OnHold` | `/(Tab)/Tasks/Todo` | `/(Tab)/Time` | `/(auth)` | `/(auth)/AddAccount` | `/(auth)/SignIn` | `/AddAccount` | `/Home` | `/Scan` | `/SignIn` | `/Splash` | `/Tasks` | `/Tasks/Completed` | `/Tasks/OnHold` | `/Tasks/Todo` | `/Time` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
