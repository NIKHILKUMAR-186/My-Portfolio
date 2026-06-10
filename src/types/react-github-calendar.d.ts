declare module "react-github-calendar" {
  import { ComponentType } from "react";

  export interface GitHubCalendarProps {
    username: string;
    year?: string | number;
    labels?: Record<string, string>;
    loading?: boolean;
    theme?: any;
    errorMessage?: string;
    throwOnError?: boolean;
    transformData?: (data: any) => any;
    blockSize?: number;
    blockMargin?: number;
    fontSize?: number;
    showWeekdayLabels?: boolean;
    showMonthLabels?: boolean;
  }

  export const GitHubCalendar: ComponentType<GitHubCalendarProps>;
}
