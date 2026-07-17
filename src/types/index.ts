export interface AlertType {
  id: number;
  alertTypeName: string;
  typeIdentifier: string;
  alertLevel: string;
  handlingMethod: string;
  notificationMethod: string;
  description: string;
  workOrderType: string;
  status: '启用' | '禁用';
}

export interface SidebarItem {
  key: string;
  title: string;
  icon?: string;
  children?: SidebarItem[];
}

export interface NotificationOption {
  value: string;
  label: string;
}
