
export interface CatItem {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: any;
}

export interface Breed {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  reference_image_id?: string;
  image?: {
    id: string;
    url: string;
  };
}