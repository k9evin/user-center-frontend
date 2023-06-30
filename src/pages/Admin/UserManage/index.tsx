import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import React, {useRef} from 'react';
import {searchUsers} from '@/services/ant-design-pro/api';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Image, message, Popconfirm, Tag} from 'antd';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const confirm = () => {
  message.success('Click on Yes');
};

const cancel = () => {
  message.error('取消删除');
};

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id ',
    valueType: 'indexBorder',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    search: false,
    render: (_, record) => (
      <Image
        width={48}
        height={48}
        src={record.avatarUrl}
        alt={'Avatar'}
        fallback="https://gravatar.com/avatar/631aade200ee3144611c321eb56781e5?s=400&d=mp&r=x;"
      />
    ),
    copyable: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'select',
    valueEnum: {
      0: { text: '女' },
      1: { text: '男' },
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: '邮件',
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    valueType: 'select',
    render: (_, record) => {
      const color = record.userStatus === 0 ? 'green' : 'red';
      const text = record.userStatus === 0 ? '正常' : '冻结';
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '普通用户', status: 'Default' },
      1: { text: '管理员', status: 'Success' },
    },
  },
  {
    title: '用户编号',
    dataIndex: 'netId',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <Popconfirm
        key="delete"
        title="你确定要删除次账号吗？"
        onConfirm={confirm}
        onCancel={cancel}
        okText="确认"
        cancelText="取消"
        icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
      >
        <a>删除</a>
      </Popconfirm>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  // @ts-ignore
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async () => {
        await waitTime(2000);
        const userList = await searchUsers();
        return {data: userList};
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          // console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => {},
        // console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
    />
  );
};
