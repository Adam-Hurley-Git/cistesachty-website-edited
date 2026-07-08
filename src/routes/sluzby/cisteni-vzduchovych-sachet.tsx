import { createFileRoute, redirect } from "@tanstack/react-router";

// This page was merged into /sluzby (the services "hub" page was dropped, so
// the single core service now lives directly at /sluzby). Kept as a redirect
// stub — rather than deleted — so any old bookmarks/links still resolve.
export const Route = createFileRoute("/sluzby/cisteni-vzduchovych-sachet")({
  beforeLoad: () => {
    throw redirect({ to: "/sluzby" });
  },
});
