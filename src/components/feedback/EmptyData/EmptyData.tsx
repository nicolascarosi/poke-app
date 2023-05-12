import { IEmptyData } from './EmptyData.interface';

import { pokeball } from '@/assets/images';

const EmptyData = ({ title }: IEmptyData) => (
  <div className="empty-data">
    <p className="empty-data__title">{title}</p>
    <img className="empty-data__image" src={pokeball} alt="Empty data" />
  </div>
);

export { EmptyData };
