<template>
  <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
    <li v-for="(item, index) in sidebarMenu" :key="index" @click="setActive(item.mainTitle)"
      :class="[item.staticClass ? item.staticClass : (!item.isStatic && !item.isHorizontal ? 'nav-item' : ''), (item.mainTitle === ActiveAcco && 'active'), { 'active': $route.path === item.route || (item.children && item.children.some(child => $route.path.startsWith(child.route))) }]">
      <template v-if="item.children">
        <div class="colors">
          <a class="nav-link" v-b-toggle="`collapse-${index}`" href="#" role="button" aria-expanded="false"
            :class="{ 'active': $route.path === item.route || (item.children && item.children.some(child => $route.path.startsWith(child.route))) || item.mainTitle === ActiveAcco }">
            <i v-if="item.svgIcon" class="icon" data-bs-toggle="tooltip" data-bs-placement="right"
              :data-bs-original-title="item.mainTitle" :title="item.mainTitle">
              <i v-html="item.mainSvg"></i>
            </i>
            <i v-else :class="item.mainLogo" data-bs-toggle="tooltip" :title="item.mainTitle" data-bs-placement="right"
              :data-bs-original-title="item.mainTitle"></i>
            <span class="item-name">{{ item.mainTitle }}</span>
            <i class="right-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </i>
          </a>
          <b-collapse tag="ul" class="sub-nav" :visible="item.mainTitle === ActiveAcco" :id="`collapse-${index}`">
    <li v-for="(data, id) in item.children" :key="id"
      :class="['sidebar-layout', { 'active': $route.path === data.route || (data.children && data.children.some(child => $route.path.startsWith(child.route))) }]">


      <template v-if="data.children">
        <router-link :to="data.route" class="nav-link" v-b-toggle="`sub-collapse-${id}`">
          <i class="icon" v-b-tooltip.hover.right :title="data.title">
            <i v-html="data.mainLogo" :class="data.logo"></i>
          </i>
          <span class="item-name ">{{ data.mainTitle }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon iq-arrow-right arrow-active" width="15" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
            </path>
          </svg>
        </router-link>
        <b-collapse tag="ul" class="sub-nav" :id="`sub-collapse-${id}`">
    <li v-for="(child, childId) in data.children" :key="childId" class="sidebar-layout">
      <router-link :to="child.route" class="nav-link">
        <i class="icon" v-b-tooltip.hover.right :title="child.title">
          <i v-html="child.logo"></i>
        </i>
        <span class="item-name">{{ child.title }}</span>
      </router-link>
    </li>
    </b-collapse>

</template>


<template v-else>
  <router-link :to="data.route" class="nav-link">
    <i :class="data.logo" data-bs-toggle="tooltip" :title="data.title" data-bs-placement="right"
      :data-bs-original-title="data.title">

    </i>
    <span class="item-name">{{ data.title }}</span>
  </router-link>
</template>
</li>
</b-collapse>
</div>
</template>


<template v-else-if="item.isStatic">
  <a class="nav-link static-item disabled text-start" href="#" tabindex="-1">
    <span class="default-icon">{{ item.mainTitle }}</span>
    <span class="mini-icon" data-bs-toggle="tooltip" data-bs-placement="right">-</span>
  </a>
</template>

<template v-else-if="item.isHorizontal">
  <hr class="hr-horizontal">
</template>

<template v-else>
  <router-link class="nav-link" :to="item.route" role="button">
    <i :title="item.mainTitle" data-bs-toggle="tooltip" data-bs-placement="right" :class="item.mainLogo"
      :data-bs-original-title="item.mainTitle">

    </i>
    <span class="item-name">{{ item.mainTitle }}</span>
    <p v-if="item.badge" :class="` ${item.badgeClass}`">{{ item.badge }}</p>
  </router-link>
</template>
</li>
</ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { sidebarMenu } from "../../plugins/sidebar";
import Scrollbar from "smooth-scrollbar";
import { Tooltip } from 'bootstrap'

onMounted(() => {
  Scrollbar.init(document.querySelector(".data-scrollbar"), {
    continuousScrolling: false,
  });
  const sidebarTooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  sidebarTooltip.forEach((tooltipElement) => {
    new Tooltip(tooltipElement)
  })
});
const ActiveAcco = ref("");


const setActive = (values) => {
  ActiveAcco.value = values;
}
</script>
