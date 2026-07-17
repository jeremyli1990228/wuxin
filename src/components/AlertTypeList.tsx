import { useState, useEffect } from 'react';
import { Table, Button, Input, Select, message, Popconfirm, Tooltip } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { AlertType } from '../types';
import { alertTypes as initialAlertTypes, alertLevelOptions } from '../data/mockData';
import EditModal from './EditModal';

const { Option } = Select;

const AlertTypeList = () => {
  const [alertTypes, setAlertTypes] = useState<AlertType[]>(initialAlertTypes);
  const [filteredTypes, setFilteredTypes] = useState<AlertType[]>(initialAlertTypes);
  const [searchText, setSearchText] = useState('');
  const [alertLevel, setAlertLevel] = useState('');
  const [status, setStatus] = useState('');
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<AlertType | null>(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 20 });

  useEffect(() => {
    let filtered = [...alertTypes];
    
    if (searchText) {
      filtered = filtered.filter(item => 
        item.alertTypeName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    if (alertLevel) {
      filtered = filtered.filter(item => item.alertLevel === alertLevel);
    }
    
    if (status) {
      filtered = filtered.filter(item => item.status === status);
    }
    
    setFilteredTypes(filtered);
  }, [searchText, alertLevel, status, alertTypes]);

  const handleSearch = () => {
    setPagination({ current: 1, pageSize: 20 });
  };

  const handleReset = () => {
    setSearchText('');
    setAlertLevel('');
    setStatus('');
    setPagination({ current: 1, pageSize: 20 });
  };

  const handleStatusChange = (id: number, newStatus: '启用' | '禁用') => {
    setAlertTypes(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    message.success(`已${newStatus}`);
  };

  const handleEdit = (record: AlertType) => {
    setEditingItem(record);
    setEditModalVisible(true);
  };

  const handleDelete = (id: number) => {
    setAlertTypes(prev => prev.filter(item => item.id !== id));
    message.success('删除成功');
  };

  const handleSave = (updatedItem: AlertType) => {
    setAlertTypes(prev => 
      prev.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditModalVisible(false);
    message.success('保存成功');
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '告警类型',
      dataIndex: 'alertTypeName',
      key: 'alertTypeName',
      sorter: (a: AlertType, b: AlertType) => a.alertTypeName.localeCompare(b.alertTypeName),
    },
    {
      title: '类型标识',
      dataIndex: 'typeIdentifier',
      key: 'typeIdentifier',
      ellipsis: true,
      sorter: (a: AlertType, b: AlertType) => a.typeIdentifier.localeCompare(b.typeIdentifier),
    },
    {
      title: '告警级别',
      dataIndex: 'alertLevel',
      key: 'alertLevel',
      sorter: (a: AlertType, b: AlertType) => a.alertLevel.localeCompare(b.alertLevel),
    },
    {
      title: '处置方式',
      dataIndex: 'handlingMethod',
      key: 'handlingMethod',
      sorter: (a: AlertType, b: AlertType) => a.handlingMethod.localeCompare(b.handlingMethod),
    },
    {
      title: '通知方式',
      dataIndex: 'notificationMethod',
      key: 'notificationMethod',
      sorter: (a: AlertType, b: AlertType) => a.notificationMethod.localeCompare(b.notificationMethod),
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      sorter: (a: AlertType, b: AlertType) => a.description.localeCompare(b.description),
    },
    {
      title: '工单类型',
      dataIndex: 'workOrderType',
      key: 'workOrderType',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      sorter: (a: AlertType, b: AlertType) => a.status.localeCompare(b.status),
      render: (status: string, record: AlertType) => (
        <Button
          type={status === '启用' ? 'primary' : 'default'}
          size="small"
          onClick={() => handleStatusChange(record.id, status === '启用' ? '禁用' : '启用')}
        >
          {status}
        </Button>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: (_: string, record: AlertType) => (
        <div className="flex items-center space-x-2">
          <Tooltip title="禁用">
            <Button
              type="link"
              size="small"
              onClick={() => handleStatusChange(record.id, '禁用')}
            >
              禁用
            </Button>
          </Tooltip>
          <Tooltip title="编辑">
            <Button
              type="link"
              size="small"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            >
              编辑
            </Button>
          </Tooltip>
          <Tooltip title="删除">
            <Popconfirm
              title="确定删除此数据项，是否继续？"
              icon={<DeleteOutlined style={{ color: 'red' }} />}
              onConfirm={() => handleDelete(record.id)}
              okText="确定"
              cancelText="取消"
            >
              <Button type="link" size="small" danger>
                删除
              </Button>
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">告警类型</span>
            <Input
              placeholder="请输入"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 200 }}
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">告警级别</span>
            <Select
              placeholder="请选择"
              value={alertLevel}
              onChange={setAlertLevel}
              style={{ width: 150 }}
            >
              {alertLevelOptions.map(opt => (
                <Option key={opt} value={opt}>{opt}</Option>
              ))}
            </Select>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">状态</span>
            <Select
              placeholder="请选择"
              value={status}
              onChange={setStatus}
              style={{ width: 150 }}
            >
              <Option value="启用">启用</Option>
              <Option value="禁用">禁用</Option>
            </Select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
          >
            查询
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={handleReset}
          >
            重置
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingItem(null);
              setEditModalVisible(true);
            }}
          >
            新增
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredTypes}
        rowKey="id"
        pagination={{
          ...pagination,
          total: filteredTypes.length,
          onChange: (page, pageSize) => setPagination({ current: page, pageSize }),
        }}
        bordered
        scroll={{ x: 1200 }}
      />
      <EditModal
        visible={editModalVisible}
        item={editingItem}
        onCancel={() => setEditModalVisible(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default AlertTypeList;
