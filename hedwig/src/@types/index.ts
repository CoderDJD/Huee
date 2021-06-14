// tslint:disable
export {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: "Query";
    user: IUser | null;
    project: IProject | null;
    userProject: IProject | null;
  }

  interface IUserOnQueryArguments {
    email: string;
  }

  interface IProjectOnQueryArguments {
    id: string;
  }

  interface IUserProjectOnQueryArguments {
    ownerId: string;
  }

  interface IUser {
    __typename: "User";
    id: string;
    bio: string | null;
    uname: string;
    online: boolean;
    avatar: string;
    email: string | null;
    github: string | null;
    twitter: string | null;
    youtube: string | null;
    projects: Array<IProject | null>;
  }

  interface IProject {
    __typename: "Project";
    id: string;
    serverId: string;
    ownerId: string;
    github: string | null;
    twitter: string | null;
    youtube: string | null;
    bmc: string | null;
    applicationUrl: string | null;
    name: string;
    description: string;
    ytWebhook: string | null;
    bmcWebhook: string | null;
    twtrWebhook: string | null;
    people: Array<IMember>;
    peopleNum: number;
    open: boolean;
  }

  interface IMember {
    __typename: "Member";
    name: string;
    uname: string;
    bio: string | null;
    online: boolean;
  }
}
