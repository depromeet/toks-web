export interface GetCategoriesResponse {
  categories: Category[];
}

export interface Category {
  id: string;
  depth: number;
  name: string;
  description: string;
  subCategories: SubCategory[];
}

export type SubCategory = Omit<Category, 'subCategories'>;
