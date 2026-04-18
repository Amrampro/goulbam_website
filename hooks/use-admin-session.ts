"use client";

import { useEffect, useState } from "react";
import { AdminUser } from "@/types/auth";
import { adminAuthService } from "@/services/admin-auth.service";

export function useAdminSession() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const session = await adminAuthService.getSession();
        setUser(session);
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    isAdmin: !!user?.isAdmin,
  };
}