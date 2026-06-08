import { Section } from "../section";
import profile from "@/data/profile.json";
import { Bunny } from "../bunny";
import bunny from "@/data/bunny.json";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>The short version</>}
      description={profile.bio}
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
        {/* Avatar card */}
        <div className="glass relative overflow-hidden rounded-3xl p-6">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/30 via-surface-2 to-accent/30 p-1">
            <div className="flex size-full items-center justify-center rounded-2xl bg-surface">
              <div className="flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl font-bold text-primary-foreground">
                {profile.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="font-display text-lg font-semibold">{profile.name}</div>
            <div className="text-sm text-muted-foreground">{profile.education}</div>
          </div>

          {/* Bunny peek */}
          <div className="absolute -bottom-3 -right-3 opacity-90">
            <Bunny size={72} />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Currently</div>
            <p className="text-lg text-foreground">{profile.focus}</p>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Interests</div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span
                  key={i}
                  className="glass rounded-full px-3 py-1 text-sm text-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4 text-sm text-muted-foreground">
            <span className="mr-2 font-mono text-primary">🐰</span>
            {bunny.about}
          </div>
        </div>
      </div>
    </Section>
  );
}
