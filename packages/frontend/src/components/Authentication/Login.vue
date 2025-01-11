<template>
    <div className="basis-[35rem]">
        <h1 className="text-cta-icon font-semibold text-[2rem] uppercase mb-[2rem] text-center">
            Login To Telegram
        </h1>

        <form @submit="onSubmit" class="flex flex-col gap-[1.5rem]" autocomplete="off">
            <FormField :label-class-name="['bg-transparent group-focus-within:hidden', username && 'hidden']"
                :name="'username'" labelName="Username" :error="errors.username" :required="true" :value="username" />
            <FormField :label-class-name="['bg-transparent group-focus-within:hidden', password && 'hidden']"
                :name="'password'" labelName="Password" :error="errors.password" :required="true" :value="password" />
            <button
                class="bg-cta-icon mt-[1rem] p-[1rem] rounded-xl uppercase text-white font-semibold opacity-80 flex items-center justify-center"
                :class="{ 'opacity-100': !errors.username && !errors.password }" type="submit">Join</button>

        </form>
    </div>
</template>


<script setup lang="ts">
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import FormField from '../globals/FormField.vue';

const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(5),
    password: yup.string().required('Password is required').min(5),
})

const { errors, handleSubmit, defineField } = useForm({
    validationSchema: schema,
})

const [username] = defineField('username');
const [password] = defineField('password');

const onSubmit = handleSubmit(async () => {

})
</script>
