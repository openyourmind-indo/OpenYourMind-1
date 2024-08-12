// ? State management pinia for handle large data procces from backend
import { defineStore } from "pinia";
import { ref } from "vue";
export const useStoreAccordion = defineStore("Accordion", () => {
    // ? state
    const FaqData = ref([
        {
            title: "What is OYM?",

            content:
                "OYM is a mental health foundation in Indonesia that provides a platform for people to find information, support, and resources to help them manage their mental health.",
        },
        {
            title: "How can I get involved?",
            content:
                "You can get involved by volunteering, donating, or spreading the word about OYM. You can also participate in our events and programs to help raise awareness about mental health.",
        },
        {
            title: "How can I donate?",
            content:
                "You can donate to OYM by visiting our website and clicking on the donate button. You can choose to make a one-time donation or set up a recurring donation to support our work.",
        },
        {
            title: "How can I volunteer?",
            content:
                "You can volunteer with OYM by signing up on our website and filling out a volunteer application. We have a variety of volunteer opportunities available, including event planning, fundraising, and outreach.",
        },
    ]);
    return { FaqData };
});
