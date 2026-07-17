import { BellOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="text-xl font-semibold text-gray-800">告警类型</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <BellOutlined className="mr-2" />
          <span>雾芯科技</span>
        </div>
        <div className="flex items-center">
          <UserOutlined className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
