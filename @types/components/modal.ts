export interface ModalProps {
  title: string;
  description: string;
  actions: React.ReactNode;
}

export interface ModalHandle {
  open: () => void;
}
