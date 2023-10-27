export type CalendarDate = {
  date: string;
  count: number;
};

export interface CalendarResponse {
  calendar: CalendarDate[];
}
