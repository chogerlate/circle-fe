import { PreRegisterForm } from '@/components/pre-register/PreRegisterForm'

export default function PreRegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#09090B] py-12 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
          }}
        />
        
      <div className="max-w-md w-full relative z-10">
        <h2 className="text-4xl font-medium text-white text-center mb-12 tracking-tight">
          Join the Waitlist
        </h2>
        <PreRegisterForm />
      </div>
    </main>
  )
}
