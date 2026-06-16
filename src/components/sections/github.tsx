"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../section";
import profile from "@/data/profile.json";
import {
  Activity,
  CalendarDays,
  Code2,
  Github,
  GitBranch,
  GitCommit,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { format } from "date-fns";
import { Progress } from "@/components/ui/progress";
import {
  getGithubContributions,
  getGithubProfile,
  getGithubRepos,
  type GithubContributions,
  type GithubProfile,
  type GithubRepo,
} from "@/lib/github";

const PROFILE_URL = profile.github;

const FEATURED_REPO_NAMES = ["hydrosentinal"];

const STAGES = [
  { label: "First Repo", note: "First programming experiments.", icon: GitCommit },
  { label: "First Major Project", note: "Hardware + Software projects.", icon: GitBranch },
  { label: "Now", note: "Building HydroSentinal and learning Data Science.", icon: Star },
  { label: "Next", note: "AI-powered IoT systems and open source contributions.", icon: Rocket },
];

const languageIconMap: Record<string, LucideIcon> = {
  TypeScript: Code2,
  JavaScript: Code2,
  Python: Code2,
  "C++": Code2,
  Java: Code2,
  Rust: Code2,
  Go: Code2,
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" },
};

function formatDate(value: string) {
  return format(new Date(value), "LLL d, yyyy");
}

function RepoCard({ repo, featured }: { repo: GithubRepo; featured?: boolean }) {
  return (
    <motion.a
      //   {...fadeUp}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`glass block rounded-3xl border border-border/70 p-4 transition hover:-translate-y-0.5 hover:border-primary/50 ${
        featured
          ? "border-primary/40 bg-surface/90 shadow-[0_0_0_1px_rgba(59,130,246,0.25)]"
          : "bg-surface/70"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {featured && (
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-1 text-xs uppercase tracking-[0.25em] text-primary">
                Featured
              </span>
            )}
            <span className="font-semibold text-foreground">{repo.name}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {repo.description ?? "No description available."}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="size-4 text-primary" />
          <span>{repo.stargazers_count}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1">
          <CalendarDays className="size-4 text-primary" />
          {formatDate(repo.updated_at)}
        </span>
        {repo.language ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1">
            <GitBranch className="size-4 text-primary" />
            {repo.language}
          </span>
        ) : null}
      </div>
    </motion.a>
  );
}

function InsightCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <motion.div
      // {...fadeUp}
      className="glass rounded-3xl border border-border/70 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${accent}`}>
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-display font-semibold text-foreground">{value}</p>
    </motion.div>
  );
}

function LanguageBar({ language, percent }: { language: string; percent: number }) {
  const Icon = languageIconMap[language] ?? Code2;

  return (
    <motion.div
      // {...fadeUp}
      className="space-y-3"
    >
      <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
          <span>{language}</span>
        </div>
        <span className="font-semibold text-foreground">{percent}%</span>
      </div>
      <Progress value={percent} />
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="mb-4 h-4 w-40 rounded-full bg-border/60" />
      <div className="space-y-3">
        <div className="h-3 rounded-full bg-border/60" />
        <div className="h-3 rounded-full bg-border/60 w-5/6" />
        <div className="h-8 rounded-full bg-border/60" />
      </div>
    </div>
  );
}

