import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { AuthenticationDto } from '@/domain/dto/authentication-dto';
import { makeGetUserToken } from '@/domain/factory/get-user-token';

export function LoginScreen() {
  const formMethods = useForm<AuthenticationDto>();
  const navigate = useNavigate();

  async function onSubmit(formValues: AuthenticationDto) {
    const service = makeGetUserToken();
    await service.perform(formValues);
    navigate('/todos');
  }

  return (
    <div className="w-full h-full bg-[#171823] text-white flex items-center justify-center">
      <form
        className="min-w-[50%]"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="text-lg">Nome</label>
          <Input type="text" {...formMethods.register('name')} />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className="text-lg">Email</label>
          <Input type="email" {...formMethods.register('email')} />
        </div>
        <Button type="submit" className="mt-4">
          Entrar
        </Button>
      </form>
    </div>
  );
}
