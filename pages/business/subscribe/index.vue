<template>
  <div>
    <DPageHeader asset-image="~/assets/default-header-bg.svg" icon="decode-icon-avatar">
      <h1>{{ order.subscriptionType }}</h1>
    </DPageHeader>

    <section class="full-section" id="section-6">

      <div class="container">

        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">

            <div v-show="!loaded" class="text-center">
              <!--suppress HtmlUnknownTarget -->
              <img src="~/assets/loading.gif" alt="">
            </div>

            <form @submit="onFormSubmit" v-show="loaded">
              <fieldset>

                <!-- contact -->

                <!-- name -->
                <p>
                  <label for="name">Kapcsolattartó neve:</label>
                  <input class="col-12 mb-0" id="name" type="text" placeholder="" required
                         v-model="contact.name">
                </p>

                <!-- email -->
                <p>
                  <label for="email">Értesítési email-cím:</label>
                  <input class="col-12 mb-0" id="email" type="email" name="email" required
                         v-model="contact.email">
                </p>

                <p class="mb-2">
                  <small>Kérjük, valós e-mail címet adjon meg, mert az aktiváló levelet ide fogjuk elküldeni!</small>
                </p>

                <!-- phone -->
                <p>
                  <label for="phone">Telefonszám:</label>
                  <input class="col-12 mb-0" id="phone" type="text" name="phone" required
                         v-model="contact.phone">
                </p>

                <!-- billing -->
                <h4 class="my-5">Számlázási cím</h4>

                <p>
                  <label for="name2">Név:</label>
                  <input class="col-12 mb-0" id="name2" type="text" name="name2" required
                         v-model="billing.name">
                </p>

                <p>
                  <label for="city">Város:</label>
                  <input class="col-12 mb-0" id="city" type="text" name="city" required
                         v-model="billing.city">
                </p>

                <p>
                  <label for="address">Cím:</label>
                  <input class="col-12 mb-0" id="address" type="text" name="address" required
                         v-model="billing.address">
                </p>

                <p>
                  <label for="zip">Irányítószám:</label>
                  <input class="col-12 mb-0" id="zip" type="text" name="zip" required
                         v-model="billing.zipCode">
                </p>

                <p>
                  <label for="tax">Adószám:</label>
                  <input class="col-12 mb-0" id="tax" type="text" name="tax"
                         v-model="billing.taxNumber">
                </p>

              </fieldset>

              <div class="mt-3">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" name="aszf" required
                           v-model="agreements.terms">
                    Az <a href="http://pedellus-pedellustest.azurewebsites.net/GeneralTermsAndConditions/Subscription">Általános
                    szerződési feltételeket</a> elolvastam és elfogadom.
                    <span></span>
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" name="adatvedelem" required
                           v-model="agreements.privacy">
                    Az <a
                    href="http://pedellus-pedellustest.azurewebsites.net/GeneralTermsAndConditions/PrivacyStatement">
                    Adatvédelmi
                    szabályzatot</a> elolvastam és elfogadom.
                    <span></span>
                  </label>
                </div>
              </div>

              <!-- payment -->
              <h4 class="my-5">Fizetési mód</h4>
              <div class="radio">
                <label>
                  <input type="radio" name="payment" id="option1" value="paypal" v-model="payment">
                  Paypal fizetés
                  <span></span>
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="payment" id="option2" value="bank" v-model="payment">
                  Banki utalás
                  <span></span>
                </label>
              </div>

              <!-- total -->
              <h4 class="my-5">Összegzés</h4>
              <div class="mb-5">
                <table class="table table-bordered">
                  <thead>
                  <tr>
                    <th scope="col">Előfizetés típusa</th>
                    <th scope="col">Összeg</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">{{ order.subscriptionType }} ({{ order.amount }} darab)</th>
                    <td>{{ order.totalPrice }} Ft + Áfa</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <button class="btn btn-default btn-outline waves waves-dark" @click="onFormSubmit">
                Megveszem <i class="decode-icon-cursor"></i>
              </button>

            </form>

          </div>
          <!-- col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

  </div>
</template>

