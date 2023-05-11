interface IList {
  children: React.ReactNode;
}

interface IListItem {
  entry_number: number;
  name: string;
  onClick?: (entry_number: number) => void;
}

export type { IList, IListItem };
