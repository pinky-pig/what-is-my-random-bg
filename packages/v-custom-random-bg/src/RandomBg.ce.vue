<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['rendered'])

const props = defineProps({
  palettes: {
    default: [
      '64a6bd-90a8c3-ada7c9-d7b9d5-f4cae0'.split('-').map(a => `#${a}`),
      '4059ad-6b9ac4-97d8c4-eff2f1-f4b942'.split('-').map(a => `#${a}`),
      'd1f0b1-b6cb9e-92b4a7-8c8a93-81667a'.split('-').map(a => `#${a}`),
      '7776bc-cdc7e5-fffbdb-ffec51-ff674d'.split('-').map(a => `#${a}`),
      '628395-96897b-dbad6a-cf995f-d0ce7c'.split('-').map(a => `#${a}`),
      '28536b-c2948a-7ea8be-f6f0ed-bbb193'.split('-').map(a => `#${a}`),
      'dcc48e-eaefd3-b3c0a4-505168-27233a'.split('-').map(a => `#${a}`),
      'dab6c4-7b886f-b4dc7f-feffa5-ffa0ac'.split('-').map(a => `#${a}`),
    ],
  },
  rerender: {
    default: '',
  },
  'initial-data': {
    default: [
      { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
      { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
      { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
    ],
  }
})


const polygonPathList = ref()

render(props['initial-data'])

watch(() => props.rerender, (_oldValue: any, _newValue: any) => {
  // 第一次进来不重新渲染
  if (_oldValue !== null) {
    console.log(11);
    render()
  }
})


function render(defaultData?: any) {
  polygonPathList.value = defaultData ||  randomGeneratePolygon(props.palettes)
  emit('rendered', polygonPathList.value)
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}
function randomGeneratePolygon(themes: any) {
  // 渲染几个多边形（这里只有3个）
  const polygonList = new Array(getRandomIntInclusive(3, 3)).fill([])

  // 随机这几个多边形的颜色数组
  const polygonColorArray = getRandomIntInclusive(0, themes.length - 1)

  // 遍历每个多边形
  return polygonList.map((item, index) => {
    // 1.首先获取每个多边形随机的边数
    const num = new Array(getRandomIntInclusive(3, 10)).fill([])

    // 2.然后计算每个角的坐标
    const coordinates = num.map((it) => {
      // 获取x坐标（这里三个图形各三分之一，所以使用三等分）
      const x = getRandomIntInclusive(100 / 3 * index, 100 / 3 * (index + 1))
      // 获取y坐标
      const y = getRandomIntInclusive(0, 100)

      return [`${x}%`, `${y}%`]
    })

    // 3.根据得到的坐标，生成clip-path字符串,n条边即是n个角,n个坐标,坐标范围要在画布最大最小的范围内
    let clipPathStr = ''
    coordinates.forEach((i) => {
      const str = `${i[0]} ${i[1]},`
      clipPathStr += str
    })

    return {
      path: `polygon(${clipPathStr.slice(0, clipPathStr.length - 1)})`,
      color: themes[polygonColorArray][index],
    }
  })
}
</script>

<template>
  <div id="whatIsMyRandomBG" class="whatIsMyRandomBG">
    <div v-for="item, index in polygonPathList" :key="index" class="randomBG-item w-full h-full relative"
      :style="{ clipPath: item.path, background: item.color }">
    </div>
  </div>
</template>

<style scoped>
#whatIsMyRandomBG {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  filter: blur(180px);
  pointer-events: none;
}

.randomBG-item {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
