// ? State management pinia for handle large data procces from backend
import { defineStore } from 'pinia'
import { ref } from 'vue'
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
    return { CardsData }
})
