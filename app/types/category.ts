export type Category = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  urgent?: boolean;
};