import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AlertTypeList from './components/AlertTypeList';

const { Content } = Layout;

function App() {
  return (
    <Layout className="h-screen">
      <Sidebar />
      <Layout>
        <Header />
        <Content className="bg-gray-50 overflow-auto">
          <AlertTypeList />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
