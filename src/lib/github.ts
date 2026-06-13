export const GITHUB_USERNAME = "NIKHILKUMAR-186";

export interface GithubProfile {
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
}

export interface GithubContributions {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
}

async function fetchGithub<T>(url: string, cacheKey?: string): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      const body = await response.text();
      const message = response.status === 403 ? "GitHub rate limit exceeded" : response.statusText || body;
      throw new Error(message);
    }

    const data = await response.json();

    if (cacheKey && typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data }));
      } catch {}
    }

    return data as T;
  } catch (err) {
    // On failure, attempt to return cached value when offline or network error
    if (typeof window !== "undefined" && window.localStorage && cacheKey) {
      try {
        const raw = window.localStorage.getItem(cacheKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          return parsed.data as T;
        }
      } catch {}
    }

    throw err;
  }
}

export async function getGithubProfile(): Promise<GithubProfile> {
  return fetchGithub<GithubProfile>(`https://api.github.com/users/${GITHUB_USERNAME}`, "github_profile_v1");
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  return fetchGithub<GithubRepo[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    "github_repos_v1"
  );
}

function computeStreaks(contributions: Array<{ date: string; count: number }>) {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  for (const contribution of contributions) {
    if (contribution.count > 0) {
      tempStreak += 1;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  for (let i = contributions.length - 1; i >= 0; i -= 1) {
    if (contributions[i].count > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

export async function getGithubContributions(): Promise<GithubContributions> {
  const url = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      const message = response.status === 403 ? "GitHub rate limit exceeded" : response.statusText || body;
      throw new Error(message);
    }

    const payload = await response.json();
    const contributions = Array.isArray(payload.contributions) ? payload.contributions : [];
    const totalContributions =
      typeof payload.totalContributions === "number"
        ? payload.totalContributions
        : contributions.reduce((sum: number, day: { count: number }) => sum + (day.count || 0), 0);

    const { currentStreak, longestStreak } = computeStreaks(contributions);

    const result = {
      totalContributions,
      currentStreak,
      longestStreak,
    };

    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem("github_contributions_v1", JSON.stringify({ ts: Date.now(), data: result }));
      } catch {}
    }

    return result;
  } catch (err) {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const raw = window.localStorage.getItem("github_contributions_v1");
        if (raw) {
          const parsed = JSON.parse(raw);
          return parsed.data as GithubContributions;
        }
      } catch {}
    }

    throw err;
  }
}
