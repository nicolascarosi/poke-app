interface IList {
  children: React.ReactNode;
  title?: string;
}

interface IListItem {
  children: React.ReactNode;
  id?: string;
  onClick?: (id: string) => void;
}

export type { IList, IListItem };
