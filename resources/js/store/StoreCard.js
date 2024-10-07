// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import { faker } from '@faker-js/faker';
export const useStoreCard = defineStore('Card', () => {
    // ? state
    const CardsData = ref([
        {
            id: 1,
            title: 'Holistic approach',
            description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
        },
        {
            id: 2,
            title: 'Expertise Team',
            description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
        },
        {
            id: 3,
            title: 'Accessibility',
            description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.'
        },
    ])
    const CardPrice = shallowRef(Array.from({ length: 4 }, () => ({
        id: Math.random(),
        title: 'Standard',
        description: 'Lorem, ipsum dolor sit amet consectetur adipi',
        price: 'Rp 79.99'
    })))
    const CardTesti = shallowRef(Array.from({ length: 2 }, () => ({
        id: Math.random(),
        title: 'Client',
        description: faker.lorem.paragraph(4),
        img: faker.image.avatarGitHub()
    })))

    return { CardsData, CardPrice, CardTesti }
})
