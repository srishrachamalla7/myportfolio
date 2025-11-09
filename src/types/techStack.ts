export interface TechItem {
  name: string;
  image: string;
  description: string;
  invertColors?: boolean;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}