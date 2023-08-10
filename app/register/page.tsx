import { CreateAccount } from '@/components/create-account';
import { Overview } from '@/components/overview';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <section className="w-1/3">
        <CreateAccount />
      </section>
    </div>
  )
}
