import { Layout } from '@/components/Layout'
import { Header } from '@/components/Header'
import { AiFillMeh } from 'react-icons/ai'
import { Submit } from '@/components/Buttons/Submit'
export default function paymentPonfirmed () {
  return (
    <Layout>
        <Header/>
    <h3 className='mt-14 mr-11 text-3xl ml-14'>Pago Rechazado </h3>
    <div className='w-screen flex justify-center items-center '> <AiFillMeh className='w-[300px] h-[400px] text-gray-500'/></div>
    <div className='w-screen flex justify-center items-center '><Submit >VOLVER</Submit></div>
    </Layout>
  )
}