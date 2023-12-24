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
