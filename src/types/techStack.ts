export interface TechItem {
  name: string;
  image: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}