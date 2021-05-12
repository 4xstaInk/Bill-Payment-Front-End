<template>
  <div>
    <div class="heading">
      <!-- <img src="../../assets/images/RechargeAirtime.png" /> -->
      <div class="centered">
        <p class="centeredText">Recharge Airtime</p>
      </div>
    </div>
    <div class="container">
      <div class="form-group">
        <label for="select_country" class="mb-3">Select country</label>
        <select
          class="form-control "
          v-model="form.number"
          placeholder="Select country"
          required
          name="number"
          id="selectCountry"
          @click="selectCountry(form.number)"
        >
          <option value="Zambia">Zambia</option>
          <option value="Spain">Spain</option>
          <option value="england">England</option>
          <option value="Angola">Angola</option>
        </select>
      </div>
      <div class="mt-5" v-if="form.number !== ''">
        <label class="mb-3"
          >Select operator
          <span v-if="number !== ''">in {{ form.number }}</span></label
        >
        <div class="d-flex flex-wrap text-center">
          <!-- <div
            class="p-2 m-3 border"
            @click="form.Country = data.English"
            v-for="data in codes"
            :key="data.alpha2"
            :class="[form.Country === data.English ? 'selected' : 'notSelected']"
          > -->
          <div
            class="col-6 col-md-5 m-1 col-lg-3 d-lg-block d-none "
            @click="form.Country = data.Operator"
            v-for="data in Operators"
            :key="data.Operator"
            :class="[
              form.Country === data.Operator
                ? 'operatorSelected'
                : 'operatorNotSelected'
            ]"
          >
            <span class="OperatorLogoSpan">
              <img class="OperatorLogo" :src="data.Logo" />
            </span>
            <br />
            <span class="operatorName">
              {{ data.Operator }}
            </span>
          </div>
        </div>
      </div>
      <!-- <div class="form-group mt-5" v-if="form.number !== ''"> -->
        <!-- <label class="mb-3" for="select_country">Enter phone number</label> -->
        <!-- Phone Number Input Field-->
        <!-- <div class="input-group mb-3" id="EnterPhone">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ form.countrycode }}</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            name="phone"
            v-model="form.phone"
            v-on:country-changed="countryChanged"
            placeholder="Enter phone number"
          />
        </div>
        <p class="numberOutput" id="" v-if="form.phone !== ''">
          <span>{{ form.countrycode }}</span>
          <span class="text-success">{{ form.phone }}</span>
        </p>
      </div> -->

      <div class="mt-5" v-if="form.Country !== ''">

        <label class="mb-3" for="select_country">Enter phone number</label>
        <!-- Phone Number Input Field-->
        <div class="input-group mb-3" id="EnterPhone">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ form.countrycode }}</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            name="phone"
            v-model="form.phone"
            v-on:country-changed="countryChanged"
            placeholder="Enter phone number"
          />
        </div>
        <p class="numberOutput" id="" v-if="form.phone !== ''">
          <span>{{ form.countrycode }}</span>
          <span class="text-success">{{ form.phone }}</span>
        </p>

        <label class="mb-3 mt-5">Select {{form.Country}} airtime amount</label>
        <div class="d-flex flex-wrap">
          <div
            class="p-2 m-1 border text-center"
            @click="form.amount = data.Amount"
            v-for="data in Tarriffs"
            :key="data.Amount"
            :class="[
              form.amount === data.Amount
                ? 'tarriffSelected'
                : 'tarriffNotSelected'
            ]"
          >
            <h5>Total to Recipient:</h5>
            <h3>{{ data.Amount }}</h3>
            <h4>ZMW</h4>
            <hr />
            <h5>Amount charged:</h5>
            <h3>$ {{ data.charged }}</h3>
          </div>
        </div>
      </div>
      <div v-if="form.amount !== '' && form.phone.length >= 4">
        <!-- Modal -->
        <div>
          <md-dialog-confirm
            :md-active.sync="active"
            :md-title="`Confirm your purchase?`"
            :md-content="
              `
         <table v-if='submit === false'>
    <tbody>
      <tr>
        <td><h6><strong>Country:</strong></h6></td>
        <td><h6>${form.number}</h6></td>
      </tr>
      <tr>
        <td><h6><strong>Operator:</strong></h6></td>
        <td><h6>${form.Country}</h6></td>
      </tr>
      <tr>
        <td><h6><strong>Phone number:</strong></h6></td>
        <td><h6>${form.phone}</h6></td>
      </tr>
      <tr>
        <td><h6><strong>Amount:</strong></h6></td>
        <td><h6>${form.amount} ZMW</h6></td>
      </tr>
    </tbody>
  </table>
      `"
            md-confirm-text="Agree"
            md-cancel-text="Disagree"
            @md-cancel="onCancel"
            @md-confirm="onConfirm"
          />

          <button
            class="btn btn-primary btn-lg mt-3 ml-1"
            id="submitButton"
            @click="active = true"
            >PURCHASE</button
          >
          <span v-if="value"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import language_codes from "../../assets/language_code/language-codes.json";

import collectOperators from "../../assets/operators/Operators.json";

import tarriffs from "../../assets/Tarrifs/tarriffs.json";

export default {
  name: "Airtime",
  data() {
    return {
      //Modal
      active: false,
      value: null,
      ///////////
      isActive: true,
      codes: language_codes,
      Operators: collectOperators,
      Tarriffs: tarriffs,
      country: null,
      submit: false,
      form: {
        number: "",
        Country: "",
        phone: "",
        amount: "",
        numbercode: "",
        countrycode: "+260"
      }
    };
  },
  methods: {
    // Modal
    onConfirm() {
      this.value = "Agreed";
      this.$router.push("/success");
    },
    onCancel() {
      this.value = "Disagreed";
    },
    ///////////////////////

    selectCountry: function(number) {
      this.number = number;
      console.log(number);
    },
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    },
    countryChanged(country) {
      this.country = country.dialCode;
      // this.form.countrycode = this.country;
    },
    submit: function() {
      this.submit = true;
      console.log(this.form);
      console.log(this.country);
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
label {
  font-size: 200%;
}
.red {
  background-color: red;
}
.operatorSelected {
  border: 2px solid rgb(184, 184, 184);
  border-radius: 5px;
  background: rgb(177, 199, 247);
  cursor: pointer;
}
.operatorNotSelected {
  background: rgb(255, 255, 255);
  cursor: pointer;
}
.tarriffSelected {
  border: 2px solid rgb(184, 184, 184);
  border-radius: 5px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  background-color: rgb(177, 199, 247);
}
.tarriffNotSelected {
  background: rgb(255, 255, 255);
  cursor: pointer;
}
.OperatorLogo {
  height: 150px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.operatorName {
  font-size: 20px;
  font-weight: bolder;
}
.numberOutput {
  font-size: 150%;
}
.blue {
  background-color: blue;
}
.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}
.card {
  width: 50%;
  margin-left: 5%;
}

#selectCountry {
  width: 50%;
}
#EnterPhone {
  width: 50%;
}
#icon {
  font-size: 30px;
}
#submitButton {
  font-size: 30px;
  width: 40%;
  height: 50%;
  margin-left: auto;
}
</style>
