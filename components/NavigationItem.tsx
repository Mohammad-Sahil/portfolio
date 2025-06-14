import Link from 'next/link';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';

const NavigationItem = ({ item, index, linkStyle, aStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = isHovered ? item.iconFilled : item.icon;

  return (
    <Tooltip
      title={item.text}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      placement="left"
      arrow
    >
      <li key={index}>
        <Link href={item.route} className={linkStyle}>
          <a className={aStyle}>
            <IconButton
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(148, 163, 184, 0.1)',
                  transform: 'scale(1.1)',
                }
              }}
            >
              <IconComponent
                style={{
                  color: isHovered ? "#94A3B8" : "#94A3B8",
                  fontSize: "1.6rem",
                  transition: 'all 0.3s ease'
                }}
              />
            </IconButton>
          </a>
        </Link>
      </li>
    </Tooltip>
  );
};

export default NavigationItem;