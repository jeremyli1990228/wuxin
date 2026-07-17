import { useState } from 'react';
import { Menu, Layout } from 'antd';
import { 
  HomeOutlined, 
  DashboardOutlined, 
  MonitorOutlined, 
  AlertOutlined, 
  FileTextOutlined,
  DesktopOutlined,
  TeamOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { sidebarItems } from '../data/mockData';

const { Sider } = Layout;

const iconMap: Record<string, any> = {
  home: HomeOutlined,
  cockpit: DashboardOutlined,
  control: MonitorOutlined,
  alert: AlertOutlined,
  workOrder: FileTextOutlined,
  screen: DesktopOutlined,
  organization: TeamOutlined,
  system: SettingOutlined,
  thirdParty: AppstoreOutlined,
};

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState<string[]>(['alert']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['alertTypes']);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleSelect = (e: { key: string }) => {
    setSelectedKeys([e.key]);
  };

  const renderMenuItems = (items: any[]) => {
    return items.map((item) => {
      const Icon = iconMap[item.key] || MonitorOutlined;
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={<Icon />}
            title={item.title}
          >
            {item.children.map((child: any) => (
              <Menu.Item key={child.key}>{child.title}</Menu.Item>
            ))}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={<Icon />}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <Sider 
      className="bg-[#0f2941]" 
      width={220}
      theme="dark"
    >
      <div className="h-16 flex items-center px-4 border-b border-[#1f4260]">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded mr-3 flex items-center justify-center">
            <span className="text-white text-lg font-bold">智</span>
          </div>
          <span className="text-white text-lg font-semibold">智慧总控</span>
        </div>
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={handleOpenChange}
        onSelect={handleSelect}
        theme="dark"
        className="bg-[#0f2941] border-r border-[#1f4260]"
        style={{ height: '100%', borderRight: 'none' }}
      >
        {renderMenuItems(sidebarItems)}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
