export interface Data {
  id: number;
  title: string;
  poster: string;
  genres: string[];
  images: string[];
}
export interface Metadata {
  current_page: number;
  per_page: number;
  page_count: number;
  total_count: number;
}
export interface Movies {
  data: Data[];
  metadata: Metadata;
}
