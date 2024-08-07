'use client';

import { ModalHandle, ModalProps } from '@/@types/components/modal';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../card/Card';
import styles from './modal.module.scss';

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { title, description, actions },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

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

  return createPortal(
    <dialog ref={dialog} className={styles.modal} onClick={handleBackdropClick}>
      <Card className={styles['modal-cart']}>
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>

        <CardContent>
          <p>{description}</p>
        </CardContent>

        <CardFooter>
          <form method="dialog" className={styles['modal-actions']}>
            {actions}
          </form>
        </CardFooter>
      </Card>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});
