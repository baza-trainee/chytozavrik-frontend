export interface Monster {
  id: number | string;
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


  export interface MonstersResults {
    results: Monster[];
  }
