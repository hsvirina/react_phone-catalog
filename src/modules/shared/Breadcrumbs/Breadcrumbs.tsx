import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';
import { Icon } from '../Icon';
import { iconsObject } from '../../../constants/iconsObject';

type Props = {
  productType: string;
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ productType, productName }) => {
  const normalizeProductsType =
    productType && productType.charAt(0).toUpperCase() + productType.slice(1);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__container">
        <a
          href="/"
          className="breadcrumbs__link-home"
          aria-label="Go to home page"
        >
          <Icon icon={iconsObject.home} />
        </a>

        <span className="breadcrumbs__arrow">
          <Icon icon={iconsObject.arrow_right} />
        </span>

        {productName ? (
          <>
            <Link to={`/${productType}/`}>
              <span className="breadcrumbs__item breadcrumbs__item--dark">
                {normalizeProductsType}
              </span>
            </Link>
            <span className="breadcrumbs__arrow">
              <Icon icon={iconsObject.arrow_right} />
            </span>
            <span className="breadcrumbs__item">{productName}</span>
          </>
        ) : (
          <span className="breadcrumbs__item">{normalizeProductsType}</span>
        )}
      </div>
    </div>
  );
};