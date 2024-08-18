import ChartOverview from '@/components/chart';
import { Button } from '@/components/ui/button'
import {Sales} from '@/components/sales'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, DollarSignIcon, Percent, Users } from 'lucide-react';
export default function Home() {
  return (
    <main className='sm:ml-14 p-4 '>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:xl text-gray-600 select-none'>
                Total de Vendas
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Total de vendas em 90 dias
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:xl text-gray-600 select-none'>
                Novos Clientes
              </CardTitle>
              <Users className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold'>1024</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:xl text-gray-600 select-none'>
                Total de pedidos
              </CardTitle>
              <DollarSignIcon className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold'>534</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
        <CardHeader>
      <div className='flex items-center justify-center'>
        <CardTitle className='text-lg sm:xl text-gray-600 select-none'>
        Total de vendas
        </CardTitle>
        <DollarSign className='ml-auto w-4 h-4'/>
      </div>
      <CardDescription>
        Total de vendas em 90 dias
      </CardDescription>
      <CardContent>
        <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
      </CardContent>
    </CardHeader>
        </Card>
      </section>
      <section className='mt-4 flex flex-col md:flex-row gap-4'>
      <ChartOverview/>
      <Sales/>
      </section>
    </main>
  );
}
