
export interface iFruit {
  name: string;
  colors: string[];
  inSeason: boolean;
}

export interface iFiltersProps {
  name: string;
  setName: any;
  color: string;
  setColor: any; 
  inSeason: string;
  setInSeason: any; 
}