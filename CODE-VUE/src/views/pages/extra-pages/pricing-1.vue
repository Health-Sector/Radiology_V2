<template>
    <b-row>
        <b-col lg="3" md="6" v-for="(card, index) in cards" :key="index">
            <b-card no-body :class="['rounded-3', card.bgClass]">
                <b-card-body class="text-center rounded-3">
                    <span class="text-uppercase">{{ card.title }}</span>
                    <h2 class="display-3 mb-4 fw-bolder" :class="card.textClass">
                        {{ card.price }}<small
                            :class="`${card.muteText === true ? 'text-muted' : ''} fw-lighter fs-5`">/ Month</small>
                    </h2>

                    <ul class="list-unstyled mb-0">
                        <li class="fs-5" v-for="(feature, i) in card.features" :key="i">
                            {{ feature }}
                        </li>
                    </ul>
                    <a href="#" class="btn" :class="card.btnClass + ' mt-5'">{{ card.buttonText }}</a>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="3" md="6" v-for="(card, index) in cardsImage" :key="index">
            <b-card no-body class="bg-dark text-white text-center rounded-3">
                <img :src="generatePath(`${path}${card.imgSrc}`)" alt="#" class="card-img rounded-3">
                <div class="card-img-overlay">
                    <h2 class="mb-4 display-3 fw-bolder text-white">
                        {{ card.price }}<small class="fs-5 text-white">$ / Month</small>
                    </h2>
                    <ul class="list-unstyled mb-0">
                        <li class="fs-5" v-for="(feature, i) in card.features" :key="i">
                            {{ feature }}
                        </li>
                    </ul>
                    <button type="button" class="btn btn-primary-subtle mt-4">Get started</button>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>

<script setup>
import { ref } from 'vue';

const generatePath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

const cards = ref([
    {
        title: 'Basic',
        price: '$26',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ],
        bgClass: '',
        textClass: '',
        btnClass: 'btn-primary-subtle',
        muteText: true,
        buttonText: 'Start Starter'
    },
    {
        title: 'Basic',
        price: '$99',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ],
        bgClass: 'bg-primary text-white',
        textClass: 'text-white',
        btnClass: 'btn-light',
        muteText: false,
        buttonText: 'Start Starter'
    },
    {
        title: 'Basic',
        price: '$39',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ],
        bgClass: '',
        textClass: '',
        btnClass: 'btn-primary-subtle',
        muteText: true,
        buttonText: 'Start Starter'
    },
    {
        title: 'Basic',
        price: '$25',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ],
        bgClass: '',
        textClass: '',
        btnClass: 'btn-primary-subtle',
        muteText: true,
        buttonText: 'Start Starter'
    }
]);

const path = '/assets/images/page-img/';
const cardsImage = ref([
    {
        imgSrc: '25.jpg',
        price: '19',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ]
    },
    {
        imgSrc: '26.jpg',
        price: '19',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ]
    },
    {
        imgSrc: '27.jpg',
        price: '19',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ]
    },
    {
        imgSrc: '28.jpg',
        price: '19',
        features: [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie at massa',
            'Facilisis in pretium nisl aliquet',
            'Nulla volutpat aliquam velit'
        ]
    }
]);
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
