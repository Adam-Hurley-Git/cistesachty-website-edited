import { createFileRoute } from "@tanstack/react-router";
import { homeFaq } from "@/content/site";
import { Accent, ContactPanel, FaqSection, SectionIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | Čisté šachty" },
      {
        name: "description",
        content:
          "Kontaktujte Čisté šachty. Bezplatná kontrola odvětrávacích šachet pro SVJ, bytová družstva a správce nemovitostí po celé České republice.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <ContactPanel standalone />

      {/* Region */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Kde působíme"
            title={
              <>
                Z Břeclavského regionu —<Accent> přijedeme za vámi po celé ČR.</Accent>
              </>
            }
            body="Jsme z Břeclavského regionu, ale zakázky pro bytové domy realizujeme po celé České republice. Napište nám lokalitu a základní informace o domě."
          />
        </div>
      </section>

      <FaqSection
        title={
          <>
            Než napíšete —<Accent> odpovědi na časté dotazy.</Accent>
          </>
        }
        body="Pokud odpověď nenajdete, napište nám do formuláře výše a ozveme se vám co nejdříve."
        items={homeFaq}
      />
    </SiteShell>
  );
}
