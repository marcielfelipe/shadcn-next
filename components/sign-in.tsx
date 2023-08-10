'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function SignIn(){
  const router = useRouter()

  return(
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign-in</CardTitle>
        <CardDescription>
          Enter with your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <Button className="w-full" onClick={()=>router.push('/dashboard')}>Sign-in</Button>
        <Link href='register'>
          <span className="bg-background px-2 text-muted-foreground uppercase text-xs">
            Or create account
          </span>
        </Link>
      </CardFooter>
    </Card>
  )
}