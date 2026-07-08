import { createFileRoute } from "@tanstack/react-router";

import { Accent, CTASection, PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/ochrana-soukromi")({
  head: () => ({
    meta: [{ title: "Ochrana soukromí | Čisté šachty" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Ochrana soukromí"
        title={
          <>
            Zásady ochrany
            <Accent dark> soukromí.</Accent>
          </>
        }
        description="Tato stránka je připravena jako místo pro finální zásady ochrany osobních údajů. Před spuštěním webu je potřeba doplnit právně schválené znění."
      />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="card-soft p-8 leading-relaxed text-muted-foreground md:p-10">
            Finální text zásad ochrany soukromí musí být doplněn podle skutečného způsobu zpracování
            osobních údajů, kontaktních formulářů a používaných služeb na webu.
          </div>
        </div>
      </section>
      <CTASection
        title={
          <>
            Máte dotaz k nakládání
            <Accent dark> s vašimi údaji?</Accent>
          </>
        }
        body="Napište nám a rádi vám vše vysvětlíme."
        primary={{ label: "Kontakt", to: "/kontakt" }}
      />
    </SiteShell>
  );
}
