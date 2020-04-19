<template>
  <div class="skill-row">
    <div class="skill-item">
      <slot name="skillType"></slot>
    </div>    
    <div class="skill-item">
      <slot name="skillExtend"></slot>
    </div>
    <div class="skill-item">
      <slot name="skillDetail"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.skill-row {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  border-radius: 10px;
}
.skill-item {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.skill-item span {
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 5px 0;
  display: block;
  border-radius: 5px;
}
.skillImg{
 height: 72px;
}
</style>