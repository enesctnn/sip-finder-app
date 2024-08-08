'use client';

import { MobileHeaderModalHandle } from '@/@types/components/MobileHeaderModal';
import { useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { MobileHeaderModal } from './mobile-header-modal/MobileHeaderModal';
import styles from './MobileHeaderMenu.module.scss';

export function MobileHeaderMenu() {
  const dialog = useRef<MobileHeaderModalHandle>(null);

  const handleOpenModal = () => {
    const modal = dialog.current;
    if (modal) {
      modal.open();
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={styles['header-modal-button']}
      >
        <IoIosMenu size={32} />
      </button>

      <MobileHeaderModal ref={dialog} />
    </>
  );
}
