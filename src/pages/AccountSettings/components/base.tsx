import React, {useEffect, useState} from 'react';
import {UploadOutlined} from '@ant-design/icons';
import {Button, message, Upload} from 'antd';
import ProForm, {ProFormSelect, ProFormText} from '@ant-design/pro-form';
import {request} from 'umi';

import styles from './BaseView.less';

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({avatar}: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>头像</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar"/>
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

const BaseView: React.FC = () => {
  // retrieve current user before rendering the page
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<API.CurrentUser>();
  useEffect(() => {
    async function fetch() {
      await request('/api/user/current', {method: 'GET'}).then((res) => {
        setCurrentUser(res);
        setLoading(false);
      });
    }

    fetch().then((r) => console.log(r));
  }, []);

  // submit form
  const handleSubmit = async (values: API.CurrentUser) => {
    await request('/api/user/current', {
      method: 'PUT',
      data: values,
    }).then((res) => {
      if (res) {
        message.success('更新成功');
      } else {
        message.error('更新失败');
      }
    });
  };

  return loading ? null : (
    <div className={styles.baseView}>
      <div className={styles.left}>
        <ProForm
          layout="vertical"
          initialValues={currentUser}
          onFinish={async (values) => {
            await handleSubmit(values as API.CurrentUser);
          }}
          submitter={{
            render: (_, dom) => <div className={styles.submitButtons}>{dom}</div>,
          }}
        >
          <ProFormText
            width="md"
            name="userAccount"
            label="用户账号"
            initialValue={currentUser?.userAccount || ''}
            placeholder="请输入用户账号"
            disabled={true}
          />
          <ProFormText
            width="md"
            name="username"
            label="用户名"
            initialValue={currentUser?.username || ''}
            placeholder="请输入用户名"
          />
          <ProFormText
            width="md"
            name="phone"
            label="电话"
            initialValue={currentUser?.phone || ''}
            placeholder="请输入电话"
          />
          <ProFormText
            width="md"
            name="email"
            label="邮箱"
            initialValue={currentUser?.email || ''}
            placeholder="请输入邮箱"
          />
          <ProFormText
            width="md"
            name="netId"
            label="编号"
            initialValue={currentUser?.netId || ''}
            placeholder="请输入编号"
          />
          <ProFormSelect
            width="md"
            name="gender"
            label="性别"
            initialValue={currentUser?.gender || null}
            options={[
              {value: 0, label: '女'},
              {value: 1, label: '男'},
            ]}
          />
        </ProForm>
      </div>
      <div className={styles.right}>
        <AvatarView avatar={currentUser?.avatarUrl || ''}/>
      </div>
    </div>
  );
};

export default BaseView;
