<template>
  <div>
    <a-menu
        v-model:selectedKeys="state.selectedKeys"
        style="width: 256px"
        mode="inline"
        :open-keys="state.openKeys"
        :items="items"
        @openChange="onOpenChange"
        @click="SelectItem"
    ></a-menu>
  </div>
</template>
<script lang="ts" setup>
import {VueElement, h, reactive} from 'vue';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';
import {ItemType} from 'ant-design-vue';
import {useStore} from 'vuex';

const store = useStore();

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem('前端面试', 'sub1', () => h(MailOutlined), [
    getItem('JS 部分', 'M1'),
    getItem('浏览器', 'M2'),
    getItem('网络', 'M3'),
    getItem('Vue部分', 'M4'),
    getItem('其他', 'M5'),
    getItem('题目', 'M6'),
  ]),
  getItem('Web', 'sub2', () => h(AppstoreOutlined), [
    getItem('node.js', 'W1'),
    getItem('ES6', 'W2'),
    getItem('canvas', 'W3'),
    getItem('Sass', 'W4'),
    getItem('webpack', 'W5'),
    getItem('other', 'W6'),
    getItem('Vue.js', 'sub3', null,
        [getItem('基础', 'V1'),
          getItem('more', 'V2'),
          getItem('VueRouter', 'V3'),
          getItem('Vuex', 'V4')]),
  ]),
  getItem('Python', 'sub4', () => h(SettingOutlined), [
    getItem('Django', 'P1'),
    getItem('spiders', 'P2'),
  ]),
  getItem('Git', 'sub5', () => h(SettingOutlined), [
    getItem('基本', 'G1'),
    getItem('more', 'G2'),
  ]),
  getItem('微信小程序', 'sub6', () => h(AppstoreOutlined), [
    getItem('初步', 'C1'),
    getItem('模板与配置', 'C2'),
    getItem('视图与逻辑', 'C3'),
    getItem('基础加强', 'C4'),
  ]),
  getItem('Java', 'sub7', () => h(AppstoreOutlined), [
    getItem('初步', 'J1'),

  ]),
]);

const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  openKeys: ['sub1'],
  selectedKeys: [],
});
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

const SelectItem = (item) => {
  // console.log('click')
  console.log(item.key)
  store.commit('toggleItem', item.key)
}
</script>

