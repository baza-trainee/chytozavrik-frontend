export interface ChildResults{
  id: number,
  name: string,
  registration_date: string,
  avatar: number,
  unique_quizzes_passed: number,
  total_successful_attempts: number,
  last_quiz_id: number,
  quizzes_passed_today_max_score: number
}

export type Avatar = {
  id: number,
  avatar: string,
}
