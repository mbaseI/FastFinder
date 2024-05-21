import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Modal from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginSchema } from '@/validation/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { setModal } from '@/master/actions';

const LoginModal = () => {
  const dispatch = useDispatch();

  const toSignUpClick = () => {
    dispatch(setModal('register'));
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const content = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => console.log('test'))}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem onTouchCancel={() => console.log('asd')} className={'mb-3'}>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='user@gmail.com' {...field} />
              </FormControl>
              <FormMessage className={'text-xs'} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className={'mb-3'}>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className='focus-visible:ring-red-800'
                  placeholder='************'
                  {...field}
                />
              </FormControl>
              <FormMessage className={'text-xs'} />
            </FormItem>
          )}
        />
        <Button className={'w-full mt-5'} size={'lg'} type='submit'>
          Sign In
        </Button>
        <div className={'text-center mt-2'}>
          <span className={'font-semibold'}>
            Don’t have an account?
            <span onClick={toSignUpClick} className={'ml-2 text-sky-600 cursor-pointer'}>
              Sign Up
            </span>
          </span>
        </div>
      </form>
    </Form>
  );

  return (
    <Modal
      title={'Login'}
      id={'login'}
      children={content}
      clearErrors={() => form.clearErrors(['email', 'password'])}
    />
  );
};

export default LoginModal;
