<template>

  <div class="modal fade" id="feedbackOverlay" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">

        <!-- modal header -->
        <div>
          <button type="button" class="close pt-1 pr-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">

              <!-- dynamic rating question items, carousel-item -->
              <div class="carousel-item"
                   v-for="(ratingQuestion, index) in ratingQuestionCollection" :key="index"
                   :class="{'active': index === 0}">

                <!-- question -->
                <h6 class="modal-title mb-4 text-center">
                  {{ ratingQuestion }}
                </h6>

                <!-- answers -->
                <div class="row justify-content-center my-4"
                     @mouseleave="OnMouseLeave()">

                  <div class="col-2 text-center figure"
                       :class="{zoomed: currentZoomedAnswer === 'nagyonrossz'}"
                       @mouseover="OnMouseOver('nagyonrossz')"
                       @click="OnClick('nagyonrossz')">
                    <!--suppress HtmlUnknownTarget -->
                    <img src="~/assets/feedback-overlay/nagyonrossz.svg" alt="">
                  </div>

                  <div class="col-2 text-center figure"
                       :class="{zoomed: currentZoomedAnswer === 'rossz'}"
                       @mouseover="OnMouseOver('rossz')"
                       @click="OnClick('rossz')">
                    <!--suppress HtmlUnknownTarget -->
                    <img src="~/assets/feedback-overlay/rossz.svg" alt="">
                  </div>

                  <div class="col-2 text-center figure"
                       :class="{zoomed: currentZoomedAnswer === 'elmegy'}"
                       @mouseover="OnMouseOver('elmegy')"
                       @click="OnClick('elmegy')">
                    <!--suppress HtmlUnknownTarget -->
                    <img src="~/assets/feedback-overlay/elmegy.svg" alt="">
                  </div>

                  <div class="col-2 text-center figure"
                       :class="{zoomed: currentZoomedAnswer === 'tetszett'}"
                       @mouseover="OnMouseOver('tetszett')"
                       @click="OnClick('tetszett')">
                    <!--suppress HtmlUnknownTarget -->
                    <img src="~/assets/feedback-overlay/tetszett.svg" alt="">
                  </div>

                  <div class="col-2 text-center figure"
                       :class="{zoomed: currentZoomedAnswer === 'imadtam'}"
                       @mouseover="OnMouseOver('imadtam')"
                       @click="OnClick('imadtam')">
                    <!--suppress HtmlUnknownTarget -->
                    <img src="~/assets/feedback-overlay/imadtam.svg" alt="">
                  </div>

                </div>

                <div class="feedback-text text-center"
                     v-if="!isLastQuestion">
                  {{ currentAnswer }}
                </div>

              </div><!--/carousel-item-->

              <!-- static last question, carousel-item -->
              <div class="carousel-item">

                <!-- question -->
                <h6 class="modal-title mt-1 mb-4 mx-3 text-center" id="exampleModalCenterTitle">
                  Kérjük, írd meg nekünk észrevételeidet, javaslataidat a tanfolyammal kapcsolatban:
                </h6>

                <div class="text-center mt-4">
                  <textarea rows="2" class="d-inline-block w-75" title="" v-model="textAnswer"></textarea>
                </div>

              </div><!--/carousel-item-->
            </div><!--/carousel-inner-->
          </div><!--/carouselExampleIndicators-->
        </div><!--/modal-body-->

        <div class="modal-footer py-2">

          <div v-if="!isLastQuestion"
               class="d-flex justify-content-end align-items-center">
            <a href="#carouselExampleIndicators" class="align-self-end" data-slide="next"
               style="position: relative;">
              <button type="button" class="btn btn-primary my-2" @click="NextQuestion()">Tovább</button>
            </a>
          </div>

          <div v-if="isLastQuestion"
               class="d-flex justify-content-between align-items-center w-100">
            <div class="d-flex justify-content-between align-items-center">
              <div class="thankyou-figure mr-4">
                <!--suppress HtmlUnknownTarget -->
                <img src="~/assets/feedback-overlay/thankyou.svg" alt="" />
              </div>
              <span>Köszönjük, hogy kitöltötted kérdőívünket!</span>
            </div>
            <button type="button" class="btn btn-primary my-2"
                    @click="SendFeedback()">
              Küldés
            </button>
          </div>

        </div><!--/modal-footer-->
      </div><!--/modal-content-->
    </div><!--/modal-dialog-->

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"
       @click="PrevQuestion()"
       v-if="!isFirstQuestion">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"
       @click="NextQuestion()"
       v-if="!isLastQuestion">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

  </div>
</template>

