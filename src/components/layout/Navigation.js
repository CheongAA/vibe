import React from 'react';
import { FaHome, FaMedal, FaMusic } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const links = [
  {
    title: '투데이',
    icon: <FaHome size="20" />,
    url: ROUTES.HOME,
  },
  {
    title: '차트',
    icon: <FaMedal size="20" />,
    url: ROUTES.TOP_CHARTS,
  },
  {
    title: '아티스트',
    icon: <FaMusic size="20" />,
    url: ROUTES.TOP_ARTISTS,
  },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-5">
      {links.map((link) => (
        <Link to={link.url} key={link.url}>
          <div
            className={`${
              pathname === link.url ? 'text-red-500' : 'text-white'
            } py-2 flex flex-row align-middle`}
          >
            {link.icon}
            <h3 className="text-lg pl-2 leading-6">{link.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
