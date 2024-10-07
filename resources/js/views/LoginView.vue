<script setup>
import { useStoreAuth } from '@/store/auth/auth';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const authStore = useStoreAuth()

const validationSchema = toTypedSchema(
    zod.object({
        email: zod.string()
            .min(1, { message: 'This is required' })
            .email({ message: 'Must be a valid email' }),
        password: zod.string()
            .min(1, { message: 'This is required' })
            .min(8, { message: 'Too short' }),
    })
);

const onSubmit = (values) => authStore.login(values)
</script>

<template>
    <section class="grid h-screen place-items-center lg:grid-cols-2">
        <figure class="hidden max-w-xs lg:block">
            <img src="../../public/hero.svg" alt="hero">
        </figure>
        <Form class="max-w-md mx-auto" :validation-schema="validationSchema" @submit="onSubmit">
            <div class="flex flex-col items-center justify-center mb-1">
                <div class="w-full mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Email
                    </label>
                    <Field
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="email" type="email" />
                    <ErrorMessage name="email" class="py-2 text-red-600" />
                </div>
                <div class="w-full mb-5 mr-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password
                    </label>
                    <Field
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="password" type="password" />
                    <ErrorMessage name="password" class="py-2 text-red-600" />
                </div>
            </div>
            <button type="submit"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </Form>
    </section>
</template>
