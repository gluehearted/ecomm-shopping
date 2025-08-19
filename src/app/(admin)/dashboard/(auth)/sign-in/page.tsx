import React from 'react'
import FormSignIn from './_components/form'

export default function SigninPage() {
  return (
      <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
                <FormSignIn/>
          </div>
      </main>
  )
}
