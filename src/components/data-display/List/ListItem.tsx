import { IListItem } from './List.interface';

import { iconChevron } from '@/assets/images';

const ListItem = ({ entry_number, name, onClick }: IListItem) => {
  const getItem = () => {
    if (onClick) {
      return (
        <button
          className="list-item__content"
          onClick={() => onClick(entry_number)}
        >
          <span>{name}</span>
          <img src={iconChevron} alt="Icon chevron" />
        </button>
      );
    } else {
      return (
        <div className="list-item__content">
          <span>{name}</span>
        </div>
      );
    }
  };

  return <li className="list-item">{getItem()}</li>;
};

export { ListItem };
