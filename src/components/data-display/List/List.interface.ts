import { IName } from '@/interfaces';

interface IList {
  children: React.ReactNode;
}

interface IListItem extends IName {
  onClick?: (name: string) => void;
}

export type { IList, IListItem };
