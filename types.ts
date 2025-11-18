export interface Project {
  title: string;
  description: string;
  year: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface TechCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
}