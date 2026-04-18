import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Users,
  UserCircle,
} from "lucide-react";

export const adminNavigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Blog",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "My account",
    href: "/admin/account",
    icon: UserCircle,
  },
];