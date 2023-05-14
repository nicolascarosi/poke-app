import { IListItem } from './List.interface';

const ListItem = ({ children }: IListItem) => (
  <li className="list-item">
    <div className="list-item__content">
      <span>{children}</span>
    </div>
  </li>
);

export { ListItem };