<script>
  export const FBO_ICONS = {
    nagyonrossz: { src: "~/assets/feedback-overlay/nagyonrossz.svg", type: "rating" },
    rossz: { src: "~/assets/feedback-overlay/rossz.svg", type: "rating" },
    elmegy: { src: "~/assets/feedback-overlay/elmegy.svg", type: "rating" },
    tetszett: { src: "~/assets/feedback-overlay/tetszett.svg", type: "rating" },
    imadtam: { src: "~/assets/feedback-overlay/imadtam.svg", type: "rating" },
    thankyou: { src: "~/assets/feedback-overlay/thankyou.svg", type: "" }
  };

  export const FBO_RATING_QUESTIONS = [
    "Összességében mennyire vagy elégedett a tanfolyammal?",
    "Mennyire vagy elégedett a tanfolyam szakmai tartalmával?",
    "Mennyire vagy elégedett a tanfolyam oktatójával?"
  ];

  export const FBO_TEXT_QUESTION =
    "Kérjük, írd meg nekünk észrevételeidet, javaslataidat a tanfolyammal kapcsolatban:";

  export const FBO_FEEDBACKS = {
    nagyonrossz: "Nagyon rossz volt!",
    rossz: "Nem tetszett!",
    elmegy: "Egynek elment!",
    tetszett: "Tetszett!",
    imadtam: "Imádtam!"
  };

  export const FBO_API_URL = "https://feedback-overlay.firebaseio.com/responses";

  export default {
    data() {
      return {
        ratingQuestionCollection: FBO_RATING_QUESTIONS,
        textQuestion: FBO_TEXT_QUESTION,
        icons: FBO_ICONS,
        questionIndex: 0,
        mouseY: 0,
        popupCounter: 0,
        answerCollection: [],
        hoverAnswerID: null
      };
    },

    mounted() {
      this.modal.on("shown.bs.modal", this.SetCarouselItemsSameSize);
    },

    computed: {
      isFirstQuestion() {
        return this.questionIndex === 0;
      },

      isLastQuestion() {
        return this.ratingQuestionCollection.length === this.questionIndex;
      },

      isRatingQuestion() {
        return this.IsIndexRatingQuestion(this.questionIndex);
      },

      textAnswer: {
        get() {
          return this.answerCollection[this.ratingQuestionCollection.length];
        },
        set(newValue) {
          this.$set(
            this.answerCollection,
            this.ratingQuestionCollection.length,
            newValue
          );
        }
      },

      currentAnswer() {
        if (this.isRatingQuestion) {
          if (this.hoverAnswerID) {
            return this.GetAnswer(this.hoverAnswerID);
          } else {
            return this.GetAnswer(this.currentAnswerID);
          }
        } else {
          return this.textAnswer;
        }
      },

      currentAnswerID: {
        get: function() {
          return this.answerCollection[this.questionIndex];
        },

        set: function(neWValue) {
          this.$set(this.answerCollection, this.questionIndex, neWValue);
        }
      },

      currentZoomedAnswer() {
        if (this.hoverAnswerID) {
          return this.hoverAnswerID;
        }

        return this.currentAnswerID;
      },

      courseID() {
        return this.$route.params.courseId || "unknown";
      },

      userHash() {
        return this.strToHash(this.$store.state.user.email);
      },

      /**
       * @return {string}
       */
      courseApiEndpoint() {
        return FBO_API_URL + "/" + this.courseID + "/" + this.userHash + ".json";
      },

      carousel() {
        return $(".modal-body .carousel");
      },

      modal() {
        return $("#feedbackOverlay.modal");
      }
    },

    methods: {
      /**
       * @return {boolean}
       */
      IsIndexRatingQuestion(questionIndex) {
        return questionIndex < this.ratingQuestionCollection.length;
      },

      /**
       * @return {string}
       */
      GetAnswer(answerID) {
        return !FBO_FEEDBACKS[answerID]
          ? "hiányzó válaszlehetőség"
          : FBO_FEEDBACKS[answerID];
      },

      /**
       *  @return {undefined}
       */
      PrevQuestion() {
        if (this.questionIndex > 0) {
          this.questionIndex--;
          this.carousel.carousel("prev");
        }
      },

      /**
       *  @return {undefined}
       */
      NextQuestion() {
        if (this.questionIndex < this.ratingQuestionCollection.length) {
          this.questionIndex++;
          this.carousel.carousel("next");
        }
      },

      // show and hide
      Show() {
        // don't show if not actual
        if (this.popupCounter) {
          return;
        }

        this.popupCounter++;
        $("#feedbackOverlay").modal("show");
      },

      Hide() {
        $("#feedbackOverlay").modal("hide");
      },

      GetFeedback() {
        return this.$axios.get(this.courseApiEndpoint).then(response => {
          return response.data;
        });
      },

      SendFeedback: function() {
        // date
        const now = new Date();

        // questions and answers
        const questionAnswerCollection = this.answerCollection.map(
          (answer, index) => {
            if (this.IsIndexRatingQuestion(index)) {
              return {
                question: FBO_RATING_QUESTIONS[index],
                answer: answer
              };
            } else {
              return {
                question: FBO_RATING_QUESTIONS[index],
                answer: answer
              };
            }
          }
        );

        // data to post
        const data = {
          time: now.toLocaleDateString() + " - " + now.toLocaleTimeString(),
          response: questionAnswerCollection
        };

        // http put
        this.$axios.put(this.courseApiEndpoint, data).then(() => {
          this.Hide();
        });
      },

      // hash
      strToHash(str) {
        let hash = 0;

        if (str.length === 0) {
          return hash;
        }

        for (let i = 0; i < str.length; i++) {
          let chr = str.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0; // Convert to 32bit integer
        }

        return hash;
      },

      /**
       * @param answerID string
       * @return undefined
       */
      OnMouseOver(answerID) {
        this.hoverAnswerID = answerID;
      },

      /**
       * @return undefined
       */
      OnMouseLeave() {
        this.hoverAnswerID = "";
      },

      /**
       * @param answerID string
       * @return undefined
       */
      OnClick(answerID) {
        // noinspection JSUnusedGlobalSymbols
        this.currentAnswerID = answerID;
        this.NextQuestion();
      },

      SetCarouselItemsSameSize() {
        const $carouselItems = $(".carousel-item");

        // get max height
        const maxHeight = $carouselItems
          .map((index, item) => {
            return $(item).outerHeight();
          })
          .toArray()
          .reduce((maxHeight, height) => {
            return Math.max(maxHeight, height);
          });

        // get max width
        const maxWidth = $carouselItems
          .map((index, item) => {
            return $(item).outerWidth();
          })
          .toArray()
          .reduce((maxWidth, width) => {
            return Math.max(maxWidth, width);
          });

        $carouselItems.each((index, item) => {
          $(item).height(maxHeight);
          $(item).width(maxWidth);
        });
      }
    },

    watch: {
      "$store.state.user.email": function(newValue) {
        console.log("newValue:", newValue);

        // guest
        if (!this.userHash) {
          return;
        }

        this.GetFeedback().then(feedback => {
          // has feedback
          if (feedback) {

            this.answerCollection = feedback.response.map(questionAndAnswer => {
              return questionAndAnswer.answer;
            });

          }
          // no feedback yet
          else {

            // add listener for mouse movement
            document.addEventListener("mousemove", e => {
              this.mouseY = e.clientY;
            });

            // add listener for mouse leave
            $(document).mouseleave(() => {
              if (this.mouseY < 100) {
                if (!this.popupCounter) {
                  this.Show();
                }
              }
            });

            // init answer array
            this.answerCollection = this.ratingQuestionCollection
              .map(() => {
                return "tetszett";
              });
            this.answerCollection.push("");
          }
        });
      }
    }
  };
