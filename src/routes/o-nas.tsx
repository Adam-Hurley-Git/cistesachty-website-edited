import { createFileRoute } from "@tanstack/react-router";
import { Home, MapPin, ShieldCheck } from "lucide-react";

import filipTucek from "@/assets/extracted/filip-tucek.jpg";
import { company, pageImages, whyItems } from "@/content/site";
import {
  Accent,
  CTASection,
  IconCard,
  PageHero,
  SectionIntro,
  SiteShell,
} from "@/components/site-shell";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás | Čisté šachty" },
      {
        name: "description",
        content:
          "Čisté šachty - specialista z Břeclavského regionu na čištění odvětrávacích šachet pro bytové domy, SVJ a správce nemovitostí po celé České republice.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="O nás"
        title={
          <>
            Místní specialista
            <br />
            <Accent dark>pro bytové domy.</Accent>
          </>
        }
        description="Čisté šachty vznikly s jednoduchým cílem: nabídnout bytovým domům službu, která je úzce zaměřená, srozumitelná a dobře použitelná pro výbory SVJ i správce nemovitostí. Jsme z Břeclavského regionu a zakázky realizujeme po celé České republice."
        image={filipTucek}
        imageAlt={`${company.owner} — zakladatel značky ${company.name}`}
        imageFit="contain"
        imageAspect="1200 / 1543"
        primaryCta={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondaryCta={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        badges={[
          {
            icon: MapPin,
            title: "Z Břeclavska",
            body: "Zakázky realizujeme po celé České republice",
          },
          {
            icon: Home,
            title: "Jedna specializace",
            body: "Šachty bytových a panelových domů",
          },
          {
            icon: ShieldCheck,
            title: "Bez vstupu do bytů",
            body: "Co nejmenší zásah do provozu domu",
          },
        ]}
      />

      {/* Approach */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Jak k tomu přistupujeme</span>
            <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              Nechceme být další obecná firma,
              <br />
              <Accent>která dělá všechno.</Accent>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Soustředíme se na jednu věc: odvětrávací šachty v bytových domech. Díky tomu známe
              typické objekty, víme, co u nich čekat, a celý postup máme přizpůsobený tomu, jak SVJ
              a správci skutečně fungují.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Stavíme na co nejméně invazivním průběhu práce, věcné komunikaci a jasné dokumentaci
              po dokončení — tedy na tom, co výbor nebo správce potřebuje nejvíc.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Values + who's behind */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Kdo za značkou stojí"
              title={
                <>
                  U této práce rozhoduje
                  <Accent> hlavně důvěra.</Accent>
                </>
              }
              body={`${company.owner} a značka ${company.name} jsou postavené na tom, že u tohoto typu práce rozhoduje hlavně důvěra, jasný postup a poctivě předané podklady po dokončení.`}
            />
            <div className="card-soft mt-8 p-8">
              <div
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
              >
                <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-2xl">Proč specializovaná firma</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Když řešíte bytový dům, potřebujete dodavatele, který rozumí tomuto typu objektů,
                komunikuje věcně a po práci předá použitelné podklady. Díky úzké specializaci
                dokážeme zakázky plánovat i mimo náš region.
              </p>
            </div>
          </div>
          <div className="card-soft overflow-hidden">
            <img
              src={pageImages.hero}
              alt="Technik při práci na střeše panelového domu"
              className="h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Kde působíme"
            title={
              <>
                Z Břeclavského regionu —<Accent> působíme po celé České republice.</Accent>
              </>
            }
            body="Jsme z Břeclavského regionu, ale u bytových domů není problém přijet za zakázkou kamkoli po České republice. Pokud řešíte SVJ, bytové družstvo nebo více objektů, napište nám lokalitu a základní informace o domě."
          />
        </div>
      </section>

      <CTASection
        title={
          <>
            Chcete probrat konkrétní dům
            <Accent dark> nebo více objektů?</Accent>
          </>
        }
        body="Ozvěte se nám a navrhneme další postup podle skutečného stavu domu a potřeb výboru nebo správce."
        primary={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondary={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
      />
    </SiteShell>
  );
}
