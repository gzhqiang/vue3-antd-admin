<template>
  <DynamicTable header-title="登录日志" :data-request="loadTableData" :columns="columns" />
</template>

<script lang="ts">
  export default { name: 'SystemMonitorLoginLog' };
</script>

<script setup lang="ts">
  import { DynamicTable, LoadDataParams, TableColumn } from '@/components/dynamic-table';
  import { getLoginLogList } from '@/api/system/log';

  const loadTableData = async ({ page, limit }: LoadDataParams) => {
    const data = await getLoginLogList({ page, limit });
    return data;
  };

  const columns: TableColumn[] = [
    {
      title: '用户名',
      dataIndex: 'username',
      width: 280,
      align: 'center',
    },
    {
      title: '登录IP',
      dataIndex: 'ip',
      width: 150,
      align: 'center',
    },
    {
      title: '登录时间',
      dataIndex: 'time',
      align: 'center',
      formItemProps: {
        component: 'DatePicker',
        componentProps: {
          class: 'w-full',
        },
      },
    },
    {
      title: '操作系统',
      dataIndex: 'os',
      align: 'center',
    },
    {
      title: '浏览器',
      dataIndex: 'browser',
      align: 'center',
    },
  ];
</script>
