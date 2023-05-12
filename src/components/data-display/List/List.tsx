import { IList } from './List.interface';

const List = ({ children, title = '' }: IList) => (
  <div className="simple-list">
    {title && <p className="simple-list__title">{title}</p>}
    <ul>{children}</ul>
  </div>
);

export { List };
