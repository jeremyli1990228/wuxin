import { AlertType, SidebarItem, NotificationOption } from '../types';

export const sidebarItems: SidebarItem[] = [
  { key: 'home', title: '首页' },
  { key: 'cockpit', title: '驾驶舱' },
  { key: 'control', title: '总控', children: [
    { key: 'overview', title: '总控总览' },
    { key: 'alertCenter', title: '告警中心' },
  ]},
  { key: 'alert', title: '告警中心', children: [
    { key: 'allAlerts', title: '全部告警' },
    { key: 'alertTypes', title: '告警类型' },
    { key: 'alertSource', title: '告警来源' },
    { key: 'alertLevel', title: '告警级别' },
    { key: 'videoLink', title: '视频联动' },
  ]},
  { key: 'workOrder', title: '工单管理', children: [
    { key: 'workOrder', title: '工单管理' },
    { key: 'workOrderTracking', title: '工单追踪' },
    { key: 'sla', title: 'SLA管理' },
    { key: 'workOrderType', title: '工单类型' },
    { key: 'workOrderSource', title: '工单来源' },
    { key: 'serviceGroup', title: '服务组' },
    { key: 'workOrderLevel', title: '工单级别' },
    { key: 'workOrderSettings', title: '工单设置' },
  ]},
  { key: 'screen', title: '大屏管理' },
  { key: 'organization', title: '组织权限' },
  { key: 'system', title: '系统管理' },
  { key: 'thirdParty', title: '三方管理', children: [
    { key: 'integration', title: '三方集成' },
  ]},
];

export const alertTypes: AlertType[] = [
  { id: 1, alertTypeName: '人员聚众', typeIdentifier: 'PERSON_GATHERING', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员聚众', workOrderType: '-', status: '启用' },
  { id: 2, alertTypeName: '接打电话', typeIdentifier: 'PHONE_CALLING', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '接打电话', workOrderType: '-', status: '启用' },
  { id: 3, alertTypeName: '看手机', typeIdentifier: 'PHONE_VIEWING', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '看手机', workOrderType: '-', status: '启用' },
  { id: 4, alertTypeName: '抽烟检测', typeIdentifier: 'SMOKING_DETECT', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '抽烟检测', workOrderType: '-', status: '启用' },
  { id: 5, alertTypeName: '人员扭打', typeIdentifier: 'PERSON_FIGHT', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员扭打', workOrderType: '-', status: '启用' },
  { id: 6, alertTypeName: '摔倒检测', typeIdentifier: 'PERSON_FALL', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '摔倒检测', workOrderType: '-', status: '启用' },
  { id: 7, alertTypeName: '人员奔跑', typeIdentifier: 'PERSON_RUNNING', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员奔跑', workOrderType: '-', status: '启用' },
  { id: 8, alertTypeName: '人员值岗/离岗-少员', typeIdentifier: 'PERSON_UNDER_CAPACITY', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员值岗/离岗-少员', workOrderType: '-', status: '启用' },
  { id: 9, alertTypeName: '人员值岗/离岗-超员', typeIdentifier: 'PERSON_OVER_CAPACITY', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员值岗/离岗-超员', workOrderType: '-', status: '启用' },
  { id: 10, alertTypeName: '人员值岗/离岗-离岗', typeIdentifier: 'PERSON_OFF_DUTY', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '人员值岗/离岗-离岗', workOrderType: '-', status: '启用' },
  { id: 11, alertTypeName: '非机动车离开', typeIdentifier: 'NON_MOTOR_VEHICLE_LEAVE', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '非机动车离开', workOrderType: '-', status: '启用' },
  { id: 12, alertTypeName: '机动车离开', typeIdentifier: 'MOTOR_VEHICLE_LEAVE', alertLevel: '蓝色告警', handlingMethod: '无需处理', notificationMethod: '总控大屏', description: '机动车离开', workOrderType: '-', status: '启用' },
  { id: 13, alertTypeName: '人员越界-翻墙检测', typeIdentifier: 'PERSON_WALL_CLIMBING', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '人员越界-翻墙检测', workOrderType: '-', status: '启用' },
  { id: 14, alertTypeName: '车辆禁停', typeIdentifier: 'VEHICLE_NO_PARKING', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '车辆禁停', workOrderType: '-', status: '启用' },
  { id: 15, alertTypeName: '车辆越界', typeIdentifier: 'VEHICLE_CROSS_BORDER', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '车辆越界', workOrderType: '-', status: '启用' },
  { id: 16, alertTypeName: '人员入侵', typeIdentifier: 'PERSON_INTRUSION', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '人员入侵', workOrderType: '-', status: '启用' },
  { id: 17, alertTypeName: '人员越界', typeIdentifier: 'PERSON_CROSS_BORDER', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '人员越界', workOrderType: '-', status: '启用' },
  { id: 18, alertTypeName: '消防设备延时通知', typeIdentifier: 'FIRE_OUTPUT_DELAY', alertLevel: '蓝色告警', handlingMethod: '手动处理', notificationMethod: '总控大屏', description: '设备回路延时', workOrderType: '-', status: '启用' },
];

export const notificationOptions: NotificationOption[] = [
  { value: 'screen', label: '总控大屏' },
  { value: 'security', label: '安防总控' },
  { value: 'sms', label: '短信' },
  { value: 'ding', label: '钉钉' },
  { value: 'wechat', label: '企微消息通知' },
  { value: 'phone', label: '电话' },
];

export const alertLevelOptions = ['蓝色告警'];

export const handlingMethodOptions = ['无需处理', '手动处理'];
