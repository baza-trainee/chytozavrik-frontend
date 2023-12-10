export interface Contact {
  id: number;
  name: string;
  number: number;
  updated_at: string;
}

export interface ContactsResponse {
  data: Contact[];
}

export interface ContactsFormProps {
  documents: Contact[];
}