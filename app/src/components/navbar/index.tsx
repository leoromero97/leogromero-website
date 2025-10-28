'use client'

import { useState } from 'react';
import NavMobile from './navMobile';

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
      <NavMobile
        menuOpened={menuOpened}
        onClick={onOpenMenu}
      />
  );
}

export default Navbar;
