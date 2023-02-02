import { Outlet } from "@remix-run/react";

export default function JokesIndexRoute() {
  return <>
    <h1>JOKES</h1>
    <Outlet />
  </>
}