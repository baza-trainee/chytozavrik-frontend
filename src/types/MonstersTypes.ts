export interface Monster {
    id: number;
    reward: string;
    received_at: string;
    child: number;
    quiz: number;
  }
  
  export interface MonstersResponse {
      count: number;
      next: string | null;
      previous: string | null;
      results: Monster[];
  }