<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb name="销售订单" />
      <BTitle title="销售订单" style="margin-top: 8px;margin-bottom: 20px;"></BTitle>
      <List>
        <div>
          <AButton text="确认发货" />
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