<template>
  <div>
    <div class="heading">
      <!-- <img src="../../assets/images/RechargeAirtime.png" /> -->
      <div class="centered">
        <p class="centeredText">Recharge Airtime</p>
      </div>
    </div>
    <div class="container">
     <div class="successDiv">
       <img src="../../assets/images/success.png" />
       <h2 class="successMessage">Purchase Successful</h2>
        <br/>
       <button 
       type="button" 
       class="btn btn-outline-success btn-lg"
       id="successButton"
       @click="BackToPurchaseAirtime()"
       >
        <font-awesome-icon :icon="['fas', 'arrow-left']" id="arrow" class="float-center" />
       Go Back</button>
     </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Success",
  data() {
    return {
     
    };
  },
  methods: {
    BackToPurchaseAirtime(){
      this.value = "Agreed";
      this.$router.push("/airtime");
    }
    
  }
};
</script>

<style scoped>
.heading {
  position: relative;
  text-align: center;
  color: white;
  background-color: brown;
  height: 405px;
  border-bottom: 6px solid rgb(0, 168, 197);
  background-image: url("../../assets/images/billpaymentwall.png");
}
.container {
  padding: 5%;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  /* background-color: rgb(255, 255, 255);
  opacity: 0.5; */
}
.centeredText {
  margin: 20px;
  color: #ffffff;
  font-weight: bolder;
}
.red {
  background-color: red;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}
.successDiv{
  align-content: center;
}
.successMessage{
   margin-top:20px;
   margin-left:40%;
   color: green;
}
.successButton{
  margin-top:20px;
   margin-left:45%;
   color: green;
}
img{
  padding:5%;
 margin-left:45%;
  height: 300px;
  /* border: 5px solid green;
  border-radius: 50%; */
}
</style>
