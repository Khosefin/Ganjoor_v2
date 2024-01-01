export interface poetList {
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

export type poetProps = {
  params: {
    poet: string;
  };
};

export interface poem {
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
export interface params {
  listItem?: string[];
  header: string;
}

export interface poetInfo {
  birthPlace: string;
  birthYearInLHijri: number;
  deathYearInLHijri: number;
  deathPlace: string;
  imageUrl?: string;
  name?: string;
  description?: string;
}

export interface catChild {
  id: number;
  title: string;
  fullUrl: string;
}

export interface catPoem {
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
  centuryNum: number | null;
  userInfo: userInfo | null;
  error: string | null;
  loading: boolean | null;
  isRemember: boolean | null;
  status: "verified" | "rejected" | "error" | null;
  captcha: string | null;
}

export interface location {
  name :string,
  icon?: any
  href: string
}
