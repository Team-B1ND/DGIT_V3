export const QUERY_KEYS = {
  github: Object.freeze({
    getRepository: "repository/getRepository",
    rank: {
      week: "weekRank/getWeekRank",
      total: "totalRank/getTotalRank",
      pullrequest: "pullrequestRank/getPullRequestRank",
    },
  }),
  member: "member/getMember",
};
