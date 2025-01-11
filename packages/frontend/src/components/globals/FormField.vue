<script lang="ts">
import { Field } from 'vee-validate'

export default {
    components: {
        Field
    },
    props: {
        labelName: {
            type: String,
            required: true
        },
        labelClassName: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        error: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            required: true
        },
        fieldType: {
            type: String,
            required: false,
            default: 'text'
        }
    },
    methods: {
        focus(event: MouseEvent) {
            if (event.currentTarget instanceof HTMLElement) {
                event.currentTarget.closest('div')?.querySelector('input')?.focus()
            }
        }
    }

}


</script>
<template>
    <div class="relative group">
        <label @click="focus" :for="name"
            class="absolute group-focus-within:-top-[1.1rem] group-focus-within:-translate-y-0 left-[1.5rem] group-focus-within:left-[1rem] bg-primary  text-secondary-text group-focus-within:text-cta-icon px-[.3rem]  duration-200 group-focus-within:text-[1.4rem]"
            :class="[labelClassName, value ? 'text-[1.4rem] -top-[1.1rem] -translate-y-0' : 'top-1/2 -translate-y-1/2 text-[1.6rem]']">
            {{ labelName }} ({{ required ? "required" : "optional" }})
        </label>
        <Field :name="name"
            class="bg-transparent border border-secondary-text rounded-2xl py-[1rem] group-focus-within:outline-none px-[1.5rem] focus-within:border-2 focus-within:border-cta-icon w-full"
            :type="fieldType ? fieldType : 'text'" />
    </div>
</template>