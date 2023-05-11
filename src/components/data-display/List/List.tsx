import { IList } from './List.interface';

const List = ({ children }: IList) => {
  return (
    <div className="simple-list">
      <ul>{children}</ul>
    </div>
  );
};

export { List };
