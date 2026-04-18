import { AuthCard } from "@/components/admin/auth/auth-card";
import { LoginForm } from "@/components/admin/auth/login-form";

export default function AdminLoginPage() {
  return (
    <AuthCard
      title="Connexion administrateur"
      subtitle="Accédez à l’espace d’administration GoulBAM Enterprises."
    >
      <LoginForm />
    </AuthCard>
  );
}