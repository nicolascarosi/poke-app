import { IListItem } from './List.interface';

import { iconChevron } from '@/assets/images';

const ListItem = ({ name, onClick }: IListItem) => {
  const getItem = () => {
    if (onClick) {
      return (
        <button className="list-item__content" onClick={() => onClick(name)}>
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
