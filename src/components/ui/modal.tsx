import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAppSelector } from '@/config/hooks';
import { setModal } from '@/master/actions';
import { makeSelectModal } from '@/master/selector';
import { useDispatch } from 'react-redux';

interface ModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  id: string;
  clearErrors?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, children, clearErrors, id }) => {
  const modal = useAppSelector(makeSelectModal());
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModal(''));
    if (clearErrors) clearErrors();
  };

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={modal === id ? true : false} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'text-center mt-3 font-semibold'}>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
