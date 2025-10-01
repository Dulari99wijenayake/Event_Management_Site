
export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  isFeatured: boolean;
}

export interface Registration {
  name: string;
  email: string;
  registeredAt: string;
}
