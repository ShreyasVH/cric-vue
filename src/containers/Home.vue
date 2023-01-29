<template>
  <div>
<!--    <v-container>-->
      <v-row>
        <v-col cols="12" xs="8" lg="6">
          <div>
            <strong>
              Tours for {{year}}:
            </strong>
          </div>
        </v-col>

        <v-col cols="12" xs="4" lg="6">
          <div>
            <strong>
              Years:
            </strong>
          </div>

          <div>
            <v-container>
              <v-row dense justify="center" align="center" align-content="center">
                <v-col v-for="year in years" :key="year" cols="12" xs="12" sm="3" md="2" lg="1" align-self="center">
                  <v-card :class="getYearClass(year)">
<!--                    <v-card-text>-->
                      <span>
                        {{year}}
                      </span>
<!--                    </v-card-text>-->
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
<!--    </v-container>-->
  </div>
</template>

<script>

import { getUrlParam } from '@/utils';
import { getYears } from '@/utils/cric';

export default {
  name: 'Home',
  data () {
    return {
      years: []
    }
  },
  async mounted () {
    await this.fetchYears();
  },
  computed: {
    year () {
      let year = (new Date()).getFullYear();

      let yearFromURL = getUrlParam('year');
      if (yearFromURL && !isNaN(parseInt(yearFromURL, 10))) {
        year = parseInt(yearFromURL, 10);
      }

      return year;
    }
  },
  methods: {
    async fetchYears () {
      this.years = await getYears();
    },
    getYearClass (year) {
      return {
        'year': true,
        'active': this.year === year
      };
    }
  }
}

</script>

<style scoped>

.year {
  cursor: pointer;
  text-align: center;
}

.year.active {
  background-color: #60FF87;
  color: white;
}

</style>