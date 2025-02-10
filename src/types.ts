export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  images: any[];
}