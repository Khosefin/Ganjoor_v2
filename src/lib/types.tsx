export interface poet {
  id: number;
  birthPlace: string;
  birthYearInLHijri: number;
  deathPlace: string;
  fullUrl: string;
  imageUrl: string;
  name: string;
  halfCenturyOrder: number;
  isSticky?: boolean;
}
export type PoetProps = {
  params: {
    poet: string;
  };
};

export interface Poet {
  htmlText: string;
  poetOrCat: {
    poet: {
      birthPlace: string;
      birthYearInLHijri: number;
      deathYearInLHijri: number;
      deathPlace: string;
      fullUrl: string;
      imageUrl: string;
      name: string;
      description: string;
    };
    cat: {
      children: [
        {
          id: number;
          title: string;
          fullUrl: string;
        }
      ];
      poems: [
        {
          id: number;
          title: string;
          urlSlug: string;
        }
      ];
    };
  };
}
export interface Params {
  listItem?: string[];
  header: string;
}

export interface PoetInfo {
  birthPlace: string;
  birthYearInLHijri: number;
  deathYearInLHijri: number;
  deathPlace: string;
  imageUrl?: string;
  name?: string;
  description?: string;
}

export interface CatChild {
  id: number;
  title: string;
  fullUrl: string;
}

export interface CatPoem {
  id: number;
  title: string;
  urlSlug: string;
}

export interface userInfo {
  token: string;
  sessionId: string;
  user: {
    id: string;
    nickName: string;
    email: string;
    username: string;
  };
}
export interface sliceState {
  poetName: string | null;
  centuryNum: string | null;
  userInfo: userInfo | null;
  error: string | null;
  loading: boolean | null;
  isRemember: boolean | null;
  status: "verified" | "rejected" | "error" | null;
}
