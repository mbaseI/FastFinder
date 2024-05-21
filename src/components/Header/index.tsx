import { Button } from '@/components/ui/button';
import { setModal } from '@/master/actions';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(setModal('login'));
  };

  const onRegisterClick = () => {
    dispatch(setModal('register'));
  };

  return (
    <div className='flex items-center justify-between py-5'>
      <div className='text-3xl cursor-pointer'>FastFinder</div>
      <div>
        <Button onClick={onLoginClick}>Login</Button>
        <Button onClick={onRegisterClick} variant={'outline'} className='ml-2'>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Header;
