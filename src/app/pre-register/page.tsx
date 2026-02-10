import { PreRegisterForm } from '@/components/pre-register/PreRegisterForm'

export default function PreRegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
          Join the Waitlist
        </h2>
        <PreRegisterForm />
      </div>
    </main>
  )
}
