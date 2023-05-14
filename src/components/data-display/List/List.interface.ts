interface IList {
  children: React.ReactNode;
  title?: string;
}

interface IListItem {
  children: React.ReactNode;
}

interface INavItem extends IListItem {
  id?: string;
  onClick: (id: string) => void;
}

export type { IList, IListItem, INavItem };
