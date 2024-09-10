<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb name="我的仓库" />
      <BTitle title="我的仓库" style="margin-top: 8px;margin-bottom: 20px;">
        <div class="add-btn flex-center-center">
          <span>+</span><img src="../assets/images/icon/package.svg" alt="">创建新商品
        </div>
      </BTitle>
      <List>
        <div class="flex-center-start" style="gap: 6px">
          <AButton text="编辑" background="#E26D00" />
          <AButton text="下架" />
        </div>
      </List>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-btn {
  width: 133px;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  background-color: #5D104B;
  margin-left: 16px;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    margin: 0 4px;
  }
  span {
    font-size: 20px;
  }
}
</style>