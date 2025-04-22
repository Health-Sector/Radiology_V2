import { DefaultRoute, BlankLayoutRouter } from "./default-router"

// Put BlankLayoutRouter first so its routes take precedence
export const LayoutsRoute = [...BlankLayoutRouter, ...DefaultRoute]