<template>
  <div class="wallet-list-item md-elevation-10 md-primary">
      <md-ripple class="wallet-list-item-ripple">
          <div class="top-section">
              <span>dd-mm-yyyy</span>
              <span>3:48pm</span>
              <span class="amount">NGN 1000</span>
          </div>
          <div class="middle-section">Online shopping at DeliveryIn</div>
          <div  class="bottom-section">
              <span>sent</span>
              <span class="line">.</span>
              <span></span>
          </div>
      </md-ripple>
  </div>
</template>

<script>
export default {
    name: "WalletListItem"
}
</script>

<style scoped>
.wallet-list-item{
    backdrop-filter: blur(5px);
    width: calc(100% - 8px) !important;
    height: 85px;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    margin-left: 4px;
    margin-right: 4px;
    color: #ffffff !important;
    /*border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;*/
    border-radius: 15px !important;
    /*background-size: 150% 150%;
    background-image: url(data:image/png;base64,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);*/
}
.wallet-list-item-ripple{
    border-right: 20px solid var(--accent-color);
    padding: 8px;
    display: flex;
    flex-direction: column !important;
    align-items: flex-start;
    justify-content: space-between;
}
.top-section{
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between !important;
    width: 100% !important;
}

.top-section .amount{
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
}

.middle-section{
    text-align: center !important;
    font-weight: 900;
    width: 100% !important;
}

.bottom-section{
    display: flex !important;
    align-items: flex-end !important;
    justify-content: space-between !important;
    width: 100% !important;
}

.bottom-section .line{
    width: 100px !important;
    flex-direction: row !important;
    height: 4px !important;
    background-color: var(--white);
}

@media (min-width: 900px){
    .wallet-list-item{
        width: calc(50% - 16px) !important;
        float: left;
        margin-left: 8px;
        margin-right: 8px;
    }
}
</style>