</script>

<style scoped>

  .modal-body .figure img {
    cursor: pointer;
    -webkit-filter: grayscale(100%);
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: all 0.2s ease-in-out;
    width: 60px;
    height: 60px;
  }

  .modal-body .figure.zoomed img {
    cursor: pointer;
    -webkit-filter: none;
    /* Safari 6.0 - 9.0 */
    filter: none;
    transform: scale(1.3);
  }

  .thankyou-figure img {
    width: 50px;
    height: 50px;
  }

  h6 {
    color: #37688a;
    font-size: 18px;
  }

  .feedback-text {
    margin-top: 20px;
    color: #37688a;
    font-weight: bold;
  }

  .modal-dialog.modal-dialog-centered {
    max-width: 600px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #00f0d1;
    box-sizing: content-box;
    border: 1rem solid #00f0d1;
    border-radius: 100%;
    /*width: 50px;*/
    /*height: 50px;*/
  }

  /*noinspection CssUnusedSymbol*/
  .decode-container button.close {
    background-color: transparent;
    color: #000;
  }

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active:focus {
    background: #00f0d1;
    color: #fff;
  }

  /*noinspection CssUnusedSymbol*/
  .btn-primary.btn-outline:after {
    border: 2px solid #00f0d1;
    background: transparent;
    color: #252525;
  }
</style>
