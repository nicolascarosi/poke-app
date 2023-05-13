import { IList } from './List.interface';

const List = ({ children, title = '' }: IList) => (
  <div className="simple-list">
    {title && (
      <p className="simple-list__title" role="heading" aria-level={3}>
        {title}
      </p>
    )}
    <ul>{children}</ul>
  </div>
);

export { List };
