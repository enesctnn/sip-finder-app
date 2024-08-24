'use client';

import { ModalHandle, ModalProps } from '@/@types/components/modal';
import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Button } from '../button/button';
import { Card, CardContent, CardFooter, CardHeader } from '../card/Card';
import styles from './modal.module.scss';

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { title, children, actions, portalElementId },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      const modal = dialog.current;
      if (modal) {
        modal.showModal();
      }
    },
    close: () => {
      const modal = dialog.current;
      if (modal) {
        modal.close();
      }
    },
  }));

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === dialog.current) {
      dialog.current?.close();
    }
  };

  const handleCloseModal = () => {
    const modal = dialog.current;
    if (modal) {
      modal.close();
    }
  };

  useEffect(() => {
    const element = document.getElementById(portalElementId);
    setTargetElement(element);
  }, [portalElementId]);

  if (!targetElement) return null;

  return createPortal(
    <dialog ref={dialog} className={styles.modal} onClick={handleBackdropClick}>
      <Card className={styles['modal-cart']}>
        <Button
          variant="link"
          className={styles['close-modal']}
          onClick={handleCloseModal}
        >
          <IoIosCloseCircleOutline />
        </Button>
        <CardHeader>
          <h1>{title}</h1>
        </CardHeader>

        <CardContent>{children}</CardContent>

        {!!actions && (
          <CardFooter>
            <form
              name="modal-close-form"
              method="dialog"
              className={styles['modal-actions']}
            >
              {actions}
            </form>
          </CardFooter>
        )}
      </Card>
    </dialog>,
    targetElement as HTMLElement
  );
});
