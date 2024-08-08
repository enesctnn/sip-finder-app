export interface ModalProps {
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  portalElementId: string;
}

export interface ModalHandle {
  open: () => void;
}
