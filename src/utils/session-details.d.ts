declare module "*/session-details.json" {
  export interface SessionDetails {
    SessionID: string;
    Title: string;
    Description: string;
    SessionFormat: string;
    Level: string;
    Scope: string;
    AssignedTrack: string;
    Room: string;
    ScheduledAt: string;
    Speakers: string;
    Companies: string;
    CompanyDomains: string;
    Titles: string;
  }

  const sessionDetails: SessionDetails[];
  export default sessionDetails;
}