export function Github_() {
  const [profileData, setProfileData] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [contributionData, setContributionData] = useState<GithubContributions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadGithubData() {
      setLoading(true);
      setError(null);

      try {
        const [profileResponse, reposResponse, contributionsResponse] = await Promise.all([
          getGithubProfile(),
          getGithubRepos(),
          getGithubContributions(),
        ]);

        if (!cancelled) {
          setProfileData(profileResponse);
          setRepos(reposResponse);
          setContributionData(contributionsResponse);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to fetch GitHub data right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadGithubData();

    return () => {
      cancelled = true;
    };
  }, []);

  const languageStats = useMemo(() => {
    const counts = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      }
      return acc;
    }, {});

    const languages = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([language, count]) => ({ language, count }));

    const total = languages.reduce((sum, item) => sum + item.count, 0);

    return languages.map((item) => ({
      ...item,
      percent: total ? Math.round((item.count / total) * 100) : 0,
    }));
  }, [repos]);

  const featuredRepo = useMemo(
    () => repos.find((repo) => FEATURED_REPO_NAMES.includes(repo.name.toLowerCase())),
    [repos],
  );

  const latestRepos = useMemo(() => {
    if (!repos.length) {
      return [];
    }

    const remaining = repos.filter((repo) => repo.id !== featuredRepo?.id);
    return [
      ...(featuredRepo ? [featuredRepo] : []),
      ...remaining.slice(0, 3 - Number(Boolean(featuredRepo))),
    ];
  }, [repos, featuredRepo]);

  const activeRepos = useMemo(() => repos.length, [repos]);

  const stats = [
    {
      label: "Public Repos",
      value: profileData ? profileData.public_repos.toLocaleString() : "—",
      icon: GitBranch,
    },
    // {
    //   label: "Followers",
    //   value: profileData ? profileData.followers.toLocaleString() : "—",
    //   icon: Users,
    // },
    // {
    //   label: "Following",
    //   value: profileData ? profileData.following.toLocaleString() : "—",
    //   icon: Activity,
    // },
    {
      label: "Joined",
      value: profileData ? new Date(profileData.created_at).getFullYear().toString() : "—",
      icon: Sparkles,
    },
    {
      label: "Total Commits",
      value: contributionData ? contributionData.totalContributions.toLocaleString() : "—",
      icon: TrendingUp,
    },
  ];

  const insights = [
    {
      label: "Total Contributions",
      value: contributionData ? contributionData.totalContributions.toLocaleString() : "—",
      icon: Activity,
      accent: "bg-primary/15 text-primary",
    },
    // {
    //   label: "Current Streak",
    //   value: contributionData ? `${contributionData.currentStreak}d` : "—",
    //   icon: Users,
    //   accent: "bg-emerald-500/15 text-emerald-400",
    // },
    // {
    //   label: "Longest Streak",
    //   value: contributionData ? `${contributionData.longestStreak}d` : "—",
    //   icon: Sparkles,
    //   accent: "bg-violet-500/15 text-violet-400",
    // },
  ];

  return (
    <Section
      id="github"
      eyebrow="GitHub Journey"
      title={
        <>
          Not just stats — a <span className="gradient-text">growth story</span>
        </>
      }
      description="The repos, the rewrites, the late-night commits. Here's the arc."
    >
      <div className="space-y-6">
        {/* <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  // {...fadeUp}
                  key={stat.label}
                  className="glass rounded-3xl border border-border/70 bg-surface/80 p-4"
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <stat.icon className="size-4" />
                    </span>
                    {stat.label}
                  </div>
                  <p className="mt-4 text-3xl font-display font-semibold text-foreground">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div> */}

        {/* <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {insights.map((insight) => (
                <InsightCard
                  key={insight.label}
                  label={insight.label}
                  value={insight.value}
                  icon={insight.icon}
                  accent={insight.accent}
                />
              ))}
            </div> */}
        {/* </div>
        </div> */}

        <div className="glass rounded-3xl p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Contribution Activity
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">GitHub heatmap</h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-xs text-muted-foreground">
              <Users className="size-4 text-primary" /> Live
            </div>
          </div>
          {loading && <SkeletonCard />}
          {!loading && error && (
            <div className="rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground">
              Unable to fetch GitHub data right now.
            </div>
          )}
          {!loading && !error && (
            <div className="rounded-3xl border border-border/70 bg-surface/70 p-2">
              <motion.div
                // {...fadeUp}
                className="overflow-x-auto pr-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {contributionData?.totalContributions ?? "—"}
                    </span>{" "}
                    contributions in the last year
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <style>{`\n                      /* Tighter calendar look, cyan/blue palette, and selective weekday labels */\n                      .react-activity-calendar { filter: none; }\n                      .react-activity-calendar .react-activity-calendar-weekday { fill: rgba(148,163,184,0.9); font-size:10px; }\n                      .react-activity-calendar .react-activity-calendar-month { fill: rgba(148,163,184,0.9); font-size:12px; }\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(1),\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(3),\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(5) { display: block; }\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(2),\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(4),\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(6),\n                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(7) { display: none; }\n                      /* Make blocks slightly smaller and denser */\n                      .react-activity-calendar .react-activity-calendar-day { shape-rendering: crispEdges; }\n                    `}</style>

                  <div className="-ml-2 hidden min-w-[36px] flex-col items-start gap-6 pr-2 text-xs text-muted-foreground sm:flex">
                    <div className="mt-1">Mon</div>
                    <div className="mt-1">Wed</div>
                    <div className="mt-1">Fri</div>
                  </div>

                  <div className="flex-1">
                    <GitHubCalendar
                      username="NIKHILKUMAR-186"
                      transformData={(data) => data}
                      blockMargin={3}
                      blockSize={10}
                      fontSize={11}
                      showWeekdayLabels={true}
                      showMonthLabels={true}
                      theme={{
                        light: ["#11161d", "#335540", "#133e22", "#31723d", "#56d364"],
                        dark: ["#11161d", "#335540", "#133e22", "#31723d", "#56d364"],
                      }}
                    />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="text-xs">Less</span>
                    <div className="flex items-center gap-1">
                      <span className="h-3 w-3 rounded-sm bg-[#11161d]" />
                      <span className="h-3 w-3 rounded-sm bg-[#133e22]" />
                      <span className="h-3 w-3 rounded-sm bg-[#31723d]" />
                      <span className="h-3 w-3 rounded-sm bg-[#56d364]" />
                    </div>
                    <span className="text-xs">More</span>
                  </div>

                  <a
                    href={`${PROFILE_URL}?tab=overview&from=${(contributionData as any)?.oldestDate}&to=${(contributionData as any)?.newestDate}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-xs text-muted-foreground transition hover:border-primary/50"
                  >
                    <CalendarDays className="size-4 text-primary" /> View on GitHub
                  </a>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <InsightCard
                    label="Total Contributions"
                    value={
                      contributionData ? contributionData.totalContributions.toLocaleString() : "—"
                    }
                    icon={TrendingUp}
                    accent="bg-primary/15 text-primary"
                  />
                  <InsightCard
                    label="Joined"
                    value={
                      profileData ? new Date(profileData.created_at).getFullYear().toString() : "—"
                    }
                    icon={Sparkles}
                    accent="bg-primary/15 text-primary"
                  />

                  <InsightCard
                    label="Longest Streak"
                    value={contributionData ? `${contributionData.longestStreak}d` : "—"}
                    icon={Rocket}
                    accent="bg-primary/15 text-primary"
                  />
                  <InsightCard
                    label="Active Repositories"
                    value={activeRepos.toString()}
                    icon={GitBranch}
                    accent="bg-primary/15 text-primary"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </div>
        {/* </div> */}

        <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <div className="glass rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">
                  Latest Repositories
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Most recent work</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                3 repos
              </span>
            </div>
            {loading && (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            )}
            {!loading && error && (
              <div className="rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground">
                Unable to fetch GitHub data right now.
              </div>
            )}
            {!loading && !error && (
              <div className="space-y-4">
                {latestRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} featured={repo.id === featuredRepo?.id} />
                ))}
                <a
                  href={`${PROFILE_URL}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
                >
                  <Github className="size-4" /> View All Repositories
                </a>
              </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">
                  Most used Languages
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">Language Stats</h3>
              </div>
              {/* <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Live</span> */}
            </div>
            {loading && (
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            )}
            {!loading && !error && (
              <div className="space-y-4">
                {languageStats.map((language) => (
                  <LanguageBar
                    key={language.language}
                    language={language.language}
                    percent={language.percent}
                  />
                ))}
              </div>
            )}
            {!loading && error && (
              <div className="rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground">
                Unable to fetch GitHub data right now.
              </div>
            )}
          </div>
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <motion.div
                // {...fadeUp}
                key={stage.label}
                className="glass flex items-start gap-4 rounded-3xl p-5 transition hover:border-primary/40"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {stage.label}
                  </div>
                  <p className="mt-1 text-foreground/90">{stage.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div> */}
      </div>
    </Section>
  );
}
