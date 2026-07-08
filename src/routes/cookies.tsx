import { createFileRoute } from "@tanstack/react-router";

import { Accent, CTASection, PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [{ title: "Cookies | Čisté šachty" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Cookies"
        title={
          <>
            Informace
            <Accent dark> o cookies.</Accent>
          </>
        }
        description="Tato stránka je připravena jako místo pro finální informace o cookies. Před spuštěním webu je potřeba doplnit finální znění podle skutečně nasazených nástrojů."
      />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="card-soft p-8 leading-relaxed text-muted-foreground md:p-10">
            Finální text o cookies musí odpovídat skutečnému nastavení analytiky, měřicích nástrojů
            a případných marketingových skriptů na webu.
          </div>
        </div>
      </section>
      <CTASection
        title={
          <>
            Máte dotaz
            <Accent dark> k webu?</Accent>
          </>
        }
        body="Napište nám a rádi vám vše vysvětlíme."
        primary={{ label: "Kontakt", to: "/kontakt" }}
      />
    </SiteShell>
  );
}
