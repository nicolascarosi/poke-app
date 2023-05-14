import { INavItem } from './List.interface';

import { iconChevron } from '@/assets/images';

const NavItem = ({ children, id = '', onClick }: INavItem) => (
  <li className="list-item">
    <button className="list-item__content" onClick={() => onClick(id)}>
      <span>{children}</span>
      <img src={iconChevron} alt="Icon chevron" />
    </button>
  </li>
);

export { NavItem };