<script>
  import DPageHeader from "~/components/decode/DPageHeader.vue";

  export default {
    name: "business-subscribe",
    layout: "decode",
    components: { DPageHeader },
    data() {
      return {
        order: {
          subscriptionType: "",
          price: 0,
          amount: 0
        },
        contact: {
          name: "",
          email: "",
          phone: ""
        },
        billing: {
          name: "",
          city: "",
          address: "",
          zipCode: "",
          taxNumber: ""
        },
        agreements: {
          terms: false,
          privacy: false
        },
        payment: "paypal",
        loaded: false
      };
    },
    computed: {
      isFormValid() {
        // contact
        // name, phone
        if (!this.contact.name || !this.contact.phone) return false;
        // email
        const emailRegexp = /\S+@\S+\.\S+/;
        if (!emailRegexp.test(this.contact.email)) return false;

        // billing
        if (!this.billing.name || !this.billing.city || !this.billing.address || !this.billing.zipCode) return false;

        // agreements
        return (this.agreements.privacy && this.agreements.terms);
      },
      subscriptionGuid() {
        return this.$route.query.id;
      }
    },
    methods: {
      onFormSubmit(event) {
        // validate
        if (!this.isFormValid) return;

        // submit
        event.preventDefault();
        this.loaded = false;
        this.submitOrder().then(
          result => {

            // paypal payment
            if (this.payment === "paypal" && result.PayPalUrl) {
              this.gotoUrl(result.PayPalUrl);
              return;
            }
            // bank transfer payment
            else if (this.payment !== "paypal" && result.OrderUrlCode === this.subscriptionGuid) {
              this.gotoSuccess();
              return;
            }

            this.gotoFail();
          },
          rejection => {
            console.log(JSON.stringify(rejection));
            this.gotoFail();
          }
        );
      },
      fetchSubscriptionData(subscriptionGuid) {
        return this.$axios.get(`/api/v1/Subscription/Business/${subscriptionGuid}`, { withCredentials: true })
          .then(
            response => response.data,
            rejection => Promise.reject(rejection)
          );
      },
      saveSubscriptionData(data) {
        // contact
        this.contact.name = data.ContactName;
        this.contact.email = data.Email;
        this.contact.phone = data.Phone;

        // billing
        this.billing.name = data.Invoice.Name;
        this.billing.city = data.Invoice.City;
        this.billing.address = data.Invoice.Street;
        this.billing.zipCode = data.Invoice.ZIP;
        this.billing.taxNumber = data.Invoice.TaxNumber;

        // order
        this.order.subscriptionType = data.Order.SubscriptionType;
        this.order.price = data.Order.Price.toLocaleString();
        this.order.amount = data.Order.Amount;
        this.order.totalPrice = (data.Order.Amount * data.Order.Price).toLocaleString();
      },
      submitOrder() {
        const postData = {
          UrlCode: this.subscriptionGuid,
          ContactName: this.contact.name,
          Email: this.contact.email,
          Phone: this.contact.phone,
          Invoice: {
            Name: this.billing.name,
            City: this.billing.city,
            Street: this.billing.address,
            ZIP: this.billing.zipCode,
            TaxNumber: this.billing.taxNumber
          },
          PayWithPayPal: this.payment === "paypal"
        };
        return this.$axios.post("/api/v1/Subscription/Business/", postData)
          .then(response => response.data);
      },
      goto404() {
        this.$router.push({ name: "page-not-found" });
      },
      gotoSuccess() {
        this.$router.push({ name: "business-subscribe-success" });
      },
      gotoFail() {
        this.$router.push({ name: "business-subscribe-fail" });
      },
      gotoUrl(url) {
        location.href = url;
      }
    },
    created() {
      // validate
      if (!this.subscriptionGuid) this.goto404();

      // fetch data or drop to 404
      this.fetchSubscriptionData(this.subscriptionGuid).then(
        data => {
          this.saveSubscriptionData(data);
          this.loaded = true;
        },
        () => {
          this.goto404();
        }
      );
    }
  };
</script>

<!--suppress CssUnknownTarget -->
<style scoped lang="scss">
  @import "~/scss/decode/components/_buttons.scss";

  .bg-indulo {
    overflow: auto;
    height: 300px;
    background: #fff url("~/assets/business-megrendeles/indulo-bg.svg") no-repeat;
    background-size: cover;
  }

  .full-section {
    padding-top: 100px;
    padding-bottom: 50px;
  }
</style>
