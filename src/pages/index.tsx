import {
  BiRightArrowAlt,
  BsFillPersonFill,
  BsGoogle,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail
} from '@/components/Icons'
import RegisterModal from '@/components/RegisterModal'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import * as S from './styles'

type FormProps = {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um E-mail válido.'),
    password: Yup.string().required('Senha obrigatória')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    resolver: yupResolver(schema)
  })

  const openModal = useCallback(() => setModalIsOpen(true), [])

  const onSubmit = useCallback((data: FormProps) => {
    console.log('submit', data)
    router.push('/home')
  }, [])

  return (
    <>
      <RegisterModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <S.LoginContainer>
        <S.HeroContainer>
          <S.Divider />
          <S.HeroWrap>
            <span>logo</span>
            <h1>
              Junte-se ao Prive
              <pre />
              Administre a Lista Vip do seu Evento
            </h1>
          </S.HeroWrap>
          <S.HeroForm onSubmit={handleSubmit(onSubmit)}>
            <S.InputContainer>
              <FiMail size={22} />
              <input
                {...register('email', { required: true })}
                name="email"
                placeholder="Informe seu email"
                type="text"
                autoComplete="off"
              />
            </S.InputContainer>
            {!!errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
            <S.InputContainer>
              <FiLock size={22} />
              <input
                {...register('password', { required: true })}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Informe sua senha"
                autoComplete="off"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </button>
            </S.InputContainer>
            {!!errors.password && (
              <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
            )}
            <S.SubmitButton>
              <div>
                <span>Acessar Plataforma</span>
                <BiRightArrowAlt size={24} />
              </div>
            </S.SubmitButton>
            <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
            <S.Divider />
            <S.OptionsLogin>
              <S.OptionsContainer type="button">
                <BsGoogle size={24} />
                <span>Login Google</span>
              </S.OptionsContainer>
              <S.OptionsContainer type="button" onClick={() => openModal()}>
                <BsFillPersonFill size={24} />
                <span>Criar Conta</span>
              </S.OptionsContainer>
            </S.OptionsLogin>
          </S.HeroForm>
        </S.HeroContainer>
      </S.LoginContainer>
    </>
  )
}
