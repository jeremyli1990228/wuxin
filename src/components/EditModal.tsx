import { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Button, Checkbox } from 'antd';
import { AlertType } from '../types';
import { notificationOptions, alertLevelOptions, handlingMethodOptions } from '../data/mockData';

const { Option } = Select;

interface EditModalProps {
  visible: boolean;
  item: AlertType | null;
  onCancel: () => void;
  onSave: (item: AlertType) => void;
}

const EditModal = ({ visible, item, onCancel, onSave }: EditModalProps) => {
  const [form] = Form.useForm();
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);

  useEffect(() => {
    if (visible && item) {
      form.setFieldsValue({
        alertTypeName: item.alertTypeName,
        typeIdentifier: item.typeIdentifier,
        alertLevel: item.alertLevel,
        workOrderType: item.workOrderType,
        handlingMethod: item.handlingMethod,
        description: item.description,
      });
      const notificationLabels = item.notificationMethod.split('、');
      setSelectedNotifications(
        notificationOptions
          .filter(opt => notificationLabels.includes(opt.label))
          .map(opt => opt.value)
      );
    } else if (visible && !item) {
      form.resetFields();
      setSelectedNotifications(['screen']);
    }
  }, [visible, item, form]);

  const handleOk = () => {
    form.validateFields().then(values => {
      const notificationLabels = notificationOptions
        .filter(opt => selectedNotifications.includes(opt.value))
        .map(opt => opt.label)
        .join('、');

      const newItem: AlertType = {
        id: item?.id || Date.now(),
        alertTypeName: values.alertTypeName,
        typeIdentifier: values.typeIdentifier,
        alertLevel: values.alertLevel,
        handlingMethod: values.handlingMethod,
        notificationMethod: notificationLabels,
        description: values.description || '',
        workOrderType: values.workOrderType || '-',
        status: item?.status || '启用',
      };

      onSave(newItem);
    });
  };

  const handleNotificationChange = (values: string[]) => {
    setSelectedNotifications(values);
  };

  return (
    <Modal
      title={item ? '编辑' : '新增'}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {item ? '保存' : '确定'}
        </Button>,
      ]}
      width={500}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          handlingMethod: '无需处理',
        }}
      >
        <Form.Item
          name="alertTypeName"
          label="告警类型"
          rules={[{ required: true, message: '请输入告警类型' }]}
        >
          <Input placeholder="请输入告警类型" />
        </Form.Item>

        <Form.Item
          name="typeIdentifier"
          label="类型标识"
        >
          <Input placeholder="请输入类型标识" disabled={item ? true : false} />
        </Form.Item>

        <Form.Item
          name="alertLevel"
          label="告警级别"
          rules={[{ required: true, message: '请选择告警级别' }]}
        >
          <Select placeholder="请选择告警级别">
            {alertLevelOptions.map(opt => (
              <Option key={opt} value={opt}>{opt}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="workOrderType"
          label="工单类型"
        >
          <Select placeholder="请输入当前类型的唯一标识">
            <Option value="-">-</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="handlingMethod"
          label="处置方式"
          rules={[{ required: true, message: '请选择处置方式' }]}
        >
          <Select placeholder="请选择处置方式">
            {handlingMethodOptions.map(opt => (
              <Option key={opt} value={opt}>{opt}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="告警通知方式">
          <Checkbox.Group
            value={selectedNotifications}
            onChange={handleNotificationChange}
          >
            <div className="space-y-2">
              <div className="flex flex-wrap gap-x-6">
                <Checkbox value="screen">总控大屏</Checkbox>
                <Checkbox value="security">安防总控</Checkbox>
              </div>
              <div>
                <Checkbox value="sms">短信</Checkbox>
              </div>
              <div>
                <Checkbox value="ding">钉钉</Checkbox>
              </div>
              <div>
                <Checkbox value="wechat">企微消息通知</Checkbox>
              </div>
              <div>
                <Checkbox value="phone">电话</Checkbox>
              </div>
            </div>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          name="description"
          label="描述"
        >
          <Input.TextArea rows={3} placeholder="请输入描述" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
