type Department =
  | "android"
  | "ios"
  | "design"
  | "management"
  | "qa"
  | "back_office"
  | "frontend"
  | "hr"
  | "pr"
  | "backend"
  | "support"
  | "analytics";

export type User = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: Department;
  position: string;
  birthday: string;
  phone: string;
};
