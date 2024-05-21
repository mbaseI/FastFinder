import LoginModal from '@/components/Modals/login';
import RegisterModal from '@/components/Modals/register';

const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalProvider;
