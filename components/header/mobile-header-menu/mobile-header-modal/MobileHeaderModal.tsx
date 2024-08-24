'use client';

import { MobileHeaderModalHandle } from '@/@types/components/MobileHeaderModal';
import { CocktailBasket } from '@/components/cocktail-basket/CocktailBasket';
import { LogoutForm } from '@/components/logout-form/LogoutForm';
import { OpenSavedCocktailsButton } from '@/components/saved-cocktails/open-saved-cocktails-button/OpenSavedCocktailsButton';
import { Button } from '@/components/ui/button/button';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import styles from './MobileHeaderModal.module.scss';

export const MobileHeaderModal = forwardRef<MobileHeaderModalHandle>(
  function MobileHeaderModal({}, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    const [targetElement, setTargetElement] = useState<HTMLElement | null>(
      null
    );

    useImperativeHandle(ref, () => ({
      open: () => {
        const modal = dialog.current;
        if (modal) {
          modal.showModal();
        }
      },
    }));

    const handleBackdropClick = (event: React.MouseEvent) => {
      if (event.target === dialog.current) {
        dialog.current?.close();
      }
    };

    useEffect(() => {
      const element = document.getElementById('mobile-menu-modal');
      setTargetElement(element);
    }, []);

    if (!targetElement) return null;

    return createPortal(
      <dialog
        ref={dialog}
        onClick={handleBackdropClick}
        className={styles.modal}
      >
        <div className={styles['header-menu-content']}>
          <form
            name="mobile-modal-close-form"
            method="dialog"
            className={styles['close-modal-form']}
          >
            <Button
              type="submit"
              variant="link"
              className={styles['close-modal']}
            >
              <IoMdClose size={26} />
            </Button>
          </form>
          <nav>
            <ul className={styles['header-menu-items']}>
              <li>
                <OpenSavedCocktailsButton />
              </li>
              <li>
                <CocktailBasket />
              </li>
              <li>
                <LogoutForm />
              </li>
            </ul>
          </nav>
        </div>
      </dialog>,
      targetElement
    );
  }
);
