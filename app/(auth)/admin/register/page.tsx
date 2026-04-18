import { AuthCard } from "@/components/admin/auth/auth-card";
import { RegisterForm } from "@/components/admin/auth/register-form";

export default function AdminRegisterPage() {
  return (
    <AuthCard
      title="Créer un compte admin"
      subtitle="Initialisez un accès administrateur pour gérer la plateforme."
    >
      <RegisterForm />
    </AuthCard>
  );
}