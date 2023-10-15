interface IProps {
  children: React.ReactNode
}

export default function HeaderWrapper({ children }: IProps) {
  return (
    <header className='mx-auto mb-8 mt-10 flex w-full flex-col items-center'>
      {children}
    </header>
  )
}