export interface Pokemon {
    id: number;
    name: string;
    description: string;
    hp: number;
    isActive: boolean;
    releaseDate: string;
    imageUrl: string;
    rarity: string;
    types: string[];
    weakness: string;
    resistance: string;
    attacks: Attack[];
    evolvesFrom: string | null;
    evolvesTo: string | null;
  }
  
  export interface Attack {
    name: string;
    damage: number;
    description: string;
  }
  