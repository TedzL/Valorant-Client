export interface ResponseInfo {
  status: number;
  ratelimits: {
    used: number;
    remaining: number;
    reset: number;
  };
  url: string;
}
