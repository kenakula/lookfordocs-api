export interface TestimonialModel {
  id: string;
  date: string;
  type: "clinic" | "doctor";
  rate: number;
  comment: string;
  author: string;
  email: string;
  entityName: string;
}
